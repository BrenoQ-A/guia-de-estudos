window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a2-qui"] = {
  aulas: [
    {
      id: "em-a2-qui-1",
      titulo: "Ligações químicas",
      blocos: [
        { tipo: "paragrafo", texto: "Átomos se ligam buscando estabilidade (octeto). Três formas principais: iônica, covalente e metálica — cada uma define o comportamento da substância." },
        { tipo: "titulo", texto: "Ligação iônica" },
        { tipo: "lista", itens: ["Metal (cede e⁻) + ametal (recebe e⁻): formação de íons que se atraem", "Exemplo: Na⁺ + Cl⁻ → NaCl (sal de cozinha)", "Sólidos cristalinos duros, alto ponto de fusão, conduzem eletricidade FUNDIDOS ou DISSOLVIDOS em água", "Fórmula: cruzar as cargas (Al³⁺ + O²⁻ → Al₂O₃)"] },
        { tipo: "titulo", texto: "Ligação covalente" },
        { tipo: "lista", itens: ["Ametais compartilham elétrons (H₂O, CO₂, O₂)", "Moléculas: água polar (O puxa os e⁻ com mais força — eletronegatividade)", "Ligação dupla/tripla: O₂ (2 pares), N₂ (3 pares — o mais estável do ar!)", "Polar x apolar: moléculas simétricas (CO₂, CH₄) são apolar mesmo com ligações polares"] },
        { tipo: "titulo", texto: "Ligação metálica" },
        { tipo: "paragrafo", texto: "Mar de elétrons livres ao redor de cátions fixos: brilho, condução elétrica e térmica, maleabilidade, ligas (bronze = Cu + Sn; aço = Fe + C)." },
        { tipo: "exemplo", texto: "Por que o sal conduz na água mas o açúcar não? NaCl se dissocia em íons livres (condutores); a sacarose dissolve-se como moléculas neutras (não conduz). Teste clássico de laboratório!" },
        { tipo: "dica", texto: "Eletronegatividade cresce da esquerda para a direita e de baixo para cima na tabela: F é o campeão. Diferença grande (> 1,7): iônica; pequena entre ametais: covalente." },
        { tipo: "atencao", texto: "Gases nobres raramente formam ligações: já têm octeto. E a ligação iônica não forma 'moléculas': forma CRISTAIS gigantes (a fórmula NaCl é a menor razão, não uma molécula)." }
      ],
      atividade: [
        { pergunta: "A ligação entre Na e Cl é...", alternativas: ["metálica", "covalente", "hidrogênio", "iônica"], correta: 3, explicacao: "Metal cede elétron ao ametal: íons." },
        { pergunta: "Na molécula de água, o átomo mais eletronegativo é o...", alternativas: ["sódio", "oxigênio", "hidrogênio", "nitrogênio"], correta: 1, explicacao: "O puxa os elétrons: água polar." },
        { pergunta: "O 'mar de elétrons' caracteriza a ligação...", alternativas: ["metálica", "iônica", "dipolo", "covalente"], correta: 0, explicacao: "Elétrons livres: condutividade." },
        { pergunta: "Al₂O₃ se forma cruzando...", alternativas: ["Al e O neutros", "Al²⁺ e O³⁻", "Al³⁺ e O²⁻", "Al⁻ e O⁺"], correta: 2, explicacao: "Cargas trocam e equilibram: 2 Al³⁺ + 3 O²⁻." }
      ]
    },
    {
      id: "em-a2-qui-2",
      titulo: "Funções inorgânicas",
      blocos: [
        { tipo: "paragrafo", texto: "Funções inorgânicas são famílias de compostos com comportamento semelhante: ácidos, bases, sais e óxidos." },
        { tipo: "titulo", texto: "Ácidos" },
        { tipo: "lista", itens: ["Libram H⁺ na água; pH < 7; azedos; viram papel de tornassol azul em vermelho", "Exemplos: HCl (ácido clorídrico, do estômago), H₂SO₄ (sulfúrico, baterias), HNO₃ (nítrico), H₃PO₄ (fosfórico, refrigerantes)", "Nomenclatura: ácido + nome do ânion (Cl → clorídrico; SO₄ → sulfúrico)"] },
        { tipo: "titulo", texto: "Bases" },
        { tipo: "lista", itens: ["Libram OH⁻; pH > 7; adstringentes/sabão; tornassol vermelho em azul", "Exemplos: NaOH (soda cáustica, desentupidores), Ca(OH)₂ (cal hidratada, Muro dos Lamentos!), NH₃ (amônia)", "Neutralização: ácido + base → sal + água (HCl + NaOH → NaCl + H₂O)"] },
        { tipo: "titulo", texto: "Sais e óxidos" },
        { tipo: "lista", itens: ["Sais: cátion (≠ H⁺) + ânion (≠ OH⁻) — NaHCO₃ (bicarbonato, antiácido), CaSO₄ (gesso), NaClO (hipoclorito, água sanitária)", "Óxidos: elemento + oxigênio — CO₂ (ácido: chuva ácida/gás), CaO (básico: cal virgem), Al₂O₃ (anfótero)", "Reações de neutralização entre ácidos e bases formam sais (indigestão? antiácido = base!)"] },
        { tipo: "dica", texto: "pH: escala de 0 a 14 (7 neutro). Cada unidade de pH multiplica a acidez por 10. Suco de limão ~2; água ~7; sabão ~10." },
        { tipo: "atencao", texto: "Ácido forte não é 'mais perigoso' sempre: HF (ácido fluorídrico, fraco) atravessa pele e ossos. Perigo envolve concentração e toxicidade, não só força." }
      ],
      atividade: [
        { pergunta: "H₂SO₄ é o ácido...", alternativas: ["clorídrico", "fosfórico", "sulfúrico", "nítrico"], correta: 2, explicacao: "Usado em baterias de chumbo-ácido." },
        { pergunta: "A reação ácido + base produz...", alternativas: ["gás só", "sal + água", "óxido", "só água"], correta: 1, explicacao: "Neutralização clássica." },
        { pergunta: "NaOH é conhecido como...", alternativas: ["soda cáustica", "cal virgem", "amônia", "bicarbonato"], correta: 0, explicacao: "Base forte de desentupidores." },
        { pergunta: "Uma solução de pH 3 é...", alternativas: ["básica", "ácida", "impossível", "neutra"], correta: 1, explicacao: "pH < 7: ácida." }
      ]
    },
    {
      id: "em-a2-qui-3",
      titulo: "Soluções: concentração e diluição",
      blocos: [
        { tipo: "paragrafo", texto: "Solução é mistura homogênea: soluto (dissolvido) + solvente (que dissolve, geralmente água). Falar em solução é falar em CONCENTRAÇÃO." },
        { tipo: "titulo", texto: "Concentrações" },
        { tipo: "lista", itens: ["Concentração comum (g/L): C = m (g do soluto) ÷ V (L da solução)", "Molaridade (mol/L): M = n ÷ V — a mais usada em laboratório", "Título (razão): massa de soluto ÷ massa total (em %)", "Saturação: solução saturada já não dissolve mais soluto (excesso deposita no fundo)"] },
        { tipo: "exemplo", texto: "20 g de NaCl em 500 mL de água: C = 20/0,5 = 40 g/L. E se dissolvermos 58,5 g (1 mol) em 1 L: M = 1 mol/L." },
        { tipo: "titulo", texto: "Diluição e mistura" },
        { tipo: "lista", itens: ["Diluição: adiciona solvente, a QUANTIDADE de soluto não muda → C₁V₁ = C₂V₂", "Exemplo: diluir 100 mL de suco concentrado (C = 10 g/L) até 500 mL: C₂ = 10·100/500 = 2 g/L", "Adição de soluto: só soma as massas"] },
        { tipo: "paragrafo", texto: "Medicamentos, soro fisiológico (NaCl a 0,9%), soro caseiro (composição oficial) e o álcool em gel (70% ideal: mais eficaz que 100% — água ajuda a penetrar a célula do micróbio) são soluções com concentrações críticas." },
        { tipo: "dica", texto: "Rótulo de refrigerante: 'carboidratos 10 g por 200 mL' = C = 50 g/L de açúcar. Uma lata (350 mL) tem ~17,5 g... em média bem mais na prática." },
        { tipo: "atencao", texto: "Volume da solução ≠ volume do solvente! Misturar 50 mL de álcool + 50 mL de água dá ~97 mL (contração molecular), e a concentração considera o volume FINAL da solução." }
      ],
      atividade: [
        { pergunta: "Concentração comum é expressa em...", alternativas: ["mol/L", "kg/m³ só", "g/L", "%"], correta: 2, explicacao: "Massa de soluto por litro de solução." },
        { pergunta: "Diluir 50 mL de C = 20 g/L até 200 mL resulta em C₂ =", alternativas: ["8 g/L", "5 g/L", "20 g/L", "80 g/L"], correta: 1, explicacao: "C₁V₁ = C₂V₂: 20·50/200 = 5." },
        { pergunta: "1 mol de NaCl (58,5 g) em 2 L de solução tem molaridade...", alternativas: ["1 mol/L", "58,5 mol/L", "2 mol/L", "0,5 mol/L"], correta: 3, explicacao: "M = 1/2 = 0,5 mol/L." },
        { pergunta: "Álcool 70% é mais eficaz que o 100% porque...", alternativas: ["não é verdade", "evapora menos", "custa menos", "a água facilita a penetração e desnaturação"], correta: 3, explicacao: "Água potencializa a ação antimicrobiana." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "NaCl é formado por ligação...", alternativas: ["covalente", "iônica", "metálica", "hidrogênio"], correta: 1, explicacao: "Na⁺ e Cl⁻: cristal iônico." },
      { pergunta: "HCl + NaOH → NaCl + H₂O é reação de...", alternativas: ["neutralização", "síntese", "oxidação", "combustão"], correta: 0, explicacao: "Ácido + base → sal + água." },
      { pergunta: "Ca(OH)₂ é...", alternativas: ["um óxido", "um sal", "uma base", "um ácido"], correta: 2, explicacao: "Cal hidratada: base." },
      { pergunta: "Título em % de 20 g de soluto em 80 g de água:", alternativas: ["80%", "50%", "20%", "25%"], correta: 2, explicacao: "20 ÷ (20+80) = 20%." },
      { pergunta: "N₂ é tão estável pela ligação...", alternativas: ["dupla", "simples", "tripla", "iônica"], correta: 2, explicacao: "3 pares compartilhados: energicamente fortíssima." },
      { pergunta: "Aço é exemplo de...", alternativas: ["óxido", "liga metálica", "sal", "ligação covalente"], correta: 1, explicacao: "Fe + C (e outros): propriedades melhoradas." }
    ]
  },
  exameFinal: [
    { pergunta: "Na ligação iônica, o metal...", alternativas: ["não reage", "compartilha", "recebe elétrons", "cede elétrons"], correta: 3, explicacao: "Vira cátion; o ametal, ânion." },
    { pergunta: "O cortador de unhas usando NaOH tem pH...", alternativas: ["0", "< 7", "= 7", "> 7"], correta: 3, explicacao: "Base forte: pH alto, corrosivo." },
    { pergunta: "Molaridade de 0,2 mol em 0,4 L:", alternativas: ["0,2 mol/L", "2 mol/L", "0,5 mol/L", "0,8 mol/L"], correta: 2, explicacao: "M = n/V = 0,2/0,4." },
    { pergunta: "Na diluição, permanece constante o...", alternativas: ["solvente", "quantidade de soluto", "volume", "concentração"], correta: 1, explicacao: "Só se adiciona solvente." },
    { pergunta: "Óxido básico + água resulta em...", alternativas: ["gás", "ácido", "base (hidróxido)", "sal"], correta: 2, explicacao: "CaO + H₂O → Ca(OH)₂ (cal)." }
  ]
};
