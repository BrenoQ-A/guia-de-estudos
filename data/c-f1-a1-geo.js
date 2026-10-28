window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a1-geo"] = {
  aulas: [
    {
      id: "f1-a1-geo-1",
      titulo: "Localização: casa, rua, bairro e escala do espaço",
      blocos: [
        { tipo: "paragrafo", texto: "Localizar um ponto no espaço é encadeá-lo em uma hierarquia de conjuntos: cada nível contém o anterior. Essa lógica organiza desde o preenchimento de formulários de endereço até a triagem de encomendas pelos Correios. Em Geografia, a proporção entre um espaço e sua representação chama-se escala." },
        { tipo: "titulo", texto: "A hierarquia do espaço geográfico" },
        { tipo: "lista", itens: ["Domicílio: a unidade mínima, identificada por logradouro e número", "Logradouro (rua ou avenida): reúne vários domicílios", "Bairro: agrupa ruas com identidade e história próprias", "Município: conjunto de bairros administrado por uma prefeitura", "Unidade federativa e país: níveis de administração cada vez mais amplos", "Continente: o maior agrupamento territorial convencional"] },
        { tipo: "paragrafo", texto: "O mecanismo é o de caixas sucessivas: um endereço completo replica essa hierarquia em campos separados. Por isso os sistemas de entrega pedem primeiro o CEP — código que já indica a região urbana — e depois o logradouro e o número: cada campo reduz o espaço de busca." },
        { tipo: "exemplo", texto: "Em um formulário de cadastro: logradouro 'Av. Paulista', número '1578', bairro 'Bela Vista', município 'São Paulo', UF 'SP', CEP '01310-200'. Lido de baixo para cima, cada campo restringe a localização até chegar à porta exata." },
        { tipo: "dica", texto: "Ao revisar um endereço antes de enviar, confira se a hierarquia está completa: logradouro e número, bairro, município, UF e CEP. Endereço hierarquicamente completo evita devolução de correspondência e atraso de entrega." },
        { tipo: "atencao", texto: "Armadilha comum: confundir bairro com município. O bairro é uma divisão interna da cidade, sem governo próprio; o município tem prefeitura e legislação próprias. Em provas, 'conjunto de bairros' define município, não bairro." }
      ],
      atividade: [
        { pergunta: "Em um formulário, os campos de endereço seguem a hierarquia do espaço. Qual sequência está ordenada do espaço mais restrito para o mais amplo?", alternativas: ["bairro, número, município", "município, rua, número", "número, logradouro, bairro, município", "município, bairro, número"], correta: 2, explicacao: "Do mais restrito ao mais amplo: o número situa o domicílio no logradouro, o logradouro no bairro e o bairro no município." },
        { pergunta: "O CEP (Código de Endereçamento Postal) agiliza as entregas porque:", alternativas: ["indica a região e o setor de triagem ao qual o endereço pertence", "registra o telefone do destinatário", "substitui o nome do logradouro", "certifica a identidade do remetente"], correta: 0, explicacao: "O CEP regionaliza o endereço e permite direcionar a encomenda ao centro de triagem correto." },
        { pergunta: "Vários bairros organizados sob uma mesma prefeitura formam:", alternativas: ["uma unidade federativa", "um logradouro", "um continente", "um município"], correta: 3, explicacao: "O município é a unidade administrada pela prefeitura e reúne todos os bairros da cidade." },
        { pergunta: "Na escala do espaço geográfico, o bairro está contido:", alternativas: ["na unidade federativa", "no município", "no país", "no logradouro"], correta: 1, explicacao: "A hierarquia é domicílio, logradouro, bairro, município: o bairro é uma divisão interna do município." }
      ]
    },
    {
      id: "f1-a1-geo-2",
      titulo: "Pontos de referência e deslocamentos",
      blocos: [
        { tipo: "paragrafo", texto: "Ponto de referência é um elemento estável e reconhecível da paisagem — uma praça, um posto de saúde, uma estação — usado para descrever posições e trajetos. Em deslocamentos cotidianos, ele cumpre a função que os mapas cumprem em escala maior: ancorar a posição de quem busca um destino." },
        { tipo: "titulo", texto: "Como a referência orienta" },
        { tipo: "paragrafo", texto: "O mecanismo é a localização relativa: em vez de coordenadas exatas, usa-se a posição de algo já conhecido. Descrever um endereço como 'em frente ao banco, ao lado da farmácia' converte uma busca aberta em uma verificação simples: basta localizar o banco." },
        { tipo: "exemplo", texto: "Ao informar o endereço de entrega, muitos remetentes acrescentam uma referência: 'prédio branco de três andares, em frente à agência dos Correios'. O entregador confirma a rota pelo elemento público e fixo, e não pela descrição da fachada, que pode variar." },
        { tipo: "titulo", texto: "Descrevendo um deslocamento" },
        { tipo: "lista", itens: ["Origem: o ponto de partida do trajeto", "Direção e sentido: norte ou sul, à direita ou à esquerda, seguindo a via", "Referências intermediárias: elementos fixos que confirmam que a rota está correta", "Destino: o ponto final, indicado por uma referência próxima"] },
        { tipo: "dica", texto: "Para trajetos relatados por telefone ou mensagem, ordene as informações: origem, sequência de referências, destino. Essa mesma estrutura aparece nos aplicativos de rota e nas corridas por aplicativo." },
        { tipo: "atencao", texto: "Armadilha comum: usar referências instáveis ou subjetivas, como 'a loja que abriu mês passado' ou 'a casa bonita da esquina'. Referência só funciona se for fixa, pública e reconhecível por quem circula na região." }
      ],
      atividade: [
        { pergunta: "Um bom ponto de referência caracteriza-se por ser:", alternativas: ["temporário, para evitar confusão", "fixo, visível e reconhecível por quem circula na região", "conhecido apenas pelos moradores do edifício", "um detalhe interno de cada residência"], correta: 1, explicacao: "A referência cumpre sua função quando é estável e acessível ao reconhecimento de qualquer pessoa da região." },
        { pergunta: "A descrição completa de um deslocamento segue, em ordem:", alternativas: ["destino, obstáculos e origem", "apenas o destino final", "horário, clima e destino", "origem, referências intermediárias e destino"], correta: 3, explicacao: "A rota se descreve do ponto de partida ao destino, confirmada por elementos fixos ao longo do percurso." },
        { pergunta: "A frase 'é a segunda porta depois da agência dos Correios' localiza com precisão porque:", alternativas: ["a agência é um elemento público, fixo e reconhecível", "toda agência abre às oito horas", "o número da porta dispensa verificação", "a agência pertence ao destinatário"], correta: 0, explicacao: "A precisão vem da referência pública e fixa, que reduz a busca a um pequeno trecho da via." },
        { pergunta: "Qual das opções é um ponto de referência INADEQUADO para orientar um desconhecido?", alternativas: ["a estação ferroviária", "o posto de saúde da esquina", "a casa de um amigo que se muda com frequência", "o mercado da praça central"], correta: 2, explicacao: "Referência instável, dependente de conhecimento pessoal, não serve para orientar quem não conhece a região." }
      ]
    },
    {
      id: "f1-a1-geo-3",
      titulo: "Meios de transporte e mobilidade",
      blocos: [
        { tipo: "paragrafo", texto: "Mobilidade é o conjunto de deslocamentos de pessoas e mercadorias pelo espaço urbano e rural; meio de transporte é o sistema que viabiliza cada deslocamento. A escolha racional entre eles compara distância, custo, tempo e infraestrutura disponível." },
        { tipo: "titulo", texto: "Classificação dos transportes" },
        { tipo: "lista", itens: ["Rodoviário: carros, motos, ônibus e caminhões, sobre vias pavimentadas", "Ferroviário e metroferroviário: trens e metrôs, sobre trilhos", "Aquaviário: barcas, navios e embarcações fluviais, sobre a água", "Aéreo: aviões e helicópteros, para trajetos longos ou de difícil acesso"] },
        { tipo: "paragrafo", texto: "Outro recorte distingue transporte individual (automóvel, bicicleta) de coletivo (ônibus, metrô, trem). O coletivo desloca mais passageiros com menos espaço viário e menos emissão por pessoa; por isso cidades densas investem em faixas exclusivas e malha metroferroviária." },
        { tipo: "exemplo", texto: "Um funcionário que mora a 40 km do trabalho compara: de carro, duas horas no congestionamento somadas a combustível e estacionamento; de metrô, cinquenta minutos com custo fixo. Para trajetos curtos e sem carga, ir a pé ou de bicicleta elimina a dependência do trânsito." },
        { tipo: "dica", texto: "Ao planejar um deslocamento em cidade grande, compare três variáveis: tempo previsto, custo total (passagem, combustível, estacionamento) e confiabilidade do horário. A opção mais barata nem sempre é a mais eficiente quando o tempo é considerado." },
        { tipo: "atencao", texto: "Armadilha comum de classificação: o metrô não é transporte rodoviário. Circula sobre trilhos e integra o sistema metroferroviário. Em provas, associe trilhos a ferroviário e vias pavimentadas a rodoviário." }
      ],
      atividade: [
        { pergunta: "O metrô é classificado como transporte:", alternativas: ["rodoviário", "aquaviário", "metroferroviário, pois circula sobre trilhos", "aéreo"], correta: 2, explicacao: "Metrô e trem circulam sobre trilhos; rodoviário é o transporte que usa vias pavimentadas." },
        { pergunta: "Em comparação com o transporte individual motorizado, o coletivo tende a:", alternativas: ["ocupar mais espaço viário por passageiro", "reduzir o espaço ocupado e a emissão de poluentes por passageiro", "custar mais ao usuário em qualquer trajeto", "operar sem horários definidos"], correta: 1, explicacao: "Um ônibus substitui dezenas de carros, o que libera espaço viário e reduz a emissão por passageiro." },
        { pergunta: "Para ligar duas margens de uma baía sem ponte, o sistema adequado é o:", alternativas: ["rodoviário", "ferroviário de carga apenas", "metroferroviário", "aquaviário, com barcas e ferryboats"], correta: 3, explicacao: "Sobre a água, o deslocamento cabe aos transportes aquaviários, como barcas e ferryboats." },
        { pergunta: "A escolha do meio de transporte para um trajeto diário considera, de forma completa:", alternativas: ["distância, custo, tempo disponível e infraestrutura", "apenas o preço da passagem", "apenas o conforto do assento", "apenas a marca do veículo"], correta: 0, explicacao: "A decisão adulta racional pondera distância, custo, tempo e qualidade da infraestrutura disponível." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "A hierarquia do espaço geográfico, do menor conjunto ao maior, corresponde a:", alternativas: ["município, bairro, domicílio", "domicílio, logradouro, bairro, município", "logradouro, domicílio, município", "bairro, logradouro, domicílio"], correta: 1, explicacao: "Cada nível contém o anterior: o domicílio fica no logradouro, o logradouro no bairro e o bairro no município." },
      { pergunta: "Um endereço completo para correspondência oficial deve conter, no mínimo:", alternativas: ["apenas o nome do destinatário", "apenas o bairro", "logradouro e número, bairro, município, unidade federativa e CEP", "apenas o CEP"], correta: 2, explicacao: "Os campos hierárquicos completos permitem a triagem e a entrega sem ambiguidade." },
      { pergunta: "Pontos de referência reduzem erros de rota porque:", alternativas: ["ancoram a posição do destino em um elemento fixo e reconhecível", "dispensam o uso de mapas digitais em qualquer situação", "substituem a sinalização oficial das vias", "garantem que o trajeto seja o mais curto possível"], correta: 0, explicacao: "Ao fixar o destino em relação a um elemento conhecido, a referência restringe a área de busca e diminui falhas de rota." },
      { pergunta: "Em regiões como a Amazônia e em cidades litorâneas recortadas por baías, os transportes mais decisivos são os:", alternativas: ["rodoviários, pela flexibilidade das vias", "aéreos, pela velocidade em trajetos curtos", "metroferroviários, pela capacidade de passageiros", "aquaviários, pois rios e mar organizam o deslocamento local"], correta: 3, explicacao: "Onde a malha hídrica predomina, barcas e embarcações fluviais são a base da mobilidade." },
      { pergunta: "Sobre mobilidade urbana, é correto afirmar:", alternativas: ["o aumento da frota individual melhora o fluxo das vias", "faixas exclusivas de ônibus não alteram a velocidade média", "a combinação de transporte coletivo e deslocamentos ativos, como caminhada e bicicleta, reduz congestionamentos", "pavimentação e drenagem não influenciam o tráfego"], correta: 2, explicacao: "Menos veículos individuais por viagem libera capacidade viária; deslocamentos ativos resolvem trajetos curtos." },
      { pergunta: "Preencher o CEP corretamente em um pedido de entrega é essencial porque:", alternativas: ["evita a cobrança de juros sobre o frete", "direciona a encomenda ao centro de triagem correto, evitando atrasos e extravios", "comprova a profissão do destinatário", "dispensa a exigência do nome do logradouro"], correta: 1, explicacao: "O CEP encaminha o objeto ao setor postal certo; erro nesse campo é causa frequente de atraso e extravio." }
    ]
  },
  exameFinal: [
    { pergunta: "Ao declarar 'Rua das Palmeiras, 40, Centro, Belo Horizonte/MG', as informações estão dispostas em escala:", alternativas: ["decrescente, do espaço amplo ao restrito", "aleatória, sem hierarquia", "apenas nacional, sem detalhes locais", "crescente, do espaço restrito (domicílio) ao amplo (município e unidade federativa)"], correta: 3, explicacao: "O endereço caminha do ponto mínimo, a casa, até o município e a UF, reproduzindo a hierarquia do espaço." },
    { pergunta: "O remetente descreve o endereço de entrega como 'em frente à agência dos Correios da praça central'. Essa estratégia funciona porque:", alternativas: ["a agência é um elemento público, fixo e reconhecível", "a agência abre às oito horas", "o entregador conhece pessoalmente o destinatário", "a praça muda de posição conforme o horário"], correta: 0, explicacao: "Elemento público e fixo é referência confiável para confirmação de rota." },
    { pergunta: "Qual alternativa relaciona corretamente o meio de transporte à sua categoria?", alternativas: ["barca — rodoviário", "bicicleta — coletivo motorizado", "trem de carga — ferroviário", "avião cargueiro — aquaviário"], correta: 2, explicacao: "Trem circula sobre trilhos: é ferroviário. Barca é aquaviária; avião é aéreo; bicicleta é individual e não motorizada." },
    { pergunta: "Em trajetos urbanos curtos sob trânsito intenso, caminhar ou pedalar pode ser mais eficiente porque:", alternativas: ["dispensa qualquer planejamento da rota", "não depende de congestionamento nem de vaga de estacionamento", "exige menor preparo físico que dirigir", "remove a necessidade de sinalização nas vias"], correta: 1, explicacao: "Em distâncias curtas, o deslocamento ativo fica imune a fila de carros e à busca por estacionamento." },
    { pergunta: "Mobilidade urbana é definida como:", alternativas: ["o conjunto de deslocamentos de pessoas e mercadorias pelos sistemas de transporte de uma cidade", "a velocidade máxima permitida nas rodovias federais", "o número de veículos fabricados no país no ano", "a quantidade de postos de combustível por bairro"], correta: 0, explicacao: "O conceito abrange todos os deslocamentos diários e a infraestrutura que os sustenta." }
  ]
};
