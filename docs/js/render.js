// ════════════════════════════════════════════════════════════
// js/render.js
// Todas as funções de renderização de UI
// ════════════════════════════════════════════════════════════

window.Render = {

    // ── BADGES ───────────────────────────────────────────────
    badge(label, color, bg, small = false) {
        const cls = small ? 'mini-badge' : 'cat-badge';
        return `<span class="${cls}" style="color:${color};border-color:${color};background:${bg}">${label}</span>`;
    },

    missionBadges(m, small = false) {
        const oc = OC_COLORS[m.oc] || OC_COLORS.generico;
        const genre = GENRE_COLORS[m.genre] || GENRE_COLORS.livre;
        let h = '';
        if (m.oc !== 'generico') h += this.badge(OC_LABEL[m.oc], oc.color, oc.bg, small);
        h += this.badge(GENRE_LABEL[m.genre], genre.color, genre.bg, small);
        h += this.badge(TYPE_LABEL[m.type], '#94a3b8', 'rgba(148,163,184,.07)', small);
        return h;
    },

    // ── XP WIDGETS ───────────────────────────────────────────
    xpWidgets() {
        const xp = State.data.xp;
        const cur = XP.currentRank();
        const nxt = XP.nextRank();
        const pct = XP.progress();
        const avail = MISSIONS.filter(m => !XP.isLocked(m) && !State.data.done.includes(m.id)).length;
        const locked = MISSIONS.filter(m => XP.isLocked(m)).length;

        // sidebar
        this._set('sRank', cur.title);
        this._set('sNxt', nxt ? `/ ${nxt.xp} xp` : '// máx');
        this._set('sCur', xp);
        this._set('sDone', State.data.done.length);
        this._set('sXP', xp);
        this._set('sAvail', avail);
        this._style('sBar', 'width', pct + '%');

        // dashboard stats
        this._set('dDone', State.data.done.length);
        this._set('dAvail', MISSIONS.filter(m => !XP.isLocked(m)).length);
        this._set('dXP', xp);
        this._set('dRank', cur.title);
        this._set('dLocked', locked);
    },

    // ── MISSION CARD ─────────────────────────────────────────
    missionCard(m, containerId = 'mDisplay') {
        const acc = DIFF_COLOR[m.diff];
        const isDone = State.data.done.includes(m.id);
        const xpg = XPV[m.diff];
        const rev = State.data.reviews[m.id];
        const refs = (SKILL_REFS[m.skill] || []).map(r =>
            `<a class="ref-inline-link" href="${r.url}" target="_blank">↗ ${r.label}</a>`
        ).join('');

        document.getElementById(containerId).innerHTML = `
      <div class="mcard" style="--mc-accent:${acc}">
        <div class="mcard-corner"></div>
        <div class="mcard-meta">
          <span class="diff-badge ${m.diff}">${DIFF_LABEL[m.diff]}</span>
          ${this.missionBadges(m, false)}
          <span class="mcard-time">⏱ ${m.time}</span>
          <span class="mcard-xp">+${xpg} xp</span>
        </div>
        <div class="mcard-title">${m.title}</div>
        <div class="mcard-why">// treina: ${m.why}</div>
        <div class="mcard-desc">${m.desc}</div>
        <div class="mcard-tip"><strong>// dica:</strong> ${m.tip}</div>
        ${refs ? `<div class="mcard-refs"><span class="mcard-refs-label">// refs:</span>${refs}</div>` : ''}
        <div class="mcard-actions">
          ${isDone
                ? `<div class="done-badge">concluído</div>`
                : `<button class="btn btn-success" id="btnDone">✓ concluído (+${xpg} xp)</button>`}
          <button class="btn" id="btnSkip">sortear outro</button>
        </div>
        ${isDone ? `
          <div class="review-row">
            <span class="review-lbl">como ficou?</span>
            ${['ruim', 'ok', 'bom', 'repetir'].map(r =>
                    `<button class="review-btn${rev === r ? ' selected' : ''}"
                data-rev="${r}"
                onclick="XP.setReview(${m.id},'${r}');Render.updateReviewBtns('${r}');App.toast('Avaliação salva','ok')">
                ${r}
              </button>`
                ).join('')}
          </div>` : ''}
      </div>`;
    },

    updateReviewBtns(selected) {
        document.querySelectorAll('.review-btn').forEach(b => {
            b.classList.toggle('selected', b.dataset.rev === selected);
        });
    },

    // ── MISSION LIST ─────────────────────────────────────────
    missionItems(el, set, clickAction = 'treino') {
        if (!el) return;
        el.innerHTML = set.map(m => {
            const done = State.data.done.includes(m.id);
            const locked = XP.isLocked(m);
            const rev = State.data.reviews[m.id];
            const onclick = locked ? '' :
                `App.showMission(MISSIONS.find(x=>x.id===${m.id}),true);App.navigateTo('treino')`;
            return `
        <div class="mitem${done ? ' done' : ''}${locked ? ' locked' : ''}"
             onclick="${onclick}"
             style="${locked ? 'cursor:default' : ''}">
          <div class="dot ${m.diff}"></div>
          <div class="mitem-name">
            ${locked ? '🔒 ' : ''}${m.title}
            ${rev ? `<span class="mitem-rev">[${rev}]</span>` : ''}
          </div>
          <div class="mitem-badges">
            ${locked
                    ? `<span class="mini-badge" style="color:var(--muted);border-color:var(--border)">rank ${m.minRank}+</span>`
                    : this.missionBadges(m, true)}
          </div>
          <div class="mitem-time">${locked ? '—' : m.time}</div>
        </div>`;
        }).join('');
    },

    trainList(activeFilters, sessionMin) {
        const filtered = App.getFiltered(false, sessionMin);
        const available = filtered.filter(m => !XP.isLocked(m));
        this._set('fCount', '', true,
            `<span>${available.length}</span> disponíveis · ${filtered.filter(m => XP.isLocked(m)).length} bloqueados`);
        this.missionItems(document.getElementById('mList'), filtered);
    },

    ocMissions() {
        ['evy', 'kiara', 'rex', 'aiyra'].forEach(oc => {
            this.missionItems(
                document.getElementById(`om-${oc}`),
                MISSIONS.filter(m => m.oc === oc)
            );
        });
    },

    // ── DASHBOARD ────────────────────────────────────────────
    dashboard() {
        // OC mini grid
        document.getElementById('dOcGrid').innerHTML = OCS.map(o => {
            const total = MISSIONS.filter(m => m.oc === o.id).length;
            const done = MISSIONS.filter(m => m.oc === o.id && State.data.done.includes(m.id)).length;
            return `
        <div class="oc-mini" onclick="App.navigateTo('ocs');App.switchOcTab('${o.id}')">
          <div class="oc-mini-name" style="color:${o.color}">${o.name}</div>
          <div class="oc-mini-sub">${done}/${total} exercícios</div>
        </div>`;
        }).join('');

        // quick links
        document.getElementById('dQlinks').innerHTML = QUICK_LINKS.map(l =>
            `<a class="qlink" href="${l.url}" target="_blank">↗ ${l.label}</a>`
        ).join('');
    },

    // ── OCs ──────────────────────────────────────────────────
    ocPanels() {
        OCS.forEach(oc => {
            const panel = document.getElementById(`oc-${oc.id}`);
            if (!panel) return;

            const header = panel.querySelector('.oc-header');
            header.style.setProperty('--oc-c', oc.color);
            panel.querySelector('.oc-avatar').style.color = oc.color;
            panel.querySelector('.oc-avatar').textContent = oc.initial;
            panel.querySelector('.oc-name').textContent = oc.name;
            const tagline = panel.querySelector('.oc-tagline');
            tagline.textContent = oc.tagline;
            tagline.style.color = oc.color;
            panel.querySelector('.oc-tags').innerHTML = oc.tags.map(t =>
                `<span class="oc-tag">${t}</span>`).join('');
            panel.querySelector('.oc-notes').textContent = oc.notes;
            panel.querySelector('.oc-links').innerHTML = oc.links.map(l =>
                `<a class="oc-link" href="${l.url}" target="_blank">↗ ${l.label}</a>`).join('');
        });
    },

    // ── REFERÊNCIAS ──────────────────────────────────────────
    refLinks() {
        const el = document.getElementById('ref-links-content');
        if (!el) return;
        el.innerHTML = REF_LINKS.map(cat => `
      <div class="ref-cat">${cat.category}</div>
      <div class="ref-links-grid">
        ${cat.links.map(l => `
          <a class="rlink" href="${l.url}" target="_blank">
            <div class="rlink-title">${l.title}</div>
            <div class="rlink-desc">${l.desc}</div>
          </a>`).join('')}
      </div>`).join('');
    },

    artists() {
        const el = document.getElementById('ref-artistas-content');
        if (!el) return;
        el.innerHTML = ARTISTS.map(a => `
      <div class="artist-card">
        <div class="artist-av" style="color:${a.color}">${a.initials}</div>
        <div class="artist-info">
          <div class="artist-name">${a.name}</div>
          <div class="artist-handle">${a.handle}</div>
          <div class="artist-note">${a.note}</div>
          <div class="artist-tags">${a.tags.map(t => `<span class="artist-tag">${t}</span>`).join('')}</div>
          ${a.links.map(l => `<a class="artist-link" href="${l.url}" target="_blank">${l.label}</a>`).join('')}
        </div>
      </div>`).join('');
    },

    // ── LINKS ────────────────────────────────────────────────
    toolLinks() {
        const el = document.getElementById('links-content');
        if (!el) return;
        el.innerHTML = TOOL_LINKS.map(cat => `
      <div class="links-cat">${cat.category}</div>
      <div class="links-grid">
        ${cat.links.map(l => `
          <a class="link-card" href="${l.url}" target="_blank">
            <div class="link-card-title">${l.title}</div>
            <div class="link-card-desc">${l.desc}</div>
          </a>`).join('')}
      </div>`).join('');
    },

    // ── HISTÓRICO ────────────────────────────────────────────
    history() {
        const el = document.getElementById('histList');
        if (!State.data.history.length) {
            el.innerHTML = '<div class="hist-empty">// nenhum exercício concluído ainda //</div>';
            return;
        }
        const revColors = { ruim: 'var(--hard)', bom: 'var(--neon-g)', repetir: 'var(--neon-y)' };
        el.innerHTML = State.data.history.map(h => {
            const rev = State.data.reviews[h.id];
            const rc = revColors[rev] || 'var(--muted)';
            return `
        <div class="hist-item">
          <div class="dot ${h.diff}" style="margin-top:5px;flex-shrink:0"></div>
          <div class="hist-info">
            <div class="hist-title">${h.title}</div>
            <div class="hist-meta">${h.date} · ${DIFF_LABEL[h.diff]} · ${GENRE_LABEL[h.genre] || h.genre} · ${h.skill || '—'}</div>
            ${rev ? `<div class="hist-review" style="color:${rc};border-color:${rc}">${rev}</div>` : ''}
          </div>
          <div class="hist-xp">+${h.xp} xp</div>
        </div>`;
        }).join('');
    },

    // ── NÍVEIS ───────────────────────────────────────────────
    ranks() {
        const ri = XP.getRankIdx(State.data.xp);
        document.getElementById('rankList').innerHTML = RANKS.map((r, i) => {
            const isCur = i === ri;
            const locked = i > ri;
            const nxt = RANKS[i + 1];
            const unlocks = MISSIONS.filter(m => m.minRank === i).length;
            let status = '';
            if (isCur && nxt) status = `<span class="rank-status">atual — faltam ${nxt.xp - State.data.xp} xp</span>`;
            if (isCur && !nxt) status = `<span class="rank-status">nível máximo</span>`;
            if (!locked && !isCur) status = `<span class="rank-conquered">✓ conquistado</span>`;
            return `
        <div class="rank-item${isCur ? ' cur' : ''}${locked ? ' lkd' : ''}">
          <div class="rank-title" style="color:${isCur ? 'var(--neon-y)' : locked ? 'var(--muted)' : '#fff'}">${r.title}</div>
          <div class="rank-xp">${r.xp} xp${unlocks ? ` · 🔓 ${unlocks}` : ''}</div>
          ${status}
        </div>`;
        }).join('');
    },

    // ── HABILIDADES ──────────────────────────────────────────
    skills() {
        document.getElementById('skillGrid').innerHTML = SKILLS.map(s => {
            const total = MISSIONS.filter(m => m.skill === s.id).length;
            const done = MISSIONS.filter(m => m.skill === s.id && State.data.done.includes(m.id)).length;
            const pct = total ? Math.round((done / total) * 100) : 0;
            return `
        <div class="skill-item">
          <div class="skill-name" style="color:${s.color}">
            ${s.label}<span>${done}/${total}</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" style="width:${pct}%;background:${s.color}"></div>
          </div>
        </div>`;
        }).join('');
    },

    // ── HELPERS ──────────────────────────────────────────────
    _set(id, value, useHTML = false, html = '') {
        const el = document.getElementById(id);
        if (!el) return;
        if (useHTML) el.innerHTML = html;
        else el.textContent = value;
    },

    _style(id, prop, value) {
        const el = document.getElementById(id);
        if (el) el.style[prop] = value;
    },
};