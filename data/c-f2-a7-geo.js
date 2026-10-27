window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f2-a7-geo"] = {
  aulas: [
    {
      id: "f2-a7-geo-1",
      titulo: "Clima: fatores e elementos",
      blocos: [
        { tipo: "paragrafo", texto: "Clima é o comportamento médio da atmosfera de um lugar ao longo de anos. Para entendê-lo, separamos ELEMENTOS (o que medimos) e FATORES (o que influencia)." },
        { tipo: "titulo", texto: "Elementos do clima" },
        { tipo: "lista", itens: ["Temperatura (°C)", "Umidade relativa do ar (%)", "Precipitação (chuva, em mm)", "Pressão atmosférica", "Vento (direção e velocidade)", "Nebulosidade e radiação solar"] },
        { tipo: "titulo", texto: "Fatores climáticos" },
        { tipo: "lista", itens: ["Latitude: quanto mais perto do Equador, mais quente", "Altitude: mais alto, mais frio (−1 °C a cada 100 m)", "Continentalidade/maritimidade: o oceano ameniza o clima", "Correntes marítimas: quentes ou frias modificam o litoral", "Relevo e vegetação: barram ventos, influenciam chuvas"] },
        { tipo: "exemplo", texto: "Brasília (1.100 m de altitude) tem noites mais frescas que Goiânia (700 m), apesar da mesma latitude. E Quito, no Equador, é amena (altitude), não tórrida!" },
        { tipo: "titulo", texto: "Climas do Brasil" },
        { tipo: "paragrafo", texto: "Equatorial úmido (Amazônia), tropical típico (Brasil Central), semiárido (sertão), tropical de altitude (serras do Sudeste) e subtropical (Sul, com frio e até geada/neve)." },
        { tipo: "atencao", texto: "Não confunda tempo e clima: 'hoje chove' é TEMPO; 'aqui chove muito em janeiro' é CLIMA." }
      ],
      atividade: [
        { pergunta: "Um ELEMENTO do clima é...", alternativas: ["a latitude", "a altitude", "o relevo", "a temperatura"], correta: 3, explicacao: "Elementos são medidos; fatores influenciam." },
        { pergunta: "Subir 1.000 m de altitude derruba a temperatura em cerca de...", alternativas: ["1 °C", "10 °C", "5 °C", "20 °C"], correta: 1, explicacao: "Regra: 1 °C a cada 100 m de subida." },
        { pergunta: "Cidades litorâneas têm clima mais ameno por causa da...", alternativas: ["latitude", "maritimidade", "altitude", "urbanização"], correta: 1, explicacao: "O mar demora a esquentar/esfriar, amenizando o clima." },
        { pergunta: "O clima do sertão nordestino é...", alternativas: ["tropical de altitude", "semiárido", "subtropical", "equatorial"], correta: 1, explicacao: "Quente e seco, com chuvas escassas e irregulares." }
      ]
    },
    {
      id: "f2-a7-geo-2",
      titulo: "Biomas brasileiros",
      blocos: [
        { tipo: "paragrafo", texto: "Bioma é um grande conjunto de ecossistemas com vegetação e fauna características, moldado pelo clima. O Brasil tem 6 biomas principais." },
        { tipo: "titulo", texto: "Os seis biomas" },
        { tipo: "lista", itens: ["Amazônia: floresta densa e úmida; maior bioma e maior floresta tropical do mundo", "Cerrado: savanas com árvores retorcidas e raízes profundas; berço das águas", "Mata Atlântica: floresta litorânea; a mais devastada (resta ~12%) e a mais biodiversa por km²", "Caatinga: vegetação seca do sertão; cactos e árvores que perdem folhas", "Pampa: campos do Rio Grande do Sul; gramíneas e pecuária", "Pantanal: maior planície alagável do planeta; fauna espetacular"] },
        { tipo: "exemplo", texto: "Adaptações: no Cerrado, as árvores têm casca grossa contra o fogo natural; na Caatinga, o mandacaru guarda água nas costelas; na Amazônia, as folhas largas escorrem a chuva constante (gotejamento)." },
        { tipo: "titulo", texto: "Ameaças e proteção" },
        { tipo: "paragrafo", texto: "Desmatamento (para pastagem e soja na Amazônia e Cerrado), queimadas, expansão urbana e mineração pressionam os biomas. A resposta: unidades de conservação, terras indígenas (comprovadamente protegem florestas) e fiscalização." },
        { tipo: "dica", texto: "Cada bioma tem 'espécie-chave': jaguar na Amazônia, lobo-guará no Cerrado, mico-leão-dourado na Mata Atlântica, arara-azul na Caatinga/Pantanal." },
        { tipo: "atencao", texto: "A Mata Atlântica, por estar onde vivem 70% dos brasileiros, é o bioma mais ameaçado — proteger seus remanescentes é urgente." }
      ],
      atividade: [
        { pergunta: "O bioma com árvores de raízes profundas e casca grossa é o...", alternativas: ["Pampa", "Pantanal", "Caatinga", "Cerrado"], correta: 3, explicacao: "Adaptado ao fogo e à estação seca." },
        { pergunta: "A maior planície alagável do mundo é o...", alternativas: ["Pampa", "Pantanal", "Lençóis", "Amazonas"], correta: 1, explicacao: "Cheias anuais alimentam fauna espetacular." },
        { pergunta: "O bioma mais devastado do Brasil é a...", alternativas: ["Pampa", "Mata Atlântica", "Caatinga", "Amazônia"], correta: 1, explicacao: "Restam cerca de 12% da cobertura original." },
        { pergunta: "O mandacaru é típico da...", alternativas: ["Caatinga", "Mata Atlântica", "Cerrado", "Amazônia"], correta: 0, explicacao: "Cacto que guarda água no sertão." }
      ]
    },
    {
      id: "f2-a7-geo-3",
      titulo: "Relevo e hidrografia do Brasil",
      blocos: [
        { tipo: "paragrafo", texto: "O relevo brasileiro é majoritariamente antigo e aplainado: não temos grandes cadeias de montanhas recentes como os Andes." },
        { tipo: "titulo", texto: "Formas de relevo" },
        { tipo: "lista", itens: ["Planaltos: 59% do território (Planalto Central, Planalto Meridional)", "Planícies: 41% (Amazônica, do Pantanal, litorâneas)", "Serras e picos: Pico da Neblina (2.995 m), o mais alto", "Depressões: áreas rebaixadas entre planaltos"] },
        { tipo: "titulo", texto: "A grande rede hidrográfica" },
        { tipo: "paragrafo", texto: "O Brasil é o país com mais água doce renovável do mundo (~12% do total). Grandes bacias: AMAZÔNICA (maior do planeta; rio Amazonas), PARANÁ (hidrelétricas como Itaipu), SÃO FRANCISCO ('rio da integração do Nordeste'), TOCANTINS-ARAGUAIA e ATLÂNTICO SUL." },
        { tipo: "exemplo", texto: "O rio Amazonas despeja no mar cerca de 20% de toda a água doce que chega aos oceanos do mundo. Seus afluentes são milhares." },
        { tipo: "titulo", texto: "Uso e conflitos da água" },
        { tipo: "paragrafo", texto: "Água para abastecimento, irrigação, hidrelétricas, navegação e lazer — gerando conflitos de uso (agroindústria x cidades; transposição do São Francisco é polêmica). A poluição e o desmatamento ameaçam nascentes e rios." },
        { tipo: "dica", texto: "Rios que nascem em áreas desmatadas secam ou enchem de lodo: proteger nascentes é proteger toda a bacia." },
        { tipo: "atencao", texto: "A maior parte do vapor que vira chuva no Sudeste vem da Amazônia ('rios voadores'): desmatar a floresta afeta o clima de todo o Brasil." }
      ],
      atividade: [
        { pergunta: "A maior parte do relevo brasileiro é formada por...", alternativas: ["cordilheiras", "montanhas jovens", "vulcões", "planaltos antigos"], correta: 3, explicacao: "Território geologicamente velho e aplainado." },
        { pergunta: "O ponto mais alto do Brasil é...", alternativas: ["Pico da Neblina", "Pico Paraná", "Monte Roraima", "Pico da Bandeira"], correta: 0, explicacao: "2.995 m, no Amazonas, na fronteira com a Venezuela." },
        { pergunta: "A maior bacia hidrográfica do mundo é a...", alternativas: ["Amazônica", "Nilo", "São Francisco", "Paraná"], correta: 0, explicacao: "Cobre milhões de km² em vários países." },
        { pergunta: "Itaipu está na bacia do rio...", alternativas: ["Amazonas", "São Francisco", "Araguaia", "Paraná"], correta: 3, explicacao: "Rio Paraná, fronteira Brasil-Paraguai." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Os FATORES climáticos incluem...", alternativas: ["nuvens e neblina", "temperatura e chuva", "latitude e altitude", "vento e umidade"], correta: 2, explicacao: "Fatores influenciam; elementos são medidos." },
      { pergunta: "O clima subtropical brasileiro ocorre...", alternativas: ["no sertão", "no Sul", "no litoral norte", "na Amazônia"], correta: 1, explicacao: "Quatro estações e frio no inverno, no Sul." },
      { pergunta: "O Cerrado é chamado de 'berço das águas' porque...", alternativas: ["é deserto", "alimenta grandes bacias com suas nascentes", "tem oceanos", "chove todo dia"], correta: 1, explicacao: "Nascem ali rios como o São Francisco e afluentes do Paraná." },
      { pergunta: "Planaltos ocupam cerca de... do Brasil.", alternativas: ["59%", "80%", "30%", "10%"], correta: 0, explicacao: "Planaltos 59% e planícies 41%." },
      { pergunta: "O 'rio da integração do Nordeste' é o...", alternativas: ["São Francisco", "Paraná", "Amazonas", "Tocantins"], correta: 0, explicacao: "Atravessa vários estados do sertão." },
      { pergunta: "'Rios voadores' são...", alternativas: ["aeronaves", "rios subterrâneos", "vapor d'água da Amazônia que vira chuva no Sudeste", "rios de gelo"], correta: 2, explicacao: "A floresta bombeia umidade que abastece o centro-sul." }
    ]
  },
  exameFinal: [
    { pergunta: "Quanto mais alto o lugar, o clima tende a ser...", alternativas: ["mais frio", "mais seco sempre", "mais quente", "igual"], correta: 0, explicacao: "Gradiente térmico: −1 °C a cada 100 m." },
    { pergunta: "A fauna do Pantanal é conhecida por...", alternativas: ["ser pobre", "não existir", "concentração de vida (jaguar, tuiuiú)", "só peixes"], correta: 2, explicacao: "Cheias criam berçários de fauna." },
    { pergunta: "A depressão absoluta do relevo é a área...", alternativas: ["vulcânica", "mais rebaixada", "costeira só", "mais alta"], correta: 1, explicacao: "Rebaixada entre planaltos, com erosão intensa." },
    { pergunta: "O desmatamento amazônico impacta...", alternativas: ["só os rios locais", "o regime de chuvas de todo o Brasil", "nada", "só o Norte"], correta: 1, explicacao: "Os rios voadores dependem da floresta em pé." },
    { pergunta: "Conflitos pelo uso da água envolvem...", alternativas: ["só pesca", "nada", "só agricultura", "irrigação, cidades, energia e indústria"], correta: 3, explicacao: "Demanda crescente sobre recursos finitos." }
  ]
};
