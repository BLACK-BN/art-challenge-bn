// ════════════════════════════════════════════════════════════
// js/app.js
// Navegação, filtros, eventos, sessões, init
// ════════════════════════════════════════════════════════════

window.App = {
  currentMission:    null,
  dashCurrentMission: null,
  activeFilters:     { oc: null, genre: null, type: null, diff: null, done: null },
  sessionMin:        0,
  toastTimer:        null,

  // ── INIT ─────────────────────────────────────────────────
  init() {
    State.load();
    this.setupNav();
    this.setupOcTabs();
    this.setupRefTabs();
    this.setupFilters();
    this.setupSessions();
    this.setupRollBtn();
    this.setupDashRoll();
    this.setupBackup();
    this.setupTheme();
    this.setupPWA();
    this.refreshAll();
    Render.ocPanels();
    Render.refLinks();
    Render.artists();
    Render.toolLinks();
  },

  refreshAll() {
    Render.xpWidgets();
    Render.trainList(this.activeFilters, this.sessionMin);
    Render.ocMissions();
    Render.dashboard();
  },

  // ── NAVEGAÇÃO ────────────────────────────────────────────
  setupNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => this.navigateTo(item.dataset.sec));
    });
  },

  navigateTo(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const sec = document.getElementById('sec-' + id);
    const nav = document.querySelector(`.nav-item[data-sec="${id}"]`);
    if (sec) sec.classList.add('active');
    if (nav) nav.classList.add('active');
    const titleEl = document.getElementById('topTitle');
    if (titleEl) titleEl.textContent = SEC_TITLES[id] || '';
    if (id === 'historico')   Render.history();
    if (id === 'niveis')      Render.ranks();
    if (id === 'habilidades') Render.skills();
  },

  // ── OC TABS ──────────────────────────────────────────────
  setupOcTabs() {
    document.querySelectorAll('.tab[data-oc]').forEach(t => {
      t.addEventListener('click', () => this.switchOcTab(t.dataset.oc));
    });
  },

  switchOcTab(oc) {
    document.querySelectorAll('.tab[data-oc]').forEach(t  => t.classList.remove('active'));
    document.querySelectorAll('[id^="oc-"]').forEach(p    => p.classList.remove('active'));
    const t = document.querySelector(`.tab[data-oc="${oc}"]`);
    const p = document.getElementById(`oc-${oc}`);
    if (t) t.classList.add('active');
    if (p) p.classList.add('active');
  },

  // ── REF TABS ─────────────────────────────────────────────
  setupRefTabs() {
    document.querySelectorAll('.tab[data-ref]').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.tab[data-ref]').forEach(x  => x.classList.remove('active'));
        document.querySelectorAll('[id^="ref-tab-"]').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        const p = document.getElementById(`ref-tab-${t.dataset.ref}`);
        if (p) p.classList.add('active');
      });
    });
  },

  // ── FILTROS ──────────────────────────────────────────────
  setupFilters() {
    const GC = { oc: 'f-oc', genre: 'f-genre', type: 'f-type', diff: 'f-diff', done: 'f-done' };
    document.querySelectorAll('.fbtn[data-g]').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = btn.dataset.g, v = btn.dataset.v;
        if (this.activeFilters[g] === v) {
          this.activeFilters[g] = null;
          btn.classList.remove(GC[g]);
        } else {
          document.querySelectorAll(`.fbtn[data-g="${g}"]`).forEach(b => b.classList.remove(GC[g]));
          this.activeFilters[g] = v;
          btn.classList.add(GC[g]);
        }
        Render.trainList(this.activeFilters, this.sessionMin);
      });
    });

    document.getElementById('clearF')?.addEventListener('click', () => {
      Object.keys(this.activeFilters).forEach(k => this.activeFilters[k] = null);
      this.sessionMin = 0;
      document.querySelectorAll('.fbtn[data-g]').forEach(b =>
        b.classList.remove('f-oc', 'f-genre', 'f-type', 'f-diff', 'f-done'));
      document.querySelectorAll('.session-btn').forEach(b => b.classList.remove('active'));
      Render.trainList(this.activeFilters, this.sessionMin);
    });
  },

  getFiltered(forRoll = false, maxMin = 0) {
    return MISSIONS.filter(m => {
      if (forRoll && XP.isLocked(m)) return false;
      const af = this.activeFilters;
      if (af.oc    && m.oc    !== af.oc)    return false;
      if (af.genre && m.genre !== af.genre) return false;
      if (af.type  && m.type  !== af.type)  return false;
      if (af.diff  && m.diff  !== af.diff)  return false;
      if (af.done === 'hide' && State.data.done.includes(m.id)) return false;
      if (maxMin > 0) {
        const t = parseInt((m.time.split('–')[1] || m.time).replace(/[^\d]/g, ''));
        if (!isNaN(t) && t > maxMin) return false;
      }
      return true;
    });
  },

  // ── SESSÕES RÁPIDAS ──────────────────────────────────────
  setupSessions() {
    document.querySelectorAll('.session-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const min = parseInt(btn.dataset.min) || 0;
        this.sessionMin = min;
        document.querySelectorAll('.session-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`.session-btn[data-min="${btn.dataset.min}"]`)
          .forEach(b => b.classList.add('active'));
        Render.trainList(this.activeFilters, this.sessionMin);
        // se clicou no dashboard, vai direto pro treino e sorteia
        if (btn.closest('#sec-inicio')) {
          this.navigateTo('treino');
          setTimeout(() => this.rollMission(), 80);
        }
      });
    });
  },

  // ── ROLL ─────────────────────────────────────────────────
  setupRollBtn() {
    document.getElementById('rollBtn')?.addEventListener('click', () => this.rollMission());
  },

  rollMission() {
    const pool  = this.getFiltered(true, this.sessionMin);
    if (!pool.length) { this.toast('Nenhum exercício disponível com esses filtros', 'warn'); return; }
    const avail = pool.filter(m => m !== this.currentMission);
    const m     = (avail.length ? avail : pool)[Math.floor(Math.random() * (avail.length || pool.length))];
    this.showMission(m, true);
  },

  showMission(m, scroll) {
    this.currentMission = m;
    Render.missionCard(m, 'mDisplay');
    document.getElementById('btnDone')?.addEventListener('click', () => this.completeMission(m));
    document.getElementById('btnSkip')?.addEventListener('click', () => this.rollMission());
    if (scroll) document.getElementById('mDisplay')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  completeMission(m) {
    if (State.data.done.includes(m.id)) return;
    const result = XP.complete(m);
    this.refreshAll();
    this.showMission(m, false);
    if (result.rankAfter > result.rankBefore) {
      const newRank = RANKS[result.rankAfter];
      setTimeout(() => this.toast(
        `↑ ${newRank.title}${result.unlocked ? ` — ${result.unlocked} novo(s) desbloqueado(s)!` : ''}`, 'ok'
      ), 400);
    } else {
      this.toast(`+${XPV[m.diff]} XP — ${m.title}`, 'ok');
    }
    // sugestão de próximo passo
    this.suggestNext(m);
  },

  suggestNext(m) {
    const next = MISSIONS.find(x =>
      !State.data.done.includes(x.id) &&
      !XP.isLocked(x) &&
      x.skill === m.skill &&
      x.id !== m.id
    );
    if (!next) return;
    setTimeout(() => this.toast(`próximo: ${next.title}`, 'ok'), 3200);
  },

  // ── DASHBOARD ROLL ───────────────────────────────────────
  setupDashRoll() {
    document.getElementById('dRollBtn')?.addEventListener('click', () => this.dashRoll());
    document.getElementById('dGoBtn')?.addEventListener('click', () => {
      if (!this.dashCurrentMission) return;
      this.navigateTo('treino');
      setTimeout(() => this.showMission(this.dashCurrentMission, true), 60);
    });
  },

  dashRoll() {
    const pool  = MISSIONS.filter(m => !XP.isLocked(m) && !State.data.done.includes(m.id));
    if (!pool.length) return;
    const avail = pool.filter(m => m !== this.dashCurrentMission);
    this.dashCurrentMission = (avail.length ? avail : pool)[
      Math.floor(Math.random() * (avail.length || pool.length))
    ];
    const m = this.dashCurrentMission;
    const titleEl = document.getElementById('dTitle');
    const metaEl  = document.getElementById('dMeta');
    const goBtn   = document.getElementById('dGoBtn');
    if (titleEl) titleEl.textContent = m.title;
    if (metaEl)  metaEl.textContent  = `${DIFF_LABEL[m.diff]} · ${TYPE_LABEL[m.type]} · ${m.time}`;
    if (goBtn)   goBtn.style.display = 'inline-block';
  },

  // ── BACKUP / RESET ───────────────────────────────────────
  setupBackup() {
    document.getElementById('btnExport')?.addEventListener('click', () => {
      State.export();
      this.toast('Backup exportado', 'ok');
    });

    document.getElementById('btnImport')?.addEventListener('click', () => {
      document.getElementById('importInput')?.click();
    });

    document.getElementById('importInput')?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          State.import(ev.target.result);
          this.refreshAll();
          this.toast('Progresso importado', 'ok');
        } catch { this.toast('Arquivo inválido', 'err'); }
      };
      reader.readAsText(file);
      e.target.value = '';
    });

    document.getElementById('btnReset')?.addEventListener('click', () => {
      if (!confirm('Resetar todo o progresso? Exporte um backup antes.')) return;
      State.reset();
      this.currentMission     = null;
      this.dashCurrentMission = null;
      this.sessionMin         = 0;
      document.querySelectorAll('.session-btn').forEach(b => b.classList.remove('active'));
      const mDisplay = document.getElementById('mDisplay');
      if (mDisplay) mDisplay.innerHTML = '<div class="empty flicker">// selecione filtros e sorteie //</div>';
      const dTitle = document.getElementById('dTitle');
      const dMeta  = document.getElementById('dMeta');
      const dGoBtn = document.getElementById('dGoBtn');
      if (dTitle) dTitle.textContent  = 'Clique em sortear para começar';
      if (dMeta)  dMeta.textContent   = '—';
      if (dGoBtn) dGoBtn.style.display = 'none';
      this.refreshAll();
      this.toast('Progresso resetado', 'warn');
    });
  },

  // ── TEMA ─────────────────────────────────────────────────
  setupTheme() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => this.applyTheme(btn.dataset.theme));
    });
    try {
      const saved = localStorage.getItem('atelie_theme');
      if (saved) this.applyTheme(saved);
    } catch (e) {}
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'cyberpunk' ? '' : theme);
    document.querySelectorAll('.theme-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.theme === theme));
    try { localStorage.setItem('atelie_theme', theme); } catch (e) {}
  },

  // ── PWA ──────────────────────────────────────────────────
  setupPWA() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
    let dp = null;
    const banner = document.getElementById('pwa-banner');
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault(); dp = e;
      banner?.classList.add('visible');
    });
    document.getElementById('pwaInstall')?.addEventListener('click', async () => {
      if (!dp) return;
      dp.prompt();
      await dp.userChoice;
      dp = null;
      banner?.classList.remove('visible');
    });
    document.getElementById('pwaDismiss')?.addEventListener('click', () => {
      banner?.classList.remove('visible');
    });
    window.addEventListener('appinstalled', () => banner?.classList.remove('visible'));
  },

  // ── TOAST ────────────────────────────────────────────────
  toast(msg, type = '') {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.className   = 'toast' + (type === 'warn' ? ' warn' : type === 'err' ? ' err' : '');
    el.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  },
};

// ── BOOT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => App.init());

// ── MOBILE SIDEBAR ──────────────────────────────────────────
(function() {
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.querySelector('.sidebar');
  const overlay   = document.getElementById('overlay');
  if (!hamburger || !sidebar || !overlay) return;

  function openSidebar()  { sidebar.classList.add('open');  overlay.classList.add('open');  }
  function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }

  hamburger.addEventListener('click', () =>
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar()
  );
  overlay.addEventListener('click', closeSidebar);

  // fecha ao navegar no mobile
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });
})();
