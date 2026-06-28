// ════════════════════════════════════════════════════════════
// data/missions.js
// Para adicionar missões: copie um objeto existente e edite.
// Campos obrigatórios: id, oc, genre, type, diff, time, xp, skill, title, why, desc, tip
// Campo opcional: minRank (número do rank mínimo para desbloquear)
// ════════════════════════════════════════════════════════════

window.MISSIONS = [
    // ── EVY ──────────────────────────────────────────────────
    {
        id: 1, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '15–30min', xp: 25, skill: 'personagem',
        title: 'Expressão Sarcástica — Evy',
        why: 'Treina leitura de microexpressão e controle de linha no rosto, base de qualquer personagem.',
        desc: 'Só o rosto da Evy com expressão de deboche — sobrancelha levantada, canto da boca torto. Sem corpo, sem fundo.',
        tip: 'No anime a expressão mora nas sobrancelhas e nos olhos. Comece por aí antes de qualquer detalhe.'
    },

    {
        id: 2, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '10–20min', xp: 25, skill: 'personagem',
        title: 'Silhueta — Evy',
        why: 'Silhueta forte = design reconhecível. Treina leitura de pose e proporção sem depender de detalhes.',
        desc: 'A silhueta da Evy em contorno sólido, sem detalhes internos. Faça 3 poses diferentes.',
        tip: 'Se a silhueta já é reconhecível, o design funciona. Se não, algo na proporção precisa mudar.'
    },

    {
        id: 3, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '15–25min', xp: 25, skill: 'personagem',
        title: 'Detalhe do Cabelo — Evy',
        why: 'Cabelo é o elemento mais fluido do character design. Treina ritmo de linha e simplificação.',
        desc: 'Foque só no cabelo da Evy. Teste uma variação de penteado ou como ele reagiria ao vento.',
        tip: 'No anime cada mecha tem direção e peso próprios — pensa numa fonte de força ou movimento.'
    },

    {
        id: 4, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '20–30min', xp: 25, skill: 'personagem',
        title: 'Pack de Expressões — Evy',
        why: 'Treina consistência de personagem: mesma estrutura de rosto em estados emocionais diferentes.',
        desc: 'Quatro rostinhos em miniatura: neutra, irritada, surpresa, sorrindo com malícia.',
        tip: 'O crânio é sempre o mesmo. Só boca, sobrancelha e olho mudam. Se o crânio variar, perdeu consistência.'
    },

    {
        id: 5, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '40–60min', xp: 60, skill: 'anatomia',
        title: 'Mão + Pistola — Evy',
        why: 'Treina mão com prop: proporção, tensão muscular e relação entre mão e objeto segurado.',
        desc: 'A mão da Evy segurando a pistola, vista lateral ou em três-quartos. Use o model sheet da arma como referência.',
        tip: 'Mercenária segura arma com firmeza — veja a tensão nos tendões. Dedos relaxados mudam completamente a leitura.'
    },

    {
        id: 6, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '45–75min', xp: 60, skill: 'anatomia',
        title: 'Meio Corpo — Indiferença',
        why: 'Treina linguagem corporal fechada e proporção de torso e braços em sobreposição.',
        desc: 'Evy de braços cruzados, olhando pra frente com indiferença. Da cintura pra cima, com roupa.',
        tip: 'Braços cruzados é difícil porque os cotovelos definem o plano dos antebraços. Faz leve antes de detalhar.'
    },

    {
        id: 7, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '30–50min', xp: 60, skill: 'luz',
        title: 'Close com Luz de Neon — Evy',
        why: 'Treina iluminação direcional: onde a luz bate, onde ela cai, como sombra define forma sem linha.',
        desc: 'Rosto da Evy com luz lateral vindo de fora do quadro — como um letreiro de neon próximo.',
        tip: 'Lado iluminado = formas bem definidas. Lado na sombra = formas se fundem. Não precisa de fundo complexo.'
    },

    {
        id: 8, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '40–60min', xp: 60, skill: 'personagem',
        title: 'Figurino — Variação da Evy',
        why: 'Treina design de figurino e como roupa revela personalidade e contexto sem precisar de fala.',
        desc: 'A Evy com roupa diferente do design principal: casual, tática ou look de missão específica.',
        tip: 'Toda peça de roupa diz algo sobre o personagem naquele momento. Por que ela estaria vestindo isso?'
    },

    {
        id: 9, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'dificil', time: '90–120min', xp: 120, skill: 'gesto',
        title: 'Corpo Inteiro — Evy em Ação',
        why: 'Treina corpo completo com dinâmica: linha de ação, distribuição de peso e movimento de roupa simultâneos.',
        desc: 'Evy em movimento: correndo, saltando ou apontando a arma. Corpo completo com roupa reagindo ao movimento.',
        tip: 'Começa pela linha de ação (curva do corpo), depois o centro de gravidade. A pose precisa fazer sentido físico.'
    },

    {
        id: 10, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'composição',
        title: 'Cena de Missão — Evy',
        why: 'Treina composição completa: personagem + cenário + luz + narrativa visual num único frame.',
        desc: 'A Evy num ambiente de Nova Voraz: personagem e cenário interagindo. Chuva, neon, sombra.',
        tip: 'Separa em camadas: fundo distante (pouco detalhe), plano médio, Evy no primeiro plano (máximo detalhe).'
    },

    {
        id: 11, oc: 'evy', genre: 'cyberpunk', type: 'oc', diff: 'dificil', time: '90–150min', xp: 120, skill: 'personagem',
        title: 'Folha de Expressões — Evy',
        why: 'Produz referência permanente de personagem. Treina consistência de modelo ao longo de muitas variações.',
        desc: 'Folha completa com 8–10 expressões da Evy, do neutro ao extremo. Vira referência permanente.',
        tip: 'Esse tipo de folha é como um dicionário visual da personagem. Você vai consultar toda vez que desenhar ela.'
    },

    // ── KIARA ─────────────────────────────────────────────────
    {
        id: 12, oc: 'kiara', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '15–25min', xp: 25, skill: 'personagem',
        title: 'Expressão Séria — Kiara',
        why: 'Treina expressão contida: o difícil não é exagero, é sutileza.',
        desc: 'Só o rosto da Kiara com expressão concentrada e controlada. Sem corpo, sem fundo.',
        tip: 'Personagem disciplinada não tem expressão solta. Cada linha do rosto é intencional e econômica.'
    },

    {
        id: 13, oc: 'kiara', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '10–20min', xp: 25, skill: 'personagem',
        title: 'Silhueta — Kiara',
        why: 'Contraste de silhueta entre personagens do mesmo universo treina identidade visual de elenco.',
        desc: 'Silhueta da Kiara em 3 poses: postura ereta, em descanso, em alerta.',
        tip: 'Compare com a silhueta da Evy. Personagens do mesmo universo precisam ser legíveis um ao lado do outro.'
    },

    {
        id: 14, oc: 'kiara', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '40–65min', xp: 60, skill: 'anatomia',
        title: 'Mão + Katana — Kiara',
        why: 'Treina empunhadura de arma longa: proporção da mão em relação ao cabo e ângulo do pulso.',
        desc: 'As mãos da Kiara empunhando a katana. Explore pegada e ângulo da lâmina.',
        tip: 'A katana é extensão do corpo — o ângulo do pulso muda completamente o peso da pose.'
    },

    {
        id: 15, oc: 'kiara', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '45–70min', xp: 60, skill: 'personagem',
        title: 'Meio Corpo — Postura de Agente',
        why: 'Treina linguagem corporal de autoridade: postura que transmite preparo sem precisar de ação.',
        desc: 'Kiara meio corpo, postura ereta, olhar calculado. Com a katana na bainha ou empunhada.',
        tip: 'Agente em repouso ainda parece pronta pra agir. Coluna ereta, ombros atrás, peso distribuído.'
    },

    {
        id: 16, oc: 'kiara', genre: 'cyberpunk', type: 'oc', diff: 'dificil', time: '90–130min', xp: 120, skill: 'gesto',
        title: 'Pose de Combate — Kiara',
        why: 'Treina corpo inteiro em tensão: todos os músculos em função da ação.',
        desc: 'Kiara em postura de combate com a katana desembainhada. Corpo inteiro, dinâmica e tensão visíveis.',
        tip: 'Estuda posições reais de kenjutsu pra entender onde o peso vai. A postura precisa ser funcional antes de bonita.'
    },

    // ── REX ───────────────────────────────────────────────────
    {
        id: 17, oc: 'rex', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '15–25min', xp: 25, skill: 'personagem',
        title: 'Expressão Carismática — Rex',
        why: 'Treina expressão de confiança: sorriso assimétrico, postura relaxada dos olhos.',
        desc: 'Rosto do Rex com sorriso confiante ou expressão de quem acabou de fechar um acordo. Pirulito opcional.',
        tip: 'Carisma no anime: sobrancelha relaxada, olhos levemente entrecerrados, sorriso assimétrico.'
    },

    {
        id: 18, oc: 'rex', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '10–20min', xp: 25, skill: 'personagem',
        title: 'Silhueta — Rex',
        why: 'Personagem relaxado tem linguagem corporal bem diferente dos outros três. Treina contraste de elenco.',
        desc: 'Silhueta do Rex em 3 poses: encostado na parede, mãos no bolso, estendendo a mão pra aperto.',
        tip: 'O Rex é o único sem postura de combate. A linguagem corporal aberta é o que o define visualmente.'
    },

    {
        id: 19, oc: 'rex', genre: 'cyberpunk', type: 'oc', diff: 'facil', time: '15–20min', xp: 25, skill: 'personagem',
        title: 'O Pirulito — Detalhe',
        why: 'Props repetidos viram marca registrada. Treina precisão de objeto pequeno e sua relação com o rosto.',
        desc: 'Close na boca ou na mão do Rex com o pirulito. Explore ângulos: mordendo, girando, segurando.',
        tip: 'Um prop bem desenhado conta história sem fala. O pirulito do Rex substitui o cigarro — essa é a piada visual.'
    },

    {
        id: 20, oc: 'rex', genre: 'cyberpunk', type: 'oc', diff: 'medio', time: '40–60min', xp: 60, skill: 'personagem',
        title: 'Meio Corpo — Negociação',
        why: 'Treina gesticulação e mãos expressivas: personagem comunicativo precisa de mãos que falam junto.',
        desc: 'Rex de meio corpo numa pose de conversa — gesticulando, encostado, ou com aquele sorriso de vantagem.',
        tip: 'Mãos expressivas são essenciais pra personagem comunicativo. Não esconda atrás do corpo.'
    },

    {
        id: 21, oc: 'rex', genre: 'cyberpunk', type: 'oc', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'composição',
        title: 'Cena de Negociação — Rex',
        why: 'Treina cena com dois planos: o Rex como foco e a presença implícita de outro personagem.',
        desc: 'Rex numa cena de submundo: mesa, luz fraca, alguém do outro lado (silhueta está ótimo). Tensão velada.',
        tip: 'O Rex é o personagem mais relacional — o ambiente ao redor conta a história dele mais do que a pose.'
    },

    // ── AIYRA ─────────────────────────────────────────────────
    {
        id: 22, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'facil', time: '15–25min', xp: 25, skill: 'personagem',
        title: 'Expressão Confiante — Aiyra',
        why: 'Treina expressão de confiança não agressiva.',
        desc: 'Só o rosto da Aiyra com expressão confiante e levemente astuta. Inclua a tiara se quiser.',
        tip: 'Meio-elfa: orelhas levemente pontudas são o único detalhe que define a raça sem exagerar.'
    },

    {
        id: 23, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'facil', time: '10–20min', xp: 25, skill: 'personagem',
        title: 'Silhueta — Aiyra',
        why: 'As asas mudam radicalmente a leitura de silhueta — treina elemento que define o personagem visualmente.',
        desc: 'Silhueta da Aiyra em 3 poses: asas abertas, mão na espada, cachecol ao vento.',
        tip: 'Teste com e sem asas. A silhueta com asas precisa ser reconhecível, não caótica.'
    },

    {
        id: 24, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'facil', time: '20–30min', xp: 25, skill: 'personagem',
        title: 'Detalhe do Cachecol — Aiyra',
        why: 'Tecido leve em movimento é um dos elementos mais dinâmicos do design. Treina dobras fluidas.',
        desc: 'Explore como o cachecol vermelho da Aiyra se comporta: voando, preso, enrolado, caindo.',
        tip: 'Cachecol vermelho é um dos elementos de leitura mais forte do personagem. A direção já indica o vento.'
    },

    {
        id: 25, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'medio', time: '40–65min', xp: 60, skill: 'anatomia',
        title: 'Asas — Estudo de Estados',
        why: 'Treina elemento anatômico não-humano: proporção, articulação e como as asas se dobram e abrem.',
        desc: 'Desenhe as asas da Aiyra em 3 estados: recolhidas, meio abertas, totalmente abertas.',
        tip: 'Asas de fantasia anime seguem lógica de ave ou morcego. Escolhe uma referência real e estiliza.'
    },

    {
        id: 26, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'medio', time: '45–70min', xp: 60, skill: 'personagem',
        title: 'Meio Corpo — Aiyra',
        why: 'Treina múltiplos elementos simultâneos: cachecol, tiara, cabelo e espada, todos com leitura clara.',
        desc: 'Aiyra de meio corpo com cachecol ao vento e mão na empunhadura da espada.',
        tip: 'Cachecol e cabelo ao vento criam movimento em pose estática. Não precisam ir na mesma direção.'
    },

    {
        id: 27, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'dificil', time: '90–130min', xp: 120, skill: 'gesto',
        title: 'Voo — Aiyra',
        why: 'Treina o desafio mais difícil: corpo em perspectiva extrema com asas abertas e tudo em movimento.',
        desc: 'Aiyra com asas abertas em voo ou aterrissagem. Corpo inteiro, roupa e cachecol em movimento.',
        tip: 'Voo exige escorço. Comece com o eixo do corpo e a direção do movimento — asas e roupa vêm depois.'
    },

    {
        id: 28, oc: 'aiyra', genre: 'fantasia', type: 'oc', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'composição',
        title: 'Cena de Fantasia — Aiyra',
        why: 'Treina composição completa em gênero diferente: luz mágica, ambiente de fantasia e personagem interagindo.',
        desc: 'Aiyra num cenário de fantasia: floresta mágica, ruínas, pico de montanha. Personagem e ambiente juntos.',
        tip: 'Fantasia tem mais liberdade de luz — luz mágica, brilho, partículas. Use isso pra criar profundidade.'
    },

    // ── GENÉRICO / LIVRE ──────────────────────────────────────
    {
        id: 29, oc: 'generico', genre: 'livre', type: 'livre', diff: 'facil', time: '10–15min', xp: 25, skill: 'gesto',
        title: 'Palito Dinâmico',
        why: 'O esqueleto articulado é o ponto de partida de toda pose. Treina leitura de movimento antes de qualquer estilo.',
        desc: '5 poses rápidas só com o esqueleto articulado. Quantidade, não qualidade — capture o movimento.',
        tip: 'Pensa numa ação física real: pular, se esquivar, empurrar. O corpo sempre reage a uma força.'
    },

    {
        id: 30, oc: 'generico', genre: 'livre', type: 'livre', diff: 'facil', time: '15–20min', xp: 25, skill: 'criatividade',
        title: 'Personagem Mistério',
        why: 'Treina improvisação criativa: criar leitura de personagem sem planejamento prévio.',
        desc: 'Sorteie mentalmente: gênero, arquétipo, emoção. Desenhe o rosto desse personagem sem planejamento.',
        tip: 'Não corrija enquanto desenha. O objetivo é soltar o controle, não fazer algo bonito.'
    },

    {
        id: 31, oc: 'generico', genre: 'livre', type: 'livre', diff: 'facil', time: '10–20min', xp: 25, skill: 'criatividade',
        title: 'Página de Thumbnails',
        why: 'Thumbnails são onde ideias nascem antes de qualquer comprometimento. Treina pensamento visual rápido.',
        desc: 'Encha uma página com thumbnails minúsculos: personagens, objetos, cenários. Quantidade, não qualidade.',
        tip: 'Cada thumbnail deve ter no máximo 3cm. Pequeno demais pra detalhar = você pensa em forma, não em linha.'
    },

    {
        id: 32, oc: 'generico', genre: 'livre', type: 'livre', diff: 'medio', time: '30–50min', xp: 60, skill: 'criatividade',
        title: 'Crossover Mundano',
        why: 'Personagens em situação de contraste revelam personalidade melhor do que qualquer cena de ação.',
        desc: 'Coloque dois dos seus OCs numa situação mundana e estranha — comprando pão, esperando ônibus.',
        tip: 'Como Evy e Kiara esperariam um ônibus? Como Rex e Aiyra comprariam mantimentos? O contraste é o humor.'
    },

    {
        id: 33, oc: 'generico', genre: 'livre', type: 'livre', diff: 'medio', time: '40–60min', xp: 60, skill: 'criatividade',
        title: 'Figurino Inventado',
        why: 'Design de figurino é uma habilidade separada de desenho de figura.',
        desc: 'Crie um figurino completo pra um personagem sem nome: estilo, acessórios, paleta. Só a roupa.',
        tip: 'Toda peça de roupa conta algo: classe social, função, personalidade. Por que essa pessoa vestiria isso?'
    },

    {
        id: 34, oc: 'generico', genre: 'livre', type: 'livre', diff: 'dificil', time: '60–90min', xp: 120, skill: 'criatividade',
        title: 'Página de Concept',
        why: 'Concept art é sobre explorar possibilidades. Treina tomada de decisão visual.',
        desc: '3 versões do mesmo personagem com variações de roupa, cabelo ou traço. Uma página de exploração.',
        tip: 'Não há resposta errada em concept. Cada versão deve ser defensável.'
    },

    // ── ESTUDO TÉCNICO ────────────────────────────────────────
    {
        id: 35, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '10–20min', xp: 25, skill: 'gesto',
        title: 'Aquecimento: Círculos e Linhas',
        why: 'Controle de traço é habilidade motora, não criativa. Treina consistência de linha antes de qualquer sessão.',
        desc: 'Preencha uma página com círculos limpos e linhas retas em várias direções, sem régua.',
        tip: 'Faça o movimento com o ombro, não com o pulso. Linha feita com ombro é mais estável e mais longa.'
    },

    {
        id: 36, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '15–25min', xp: 25, skill: 'anatomia',
        title: 'Estudo de Mãos',
        why: 'Mãos são o segundo ponto de leitura do personagem depois do rosto.',
        desc: 'Desenhe sua própria mão em duas posições — aberta e fechando punho. Só observação, sem referência de anime.',
        tip: 'Não tente fazer bonito. Tente entender a estrutura: onde os ossos ficam, onde a pele dobra.'
    },

    {
        id: 37, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '20–30min', xp: 25, skill: 'personagem',
        title: 'Olhos Anime — 6 Variações',
        why: 'O olho é o elemento mais estilizado do anime e o mais responsável pela personalidade visual.',
        desc: '6 olhos diferentes: pequeno e duro, grande e expressivo, semicerrado, arregalado, com sombra, com destaque neon.',
        tip: 'Varie íris (forma e tamanho), highlight (posição e quantidade) e espessura do contorno superior.'
    },

    {
        id: 38, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '15–20min', xp: 25, skill: 'gesto',
        title: 'Copiar uma Pose',
        why: 'Copiar pra estudar é a técnica mais antiga de aprendizado em arte.',
        desc: 'Escolha uma pose de qualquer personagem anime que admire e copie só a pose, sem se preocupar em ficar igual.',
        tip: 'Depois de copiar, cubra a referência e refaça de memória. O que você esqueceu é o que ainda não internalizou.'
    },

    {
        id: 39, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '30–45min', xp: 60, skill: 'personagem',
        title: 'Dobras de Tecido — 3 Situações',
        why: 'Tecido no anime é simplificado, mas precisa de base real.',
        desc: 'Estude como tecido dobra em 3 situações: calça sentada, jaqueta fechada, pano caindo livre.',
        tip: 'Dobras sempre vão de ponto de tensão pra ponto de tensão. Identifica onde o tecido está preso.'
    },

    {
        id: 40, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '40–55min', xp: 60, skill: 'gesto',
        title: 'Escorço — Corpo em Perspectiva',
        why: 'Escorço é o ponto onde a maioria dos iniciantes trava. Treina pensar em volume, não em contorno.',
        desc: 'Boneco articulado em 3 poses com escorço: braço ou perna vindo em direção ao espectador.',
        tip: 'Pense em caixas e cilindros sobrepostos, não em contornos. Um braço em escorço é um cilindro curto.'
    },

    {
        id: 41, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '45–60min', xp: 60, skill: 'perspectiva',
        title: 'Perspectiva de 1 Ponto de Fuga',
        why: 'Perspectiva de 1 ponto é a base de qualquer cenário.',
        desc: 'Uma rua, corredor ou ambiente em perspectiva de 1 ponto de fuga. Sem personagem, só estrutura.',
        tip: 'Linha do horizonte primeiro, ponto de fuga no centro. Tudo que é paralelo ao chão converge pra lá.'
    },

    {
        id: 42, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '35–50min', xp: 60, skill: 'luz',
        title: 'Luz e Sombra — Formas Simples',
        why: 'Entender luz antes de aplicar em personagem é essencial.',
        desc: '6 formas simples (esfera, cubo, cilindro, cone, toro, pirâmide) com luz vinda do mesmo ângulo em todas.',
        tip: 'Cada forma tem sombra própria + sombra projetada. A sombra projetada confirma a direção da luz.'
    },

    {
        id: 43, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'dificil', time: '90–120min', xp: 120, skill: 'anatomia',
        title: 'Anatomia de Referência',
        why: 'Copiar anatomia de artistas que admira é como aprender vocabulário de um idioma.',
        desc: 'Copie 5 poses de personagens de anime ou artistas que admira, focando na construção do corpo.',
        tip: 'Depois de cada pose, anota uma coisa que aprendeu. Esse material vira sua biblioteca mental de soluções.'
    },

    {
        id: 44, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'dificil', time: '60–90min', xp: 120, skill: 'perspectiva',
        title: 'Perspectiva de 2 Pontos de Fuga',
        why: '2 pontos de fuga é a perspectiva mais usada em cenários de interior e exterior.',
        desc: 'Um ambiente com 2 pontos de fuga: esquina de rua, quarto, interior de loja. Props simples depois.',
        tip: 'Os 2 pontos ficam sempre na linha do horizonte. Toda linha horizontal vai pra um dos dois.'
    },

    {
        id: 45, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'dificil', time: '60–80min', xp: 120, skill: 'gesto',
        title: 'Gesture Drawing — 10 Poses Rápidas',
        why: 'Gesture drawing treina captura de movimento e linha de ação. É o exercício que mais acelera o desenho de figura.',
        desc: '10 poses de 2 minutos cada — use line-of-action.com ou quickposes.com. Foco no movimento.',
        tip: 'Você não vai terminar nenhuma. Isso é proposital. O objetivo é capturar a essência do movimento.'
    },

    // ── CENÁRIOS ──────────────────────────────────────────────
    {
        id: 46, oc: 'generico', genre: 'cyberpunk', type: 'cenario', diff: 'facil', time: '20–30min', xp: 25, skill: 'cenário',
        title: 'Fachada de Beco — Nova Voraz',
        why: 'Treina atmosfera com poucos elementos: aprender a escolher o que conta a história.',
        desc: 'Uma parede de beco: grafite, fios elétricos, letreiro de neon apagado.',
        tip: '3 elementos bem posicionados já criam atmosfera. O espaço vazio também é parte do design.'
    },

    {
        id: 47, oc: 'generico', genre: 'cyberpunk', type: 'cenario', diff: 'facil', time: '15–25min', xp: 25, skill: 'cenário',
        title: 'Letreiro Neon Fictício',
        why: 'Treina tipografia como elemento visual e identidade de um universo.',
        desc: 'Um letreiro de neon de um bar, loja ou serviço de Nova Voraz. Nome inventado, tipografia irregular.',
        tip: 'Misture português com termos eletrônicos. "Reparos Neurais — 24h — Credencial Aceita" diz mais do que exposição.'
    },

    {
        id: 48, oc: 'generico', genre: 'cyberpunk', type: 'cenario', diff: 'medio', time: '45–70min', xp: 60, skill: 'cenário',
        title: 'Skyline de Nova Voraz',
        why: 'Skyline treina leitura de silhueta de cidade: ritmo, densidade e relação entre formas.',
        desc: 'Silhueta de Nova Voraz à noite: prédios, fios, antenas, luzes neon. Sem detalhes internos.',
        tip: 'Varia a altura dos prédios pra criar ritmo. Luzes são pontos e traços. Fios cruzando o céu criam profundidade.'
    },

    {
        id: 49, oc: 'generico', genre: 'cyberpunk', type: 'cenario', diff: 'medio', time: '40–60min', xp: 60, skill: 'cenário',
        title: 'Ponto de Encontro — Submundo',
        why: 'Treina design de ambiente narrativo: o lugar deve contar a história sem personagem.',
        desc: 'Um local de entrega ou encontro de Nova Voraz: telhado, estação abandonada, mercado subterrâneo.',
        tip: '3 elementos definem o lugar: o que tem no chão (narrativa), nas paredes (identidade), no teto/céu (atmosfera).'
    },

    {
        id: 50, oc: 'generico', genre: 'cyberpunk', type: 'cenario', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'perspectiva',
        title: 'Interior Cyberpunk',
        why: 'Interior com perspectiva de 2 pontos e props é o desafio completo de cenário.',
        desc: 'Ambiente interno: bar clandestino, quarto de hacker, escritório de facção. Perspectiva de 2 pontos, com props.',
        tip: 'Planos grandes primeiro (paredes, chão, teto). Props depois. O olho do espectador completa o resto.'
    },

    {
        id: 51, oc: 'generico', genre: 'fantasia', type: 'cenario', diff: 'facil', time: '20–30min', xp: 25, skill: 'cenário',
        title: 'Portal Mágico',
        why: 'Elemento de fantasia isolado treina design de prop sem a pressão de construir cenário completo.',
        desc: 'Um portal ou passagem mágica: arco de pedra, círculo de runas, fenda de luz. Só o elemento central.',
        tip: 'Fantasia tem liberdade de forma. Testa silhuetas absurdas antes de decidir. O portal precisa de leitura imediata.'
    },

    {
        id: 52, oc: 'generico', genre: 'fantasia', type: 'cenario', diff: 'medio', time: '45–65min', xp: 60, skill: 'cenário',
        title: 'Ruínas de Fantasia',
        why: 'Ruínas combinam geometria humana com formas orgânicas — treina o equilíbrio entre estrutura e natureza.',
        desc: 'Ambiente de ruínas: colunas quebradas, vegetação tomando conta, luz atravessando.',
        tip: 'Vegetação no anime é simplificada mas cheia de ritmo. Alterna formas orgânicas com geométricas.'
    },

    {
        id: 53, oc: 'generico', genre: 'fantasia', type: 'cenario', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'perspectiva',
        title: 'Cidade de Fantasia',
        why: 'Worldbuilding visual: treina criar um lugar crível a partir de escolhas de arquitetura, escala e atmosfera.',
        desc: 'Uma cidade ou vila de fantasia: arquitetura, atmosfera, escala. Vista de longe ou numa rua.',
        tip: 'Fantasia tem mais liberdade de paleta e iluminação. Usa isso: cores irreais e luz dramática criam profundidade.'
    },

    {
        id: 54, oc: 'generico', genre: 'horror', type: 'cenario', diff: 'medio', time: '40–60min', xp: 60, skill: 'cenário',
        title: 'Ambiente de Horror',
        why: 'Horror treina uso deliberado do espaço vazio e do que não se mostra.',
        desc: 'Um ambiente perturbador: mansão abandonada, floresta noturna, corredor sem fim.',
        tip: 'No horror o que não se vê assusta mais do que o que se vê. Deixa cantos escuros e detalhes incompletos.'
    },

    {
        id: 55, oc: 'generico', genre: 'horror', type: 'cenario', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'composição',
        title: 'Cena de Horror Completa',
        why: 'Treina composição que evoca emoção específica: a iluminação, o ângulo e o que é (ou não) mostrado criam o horror.',
        desc: 'Uma cena de horror com personagem ou criatura e ambiente. Iluminação e composição são o foco.',
        tip: 'Ângulo baixo torna objetos ameaçadores. Luz por baixo distorce rostos. Use as ferramentas do gênero.'
    },

    {
        id: 56, oc: 'generico', genre: 'cotidiano', type: 'cenario', diff: 'facil', time: '20–30min', xp: 25, skill: 'cenário',
        title: 'Quarto de Personagem',
        why: 'Ambiente habitado revela personagem sem precisar mostrá-lo.',
        desc: 'O quarto de um dos seus OCs: objetos, bagunça ou organização que revelam personalidade.',
        tip: 'O que o personagem tem na mesa? Na parede? No chão? Cada detalhe é uma afirmação sobre quem é essa pessoa.'
    },

    {
        id: 57, oc: 'generico', genre: 'cotidiano', type: 'cenario', diff: 'medio', time: '40–55min', xp: 60, skill: 'cenário',
        title: 'Cena Slice of Life',
        why: 'Cotidiano treina luz ambiente e textura — o oposto do drama.',
        desc: 'Um ambiente cotidiano: café, parque, cozinha. Sem personagem obrigatório, foco na atmosfera tranquila.',
        tip: 'Slice of life depende de como a luz entra no espaço — pela janela, por baixo de portas, refletida em superfícies.'
    },

    {
        id: 58, oc: 'generico', genre: 'scifi', type: 'cenario', diff: 'medio', time: '45–70min', xp: 60, skill: 'cenário',
        title: 'Interior de Nave / Estação',
        why: 'Sci-Fi limpo treina design modular e repetição de elementos.',
        desc: 'Interior de nave ou estação espacial: corredores, painéis, janelas pro espaço.',
        tip: 'Sci-Fi limpo diferencia de cyberpunk pela ausência de sujeira e caos. Linhas mais frias, cor contida.'
    },

    {
        id: 59, oc: 'generico', genre: 'scifi', type: 'cenario', diff: 'dificil', time: '2–3h', xp: 120, minRank: 4, skill: 'composição',
        title: 'Vista Espacial',
        why: 'Escala extrema treina composição quando os elementos são objetos sem escala intuitiva.',
        desc: 'Uma vista do espaço com nave, estação ou planeta. Escala e composição são o desafio.',
        tip: 'No espaço não há atmosfera — sombras são absolutas (preto total). Só superfícies voltadas pra estrela têm luz.'
    },

    // ── LUZ & VALOR (Rank 3+) ────────────────────────────────
    {
        id: 60, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '20–30min', xp: 25, minRank: 3, skill: 'luz',
        title: 'Escala de Cinza — 5 Tons',
        why: 'Entender valor (claro/escuro) antes de cor é o método comprovado. Cor sem valor não funciona.',
        desc: 'Divida uma tira em 5 retângulos e preencha do branco ao preto passando por 3 cinzas intermediários.',
        tip: 'A transição entre tons deve ser gradual e uniforme. Se dois tons parecem iguais, um está errado.'
    },

    {
        id: 61, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '25–35min', xp: 25, minRank: 3, skill: 'luz',
        title: 'Luz e Sombra — Esfera',
        why: 'A esfera concentra todos os tipos de sombra num único objeto simples.',
        desc: 'Desenhe uma esfera e aplique: luz direta, sombra de forma, sombra projetada e luz refletida. Só tons, sem linha.',
        tip: 'Existe uma faixa escura logo antes da borda iluminada pela luz refletida — esse detalhe separa iniciante de intermediário.'
    },

    {
        id: 62, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '40–55min', xp: 60, minRank: 3, skill: 'luz',
        title: 'Luz e Sombra — 3 Objetos',
        why: 'Generalizar o entendimento de luz para formas diferentes constrói o vocabulário visual de iluminação.',
        desc: 'Esfera, cubo e cilindro com a mesma fonte de luz. Compare como a sombra se comporta em cada forma.',
        tip: 'No cubo a sombra tem borda dura. Na esfera é gradual. No cilindro é mista.'
    },

    {
        id: 63, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '45–60min', xp: 60, minRank: 3, skill: 'luz',
        title: 'Valor em Personagem — Só Tons',
        why: 'Aplicar luz em personagem sem se preocupar com linha ou cor isola o problema.',
        desc: 'Pegue um esboço de qualquer personagem e preencha só com 3 tons: luz, sombra e meio-tom. Sem linha, só mancha.',
        tip: 'Defina a direção da luz antes de qualquer coisa. Mude de ideia sobre a cor depois — mas a direção não pode ser vaga.'
    },

    {
        id: 64, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'dificil', time: '60–90min', xp: 120, minRank: 3, skill: 'luz',
        title: 'Cena em Valor — Sem Cor',
        why: 'Planejar cena em valor antes de cor é método padrão de ilustradores profissionais.',
        desc: 'Desenhe uma cena simples usando só preto, branco e 2 cinzas. Só colore depois de aprovar o valor.',
        tip: 'Se a cena não funciona em valor, não vai funcionar em cor. A cor vai distrair, mas não vai consertar.'
    },

    // ── COMPOSIÇÃO (Rank 4+) ──────────────────────────────────
    {
        id: 65, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '15–25min', xp: 25, minRank: 4, skill: 'composição',
        title: 'Regra dos Terços — Thumbnails',
        why: 'A regra dos terços é o princípio de composição mais ensinado porque funciona consistentemente.',
        desc: 'Faça 6 thumbnails posicionando o sujeito em cada um dos 4 pontos de intersecção da grade de terços.',
        tip: 'O olho vai naturalmente para os pontos de intersecção. Colocar o sujeito no centro geralmente enfraquece a composição.'
    },

    {
        id: 66, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'facil', time: '20–30min', xp: 25, minRank: 4, skill: 'composição',
        title: 'Linhas de Leitura',
        why: 'O olho segue linhas implícitas na imagem. Treinar ver essas linhas é o que separa composição acidental de intencional.',
        desc: 'Pegue 3 imagens de artistas que admira e trace as linhas de movimento implícitas — onde seu olho vai e em que ordem.',
        tip: 'Braços, olhares, perspectiva e contraste criam linhas invisíveis. Identificar nas obras dos outros te ensina a criar nas suas.'
    },

    {
        id: 67, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '40–60min', xp: 60, minRank: 4, skill: 'composição',
        title: 'Composição — 3 Leituras',
        why: 'A mesma cena pode ser lida como trágica, épica ou íntima dependendo só do enquadramento.',
        desc: 'Pegue uma cena simples e recrie em 3 enquadramentos: close dramático, plano médio neutro, plano aberto épico.',
        tip: 'Câmera baixa = poder. Câmera alta = vulnerabilidade. Close = emoção. Plano aberto = contexto/solidão.'
    },

    {
        id: 68, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '45–65min', xp: 60, minRank: 4, skill: 'composição',
        title: 'Peso Visual e Equilíbrio',
        why: 'Toda composição tem peso — elementos escuros, grandes ou detalhados pesam mais.',
        desc: 'Crie 4 thumbnails: equilibrada, desequilibrada pra esquerda, pra direita, e desequilibrada mas intencional.',
        tip: 'Desequilíbrio não é erro — é ferramenta. Uma composição que cai pra um lado pode criar tensão narrativa.'
    },

    // ── REFERÊNCIA FOTOGRÁFICA (Rank 5+) ─────────────────────
    {
        id: 73, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '45–70min', xp: 60, minRank: 5, skill: 'anatomia',
        title: 'Pose de Referência Fotográfica',
        why: 'Foto como referência de pose treina leitura de corpo real antes de estilizar.',
        desc: 'Escolha uma foto de pose humana e reproduza em estilo anime: simplifique anatomia, exagere expressão.',
        tip: 'O objetivo não é copiar a foto — é extrair a estrutura de pose e traduzir para o seu estilo. São duas etapas distintas.'
    },

    {
        id: 74, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '40–55min', xp: 60, minRank: 5, skill: 'anatomia',
        title: 'Simplificação de Foto em Formas',
        why: 'Ver foto e identificar as formas geométricas subjacentes treina o olho analítico.',
        desc: 'Escolha uma foto de rosto ou corpo e reduza a formas básicas: círculos, retângulos, triângulos. Só as formas.',
        tip: 'Olho = elipse, nariz = triângulo, maxilar = trapézio. Quanto mais você vê forma, menos fica preso no detalhe.'
    },

    {
        id: 75, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'dificil', time: '90–120min', xp: 120, minRank: 5, skill: 'anatomia',
        title: 'Estudo de Master — Desconstrução',
        why: 'Copiar obra de artista que admira com atenção à construção é o método de aprendizado mais antigo e mais eficaz.',
        desc: 'Escolha uma ilustração de um artista que admira e copie com intenção: a cada elemento, identifique qual decisão foi tomada.',
        tip: 'Anota enquanto faz: "a sombra aqui vai pra baixo porque a luz está acima e à esquerda". Verbalizar acelera a internalização.'
    },

    // ── COR (Rank 6+) ─────────────────────────────────────────
    {
        id: 69, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '30–45min', xp: 60, minRank: 6, skill: 'cor',
        title: 'Temperatura de Cor',
        why: 'Luz quente/sombra fria é o princípio mais usado em ilustração porque imita como a luz funciona no mundo real.',
        desc: 'Pegue um esboço e colore duas vezes: luz quente (amarelo/laranja) com sombra fria (azul/roxo), depois o inverso.',
        tip: 'Sombra nunca é só "a cor mais escura". Ela tem temperatura oposta à luz. Esse detalhe é o que faz a cor parecer viva.'
    },

    {
        id: 70, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '40–55min', xp: 60, minRank: 6, skill: 'cor',
        title: 'Paleta Limitada — 3 Cores',
        why: 'Paleta limitada força harmonia. A maioria dos erros de cor vêm de usar cores demais.',
        desc: 'Escolha 3 cores (1 dominante, 1 secundária, 1 acento) e crie uma ilustração simples usando só elas.',
        tip: 'A cor de acento deve ser a menos usada e a mais saturada. Ela chama atenção — use onde você quer que o olho vá.'
    },

    {
        id: 71, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'medio', time: '45–60min', xp: 60, minRank: 6, skill: 'cor',
        title: 'Harmonia de Cor — Análoga',
        why: 'Cores análogas criam harmonia natural. É a paleta mais fácil de acertar e muito usada em anime.',
        desc: 'Crie uma cena ou personagem usando só cores análogas — ex: amarelo, amarelo-verde, verde. Varie saturação e valor.',
        tip: 'Anime usa muito análogas com um acento complementar pequeno. Fundo azul-roxo, personagem azul, detalhe laranja.'
    },

    {
        id: 72, oc: 'generico', genre: 'livre', type: 'estudo', diff: 'dificil', time: '90–120min', xp: 120, minRank: 6, skill: 'cor',
        title: 'Releitura Cromática',
        why: 'Recolorir uma ilustração antiga com consciência de valor e temperatura mostra evolução real de forma concreta.',
        desc: 'Pegue qualquer desenho seu já feito e refaça a colorização do zero: valor primeiro, depois temperatura, depois acento.',
        tip: 'Compare antes e depois. Se a nova versão não for visivelmente melhor, a estrutura do desenho original é o problema.'
    },
];