window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f2-a6-geo"] = {
  aulas: [
    {
      id: "f2-a6-geo-1",
      titulo: "A Terra: forma, movimentos e coordenadas",
      blocos: [
        { tipo: "paragrafo", texto: "A Terra é um planeta aproximadamente esférico, ligeiramente achatado nos polos (geoides). Fica a 150 milhões de km do Sol — a distância perfeita para a vida." },
        { tipo: "titulo", texto: "Os movimentos da Terra" },
        { tipo: "lista", itens: ["Rotação: volta sobre si mesma em ~24 horas → dia e noite", "Translação: volta ao Sol em ~365 dias e 6 horas → ano", "A inclinação do eixo (23,5°) causa as estações do ano", "Movimentos menores: precessão e nutação"] },
        { tipo: "titulo", texto: "Paralelos e meridianos" },
        { tipo: "paragrafo", texto: "Para localizar pontos na Terra, desenhamos linhas imaginárias. PARALELOS são círculos horizontais; o principal é o EQUADOR (0°), que divide o planeta em hemisfério norte e sul. MERIDIANOS são semicírculos verticais que passam pelos polos; o principal é o MERIDIANO DE GREENWICH (0°), que divide leste e oeste e marca o horário oficial mundial." },
        { tipo: "exemplo", texto: "As coordenadas geográficas são pares de latitude (norte-south) e longitude (leste-oeste). Brasília fica a cerca de 15° S (sul do Equador) e 47° W (oeste de Greenwich). Com esses dois números, qualquer GPS te acha!" },
        { tipo: "titulo", texto: "O Brasil nas coordenadas" },
        { tipo: "paragrafo", texto: "O Brasil está totalmente no hemisfério ocidental, quase todo no hemisfério sul (só um pedacinho do Norte fica ao norte do Equador). Atravessamos o Equador (região Norte) e o Trópico de Capricórnio (região Sudeste/Sul)." },
        { tipo: "atencao", texto: "Latitude e longitude nunca se confundem: latitude conta de 0° a 90° (N/S); longitude de 0° a 180° (L/O)." }
      ],
      atividade: [
        { pergunta: "O movimento de rotação causa...", alternativas: ["o vento", "as estações", "as marés", "o dia e a noite"], correta: 3, explicacao: "A Terra gira em 24h sobre o próprio eixo." },
        { pergunta: "O Equador divide a Terra em...", alternativas: ["leste e oeste", "continentes", "hemisfério norte e sul", "estações"], correta: 2, explicacao: "Latitude 0° é a linha horizontal principal." },
        { pergunta: "O meridiano de Greenwich é a referência para...", alternativas: ["a altitude", "o clima", "a temperatura", "longitude e o horário mundial"], correta: 3, explicacao: "Longitude 0°, marca do GMT (Greenwich Mean Time)." },
        { pergunta: "As coordenadas de um lugar são formadas por...", alternativas: ["temperatura e chuva", "relevo e solo", "latitude e longitude", "norte e vento"], correta: 2, explicacao: "O cruzamento das duas linhas localiza qualquer ponto." }
      ]
    },
    {
      id: "f2-a6-geo-2",
      titulo: "Cartografia: mapas, escala e fusos horários",
      blocos: [
        { tipo: "paragrafo", texto: "Cartografia é a ciência de representar a superfície terrestre em mapas. Como a Terra é curva e o papel é plano, toda representação tem limites." },
        { tipo: "titulo", texto: "Elementos do mapa" },
        { tipo: "lista", itens: ["Título: o que o mapa mostra", "Legenda: significado dos símbolos e cores", "Escala: relação entre distância no mapa e no real", "Orientação: norte, sul, leste, oeste (rosa dos ventos)", "Coordenadas: latitude e longitude"] },
        { tipo: "titulo", texto: "Escala cartográfica" },
        { tipo: "exemplo", texto: "Escala 1:100.000 significa que 1 cm no mapa equivale a 100.000 cm (1 km) no terreno. Escalas GRANDES (1:10.000) mostram pouca área com muito detalhe (planta de cidade); escalas PEQUENAS (1:50.000.000) mostram muita área com pouco detalhe (mapa-múndi)." },
        { tipo: "titulo", texto: "Projeções cartográficas" },
        { tipo: "paragrafo", texto: "Projetar o globo no plano distorce algo: formas, áreas ou distâncias. A projeção de Mercator (1569) preserva direções mas infla áreas frias (Groenlândia parece maior que o Brasil — não é!). A de Peters busca mostrar áreas reais, dando mais destaque aos países do Sul." },
        { tipo: "titulo", texto: "Fusos horários" },
        { tipo: "paragrafo", texto: "A Terra gira 360° em 24 horas, então divide-se o globo em 24 fusos de 15° cada — 1 hora por fuso. Ao leste, os relógios adiantam; ao oeste, atrasam. O Brasil tinha 4 fusos; hoje são 3 (Brasília é o horário oficial)." },
        { tipo: "dica", texto: "Quando é meio-dia em Brasília, é 10h no Acre (1 fuso atrás) e 12h do dia seguinte em Tóquio (12 fusos à frente)." }
      ],
      atividade: [
        { pergunta: "A escala 1:50.000 indica que 1 cm no mapa vale...", alternativas: ["50 cm", "50 km", "500 m", "5 km"], correta: 2, explicacao: "50.000 cm = 500 m." },
        { pergunta: "A legenda do mapa serve para...", alternativas: ["decorar", "marcar o horário", "explicar símbolos e cores", "medir distâncias"], correta: 2, explicacao: "É o dicionário de símbolos do mapa." },
        { pergunta: "Na projeção de Mercator, a Groenlândia parece...", alternativas: ["maior do que realmente é", "igual ao Brasil", "invisível", "menor que é"], correta: 0, explicacao: "Áreas perto dos polos são distorcidas para mais." },
        { pergunta: "Cada fuso horário corresponde a...", alternativas: ["90 km", "um país", "1° de latitude", "15° de longitude"], correta: 3, explicacao: "24 fusos × 15° = 360° do globo." }
      ]
    },
    {
      id: "f2-a6-geo-3",
      titulo: "Paisagem, lugar e território",
      blocos: [
        { tipo: "paragrafo", texto: "A Geografia estuda o espaço construído pelas relações humanas. Quatro conceitos-chave organizam esse estudo: paisagem, lugar, território e região." },
        { tipo: "titulo", texto: "Paisagem" },
        { tipo: "paragrafo", texto: "Tudo o que podemos VER num lugar: as formas naturais (rios, morros, florestas) e as construídas (casas, ruas, pontes). Paisagem natural quase não existe mais — quase toda é modificada pela ação humana." },
        { tipo: "titulo", texto: "Lugar" },
        { tipo: "paragrafo", texto: "É o espaço vivido, carregado de afeto e memória: SEU bairro, sua rua, sua escola. O lugar tem identidade: quem vive nele o conhece pelas emoções, não só pelo mapa." },
        { tipo: "titulo", texto: "Território" },
        { tipo: "paragrafo", texto: "Espaço apropriado e delimitado por um poder: o território do Brasil tem leis, fronteiras, bandeira. Mas também existem territórios menores: território indígena, de gangues, de feiras — espaços onde um grupo exerce influência." },
        { tipo: "exemplo", texto: "Um rio pode ser paisagem (o que se vê), lugar (onde a comunidade pesca e brinca) e território (quando o poder público ou grupos disputam seu uso)." },
        { tipo: "titulo", texto: "Região" },
        { tipo: "paragrafo", texto: "Agrupamento de espaços com características comuns: a região do café, a região Nordeste, a região metropolitana. As regiões podem ser naturais, econômicas ou políticas." },
        { tipo: "atencao", texto: "Os mesmos lugares podem ser descritos de formas diferentes conforme o conceito usado: uma favela é paisagem, lugar (de quem vive), território (disputado) e parte de uma região urbana." }
      ],
      atividade: [
        { pergunta: "Paisagem é...", alternativas: ["só a natureza", "um país", "um mapa", "tudo o que se vê num lugar"], correta: 3, explicacao: "Inclui o natural e o construído." },
        { pergunta: "O 'lugar' se caracteriza pelo...", alternativas: ["afeto e vivência de quem o habita", "preço dos imóveis", "tamanho", "clima só"], correta: 0, explicacao: "É o espaço vivido e cheio de memória." },
        { pergunta: "Território é o espaço...", alternativas: ["sem dono", "só de países", "sempre natural", "delimitado e apropriado por um poder"], correta: 3, explicacao: "Implica poder e limites, de Estados a comunidades." },
        { pergunta: "Região é...", alternativas: ["uma rua", "conjunto de espaços com características comuns", "uma cidade só", "um bairro"], correta: 1, explicacao: "Agrupamentos definidos por critérios naturais, econômicos ou políticos." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "A forma da Terra é aproximadamente...", alternativas: ["cuboide", "esférica (geoide)", "plana", "oval alinhada"], correta: 1, explicacao: "Esfera achatada nos polos." },
      { pergunta: "A inclinação do eixo terrestre (23,5°) provoca...", alternativas: ["as estações do ano", "as coordenadas", "os fusos", "dia e noite"], correta: 0, explicacao: "Cada hemisfério recebe mais luz em diferentes épocas." },
      { pergunta: "Paralelos medem a...", alternativas: ["latitude", "temperatura", "longitude", "altitude"], correta: 0, explicacao: "Linhas horizontais de latitude, do Equador aos polos." },
      { pergunta: "Escala grande (1:1.000) mostra...", alternativas: ["o mundo inteiro", "nada", "pouca área, muito detalhe", "muita área, pouco detalhe"], correta: 2, explicacao: "Ideal para plantas de bairros e quadras." },
      { pergunta: "Fusos horários existem porque a Terra...", alternativas: ["é plana", "gira 360° em 24 horas", "tem 24 países", "tem estações"], correta: 1, explicacao: "15° por hora de rotação." },
      { pergunta: "O conceito de 'lugar' destaca...", alternativas: ["climas", "leis internacionais", "fronteiras", "a vivência afetiva do espaço"], correta: 3, explicacao: "Lugar = espaço vivido e identificado." }
    ]
  },
  exameFinal: [
    { pergunta: "A translação da Terra dura...", alternativas: ["24 horas", "cerca de 365 dias", "1 mês", "12 horas"], correta: 1, explicacao: "Uma volta ao Sol define o ano civil." },
    { pergunta: "O Brasil está majoritariamente no hemisfério...", alternativas: ["norte", "sul", "ocidental só", "leste"], correta: 1, explicacao: "Quase todo o território fica ao sul do Equador." },
    { pergunta: "Distância de 3 cm num mapa 1:200.000 representa...", alternativas: ["600 km", "60 km", "6 km", "600 m"], correta: 2, explicacao: "3 × 200.000 cm = 600.000 cm = 6 km." },
    { pergunta: "A projeção de Peters é valorizada por...", alternativas: ["mostrar áreas proporcionais (justiça cartográfica)", "ter cores bonitas", "eliminar mapas", "ser antiga"], correta: 0, explicacao: "Reduz a inflação visual das latitudes altas." },
    { pergunta: "Viajando para LESTE, o relógio...", alternativas: ["não muda", "atrasa 1h por fuso", "adianta 1h por fuso", "volta ao zero"], correta: 2, explicacao: "O Sol nasce primeiro a leste: relógios adiantam." }
  ]
};
