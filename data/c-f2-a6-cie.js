window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f2-a6-cie"] = {
  aulas: [
    {
      id: "f2-a6-cie-1",
      titulo: "O ar e a atmosfera",
      blocos: [
        { tipo: "paragrafo", texto: "A atmosfera é a camada de ar que envolve a Terra, presa pela gravidade. Sem ela, não haveria oxigênio, proteção contra meteoros nem clima como conhecemos." },
        { tipo: "titulo", texto: "De que é feito o ar" },
        { tipo: "lista", itens: ["Nitrogênio: cerca de 78% (o mais abundante)", "Oxigênio: cerca de 21% (o que respiramos)", "Argônio e outros gases: cerca de 1%", "Gás carbônico (CO2): menos de 0,05%, mas decisivo para o clima", "Vapor de água: em quantidade variável"] },
        { tipo: "titulo", texto: "As camadas da atmosfera" },
        { tipo: "paragrafo", texto: "Da superfície para cima: TROPOSFERA (onde vivemos e acontecem as chuvas, até ~12 km), ESTRATOSFERA (onde fica a camada de ozônio, que filtra os raios UV), MESOSFERA, TERMOSFERA (onde se desintegram os meteoros) e EXOSFERA (transição para o espaço)." },
        { tipo: "exemplo", texto: "Os aviões voam no alto da troposfera/baixo da estratosfera, onde o ar é mais estável e há menos turbulência. O ozônio (O3) na estratosfera nos protege do ultravioleta que causa câncer de pele." },
        { tipo: "titulo", texto: "Poluição do ar" },
        { tipo: "paragrafo", texto: "Fumaça de veículos e fábricas, queimadas e poeira poluem a atmosfera. O resultado pode ser chuva ácida, inversão térmica em cidades (poluição presa sobre as montanhas, como em São Paulo) e aumento do efeito estufa." },
        { tipo: "atencao", texto: "O buraco na camada de ozônio (sobre a Antártida) foi causado pelos CFCs de antigas geladeiras e sprays. Com a proibição global, está em lenta recuperação: políticas ambientais funcionam!" }
      ],
      atividade: [
        { pergunta: "O gás mais abundante do ar é o...", alternativas: ["nitrogênio", "gás carbônico", "hidrogênio", "oxigênio"], correta: 0, explicacao: "78% do ar é nitrogênio; o oxigênio vem em segundo." },
        { pergunta: "As chuvas e o clima acontecem na...", alternativas: ["mesosfera", "troposfera", "exosfera", "estratosfera"], correta: 1, explicacao: "É a camada mais baixa, onde vivemos." },
        { pergunta: "A camada de ozônio protege contra...", alternativas: ["raios ultravioleta do Sol", "asteroides", "chuva", "ventos"], correta: 0, explicacao: "Filtra a radiação UV prejudicial à vida." },
        { pergunta: "A poluição pode provocar...", alternativas: ["aumento do ozônio bom", "menos CO2", "chuva ácida", "mais oxigênio"], correta: 2, explicacao: "Gases poluentes acidificam a chuva, danificando florestas e construções." }
      ]
    },
    {
      id: "f2-a6-cie-2",
      titulo: "A água: ciclo e tratamento",
      blocos: [
        { tipo: "paragrafo", texto: "A água cobre 71% da superfície da Terra, mas apenas cerca de 2,5% é doce — e boa parte está congelada nos polos. A água potável para consumo é um recurso finito e disputado." },
        { tipo: "titulo", texto: "O ciclo da água (ciclo hidrológico)" },
        { tipo: "paragrafo", texto: "Evaporação (Sol aquece rios e mares) → transpiração das plantas → condensação (formação de nuvens) → precipitação (chuva, neve) → escoamento e infiltração (rios, lençóis subterrâneos) → evaporação de novo. Um ciclo infinito movido pelo Sol." },
        { tipo: "titulo", texto: "Do rio à torneira: o tratamento" },
        { tipo: "lista", itens: ["1. Captação: a água bruta é retirada de rios ou represas", "2. Coagulação: produtos juntam as sujeiras em flocos", "3. Decantação: os flocos afundam", "4. Filtração: a água passa por camadas de areia e carvão", "5. Desinfecção: cloro mata micróbios", "6. Fluoretação: flúor protege os dentes"] },
        { tipo: "exemplo", texto: "Água de esgoto passa por estações de tratamento (ETEs) antes de voltar ao rio. Sem isso, poluímos a fonte de onde a cidade bebe — o que infelizmente acontece em muitos rios brasileiros." },
        { tipo: "dica", texto: "Guardar água da chuva para regar plantas e lavar quintais é uma forma simples de reuso e economia." },
        { tipo: "atencao", texto: "Água que parece limpa pode conter bactérias e parasitas. Beba sempre água tratada ou fervida!" }
      ],
      atividade: [
        { pergunta: "Quanto da água do planeta é doce?", alternativas: ["Cerca de 2,5%", "100%", "50%", "71%"], correta: 0, explicacao: "A grande maioria é água salgada dos mares." },
        { pergunta: "A formação de nuvens acontece por...", alternativas: ["condensação do vapor", "fluoretação", "evaporação", "filtração"], correta: 0, explicacao: "O vapor esfria em altitude e condensa em gotículas." },
        { pergunta: "A etapa do tratamento que mata micróbios é a...", alternativas: ["captação", "desinfecção com cloro", "coagulação", "decantação"], correta: 1, explicacao: "O cloro elimina bactérias e vírus." },
        { pergunta: "Esgoto tratado antes de voltar ao rio é importante porque...", alternativas: ["evita a poluição da fonte de água", "aquece a água", "não importa", "deixa o rio mais fundo"], correta: 0, explicacao: "Preserva a qualidade da água que será captada depois." }
      ]
    },
    {
      id: "f2-a6-cie-3",
      titulo: "Materiais: propriedades e reciclagem",
      blocos: [
        { tipo: "paragrafo", texto: "Tudo ao nosso redor é feito de materiais: vidro, plástico, metal, madeira, tecido. Cada material tem PROPRIEDADES — características que definem seu uso." },
        { tipo: "titulo", texto: "Propriedades importantes" },
        { tipo: "lista", itens: ["Densidade: quanta massa cabe num volume (o ferro afunda; a cortiça flui)", "Condutividade térmica: conduz calor? (metal sim; madeira não)", "Condutividade elétrica: conduz eletricidade? (cobre sim; plástico não)", "Dureza: resiste a riscos (diamante é o mais duro)", "Elasticidade e transparência"] },
        { tipo: "exemplo", texto: "Por que panela tem corpo de metal e cabo de madeira ou plástico? O metal conduz bem o calor para cozinhar; o cabo isolante protege a mão. Cada propriedade no seu lugar!" },
        { tipo: "titulo", texto: "Separando materiais: misturas" },
        { tipo: "paragrafo", texto: "Misturas homogêneas (sal dissolvido) não se vêem os componentes; heterogêneas (areia + água) sim. Métodos de separação: filtração (retira sólidos), decantação (densidades diferentes), evaporação (recupera o sólido dissolvido), separação magnética (materiais de ferro)." },
        { tipo: "titulo", texto: "Reciclagem" },
        { tipo: "paragrafo", texto: "Separar o lixo reciclável (papel, plástico, vidro, metal) do orgânico permite reprocessar materiais, economizando recursos e energia. A reciclagem do alumínio gasta 95% menos energia que produzir alumínio novo!" },
        { tipo: "atencao", texto: "Nem tudo é reciclável: papéis engordurados, espelhos e fraldas descartáveis vão para o comum. Enxague embalagens antes de descartar." }
      ],
      atividade: [
        { pergunta: "Densidade é a relação entre...", alternativas: ["cor e brilho", "peso e idade", "calor e luz", "massa e volume"], correta: 3, explicacao: "Densidade = massa ÷ volume." },
        { pergunta: "O material que conduz bem eletricidade é o...", alternativas: ["borracha", "plástico", "cobre", "madeira"], correta: 2, explicacao: "Metais como o cobre são excelentes condutores." },
        { pergunta: "Separar areia da água usa...", alternativas: ["magnetismo", "filtração", "evaporação", "fluoretação"], correta: 1, explicacao: "O filtro retém o sólido e passa o líquido." },
        { pergunta: "Reciclar alumínio economiza cerca de...", alternativas: ["95% da energia", "metade da água", "nada", "5% da energia"], correta: 0, explicacao: "Reprocessar alumínio é muito mais barato em energia." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "A atmosfera é mantida junto à Terra pela...", alternativas: ["lua", "rotação", "nuvens", "gravidade"], correta: 3, explicacao: "A força da gravidade prende os gases." },
      { pergunta: "A camada de ozônio fica na...", alternativas: ["troposfera", "crosta", "hidrosfera", "estratosfera"], correta: 3, explicacao: "Ela filtra a radiação ultravioleta." },
      { pergunta: "No ciclo da água, a chuva é chamada de...", alternativas: ["condensação", "precipitação", "evaporação", "infiltração"], correta: 1, explicacao: "A água que cai das nuvens é precipitação." },
      { pergunta: "A fluoretação da água serve para...", alternativas: ["dar sabor", "matar bactérias", "proteger os dentes contra cáries", "limpar tubos"], correta: 2, explicacao: "O flúor fortalece o esmalte dentário." },
      { pergunta: "Um material isolante térmico é o...", alternativas: ["ferro", "plástico/espuma", "alumínio", "cobre"], correta: 1, explicacao: "Plásticos e espumas não conduzem bem o calor." },
      { pergunta: "Lixo orgânico (restos de comida) deve ir para...", alternativas: ["o rio", "compostagem ou coleta orgânica", "reciclagem de plástico", "o lixo hospitalar"], correta: 1, explicacao: "Restos orgânicos viram adubo na compostagem." }
    ]
  },
  exameFinal: [
    { pergunta: "O oxigênio representa cerca de... do ar.", alternativas: ["78%", "50%", "1%", "21%"], correta: 3, explicacao: "O nitrogênio (78%) é mais abundante que o oxigênio (21%)." },
    { pergunta: "A inversão térmica nas cidades...", alternativas: ["limpa o ar", "esfria o planeta", "prende a poluição junto ao solo", "aumenta o ozônio bom"], correta: 2, explicacao: "Camada quente impede a dispersão dos poluentes." },
    { pergunta: "A ordem correta do tratamento de água é...", alternativas: ["cloro → coleta → nada", "decantação → captação → ferver", "filtração → captação → cloro → fogo", "captação → coagulação → decantação → filtração → desinfecção"], correta: 3, explicacao: "Essa é a sequência das ETA." },
    { pergunta: "Mistura homogênea é aquela em que...", alternativas: ["não distinguimos os componentes", "há só sólidos", "há dois estados visíveis", "vemos os componentes"], correta: 0, explicacao: "Como o soro ou o ar: uniforme em todo o volume." },
    { pergunta: "A reciclagem é importante porque...", alternativas: ["polui mais", "substitui a água", "aumenta o consumo", "economiza recursos, energia e reduz lixo"], correta: 3, explicacao: "Reprocessar materiais diminui extração e desperdício." }
  ]
};
