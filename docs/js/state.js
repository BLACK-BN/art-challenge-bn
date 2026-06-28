// ════════════════════════════════════════════════════════════
// js/state.js
// Storage, XP, ranks, progresso
// ════════════════════════════════════════════════════════════

const STORAGE_KEY = 'atelie_v4';

window.State = {
    data: null,

    default() {
        return { xp: 0, done: [], history: [], reviews: {} };
    },

    load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                // tenta migrar versão anterior
                const old = localStorage.getItem('drawops_v3') || localStorage.getItem('nv-missoes-v1');
                if (old) {
                    const s = JSON.parse(old);
                    if (typeof s.xp === 'number') {
                        this.data = { ...this.default(), ...s, reviews: {} };
                        this.save();
                        return;
                    }
                }
                this.data = this.default();
                return;
            }
            const s = JSON.parse(raw);
            if (!s.done) s.done = [];
            if (!s.history) s.history = [];
            if (!s.reviews) s.reviews = {};
            if (typeof s.xp !== 'number') s.xp = 0;
            this.data = s;
        } catch (e) {
            this.data = this.default();
        }
    },

    save() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data)); } catch (e) { }
    },

    reset() {
        this.data = this.default();
        this.save();
    },

    export() {
        const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `atelie-backup-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
    },

    import(json) {
        const s = JSON.parse(json);
        if (typeof s.xp !== 'number' || !Array.isArray(s.done)) throw new Error('invalid');
        if (!s.history) s.history = [];
        if (!s.reviews) s.reviews = {};
        this.data = s;
        this.save();
    },
};

// ── XP / RANKS ───────────────────────────────────────────────
window.XP = {
    getRankIdx(xp) {
        let i = 0;
        for (let r = 0; r < RANKS.length; r++) { if (xp >= RANKS[r].xp) i = r; }
        return i;
    },

    currentRank() {
        return RANKS[this.getRankIdx(State.data.xp)];
    },

    nextRank() {
        const i = this.getRankIdx(State.data.xp);
        return RANKS[i + 1] || null;
    },

    progress() {
        const xp = State.data.xp;
        const ri = this.getRankIdx(xp);
        const cur = RANKS[ri];
        const nxt = RANKS[ri + 1];
        if (!nxt) return 100;
        return Math.min(100, ((xp - cur.xp) / (nxt.xp - cur.xp)) * 100);
    },

    isLocked(mission) {
        if (!mission.minRank) return false;
        return this.getRankIdx(State.data.xp) < mission.minRank;
    },

    complete(mission) {
        const state = State.data;
        const rankBefore = this.getRankIdx(state.xp);
        state.done.push(mission.id);
        state.xp += XPV[mission.diff];
        state.history.unshift({
            id: mission.id,
            title: mission.title,
            diff: mission.diff,
            xp: XPV[mission.diff],
            date: new Date().toLocaleDateString('pt-BR'),
            oc: mission.oc,
            genre: mission.genre,
            skill: mission.skill || '—',
        });
        State.save();
        return {
            rankBefore,
            rankAfter: this.getRankIdx(state.xp),
            unlocked: MISSIONS.filter(m => m.minRank === this.getRankIdx(state.xp)).length,
        };
    },

    setReview(id, rev) {
        State.data.reviews[id] = rev;
        State.save();
    },
};