window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a3-cie"] = {
  aulas: [
    {
      id: "f1-a3-cie-1",
      titulo: "Estados da matéria e mudanças de estado",
      blocos: [
        { tipo: "paragrafo", texto: "A matéria organiza-se em três estados clássicos — sólido, líquido e gasoso — diferenciados pela liberdade de movimento e coesão entre as partículas. As transições entre eles ocorrem com entrada ou saída de energia térmica e têm nomes precisos cobrados em prova." },
        { tipo: "titulo", texto: "Os três estados" },
        { tipo: "lista", itens: ["Sólido: partículas firmemente ligadas; forma e volume próprios (gelo, ferro)", "Líquido: coesão parcial; volume definido, forma do recipiente (água, etanol)", "Gasoso: partículas praticamente livres; forma e volume variáveis, expansível (vapor, ar)"] },
        { tipo: "titulo", texto: "As seis transições" },
        { tipo: "paragrafo", texto: "Fusão (sólido → líquido), solidificação (líquido → sólido), vaporização/ebulição (líquido → gasoso), condensação (gasoso → líquido), sublimação (sólido → gasoso direto, como o gelo seco) e ressublimação (gasoso → sólido)." },
        { tipo: "exemplo", texto: "Ciclo do gelo seco (CO2 sólido): em temperatura ambiente, passa direto a gás — sublimação, sem formar líquido. Já o cubo de gelo na bebida funde (sólido → líquido) porque a água tem ponto de fusão (0 °C) abaixo da temperatura ambiente." },
        { tipo: "titulo", texto: "Temperatura constante nas transições" },
        { tipo: "paragrafo", texto: "Durante a fusão ou a ebulição de uma substância pura, a temperatura PERMANECE constante: toda a energia vai para romper ligações, não para aquecer. É o 'patamar' das curvas de aquecimento — e a assinatura que distingue substância pura de mistura." },
        { tipo: "dica", texto: "Memorize o par de direção: entrando calor = fusão e vaporização; saindo calor = solidificação e condensação. A sublimação fica fora do par — a única que pula o estado líquido." },
        { tipo: "atencao", texto: "Pressão altera os pontos de transição: emaltitude, a água ferve abaixo de 100 °C (menor pressão atmosférica). Por isso receitas de serra e de 'panela de pressão' existem — a pressão comprime e eleva o ponto de ebulição." }
      ],
      atividade: [
        { pergunta: "A passagem de líquido a gasoso denomina-se...", alternativas: ["fusão", "vaporização", "condensação", "sublimação"], correta: 1, explicacao: "Ebulição/evaporação: líquido → gasoso." },
        { pergunta: "O gelo seco passa de sólido a gás em um processo chamado...", alternativas: ["fusão", "condensação", "sublimação", "solidificação"], correta: 2, explicacao: "Sublimação: sem passar pelo estado líquido." },
        { pergunta: "Durante a fusão de um sólido puro, a temperatura...", alternativas: ["sobe continuamente", "permanece constante", "desce", "oscila"], correta: 1, explicacao: "A energia vai para romper a estrutura, não para aquecer." },
        { pergunta: "Em altitudes elevadas, a água ferve a...", alternativas: ["acima de 100 °C", "exatamente 100 °C", "abaixo de 100 °C", "nunca ferve"], correta: 2, explicacao: "Menor pressão atmosférica reduz o ponto de ebulição." }
      ]
    },
    {
      id: "f1-a3-cie-2",
      titulo: "Sol, Terra e Lua: movimentos e fases",
      blocos: [
        { tipo: "paragrafo", texto: "O Sistema Terra-Lua-Sol explica dois ritmos da vida cotidiana: o dia e a noite (rotação) e o calendário (translação). As fases da Lua decorrem da posição relativa entre os três corpos." },
        { tipo: "titulo", texto: "Rotação e translação" },
        { tipo: "lista", itens: ["Rotação: a Terra gira sobre o próprio eixo em ~24 horas → alternância de dia e noite", "Translação: a Terra orbita o Sol em ~365 dias e 6 horas → ano (os 6 horas acumulam o bissexto a cada 4 anos)", "Eixo inclinado (23,5°): causa das estações do ano, não a distância ao Sol"] },
        { tipo: "titulo", texto: "Fases da Lua" },
        { tipo: "paragrafo", texto: "A Lua não emite luz: reflete a solar. A 'fase' é a porção iluminada que enxergamos conforme a posição Lua-Terra-Sol. Sequência (~29,5 dias por ciclo): nova → crescente → cheia → minguante → nova." },
        { tipo: "exemplo", texto: "Lua cheia: Terra entre Sol e Lua — a face voltada para nós está totalmente iluminada. Lua nova: Lua entre Sol e Terra — a face iluminada fica de costas para nós. Eclipse lunar ocorre quando a Terra projeta sombra na Lua cheia (alinhamento perfeito)." },
        { tipo: "titulo", texto: "Marés" },
        { tipo: "paragrafo", texto: "A atração gravitacional da Lua (e, secundariamente, do Sol) sobre os oceanos gera as marés: duas preamares e duas baixamares por dia. Nas luas nova e cheia (alinhamento), as marés são mais intensas (marés de sizígia)." },
        { tipo: "dica", texto: "Para as estações, lembre: é a INCLINAÇÃO do eixo que decide qual hemisfério recebe luz mais direta. Dezembro = verão no hemisfério sul, mesmo com a Terra perto do 'ponto mais distante' do Sol." },
        { tipo: "atencao", texto: "A Lua 'cheia' não muda de forma nem de brilho próprio: sempre metade iluminada. O que muda é o ângulo de visão da Terra. E marés dependem da Lua muito mais que do Sol." }
      ],
      atividade: [
        { pergunta: "O movimento de rotação da Terra causa...", alternativas: ["as estações", "o dia e a noite", "as fases da Lua", "as marés"], correta: 1, explicacao: "24 horas de giro: alternância luz/sombra." },
        { pergunta: "As estações do ano decorrem...", alternativas: ["da distância Terra-Sol", "da inclinação do eixo terrestre", "da rotação da Lua", "das marés"], correta: 1, explicacao: "23,5° de inclinação: hemisférios recebem luz desigual." },
        { pergunta: "Na Lua nova, a Lua está...", alternativas: ["entre a Terra e o Sol", "atrás da Terra", "do lado oposto do Sol", "em eclipse"], correta: 0, explicacao: "Face iluminada voltada para o Sol: invisível da Terra." },
        { pergunta: "As marés mais intensas ocorrem...", alternativas: ["na Lua nova e cheia", "no quarto crescente", "no quarto minguante", "sem relação com a Lua"], correta: 0, explicacao: "Alinhamento Sol-Terra-Lua: marés de sizígia." }
      ]
    },
    {
      id: "f1-a3-cie-3",
      titulo: "Recursos naturais: água e solo",
      blocos: [
        { tipo: "paragrafo", texto: "Recursos naturais são materiais da natureza utilizáveis pelo ser humano. Água e solo são os dois mais estratégicos: sustentam agricultura, abastecimento e vida — e ambos são finitos e degradáveis." },
        { tipo: "titulo", texto: "Água: disponibilidade real" },
        { tipo: "paragrafo", texto: "97,5% da água do planeta é salgada; doce, só 2,5% — e a maior parte disso está congelada nos polos. A água de fácil acesso (rios, lagos, aquíferos) é ínfima. O Brasil detém ~12% da água doce do mundo, com distribuição desigual pelo território." },
        { tipo: "titulo", texto: "Solo: formação lenta, perda rápida" },
        { tipo: "paragrafo", texto: "O solo agrícola resulta da decomposição de rochas e matéria orgânica ao longo de séculos. A erosão — perda do solo pela chuva e pelo vento, acelerada pelo desmatamento — destrói em anos o que a natureza levou séculos para formar. Raízes e cobertura vegetal são a proteção natural." },
        { tipo: "exemplo", texto: "Uma nascente protegida por mata ciliar mantém vazão e qualidade; desmatada, o rio assoreia (terra carregada pela chuva) e a água escasseia. Custo da degradação: obras de captação e tratamento que poderiam ser evitadas." },
        { tipo: "titulo", texto: "Uso consciente: medidas efetivas" },
        { tipo: "lista", itens: ["Água: reparar vazamentos (perda média de 40% na distribuição urbana brasileira), reuso, irrigação por gotejamento na agricultura", "Solo: plantio direto, rotação de culturas, curvas de nível, reflorestamento de nascentes", "Política: leis de proteção de mananciais e cobrança pelo uso da água"] },
        { tipo: "dica", texto: "O 'uso consciente' não é só trocar o chuveiro: as maiores demandas são agricultura (~70% da água doce mundial) e indústria. Mudanças sistêmicas valem mais que gestos individuais — mas ambos contam." },
        { tipo: "atencao", texto: "Recurso renovável tem LIMITE de reposição: a água renova pelo ciclo, mas o aquífero drenado mais rápido do que recarrega torna-se não renovável na prática. Solo degradado leva séculos para se refazer." }
      ],
      atividade: [
        { pergunta: "A fração de água DOCE do planeta é cerca de...", alternativas: ["97,5%", "50%", "2,5%", "12%"], correta: 2, explicacao: "O resto é salgada (mares e oceanos)." },
        { pergunta: "A erosão acelerada do solo é causada principalmente por...", alternativas: ["desmatamento e perda de cobertura vegetal", "chuva em floresta intacta", "raízes de plantas", "compostagem"], correta: 0, explicacao: "Sem raízes segurando, a chuva carrega o solo fértil." },
        { pergunta: "O assoreamento de um rio é...", alternativas: ["aumento da vazão", "acúmulo de sedimentos que reduz a profundidade", "a chegada de água doce", "a purificação da água"], correta: 1, explicacao: "Terra erodida depositada no leito do rio." },
        { pergunta: "A prática agrícola que protege o solo é...", alternativas: ["queimada anual", "plantio direto e rotação de culturas", "arado profundo constante", "monocultura sem cobertura"], correta: 1, explicacao: "Cobertura permanente e rotação preservam estrutura e nutrientes." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "A transformação de líquido em sólido denomina-se...", alternativas: ["fusão", "solidificação", "vaporização", "sublimação"], correta: 1, explicacao: "Saindo calor: líquido → sólido." },
      { pergunta: "Um dia tem ~24 horas porque a Terra...", alternativas: ["orbita o Sol", "gira sobre o próprio eixo", "inclinou 23,5°", "tem uma Lua"], correta: 1, explicacao: "Rotação: giro sobre o eixo." },
      { pergunta: "A Lua ilumina-se por...", alternativas: ["luz própria", "reflexo da luz solar", "combustão", "eletricidade"], correta: 1, explicacao: "A Lua reflete a luz do Sol." },
      { pergunta: "As fases da Lua completam um ciclo em cerca de...", alternativas: ["7 dias", "29,5 dias", "365 dias", "24 horas"], correta: 1, explicacao: "Um mês lunar (lunação): ~29,5 dias." },
      { pergunta: "A água doce acessível no planeta é...", alternativas: ["a maior parte da água", "uma fração mínima do total", "inexistente", "toda congelada"], correta: 1, explicacao: "2,5% doce; acessível, uma fatia mínima disso." },
      { pergunta: "Mata ciliar preservada junto a nascentes...", alternativas: ["reduz a vazão", "mantém vazão e qualidade da água", "assoreia o rio", "é irrelevante"], correta: 1, explicacao: "Raízes filtram e seguram a terra." }
    ]
  },
  exameFinal: [
    { pergunta: "Sair de calor na transição sólido → líquido chama-se...", alternativas: ["solidificação", "fusão", "condensação", "ressublimação"], correta: 1, explicacao: "Fusão: gelo virando água." },
    { pergunta: "A afirmação correta sobre as estações é...", alternativas: ["dependem da distância ao Sol", "decorrem da inclinação do eixo", "dependem da Lua", "não existem"], correta: 1, explicacao: "Eixo a 23,5°: luz direta variável por hemisfério." },
    { pergunta: "No eclipse LUNAR, a ordem dos corpos é...", alternativas: ["Lua entre Terra e Sol", "Terra entre Sol e Lua", "Sol entre Terra e Lua", "não há ordem"], correta: 1, explicacao: "A Terra projeta sua sombra na Lua cheia." },
    { pergunta: "O Brasil concentra cerca de... da água doce do mundo.", alternativas: ["50%", "12%", "2,5%", "97%"], correta: 1, explicacao: "Maior disponibilidade hídrica entre os países." },
    { pergunta: "Aquífero explorado mais rápido do que recarrega torna-se...", alternativas: ["renovável para sempre", "não renovável na prática", "salgado", "invisível"], correta: 1, explicacao: "Reposição menor que extração: esgotamento." }
  ]
};
