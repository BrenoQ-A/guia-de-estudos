window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a2-bio"] = {
  aulas: [
    {
      id: "em-a2-bio-1",
      titulo: "Genética mendeliana",
      blocos: [
        { tipo: "paragrafo", texto: "Gregor Mendel (1866) cruzou ervilhas e descobriu as leis da herança — sem saber do DNA! Suas leis regem cruzamentos até hoje." },
        { tipo: "titulo", texto: "Primeira lei (Lei da Segregação)" },
        { tipo: "lista", itens: ["Cada característica é determinada por um par de fatores (alelos) que se SEPARAM na formação dos gametas", "Cruzamento Aa × Aa: 1 AA : 2 Aa : 1 aa (genótipos) → 3:1 (fenótipos)", "Test-cross: indivíduo dominante x recessivo (aa) revela se o dominante é puro (AA) ou híbrido (Aa)"] },
        { tipo: "exemplo", texto: "Cruzando ervilha amarela heterozigota (Aa) com amarela heterozigota: 25% verdes (aa), 75% amarelas (AA ou Aa). Se nascer 1 verde, ambos os pais eram Aa!" },
        { tipo: "titulo", texto: "Segunda lei (Lei da Distribuição Independente)" },
        { tipo: "lista", itens: ["Dois ou mais pares de alelos segregam INDEPENDENTEMENTE (em cromossomos diferentes)", "Cruzamento diíbrido: AaBb × AaBb → 9:3:3:1 (proporção clássica)", "Casos de ligação ao sexo não seguem a 2ª lei (cromossomos X e Y não segregam independentemente entre si)"] },
        { tipo: "paragrafo", texto: "Extensões: dominância incompleta (hibrisdo com fenótipo intermediário — flor vermelha × branca → rosa), codominância (os dois aparecem juntos — ABO), alelos múltiplos (sistema ABO: IA, IB, i) e letalidade (genótipo que mata, alterando proporções para 2:1)." },
        { tipo: "dica", texto: "Para diíbridos, desmembre: (Aa × Aa) = 3/4 dominantes; (Bb × Bb) = 3/4. Multiplique: 9/16 para os dois dominantes. Probabilidades se multiplicam!" },
        { tipo: "atencao", texto: "A proporção 3:1 vale SOLO em cruzamento de heterozigotos com dominância completa. Cruzar AA × aa dá 100% Aa (todos dominantes). Leia o genótipo dos pais antes de tudo!" }
      ],
      atividade: [
        { pergunta: "Cruzando Aa × Aa, a proporção fenotípica é...", alternativas: ["3:1", "100% dominantes", "1:1", "9:3:3:1"], correta: 0, explicacao: "1ª lei: 3 dominantes : 1 recessivo." },
        { pergunta: "No cruzamento diíbrido AaBb × AaBb, a proporção é...", alternativas: ["1:1:1:1", "3:1", "9:3:3:1", "1:2:1"], correta: 2, explicacao: "2ª lei: distribuição independente." },
        { pergunta: "Flor vermelha × branca dando rosa exemplifica...", alternativas: ["letalidade", "dominância incompleta", "dominância completa", "codominância"], correta: 1, explicacao: "Fenótipo intermediário." },
        { pergunta: "O test-cross cruza o dominante com...", alternativas: ["o meio", "ele mesmo", "outro dominante", "o recessivo (aa)"], correta: 3, explicacao: "Revela se é AA (100% dominantes) ou Aa (1:1)." }
      ]
    },
    {
      id: "em-a2-bio-2",
      titulo: "Genética humana: ABO, Rh e heredogramas",
      blocos: [
        { tipo: "paragrafo", texto: "A genética humana aplica Mendel a nós: grupos sanguíneos, herança ligada ao sexo e análise de árvores genealógicas." },
        { tipo: "titulo", texto: "Sistema ABO" },
        { tipo: "lista", itens: ["Alelos: IA, IB e i; IA e IB codominantes, ambos dominam sobre i", "Tipos: A (IAIA ou IAi), B (IBIB ou IBi), AB (IAIB — receptor universal), O (ii — doador universal)", "Aglutininação: tipo A tem anti-B no plasma; transfundir sangue errado = coagulação fatal"] },
        { tipo: "titulo", texto: "Fator Rh" },
        { tipo: "lista", itens: ["Dominante (Rh+) sobre recessivo (rh−)", "Eritroblastose fetal: mãe Rh− + filho Rh+ (pai Rh+) → anticorpos da mãe atacam o bebê em gestações seguintes", "Prevenção: imunoglobulina anti-Rh (vacina de gestantes)"] },
        { tipo: "titulo", texto: "Herança ligada ao sexo e heredogramas" },
        { tipo: "lista", itens: ["Cromossomo X grande, Y pequeno; machos (XY) são 'hemizigotos' para o X", "Daltonismo e hemofilia: recessivos ligados ao X — mais frequentes em homens (bastam 1 X defeituoso)", "Herodograma: quadro = homem, círculo = mulher, preenchido = afetado; linhas horizontais = casais, verticais = filhos"] },
        { tipo: "exemplo", texto: "Mãe portadora do daltonismo (X^d X) × pai normal (X Y): filhas 50% portadoras, filhos 50% daltônicos. Homem daltônico NUNCA passa X^d aos filhos homens (passa Y), mas passa a TODAS as filhas." },
        { tipo: "dica", texto: "Como ler heredograma: doença que aparece em TODAS as gerações = dominante; que 'pula' geração = recessiva; pai afetado + todas as filhas afetadas = ligado ao X dominante." },
        { tipo: "atencao", texto: "Pais tipo O (ii × ii) NÃO podem ter filho A ou B — prova clássica de paternidade (a favor do excluído, nunca de quem é o pai!). E tipo O + tipo AB só geram A ou B." }
      ],
      atividade: [
        { pergunta: "O tipo sanguíne universal DOADOR é...", alternativas: ["A+", "AB+", "O−", "B+"], correta: 2, explicacao: "O−: sem A, B nem Rh para aglutinar." },
        { pergunta: "O tipo AB é resultado de...", alternativas: ["dominância incompleta", "mutação", "dominância completa", "codominância"], correta: 3, explicacao: "IA e IB aparecem juntos." },
        { pergunta: "Daltonismo é mais comum em homens porque...", alternativas: ["a dieta", "o Y causa", "eles têm dois X", "basta 1 X defeituoso (hemizigose)"], correta: 3, explicacao: "Sem segundo X para encobrir." },
        { pergunta: "Eritroblastose fetal ocorre quando a mãe é...", alternativas: ["Rh− e bebê Rh+", "Rh+ e bebê Rh−", "O e bebê AB", "qualquer"], correta: 0, explicacao: "Sensibilização materna contra o Rh+." }
      ]
    },
    {
      id: "em-a2-bio-3",
      titulo: "Biotecnologia: DNA recombinante e clonagem",
      blocos: [
        { tipo: "paragrafo", texto: "Biotecnologia manipula o DNA para benefício humano: da fermentação antiga à edição genética CRISPR." },
        { tipo: "titulo", texto: "DNA recombinante e transgênicos" },
        { tipo: "lista", itens: ["Enzimas de restrição: 'tesouras' que cortam DNA em sequências específicas", "Ligases: 'colas' que unem fragmentos", "Plasmídeo (anel de DNA bacteriano) recebe o gene de interesse e entra numa bactéria, que produz a proteína — assim se fabrica insulina humana em escala", "Transgênicos: organismos com genes de outras espécies (soja resistente a herbicida, milho Bt com gene de bactéria inseticida)"] },
        { tipo: "titulo", texto: "Clonagem" },
        { tipo: "exemplo", texto: "A ovelha Dolly (1996) nasceu por transferência de núcleo: núcleo de célula mamária (diploide) em óvulo sem núcleo, implantado em útero substituto. Prova: o DNA adulto contém TUDO. Clonagem reprodutiva (cópia do indivíduo) x terapêutica (células-tronco para tratar)." },
        { tipo: "titulo", texto: "CRISPR e terapia gênica" },
        { tipo: "lista", itens: ["CRISPR-Cas9: 'tesoura dirigida por GPS' que edita genes com precisão — Prêmio Nobel 2020", "Terapia gênica: substituir genes defeituosos (tratamentos para anemia falciforme em aprovação)", "Diagnóstico: teste de paternidade, DNA forense, exames pré-natais"] },
        { tipo: "dica", texto: "PCR (reação em cadeia da polimerase): copia milhões de vezes um trecho de DNA — a base dos testes (inclusive os de COVID por RT-PCR)." },
        { tipo: "atencao", texto: "Biotecnologia gera dilemas éticos: edição de embriões humanos, alimentos transgênicos (rotulagem, monopólio de sementes), privacidade genética. Ciência avança; a sociedade decide." }
      ],
      atividade: [
        { pergunta: "A insulina humana é produzida por bactérias com...", alternativas: ["DNA humano recombinante", "sem tecnologia", "RNA viral", "mutação espontânea"], correta: 0, explicacao: "Plasmídeo com gene da insulina: biorreator." },
        { pergunta: "Dolly foi clonada por...", alternativas: ["engenharia reversa", "parto normal", "gêmeos", "transferência de núcleo"], correta: 3, explicacao: "Núcleo somático em óvulo anucleado." },
        { pergunta: "CRISPR-Cas9 é uma ferramenta de...", alternativas: ["fermentação", "clonagem de órgãos", "radiografia", "edição genética"], correta: 3, explicacao: "Corta e edita sequências específicas." },
        { pergunta: "Enzimas de restrição funcionam como...", alternativas: ["tesouras moleculares", "anticorpos", "colas", "hormônios"], correta: 0, explicacao: "Cortam em sequências reconhecidas." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Cruzando heterozigotos Aa × Aa, o genótipo AA tem chance de...", alternativas: ["25%", "75%", "50%", "100%"], correta: 0, explicacao: "1:2:1 genotípico." },
      { pergunta: "IAi corresponde ao tipo...", alternativas: ["O", "A", "B", "AB"], correta: 1, explicacao: "IA dominante sobre i: tipo A." },
      { pergunta: "No heredograma, o símbolo quadrado representa...", alternativas: ["mulher", "aborto", "homem", "casamento"], correta: 2, explicacao: "Círculo = mulher; quadrado = homem." },
      { pergunta: "Pais do tipo O podem ter filho do tipo...", alternativas: ["só O", "A", "B", "AB"], correta: 0, explicacao: "ii × ii → só ii." },
      { pergunta: "A PCR serve para...", alternativas: ["medir pH", "fotografar células", "curar doenças", "amplificar DNA em grande quantidade"], correta: 3, explicacao: "Base dos testes genéticos e virais." },
      { pergunta: "Soja resistente a herbicida é exemplo de organismo...", alternativas: ["mutante natural", "clonado", "híbrido", "transgênico"], correta: 3, explicacao: "Gene de outra espécie inserido." }
    ]
  },
  exameFinal: [
    { pergunta: "A 2ª lei de Mendel se aplica a genes...", alternativas: ["no mesmo cromossomo", "ligados ao X", "em cromossomos diferentes", "idênticos"], correta: 2, explicacao: "Segregação independente." },
    { pergunta: "Mãe O × pai AB geram filhos do tipo...", alternativas: ["só O", "todos os tipos", "O ou AB", "A ou B"], correta: 3, explicacao: "i × (IA ou IB) → IAi ou IBi." },
    { pergunta: "Um homem daltônico passa o gene aos...", alternativas: ["netos só", "ninguém", "filhos homens", "todas as filhas"], correta: 3, explicacao: "X paterno vai às filhas; Y aos filhos." },
    { pergunta: "Codominância no sistema ABO aparece no tipo...", alternativas: ["AB", "A", "O", "B"], correta: 0, explicacao: "IA e IB expressos juntos." },
    { pergunta: "A teoria endossimbiótica explica a origem de...", alternativas: ["o núcleo só", "mitocôndrias e cloroplastos", "ribossomos", "vacúolos"], correta: 1, explicacao: "Bactérias ancestrais engolidas simbioticamente." }
  ]
};
