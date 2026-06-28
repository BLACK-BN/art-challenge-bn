// ════════════════════════════════════════════════════════════
// data/config.js
// Constantes globais: ranks, skills, cores, labels
// ════════════════════════════════════════════════════════════

window.RANKS = [
  { title: 'Iniciante',         xp: 0    },
  { title: 'Esboçador',         xp: 100  },
  { title: 'Traço Firme',       xp: 250  },
  { title: 'Observador',        xp: 500  },
  { title: 'Artista em Campo',  xp: 900  },
  { title: 'Desenhista Ativo',  xp: 1400 },
  { title: 'Ilustrador',        xp: 2000 },
  { title: 'Especialista',      xp: 2800 },
  { title: 'Mestre de Concept', xp: 3800 },
  { title: 'Referência',        xp: 5000 },
];

window.XPV = { facil: 25, medio: 60, dificil: 120 };

window.SKILLS = [
  { id: 'gesto',       label: 'Gesto & Pose',  color: '#00e5ff' },
  { id: 'anatomia',    label: 'Anatomia',       color: '#c084fc' },
  { id: 'personagem',  label: 'Personagem',     color: '#fb923c' },
  { id: 'perspectiva', label: 'Perspectiva',    color: '#34d399' },
  { id: 'luz',         label: 'Luz & Valor',    color: '#ffd600' },
  { id: 'composição',  label: 'Composição',     color: '#f87171' },
  { id: 'cor',         label: 'Cor',            color: '#a78bfa' },
  { id: 'cenário',     label: 'Cenário',        color: '#86efac' },
  { id: 'criatividade',label: 'Criatividade',   color: '#fbbf24' },
];

window.OC_COLORS = {
  evy:      { color: '#00e5ff', bg: 'rgba(0,229,255,.09)'   },
  kiara:    { color: '#c084fc', bg: 'rgba(192,132,252,.09)' },
  rex:      { color: '#fb923c', bg: 'rgba(251,146,60,.09)'  },
  aiyra:    { color: '#34d399', bg: 'rgba(52,211,153,.09)'  },
  generico: { color: '#94a3b8', bg: 'rgba(148,163,184,.09)' },
};

window.GENRE_COLORS = {
  cyberpunk: { color: '#00e5ff', bg: 'rgba(0,229,255,.07)'   },
  fantasia:  { color: '#a78bfa', bg: 'rgba(167,139,250,.07)' },
  horror:    { color: '#f87171', bg: 'rgba(248,113,113,.07)' },
  scifi:     { color: '#38bdf8', bg: 'rgba(56,189,248,.07)'  },
  cotidiano: { color: '#86efac', bg: 'rgba(134,239,172,.07)' },
  livre:     { color: '#fbbf24', bg: 'rgba(251,191,36,.07)'  },
};

window.DIFF_LABEL  = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
window.DIFF_COLOR  = { facil: 'var(--easy)', medio: 'var(--medium)', dificil: 'var(--hard)' };
window.OC_LABEL    = { evy: 'Evy', kiara: 'Kiara', rex: 'Rex', aiyra: 'Aiyra', generico: '—' };
window.GENRE_LABEL = { cyberpunk: 'Cyberpunk', fantasia: 'Fantasia', horror: 'Horror', scifi: 'Sci-Fi', cotidiano: 'Cotidiano', livre: 'Livre' };
window.TYPE_LABEL  = { oc: 'OC', estudo: 'Estudo', cenario: 'Cenário', livre: 'Livre' };

window.SEC_TITLES = {
  inicio:      '// início',
  treino:      '// treino',
  ocs:         '// OCs',
  refs:        '// referências',
  links:       '// links',
  historico:   '// histórico',
  niveis:      '// níveis',
  habilidades: '// habilidades',
  config:      '// config',
};