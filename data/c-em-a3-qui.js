window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a3-qui"] = {
  aulas: [
    {
      id: "em-a3-qui-1",
      titulo: "Estequiometria: cálculos das reações",
      blocos: [
        { tipo: "paragrafo", texto: "Estequiometria é a 'contabilidade' das reações: quanto produz, quanto gasta. Base: a equação balanceada e o mol." },
        { tipo: "titulo", texto: "Ferramentas" },
        { tipo: "lista", itens: ["Mol: 6,02 × 10²³ unidades (número de Avogadro)", "Massa molar (M): g/mol — H₂O = 18 g/mol (2×1 + 16)", "Balanceamento: mesma quantidade de cada átomo nos dois lados (conservação de Lavoisier)", "Relação estequiométrica: proporção entre moléculas (2 H₂ + O₂ → 2 H₂O: proporção 2:1:2)"] },
        { tipo: "titulo", texto: "Roteiro dos cálculos" },
        { tipo: "exemplo", texto: "Quanto de H₂O sai de 8 g de H₂? 1) Balanceie: 2H₂ + O₂ → 2H₂O. 2) Converta: 8 g ÷ 2 g/mol = 4 mol de H₂. 3) Proporção: 2 mol H₂ → 2 mol H₂O, logo 4 mol → 4 mol de água. 4) Converta: 4 × 18 = 72 g de H₂O." },
        { tipo: "paragrafo", texto: "Reagente limitante: o que acaba primeiro (menor proporção disponível). Rendimento: real ÷ teórico × 100% (indústria nunca rende 100%). Pureza: só o puro reage (minério com 80% de Fe₂O₃: calcule sobre 80%)." },
        { tipo: "exemplo", texto: "Combustão de 10 g de metano (CH₄, M = 16): CH₄ + 2O₂ → CO₂ + 2H₂O. 10/16 = 0,625 mol → 0,625 mol de CO₂ = 0,625 × 44 ≈ 27,5 g de gás carbônico liberado. É assim que se conta pegada de carbono!" },
        { tipo: "dica", texto: "Ladder mental: MASSA → MOL (÷M) → PROPORÇÃO DA EQUAÇÃO → MOL → MASSA (×M). Nunca pule a etapa do mol!" },
        { tipo: "atencao", texto: "Só se converte mol-mol pela proporção da equação; massa-massa exige dividir pelas massas molares. 2 g de H₂ e 2 g de O₂ NÃO são 'a mesma quantidade'." }
      ],
      atividade: [
        { pergunta: "A massa molar do CO₂ (C = 12, O = 16) é...", alternativas: ["28 g/mol", "32 g/mol", "44 g/mol", "16 g/mol"], correta: 2, explicacao: "12 + 32 = 44." },
        { pergunta: "Quanto é 1 mol em partículas?", alternativas: ["9,8", "1,6 × 10⁻¹⁹", "6,02 × 10²³", "3 × 10⁸"], correta: 2, explicacao: "Número de Avogadro." },
        { pergunta: "Em 2H₂ + O₂ → 2H₂O, 4 mol de H₂ produzem...", alternativas: ["2 mol de água", "1 mol", "4 mol de água", "8 mol"], correta: 2, explicacao: "Proporção 1:1 entre H₂ e H₂O." },
        { pergunta: "Rendimento real ÷ teórico × 100 é o...", alternativas: ["rendimento", "título", "pureza", "pH"], correta: 0, explicacao: "Mede a eficiência do processo." }
      ]
    },
    {
      id: "em-a3-qui-2",
      titulo: "Química orgânica: cadeias e hidrocarbonetos",
      blocos: [
        { tipo: "paragrafo", texto: "Química orgânica é a química do CARBONO — mais de 10 milhões de compostos conhecidos, do açúcar ao plástico." },
        { tipo: "titulo", texto: "O carbono e as cadeias" },
        { tipo: "lista", itens: ["Tetravalência: 4 ligações por átomo (simples, duplas ou triplas)", "Cadeias: abertas ou fechadas (anéis); normais ou ramificadas; homogêneas ou heterogêneas (com O, N, S...)", "Hidrocarbonetos: só C e H (petróleo, gás natural)"] },
        { tipo: "titulo", texto: "Hidrocarbonetos: os grupos" },
        { tipo: "lista", itens: ["Alcanos: só ligações simples, fórmula CₙH₂ₙ₊₂ (metano CH₄, etano, propano do gás de cozinha, butano do isqueiro)", "Alceno: uma dupla ligação (eteno/etileno — amadurece frutas!)", "Alcino: uma tripla ligação (etino/acroleína... acetileno de solda)", "Aromáticos: anel benzênico (benzeno, naftaleno da naftalina)"] },
        { tipo: "titulo", texto: "Nomenclatura IUPAC básica" },
        { tipo: "exemplo", texto: "Prefixo (1=met, 2=et, 3=prop, 4=but...) + infixo (an=simples, en=dupla, in=tripla) + o. Exemplo: C₄H₈ com dupla = buteno; C₅H₁₂ = pentano." },
        { tipo: "paragrafo", texto: "Isomeria: mesma fórmula, estruturas diferentes (butano x isobutano; glicose x frutose). Os isômeros têm propriedades distintas — e no caso de fármacos, efeitos bem diferentes (talidomida)." },
        { tipo: "dica", texto: "Petróleo: destilação fracionada separa hidrocarbonetos por tamanho — do gás (curtos, voláteis) ao asfalto (longos, pesados)." },
        { tipo: "atencao", texto: "Compostos orgânicos queimam (combustão): CH₄ + 2O₂ → CO₂ + 2H₂O + energia. Toda a questão energética e climática passa por hidrocarbonetos." }
      ],
      atividade: [
        { pergunta: "O metano (CH₄) é um...", alternativas: ["aromático", "alceno", "alcino", "alcano"], correta: 3, explicacao: "Só ligações simples." },
        { pergunta: "A tetravalência do carbono significa...", alternativas: ["4 camadas", "4 elétrons livres", "4 núcleos", "4 ligações por átomo"], correta: 3, explicacao: "Base de toda a orgânica." },
        { pergunta: "O etileno (eteno) é usado para...", alternativas: ["fertilizar", "amadurecer frutas", "fazer sabão", "soldar"], correta: 1, explicacao: "Hormônio vegetal de maturação." },
        { pergunta: "O anel benzênico caracteriza os compostos...", alternativas: ["aromáticos", "iônicos", "alcinos", "alcanos"], correta: 0, explicacao: "Estabilidade especial do anel." }
      ]
    },
    {
      id: "em-a3-qui-3",
      titulo: "Funções orgânicas, polímeros e combustíveis",
      blocos: [
        { tipo: "paragrafo", texto: "Grupos funcionais dão 'personalidade' às moléculas orgânicas — e dão origem aos materiais do dia a dia." },
        { tipo: "titulo", texto: "Principais funções" },
        { tipo: "lista", itens: ["Álcoois: OH ligado a carbono saturado (etanol CH₃CH₂OH do combustível; metanol tóxico)", "Aldeídos: -CHO (formaldeído de laboratório); Cetonas: C=O interno (acetona do removedor)", "Ácidos carboxílicos: -COOH (ácido acético do vinagre; cítrico do limão)", "Ésteres: cheiros de frutas (acetato de etila); Aminas e amidas: com N (proteínas)"] },
        { tipo: "titulo", texto: "Polímeros" },
        { tipo: "lista", itens: ["Macromoléculas: repetição de monômeros", "Naturais: celulose (papel), amido, proteínas, borracha natural", "Sintéticos: polietileno (sacolas), PVC (tubos), poliestireno (isopor), PET (garrafas)", "Reciclagem: PET virando fibra de roupa; biodegradáveis (PLA) como alternativa"] },
        { tipo: "titulo", texto: "Combustíveis" },
        { tipo: "exemplo", texto: "Etanol: combustão limpa (menos CO₂ que a gasolina por energia). Octanagem: resistência à detonação. Biodiesel: ésteres de óleos. Hidrogênio: queima dando SÓ água (2H₂ + O₂ → 2H₂O) — o 'combustível do futuro', se produzido de forma limpa (verde)." },
        { tipo: "dica", texto: "Identifique a função pelo grupo: OH = álcool; COOH = ácido; C=O no fim = aldeído; no meio = cetona; COO = éster." },
        { tipo: "atencao", texto: "Metanol e etanol se parecem (ambos álcoois), mas metanol vira formaldeído no corpo: cegueira e morte. 'Álcool' genérico não é seguro!" }
      ],
      atividade: [
        { pergunta: "O grupo -OH caracteriza os...", alternativas: ["ácidos carboxílicos", "ésteres", "cetonas", "álcoois"], correta: 3, explicacao: "Hidroxila em carbono saturado." },
        { pergunta: "O vinagre contém...", alternativas: ["metanol", "acetona", "ácido acético", "benzeno"], correta: 2, explicacao: "Ácido etanoico a ~4%." },
        { pergunta: "PET das garrafas é um...", alternativas: ["ácido", "monômero", "polímero", "gás"], correta: 2, explicacao: "Polietileno tereftalato." },
        { pergunta: "A combustão completa do hidrogênio produz...", alternativas: ["ozônio", "CO₂", "só água", "fumaça"], correta: 2, explicacao: "2H₂ + O₂ → 2H₂O: limpo." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Molaridade de 2 mol em 4 L:", alternativas: ["0,5 mol/L", "8 mol/L", "6 mol/L", "2 mol/L"], correta: 0, explicacao: "M = n/V." },
      { pergunta: "O reagente limitante é o que...", alternativas: ["sobra", "é caro", "acaba primeiro", "não reage"], correta: 2, explicacao: "Determina o máximo de produto." },
      { pergunta: "CH₃CH₂OH é o...", alternativas: ["metanol", "acetona", "propanol", "etanol"], correta: 3, explicacao: "Álcool etílico do combustível." },
      { pergunta: "CₙH₂ₙ₊₂ é fórmula geral dos...", alternativas: ["alcinos", "alcenos", "alcanos", "aromáticos"], correta: 2, explicacao: "Saturados: só simples." },
      { pergunta: "Isômeros têm...", alternativas: ["massas diferentes", "mesma fórmula, estrutura diferente", "nada em comum", "fórmulas diferentes"], correta: 1, explicacao: "Ex.: butano e isobutano." },
      { pergunta: "A destilação do petróleo separa por...", alternativas: ["densidade só", "cor", "cheiro", "ponto de ebulição"], correta: 3, explicacao: "Cadeias curtas ebulição mais baixa." }
    ]
  },
  exameFinal: [
    { pergunta: "Para calcular massas em estequiometria, passa sempre por...", alternativas: ["pH", "mol", "pressão", "volume"], correta: 1, explicacao: "Massa → mol → proporção → mol → massa." },
    { pergunta: "H₂O tem massa molar...", alternativas: ["20 g/mol", "36 g/mol", "16 g/mol", "18 g/mol"], correta: 3, explicacao: "2(1) + 16 = 18." },
    { pergunta: "A acetona é uma...", alternativas: ["cetona", "éter", "álcool", "amina"], correta: 0, explicacao: "C=O entre carbonos." },
    { pergunta: "Celulose e amido são polímeros...", alternativas: ["naturais", "iônicos", "sintéticos", "gasosos"], correta: 0, explicacao: "De monômeros de glicose." },
    { pergunta: "Maior octanagem significa...", alternativas: ["mais detonação", "mais poluição", "menos energia", "maior resistência à detonação"], correta: 3, explicacao: "Qualidade do combustível." }
  ]
};
