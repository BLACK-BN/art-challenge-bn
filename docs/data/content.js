// ════════════════════════════════════════════════════════════
// data/content.js
// OCs, artistas, links de referência e links rápidos
// ════════════════════════════════════════════════════════════

// ── OCs ──────────────────────────────────────────────────────
window.OCS = [
  {
    id: 'evy',
    name: 'EVY',
    initial: 'E',
    color: '#00e5ff',
    tagline: '// mercenária · 21 anos · Nova Voraz',
    tags: ['sarcástica', 'ousada', 'pistola', 'cyberpunk'],
    notes: 'Personagem principal de Nova Voraz. Design focado em silhueta forte. Model sheet com 3 vistas da arma já definido. Paleta ainda em definição — tendência para tons escuros com acento neon.',
    links: [
      { label: 'ArtStation — mercenary', url: 'https://www.artstation.com/search?q=cyberpunk+mercenary&sort_by=likes' },
      { label: 'Pinterest — cyberpunk ref', url: 'https://pinterest.com/search/pins/?q=cyberpunk+character+design' },
      { label: 'Pixiv — cyberpunk', url: 'https://www.pixiv.net/en/tags/cyberpunk' },
    ],
  },
  {
    id: 'kiara',
    name: 'KIARA',
    initial: 'K',
    color: '#c084fc',
    tagline: '// agente · 19 anos · Nova Voraz',
    tags: ['séria', 'disciplinada', 'katana', 'executora'],
    notes: 'Executora do mesmo universo da Evy. Postura ereta e controlada define a silhueta — oposto da linguagem corporal relaxada do Rex. Katana é o elemento central do design.',
    links: [
      { label: 'ArtStation — katana', url: 'https://www.artstation.com/search?q=katana+character+design&sort_by=likes' },
      { label: 'Pinterest — agent', url: 'https://pinterest.com/search/pins/?q=anime+agent+character' },
    ],
  },
  {
    id: 'rex',
    name: 'REX',
    initial: 'R',
    color: '#fb923c',
    tagline: '// mediador · 25 anos · Nova Voraz',
    tags: ['carismático', 'relaxado', 'pirulito', 'ex-agente'],
    notes: 'Negociador do submundo. Forjou a própria morte antes de mudar de lado. O pirulito substitui o cigarro — prop que conta a história sem fala. Linguagem corporal aberta contrasta com o elenco.',
    links: [
      { label: 'ArtStation — charismatic', url: 'https://www.artstation.com/search?q=charismatic+character&sort_by=likes' },
      { label: 'Pinterest — negotiator', url: 'https://pinterest.com/search/pins/?q=anime+negotiator+character' },
    ],
  },
  {
    id: 'aiyra',
    name: 'AIYRA',
    initial: 'A',
    color: '#34d399',
    tagline: '// espadachim · 24 anos · fantasia',
    tags: ['confiante', 'astuta', 'meio-elfa', 'asas mágicas', 'cachecol vermelho'],
    notes: 'Único personagem fora do universo cyberpunk. Asas mágicas surgem nas costas quando necessário — transformam radicalmente a silhueta. Cachecol vermelho é o elemento de leitura mais imediato. Tiara e espada na cintura completam.',
    links: [
      { label: 'ArtStation — elf swordsman', url: 'https://www.artstation.com/search?q=fantasy+swordsman+elf&sort_by=likes' },
      { label: 'ArtStation — wings', url: 'https://www.artstation.com/search?q=fantasy+wings+character&sort_by=likes' },
      { label: 'Pinterest — half elf', url: 'https://pinterest.com/search/pins/?q=anime+fantasy+half+elf' },
    ],
  },
];

// ── ARTISTAS ──────────────────────────────────────────────────
window.ARTISTS = [
  {
    initials: 'RJ',
    color: '#c084fc',
    name: 'Ruan Ji',
    handle: '// character design · fantasy · action',
    note: 'Referência forte para poses dinâmicas e design de personagens de fantasia com ação. Linha limpa e composição bem resolvida.',
    tags: ['fantasia', 'poses', 'personagem'],
    links: [{ label: '↗ ArtStation', url: 'https://www.artstation.com/ruanji' }],
  },
  {
    initials: 'HK',
    color: '#00e5ff',
    name: 'Hyung-tae Kim',
    handle: '// cyberpunk · figure · design',
    note: 'Referência clássica de character design cyberpunk. Anatomia estilizada com muita personalidade e detalhe de figurino.',
    tags: ['cyberpunk', 'figurino', 'anatomia'],
    links: [{ label: '↗ ArtStation', url: 'https://www.artstation.com/search?q=hyung-tae+kim&sort_by=likes' }],
  },
  {
    initials: 'YS',
    color: '#ffd600',
    name: 'Yoji Shinkawa',
    handle: '// silhueta · design minimalista · ação',
    note: 'Arte do Metal Gear Solid. Mestre em silhueta forte com mínimo de detalhe. Estuda como ele define personagem só com forma e postura — sem depender de cor.',
    tags: ['silhueta', 'minimalismo', 'ação'],
    links: [{ label: '↗ ArtStation', url: 'https://www.artstation.com/search?q=yoji+shinkawa&sort_by=likes' }],
  },
];

// ── LINKS DE REFERÊNCIA POR CATEGORIA ────────────────────────
window.REF_LINKS = [
  {
    category: 'pose & figura',
    links: [
      { title: 'Line of Action', desc: 'gesture drawing com timer — essencial', url: 'https://line-of-action.com' },
      { title: 'QuickPoses', desc: 'poses com timer e categorias variadas', url: 'https://quickposes.com' },
      { title: 'PoseManiacs', desc: 'poses 3D para estudo de anatomia', url: 'https://www.posemaniacs.com' },
      { title: 'Hand Reference', desc: 'referências fotográficas de mãos', url: 'https://www.handreference.com' },
    ],
  },
  {
    category: 'anatomia',
    links: [
      { title: 'Anatomy 360', desc: 'fotos de anatomia muscular rotacionáveis', url: 'https://anatomy360.info' },
      { title: 'Body Visualizer', desc: 'modelo 3D customizável de corpo', url: 'https://www.bodyvisualizer.com' },
    ],
  },
  {
    category: 'cor & luz',
    links: [
      { title: 'Adobe Color', desc: 'roda de cor e harmonia cromática', url: 'https://color.adobe.com/pt/create/color-wheel' },
      { title: 'Coolors', desc: 'gerador de paletas rápido', url: 'https://coolors.co' },
      { title: 'Lospec Palettes', desc: 'paletas curadas por artistas', url: 'https://lospec.com/palette-list' },
      { title: 'Paletton', desc: 'gerador com teoria de cor', url: 'https://paletton.com' },
    ],
  },
  {
    category: 'inspiração',
    links: [
      { title: 'ArtStation — Anime', desc: 'portfólios profissionais de character design', url: 'https://www.artstation.com/search?q=anime+character+design&sort_by=likes' },
      { title: 'Pixiv — Cyberpunk', desc: 'artistas japoneses, estilo anime', url: 'https://www.pixiv.net/en/tags/cyberpunk' },
      { title: 'Pixiv — Fantasy', desc: 'fantasia no estilo anime', url: 'https://www.pixiv.net/en/tags/fantasy' },
      { title: 'Pinterest — Design Sheet', desc: 'model sheets e character design', url: 'https://pinterest.com/search/pins/?q=anime+character+design+sheet' },
    ],
  },
];

// ── LINKS DE FERRAMENTAS POR CATEGORIA ───────────────────────
window.TOOL_LINKS = [
  {
    category: 'ferramentas de treino',
    links: [
      { title: 'Line of Action', desc: 'Gesture drawing com timer — o exercício mais importante para figura humana', url: 'https://line-of-action.com' },
      { title: 'QuickPoses', desc: 'Poses com timer e categorias — mãos, rostos, corpo completo', url: 'https://quickposes.com' },
      { title: 'Anatomy 360', desc: 'Fotos de anatomia muscular rotacionáveis em 360°', url: 'https://anatomy360.info' },
      { title: 'DrawABox', desc: 'Curso gratuito de fundamentos — linhas, formas, perspectiva', url: 'https://drawabox.com' },
      { title: 'Ctrl+Paint', desc: 'Pintura digital do zero — valor, cor, luz', url: 'https://www.ctrlpaint.com' },
    ],
  },
  {
    category: 'krita',
    links: [
      { title: 'Krita — Docs', desc: 'Documentação oficial completa', url: 'https://docs.krita.org/en/' },
      { title: 'Krita Artists', desc: 'Comunidade, brushes e dicas de workflow', url: 'https://krita-artists.org' },
      { title: 'YouTube — Krita Anime', desc: 'Tutoriais de estilo anime no Krita', url: 'https://www.youtube.com/results?search_query=krita+tutorial+anime' },
    ],
  },
  {
    category: 'teoria',
    links: [
      { title: 'Proko', desc: 'Anatomia e figura humana — melhor canal gratuito', url: 'https://www.youtube.com/@prokopartz' },
      { title: 'Scott Robertson', desc: 'Perspectiva e design — referência', url: 'https://www.youtube.com/@ScottRobertsonDesign' },
    ],
  },
  {
    category: 'wacom CTL-472',
    links: [
      { title: 'Wacom Drivers', desc: 'Drivers oficiais para sua mesa', url: 'https://www.wacom.com/en-us/support/product-support/drivers' },
      { title: 'CTL-472 + Krita Setup', desc: 'Tutoriais de configuração', url: 'https://www.youtube.com/results?search_query=wacom+ctl+472+krita+setup' },
    ],
  },
];

// ── LINKS RÁPIDOS DO DASHBOARD ────────────────────────────────
window.QUICK_LINKS = [
  { label: 'line-of-action', url: 'https://line-of-action.com' },
  { label: 'quickposes', url: 'https://quickposes.com' },
  { label: 'krita docs', url: 'https://docs.krita.org/en/' },
  { label: 'anatomy 360', url: 'https://anatomy360.info' },
  { label: 'ctrlpaint', url: 'https://www.ctrlpaint.com' },
  { label: 'drawabox', url: 'https://drawabox.com' },
];

// ── REFERÊNCIAS POR SKILL (para painel integrado no card) ─────
// Usado quando o usuário abre um exercício — mostra links relevantes
window.SKILL_REFS = {
  gesto: [
    { label: 'Line of Action', url: 'https://line-of-action.com' },
    { label: 'QuickPoses', url: 'https://quickposes.com' },
    { label: 'PoseManiacs', url: 'https://www.posemaniacs.com' },
  ],
  anatomia: [
    { label: 'Anatomy 360', url: 'https://anatomy360.info' },
    { label: 'Hand Reference', url: 'https://www.handreference.com' },
    { label: 'Body Visualizer', url: 'https://www.bodyvisualizer.com' },
    { label: 'Proko — YouTube', url: 'https://www.youtube.com/@prokopartz' },
  ],
  personagem: [
    { label: 'ArtStation — Anime', url: 'https://www.artstation.com/search?q=anime+character+design&sort_by=likes' },
    { label: 'Pixiv — Character', url: 'https://www.pixiv.net/en/tags/character+design' },
    { label: 'Pinterest — Model Sheet', url: 'https://pinterest.com/search/pins/?q=anime+character+design+sheet' },
  ],
  perspectiva: [
    { label: 'Scott Robertson — YouTube', url: 'https://www.youtube.com/@ScottRobertsonDesign' },
    { label: 'DrawABox', url: 'https://drawabox.com' },
    { label: 'Google Street View (ref urbana)', url: 'https://www.google.com/maps/@?api=1&map_action=pano' },
  ],
  luz: [
    { label: 'Ctrl+Paint — Value', url: 'https://www.ctrlpaint.com/library' },
    { label: 'Proko — Shading', url: 'https://www.youtube.com/@prokopartz' },
  ],
  composição: [
    { label: 'Ctrl+Paint — Composition', url: 'https://www.ctrlpaint.com/library' },
    { label: 'ArtStation — Illustration', url: 'https://www.artstation.com/search?q=illustration+composition&sort_by=likes' },
  ],
  cor: [
    { label: 'Adobe Color', url: 'https://color.adobe.com/pt/create/color-wheel' },
    { label: 'Lospec Palettes', url: 'https://lospec.com/palette-list' },
    { label: 'Paletton', url: 'https://paletton.com' },
    { label: 'Coolors', url: 'https://coolors.co' },
  ],
  cenário: [
    { label: 'Unsplash — Cyberpunk', url: 'https://unsplash.com/s/photos/cyberpunk-city' },
    { label: 'ArtStation — Environment', url: 'https://www.artstation.com/search?q=environment+design&sort_by=likes' },
    { label: 'Sketchfab — Urban', url: 'https://sketchfab.com/search?q=urban+environment&type=models' },
  ],
  criatividade: [
    { label: 'ArtStation — Concept Art', url: 'https://www.artstation.com/search?q=concept+art&sort_by=likes' },
    { label: 'Pinterest — Character Concept', url: 'https://pinterest.com/search/pins/?q=character+concept+art' },
  ],
};