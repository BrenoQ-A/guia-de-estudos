window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a3-geo"] = {
  aulas: [
    {
      id: "em-a3-geo-1",
      titulo: "Mudanças climáticas e acordos internacionais",
      blocos: [
        { tipo: "paragrafo", texto: "O aquecimento global é o maior desafio coletivo da história: 1,1 °C já aquecemos desde a era industrial, e cada décimo conta." },
        { tipo: "titulo", texto: "A ciência" },
        { tipo: "lista", itens: ["IPCC (Painel Intergovernamental): consenso científico global desde 1988", "CO₂ atmosférico subiu de 280 ppm (1850) para mais de 420 ppm hoje", "Consequências: eventos extremos (ondas de calor, enchentes, secas), elevação do mar, acidificação dos oceanos, extinções", "Tipping points: gelo da Groenlândia, Amazônia como savana — irreversíveis se ultrapassados"] },
        { tipo: "titulo", texto: "Os acordos" },
        { tipo: "lista", itens: ["Estocolmo (1972): primeira conferência ambiental da ONU", "Rio-92: Agenda 21, convenções de clima e biodiversidade", "Protocolo de Kioto (1997): metas obrigatórias só para países ricos — EUA não ratificaram", "Acordo de Paris (2015): limitar o aquecimento a 1,5-2 °C; NDCs (contribuições nacionais); 1,5 °C = meta crítica para ilhas e para a Amazônia", "COPs anuais: negociações (COP30 em Belém, 2025 — a 'COP da Amazônia')"] },
        { tipo: "exemplo", texto: "Pegada de carbono: soma dos gases-estufa de uma pessoa/produto/país. O Brasil tem perfil peculiar: matriz elétrica limpa, MAS desmatamento e agropecuária = ~70% das emissões nacionais. Combater o desmatamento é nossa maior 'política climática'." },
        { tipo: "dica", texto: "Mitigação (reduzir emissões) x adaptação (preparar-se para o clima que vem): diques, agricultura resiliente, cidades esponja. Precisamos das duas." },
        { tipo: "atencao", texto: "Justiça climática: quem menos emite (países pobres, população negra e periférica) sofre os piores impactos — os 10% mais ricos emitem quase metade. O debate climático é também social." }
      ],
      atividade: [
        { pergunta: "O IPCC é o órgão que...", alternativas: ["gerencia rios", "comercializa carbono", "fiscaliza impostos", "sintetiza a ciência climática global"], correta: 3, explicacao: "Painel Intergovernamental de Mudanças Climáticas." },
        { pergunta: "O Acordo de Paris (2015) fixa o limite de...", alternativas: ["10 °C", "0,5 °C", "1,5-2 °C", "5 °C"], correta: 2, explicacao: "Com NDCs nacionais revisáveis." },
        { pergunta: "No Brasil, a maior fonte de emissões é...", alternativas: ["transporte", "desmatamento e agropecuária", "residências", "indústria"], correta: 1, explicacao: "~70% das emissões nacionais." },
        { pergunta: "COP30 foi realizada em...", alternativas: ["Glasgow", "Paris", "Belém", "Dubai"], correta: 2, explicacao: "2025: a COP da Amazônia." }
      ]
    },
    {
      id: "em-a3-geo-2",
      titulo: "Recursos hídricos: escassez e conflitos",
      blocos: [
        { tipo: "paragrafo", texto: "A água doce acessível é 0,4% de toda a água do planeta — e a demanda cresce com população, agroindústria e indústria. Água é o 'ouro azul' do século XXI." },
        { tipo: "titulo", texto: "O quadro global" },
        { tipo: "lista", itens: ["2 bilhões de pessoas sem água potável segura; 4 bilhões sofrem escassez severa ao menos 1 mês/ano", "Agricultura consome ~70% da água doce ( virtual water: 1 kg de carne ~15.000 L!)", "Aquíferos em colapso (Ogallala nos EUA, Norte da Índia, Guarani sob pressão)", "Conflitos: Nilo (Egito x Etiópolia x Sudão), Tigre-Eufrates, Jordânia, Indus"] },
        { tipo: "titulo", texto: "O Brasil hídrico" },
        { tipo: "exemplo", texto: "12% da água doce do planeta, mas distribuição invertida em relação à população (Norte tem água, Sudeste tem gente). Crises: 2014-15 (Sudeste: Cantareira a 5%), 2021 (hidrelétricas secas: bandeira vermelha). Transposição do São Francisco: polêmica entre necessidade do semiárido e riscos. Aquífero Guarani: gigante compartilhado por 4 países." },
        { tipo: "titulo", texto: "Governança" },
        { tipo: "paragrafo", texto: "Lei das Águas (1997): água como recurso de domínio público com valor econômico; cobrança pelo uso, outorgas, comitês de bacia (gestão participativa). Marco do saneamento (2020): meta de universalização — 35 milhões sem água tratada e ~100 milhões sem esgoto tratado ainda." },
        { tipo: "dica", texto: "Água virtual: a água 'embutida' em produtos. Exportar soja e carne é exportar água — tema de geopolítica hídrica." },
        { tipo: "atencao", texto: "Escassez brasileira é sobretudo de GESTÃO: desperdício nas redes (~40%), poluição de mananciais e uso ineficiente na irrigação — mais que falta física de chuva." }
      ],
      atividade: [
        { pergunta: "O setor que mais consome água doce é...", alternativas: ["agricultura (~70%)", "indústria", "energia", "doméstico"], correta: 0, explicacao: "Irrigação e pecuária." },
        { pergunta: "A crise hídrica do Sudeste (2014-15) afetou o sistema...", alternativas: ["Cantareira", "São Francisco", "Guarani", "Tietê"], correta: 0, explicacao: "SP quase racionou." },
        { pergunta: "A Lei das Águas (1997) definiu a água como...", alternativas: ["recurso público de valor econômico", "bem privado ilimitado", "somente estatal", "res nullius"], correta: 0, explicacao: "Outorgas e cobrança pelo uso." },
        { pergunta: "'Água virtual' é...", alternativas: ["água engarrafada", "água de chuva", "um aplicativo", "a água embutida em produtos"], correta: 3, explicacao: "Comércio global de água invisível." }
      ]
    },
    {
      id: "em-a3-geo-3",
      titulo: "O mundo em rede: ciberespaço e desigualdades digitais",
      blocos: [
        { tipo: "paragrafo", texto: "Vivemos a sociedade da informação: internet, smartphones, IA e big data reorganizam o território, o trabalho e as relações de poder." },
        { tipo: "titulo", texto: "Ciberespaço e território" },
        { tipo: "lista", itens: ["Ciberespaço (Lévy): o 'espaço' das redes digitais, complementar e não substituto do território físico", "Cidades inteligentes (smart cities): sensores, apps, dados — de Curitiba (BRT pioneiro) a Shenzhen", "Logística: e-commerce redesenha centros de distribuição e o 'último quilômetro'", "Trabalho: home office, uberização (plataformas: iFood, Uber — trabalho sem vínculos)"] },
        { tipo: "titulo", texto: "Desigualdades digitais" },
        { tipo: "exemplo", texto: "No Brasil: ~85% com acesso, mas QUALIDADE desigual — 4G ruim no campo, computador em casa só para 1/3 dos mais pobres, e 20 milhões fora da internet (idosos, rurais, Norte). Na escola, a pandemia expôs o fosso: alunos sem internet perderam o ano." },
        { tipo: "titulo", texto: "Poder e regulação" },
        { tipo: "paragrafo", texto: "Big Techs (Google/Meta/Amazon/Apple/Microsoft) concentram dados e poder de mercado — 'novas donas das ferrovias do século XXI'. Regulações: LGPD (2018, privacidade), Marco Civil da Internet (2014), debate sobre fake news e IA. IA generativa: oportunidades (educação, medicina) e riscos (desinformação, vieses, empregos)." },
        { tipo: "dica", texto: "Inclusão digital ≠ só conexão: exige alfabetização digital, dispositivos e conteúdo relevante. Espaço de fluxos (Castells) x espaço dos lugares: quem controla os fluxos controla o mundo." },
        { tipo: "atencao", texto: "Nas redes, o algoritmo decide o que você vê — bolhas informativas alimentam polarização. Cidadania digital = checar fontes, proteger dados e respeitar o outro." }
      ],
      atividade: [
        { pergunta: "O ciberespaço é...", alternativas: ["o espaço das redes digitais", "um satélite", "o espaço físico", "a nuvem só"], correta: 0, explicacao: "Conceito de Pierre Lévy." },
        { pergunta: "Uberização do trabalho significa...", alternativas: ["só trabalho remoto", "vínculo estável", "trabalho via plataformas sem vínculos", "fim do trabalho"], correta: 2, explicacao: "Autonomia aparente, proteções ausentes." },
        { pergunta: "A LGPD regula...", alternativas: ["saúde só", "trânsito", "proteção de dados pessoais", "eleições"], correta: 2, explicacao: "Lei Geral de Proteção de Dados (2018)." },
        { pergunta: "A desigualdade digital no Brasil é maior entre...", alternativas: ["regiões urbanas ricas e campo/periferia", "não existe", "idades só", "marcas de celular"], correta: 0, explicacao: "Conexão, qualidade e acesso a dispositivos." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "NDCs são as...", alternativas: ["redes 5G", "água virtual", "metas climáticas nacionais de Paris", "moedas digitais"], correta: 2, explicacao: "Contribuições Determinadas Nacionalmente." },
      { pergunta: "Comitês de bacia hidrográfica são instâncias de...", alternativas: ["comércio exterior", "eleições", "educação", "gestão participativa da água"], correta: 3, explicacao: "Lei das Águas: usuários + poder público + sociedade." },
      { pergunta: "Espaço de fluxos é conceito de...", alternativas: ["Milton Santos", "Malthus", "Manuel Castells", "Rostow"], correta: 2, explicacao: "A lógica das redes sobre o território." },
      { pergunta: "Fake news ameaça a democracia porque...", alternativas: ["desinformam e polarizam o debate", "divertem", "custam caro", "são lentas"], correta: 0, explicacao: "Algoritmos amplificam o engajamento, não a verdade." },
      { pergunta: "A transposição do São Francisco é debate porque...", alternativas: ["não existe", "não custa nada", "equilibra necessidades do semiárido e impactos ambientais", "é de outro país"], correta: 2, explicacao: "Água para o sertão x custos e riscos." },
      { pergunta: "Marco Civil da Internet (2014) estabelece...", alternativas: ["censura", "direitos e deveres na rede (neutralidade, privacidade)", "taxação de e-mails", "fim das redes"], correta: 1, explicacao: "Constituição da internet brasileira." }
    ]
  },
  exameFinal: [
    { pergunta: "A Amazônia como 'tipping point' significa que...", alternativas: ["é imortal", "só tem árvores", "não afeta o clima", "pode virar savana irreversivelmente"], correta: 3, explicacao: "Desmatamento + seca: limiar de não retorno." },
    { pergunta: "Universalizar o saneamento brasileiro exige investimento em...", alternativas: ["militares", "água e esgoto para todos", "só estádios", "exportação"], correta: 1, explicacao: "Marco Legal de 2020: meta 2033." },
    { pergunta: "Cidadania digital inclui...", alternativas: ["só ter celular", "ignorar regras", "checagem de fontes e proteção de dados", "compartilhar tudo"], correta: 2, explicacao: "Uso crítico e responsável das redes." },
    { pergunta: "A justiça climática aponta que...", alternativas: ["o clima é neutro", "todos emitem igual", "os mais pobres sofrem mais com pouca responsabilidade", "só ricos sofrem"], correta: 2, explicacao: "Emissões e impactos desigualmente distribuídos." },
    { pergunta: "IA generativa na educação deve ser usada...", alternativas: ["nunca", "para copiar", "como ferramenta com supervisão e ética", "só por empresas"], correta: 2, explicacao: "Potencial e riscos exigem letramento digital." }
  ]
};
