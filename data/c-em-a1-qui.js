window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a1-qui"] = {
  aulas: [
    {
      id: "em-a1-qui-1",
      titulo: "Propriedades da matéria",
      blocos: [
        { tipo: "paragrafo", texto: "Matéria é tudo que tem massa e ocupa lugar no espaço. Suas PROPRIEDADES permitem identificá-la: gerais (massa, volume, inércia), físicas (pontos de fusão/ebulição, densidade) e químicas (reatividade)." },
        { tipo: "titulo", texto: "Densidade" },
        { tipo: "lista", itens: ["d = m/V (massa ÷ volume)", "Água: 1 g/cm³ (1000 kg/m³) — referência", "Corpo com d < 1 flutua na água; d > 1 afunda", "O gelo (0,92) flutua: água expande ao congelar (anomalia)"] },
        { tipo: "exemplo", texto: "Bloco de 540 g e 200 cm³: d = 540/200 = 2,7 g/cm³ — alumínio! Identificação por densidade é clássica de laboratório." },
        { tipo: "titulo", texto: "Pontos de fusão e ebulição" },
        { tipo: "paragrafo", texto: "Fusão: sólido → líquido (água: 0 °C). Ebulição: líquido → gasoso (água: 100 °C ao nível do mar). São constantes por substância pura — por isso servem de 'impressão digital'. Misturas derretem/ebulém em FAIXAS de temperatura." },
        { tipo: "titulo", texto: "Alotropia" },
        { tipo: "paragrafo", texto: "Mesmo elemento, estruturas diferentes: carbono pode ser GRAFITE (macio, condutor) e DIAMANTE (duríssimo, isolante); oxigênio O₂ e O₃ (ozônio). São alotropos." },
        { tipo: "dica", texto: "No alto da serra, a água ferve abaixo de 100 °C (menor pressão): cozinhar demora mais. Pressão altera a ebulição, não a fusão (praticamente)." },
        { tipo: "atencao", texto: "Durante a fusão/ebulição, a TEMPERATURA fica constante: a energia vai para a mudança de estado, não para aquecer. Curva de aquecimento tem patamares." }
      ],
      atividade: [
        { pergunta: "Densidade é a razão entre...", alternativas: ["massa e volume", "peso e tempo", "calor e massa", "volume e força"], correta: 0, explicacao: "d = m/V." },
        { pergunta: "A água ferve a 100 °C ao nível do mar; em altitude...", alternativas: ["ferve acima de 100 °C", "não ferve", "ferve abaixo de 100 °C", "congela"], correta: 2, explicacao: "Menor pressão: ebulição mais baixa." },
        { pergunta: "Grafite e diamante são...", alternativas: ["moléculas de água", "isótopos", "alotropos do carbono", "misturas"], correta: 2, explicacao: "Mesmo elemento, estruturas cristalinas diferentes." },
        { pergunta: "Substância pura durante a ebulição...", alternativas: ["varia sem padrão", "esquenta rápido", "mantém temperatura constante", "esfria"], correta: 2, explicacao: "Patamar na curva de aquecimento." }
      ]
    },
    {
      id: "em-a1-qui-2",
      titulo: "Modelos atômicos",
      blocos: [
        { tipo: "paragrafo", texto: "O átomo foi 'construído' cientificamente em etapas — cada modelo explicava mais que o anterior." },
        { tipo: "titulo", texto: "A linha do tempo dos modelos" },
        { tipo: "lista", itens: ["Dalton (1803): esfera maciça e indivisível; átomos do mesmo elemento iguais", "Thomson (1897): descoberta do elétron — 'pudim de passas' (cargas negativas em esfera positiva)", "Rutherford (1911): experimento da lâmina de ouro → núcleo pequeno, denso e positivo; elétrons ao redor (a maior parte é vazio!)", "Bohr (1913): elétrons em CAMADAS (níveis de energia) com órbitas definidas"] },
        { tipo: "exemplo", texto: "Rutherford mirou partículas alfa numa lâmina finíssima de ouro: quase todas passaram (átomo é vazio), mas algumas ricochetearam (núcleo denso e positivo as repele)." },
        { tipo: "titulo", texto: "Partículas subatômicas" },
        { tipo: "lista", itens: ["Próton: carga +1, massa 1 u, no núcleo", "Nêutron: carga 0, massa 1 u, no núcleo", "Elétron: carga −1, massa desprezível (1/1836 u), na eletrosfera", "Número atômico Z = prótons; número de massa A = prótons + nêutrons"] },
        { tipo: "paragrafo", texto: "Isótopos: mesmo Z, A diferentes (¹H, ²H, ³H — hidrogênio, deutério, trítio). Isóbaros: mesmo A, Z diferentes. Isótonos: mesmo número de nêutrons." },
        { tipo: "dica", texto: "Notação: ᴬZX (A em cima, Z embaixo, símbolo do elemento). Exemplo: ²³Na (Z = 11) tem 11 prótons e 12 nêutrons." },
        { tipo: "atencao", texto: "Átomo NEUTRO: prótons = elétrons. Ionizado: perdeu/ganhou elétrons (cátion +, ânion −) — o número de prótons NUNCA muda num processo químico." }
      ],
      atividade: [
        { pergunta: "O núcleo atômico foi revelado por...", alternativas: ["Thomson", "Rutherford", "Dalton", "Bohr"], correta: 1, explicacao: "Lâmina de ouro, 1911." },
        { pergunta: "Elétrons em camadas é ideia de...", alternativas: ["Rutherford", "Bohr", "Dalton", "Chadwick"], correta: 1, explicacao: "Modelo dos níveis de energia (1913)." },
        { pergunta: "Um átomo com Z = 6 e A = 14 tem nêutrons...", alternativas: ["6", "20", "8", "14"], correta: 2, explicacao: "A − Z = 14 − 6 = 8." },
        { pergunta: "Cátion é um átomo que...", alternativas: ["perdeu nêutrons", "ganhou prótons", "ganhou elétrons", "perdeu elétrons"], correta: 3, explicacao: "Menos elétrons que prótons: carga positiva." }
      ]
    },
    {
      id: "em-a1-qui-3",
      titulo: "Distribuição eletrônica e íons",
      blocos: [
        { tipo: "paragrafo", texto: "Os elétrons se organizam em camadas (K, L, M, N, O, P, Q) com capacidades máximas: 2, 8, 18, 32, 32, 18, 8. A distribuição segue o diagrama de Linus Pauling." },
        { tipo: "titulo", texto: "Diagrama de Pauling" },
        { tipo: "paragrafo", texto: "Ordem crescente de energia: 1s² → 2s² → 2p⁶ → 3s² → 3p⁶ → 4s² → 3d¹⁰ → 4p⁶ → 5s²... (linha diagonal). Preenche-se do menor para o maior 'n + l'." },
        { tipo: "exemplo", texto: "Sódio (Z = 11): 1s² 2s² 2p⁶ 3s¹. Em camadas: K² L⁸ M¹. Esse 1 elétron externo explica a reatividade do sódio e o íon Na⁺." },
        { tipo: "titulo", texto: "Íons" },
        { tipo: "lista", itens: ["Cátion: átomo PERDEU elétrons (Na⁺: 11p, 10e) — metáis formam cátions", "Ânion: átomo GANHOU elétrons (Cl⁻: 17p, 18e) — ametais formam ânions", "Buscam a CONFIGURAÇÃO DE GÁS NOBRE (octeto: 8 elétrons na última camada)"] },
        { tipo: "paragrafo", texto: "Gases nobres (He, Ne, Ar...) são estáveis: 8 e⁻ na camada de valência (He: 2). Toda a química de ligações nasce da busca dessa estabilidade (regra do octeto)." },
        { tipo: "dica", texto: "Configuração de valência: só a ÚLTIMA camada importa para a química. Alcalinos (1 e⁻ externo) são explosivos; halogênios (7) são famintos por 1 elétron." },
        { tipo: "atencao", texto: "Na distribuição, 4s enche ANTES de 3d (exceção famosa do Pauling): Ca é ...4s², e não ...3d²." }
      ],
      atividade: [
        { pergunta: "A capacidade máxima da camada K é...", alternativas: ["18", "32", "8", "2"], correta: 3, explicacao: "1s²: só dois elétrons." },
        { pergunta: "O íon Ca²⁺ tem a configuração do gás nobre...", alternativas: ["Ne", "Ar", "Kr", "He"], correta: 1, explicacao: "Ca perde 2 e⁻ e fica como o argônio." },
        { pergunta: "Ânions são formados por...", alternativas: ["metais", "ametais", "gases nobres", "ligas"], correta: 1, explicacao: "Ametais ganham elétrons." },
        { pergunta: "Distribuição do Mg (Z = 12) em camadas:", alternativas: ["2, 10", "8, 2, 2", "2, 8, 2", "2, 8, 8"], correta: 2, explicacao: "K² L⁸ M²." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Um corpo flutua na água se sua densidade for...", alternativas: ["= 0", "> 1", "< 1", "> 1000"], correta: 2, explicacao: "d < d_água (1 g/cm³)." },
      { pergunta: "A anomalia da água é...", alternativas: ["ferver acima de 100 °C", "expandir ao congelar", "não congelar", "ser condutora"], correta: 1, explicacao: "Gelo menos denso que água líquida." },
      { pergunta: "Isóbaros têm mesmo...", alternativas: ["A", "nêutrons", "elétrons", "Z"], correta: 0, explicacao: "Mesmo número de massa." },
      { pergunta: "O experimento da lâmina de ouro provou que o átomo...", alternativas: ["é maciço", "é indivisível", "não existe", "é majoritariamente vazio com núcleo"], correta: 3, explicacao: "Rutherford, 1911." },
      { pergunta: "Na⁺ tem 11 prótons e...", alternativas: ["12 elétrons", "10 elétrons", "0 elétrons", "11 elétrons"], correta: 1, explicacao: "Perdeu 1 elétron." },
      { pergunta: "A regra do octeto busca...", alternativas: ["16 nêutrons", "carga dupla", "8 elétrons na última camada", "2 elétrons totais"], correta: 2, explicacao: "Estabilidade de gás nobre." }
    ]
  },
  exameFinal: [
    { pergunta: "Durante a fusão de um sólido puro, a temperatura...", alternativas: ["desce", "fica constante", "oscila", "sobe"], correta: 1, explicacao: "Energia na mudança de estado." },
    { pergunta: "Thomson descobriu o...", alternativas: ["fóton", "elétron", "núcleo", "nêutron"], correta: 1, explicacao: "Raios catódicos, 1897." },
    { pergunta: "A ordem de preenchimento de Pauling enche 4s...", alternativas: ["por último", "após 3d", "junto com 1s", "antes de 3d"], correta: 3, explicacao: "4s² antes de 3d¹⁰." },
    { pergunta: "Cl⁻ tem 17 prótons e...", alternativas: ["17 elétrons", "18 elétrons", "16 elétrons", "35 elétrons"], correta: 1, explicacao: "Ganhou 1 elétron." },
    { pergunta: "Densidade 0,92 g/cm³ pertence ao gelo, que por isso...", alternativas: ["flutua", "condensa", "some", "afunda"], correta: 0, explicacao: "Menos denso que a água: flutua." }
  ]
};
