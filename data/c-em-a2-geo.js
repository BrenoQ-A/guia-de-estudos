window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a2-geo"] = {
  aulas: [
    {
      id: "em-a2-geo-1",
      titulo: "Espaço industrial brasileiro",
      blocos: [
        { tipo: "paragrafo", texto: "A indústria brasileira nasceu concentrada no Sudeste e, nos últimos 30 anos, desconcentrou-se parcialmente — mas a lógica da desigualdade espacial permanece." },
        { tipo: "titulo", texto: "Fases da industrialização" },
        { tipo: "lista", itens: ["Substituição de importações (1930-80): Estado protege e financia indústria nacional (Vargas, JK e o 'Plano de Metas': 50 anos em 5)", "Anos 1980: 'década perdida' — crise da dívida, inflação, parque obsoleto", "Anos 1990: abertura comercial (Collor/Real) — indústria se moderniza ou morre; desnacionalização parcial", "2000s: boom de commodities (China); desindustrialização relativa (participação da indústria no PIB cai de ~25% para ~11%)"] },
        { tipo: "titulo", texto: "Fatores de concentração no Sudeste" },
        { tipo: "lista", itens: ["Capital cafeeiro e ferrovias", "Energia barata (hidrelétricas)", "Maior mercado consumidor e mão de obra", "Portos e infraestrutura", "Economias de aglomeração: fornecedores, mão de obra qualificada e inovação juntos (São Paulo, ABC, Campinas)"] },
        { tipo: "exemplo", texto: "Desconcentração: incentivos fiscais atraem fábricas ao Nordeste (Camaçari/BA, Suape/PE), o Polo de Manaus (eletrônico) e a indústria do Centro-Oeste (agroindústria). Mas as funções de comando e P&D seguem no Sudeste." },
        { tipo: "dica", texto: "Termos-chave: economia de aglomeração (juntar-se reduz custos), fuso industrial (polo), reconversão industrial (mudar de atividade), desindustrialização." },
        { tipo: "atencao", texto: "Desconcentrar não é igualar: filiais montadoras não trazem tecnologia nem renda alta; o 'comando' da economia continua concentrado. É industrialização 'de filial'." }
      ],
      atividade: [
        { pergunta: "A industrialização por substituição de importações...", alternativas: ["produzia internamente o que era importado", "só exportava café", "exportava tudo", "fechou fábricas"], correta: 0, explicacao: "Protecionismo + investimento estatal (Vargas, JK)." },
        { pergunta: "O 'Plano de Metas' de JK visava...", alternativas: ["cortar gastos", "fim das rodovias", "acelerar o desenvolvimento (50 anos em 5)", "estatizar tudo"], correta: 2, explicacao: "Automóveis, energia, Brasília." },
        { pergunta: "O Polo de Manaus exemplifica...", alternativas: ["agroindústria só", "mineradora", "desconcentração com incentivos fiscais", "concentração clássica"], correta: 2, explicacao: "Zona Franca: isenções na Amazônia." },
        { pergunta: "A 'desindustrialização relativa' do Brasil significa...", alternativas: ["mais indústria", "só serviços públicos", "queda da participação industrial no PIB", "fim das fábricas"], correta: 2, explicacao: "Commodities pesam mais que manufatura." }
      ]
    },
    {
      id: "em-a2-geo-2",
      titulo: "Agronegócio e questão agrária",
      blocos: [
        { tipo: "paragrafo", texto: "O Brasil tem duas agriculturas: o poderoso agronegócio exportador e a agricultura familiar que abastece o mercado interno — convivendo com uma questão agrária (concentração de terra) histórica." },
        { tipo: "titulo", texto: "O agronegócio" },
        { tipo: "lista", itens: ["~25% do PIB e a maior parte das exportações (soja, carne, açúcar, café, suco)", "Cadeia: insumos (agroquímicos, sementes) + produção + agroindústria + logística", "Fronteira agrícola: Cerrado e MATOPIBA (Maranhão, Tocantins, Piauí, Bahia)", "Tecnologia: plantio direto, biotecnologia, precisão, integração lavoura-pecuária"] },
        { tipo: "titulo", texto: "Agricultura familiar" },
        { tipo: "exemplo", texto: "70% dos alimentos que chegam à mesa dos brasileiros vêm da agricultura familiar (Feira, PAA, PNAE). Programas: PRONAF (crédito), Bolsa Família + Assistência Técnica. Mas acessa só ~20% do crédito rural — o grosso vai ao agro empresarial." },
        { tipo: "titulo", texto: "A questão agrária" },
        { tipo: "paragrafo", texto: "Concentração fundiária herdada das sesmarias: Índice de Gini da terra entre os maiores do mundo. Latifúndio improdutivo x sem-terra (MST: ocupações, reforma agrária), conflitos no campo (Amazonas, Pará: grilagem e violência). Estruturas: Lei de Terras (1850) consolidou a concentração; reforma agrária avança pouco." },
        { tipo: "dica", texto: "Compare: agronegócio = escala, exportação, mecanização; agricultura familiar = diversidade, mercado interno, emprego por hectare. Ambos necessários — a tensão é sobre terra, crédito e prioridade." },
        { tipo: "atencao", texto: "Expansão da soja não é 'só economia': desmatamento na Amazônia/Cerrado, grilagem, pulverização com agrotóxicos (Brasil é campeão mundial de uso) e pressão sobre comunidades tradicionais." }
      ],
      atividade: [
        { pergunta: "MATOPIBA é a fronteira agrícola do...", alternativas: ["Amazônia só", "litoral", "Cerrado (MA, TO, PI, BA)", "Sul"], correta: 2, explicacao: "Novo polo de soja e milho." },
        { pergunta: "A agricultura familiar é responsável por cerca de... dos alimentos do mercado interno.", alternativas: ["10%", "70%", "25%", "100%"], correta: 1, explicacao: "Feijão, mandioca, leite, hortaliças majoritariamente familiares." },
        { pergunta: "O MST luta por...", alternativas: ["mineração", "fim da agricultura", "mais agroexportação", "reforma agrária"], correta: 3, explicacao: "Assentamentos e política agrícola." },
        { pergunta: "A Lei de Terras (1850) contribuiu para...", alternativas: ["criar o PRONAF", "acabar com escravidão", "repartir a terra", "concentrar a propriedade"], correta: 3, explicacao: "Terra só por compra: excluiu libertos e pobres." }
      ]
    },
    {
      id: "em-a2-geo-3",
      titulo: "Matriz energética brasileira",
      blocos: [
        { tipo: "paragrafo", texto: "O Brasil tem uma das matrizes elétricas mais limpas do mundo (~85% renovável), mas sua matriz TOTAL (com transportes) ainda depende de petróleo." },
        { tipo: "titulo", texto: "A matriz elétrica" },
        { tipo: "lista", itens: ["Hidráulica: ~60% (Itaipu, Belo Monte, Tucuruí) — mas com impactos socioambientais", "Eólica: explosão no Nordeste (Rio Grande do Norte, Bahia, Piauí) — ventos constantes e baratos", "Solar: crescente, com grande potencial no semiárido (fotovoltaica) e aquecimento", "Biomassa: bagaço de cana; térmicas a gás como backup", "Nuclear: Angra 1 e 2 (RJ) — papel pequeno"] },
        { tipo: "titulo", texto: "O pré-sal" },
        { tipo: "exemplo", texto: "Descoberto em 2006 sob a camada de sal do litoral (Santos, Campos): reservas gigantes que colocaram o Brasil entre os 10 maiores produtores de petróleo do mundo. Renda (partilha, petrosal) financia educação/saúde — mas é 'maldição do recurso' se mal gerida: depende de preço internacional e transição energética global." },
        { tipo: "titulo", texto: "Etanol e biodiesel" },
        { tipo: "paragrafo", texto: "Proálcool (1975, resposta à crise do petróleo): etanol de cana substitui ~50% da gasolina. Biodiesel de soja e gordura animal. Veículos flex-fuel e motores híbridos. Desafios: expandir renováveis SEM repetir os impactos das hidrelétricas amazônicas." },
        { tipo: "dica", texto: "Matriz ENERGÉTICA (tudo: petróleo, gás, carvão, renováveis) ≠ matriz ELÉTRICA (só eletricidade). Prova adora essa pegadinha!" },
        { tipo: "atencao", texto: "O transporte brasileiro é rodoviário e movido a diesel/gasolina: a eletrificação da frota e os biocombustíveis avançados (HVO, hidrogênio verde) são o próximo capítulo." }
      ],
      atividade: [
        { pergunta: "A maior fonte da matriz elétrica brasileira é...", alternativas: ["nuclear", "hidráulica", "só eólica", "carvão"], correta: 1, explicacao: "~60% das represas." },
        { pergunta: "O pré-sal foi descoberto em...", alternativas: ["1990", "1940", "2006", "1975"], correta: 2, explicacao: "Lula anuncia em 2007; discovery em 2006." },
        { pergunta: "O Proálcool (1975) foi resposta à...", alternativas: ["crise do petróleo", "crise do café", "inflação só", "queda da soja"], correta: 0, explicacao: "Choque do petróleo de 1973." },
        { pergunta: "A energia eólica brasileira se concentra no...", alternativas: ["Sul profundo", "Amazônia", "Sudeste urbano", "Nordeste"], correta: 3, explicacao: "Ventos do litoral NE e interior." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "A 'década perdida' (anos 1980) refere-se a...", alternativas: ["industrialização", "reforma agrária", "crescimento acelerado", "crise da dívida e estagnação"], correta: 3, explicacao: "Inflação e endividamento externo." },
      { pergunta: "Economia de aglomeração significa...", alternativas: ["só agricultura", "cidades esvaziadas", "empresas se agrupando para reduzir custos", "impostos altos"], correta: 2, explicacao: "Fornecedores e mão de obra concentrados." },
      { pergunta: "O PRONAF financia...", alternativas: ["petróleo", "grande indústria", "turismo", "agricultura familiar"], correta: 3, explicacao: "Crédito rural familiar." },
      { pergunta: "O Brasil é campeão mundial de...", alternativas: ["nuclear", "uso de agrotóxicos", "florestas plantadas só", "carvão"], correta: 1, explicacao: "Consumo per capita crescente." },
      { pergunta: "Belo Monte exemplifica os impactos de...", alternativas: ["grandes hidrelétricas amazônicas", "eólicas", "biomassa", "energia solar"], correta: 0, explicacao: "Povos indígenas e rio Xingu afetados." },
      { pergunta: "O etanol brasileiro vem da...", alternativas: ["milho só", "petróleo", "cana-de-açúcar", "beterraba só"], correta: 2, explicacao: "Proálcool: cana no Centro-Sul." }
    ]
  },
  exameFinal: [
    { pergunta: "A desconcentração industrial brasileira é...", alternativas: ["total", "crescente na África", "inexistente", "parcial (filiais sem comando)"], correta: 3, explicacao: "Produção espalha; decisão concentra." },
    { pergunta: "A 'maldição dos recursos' avisa que países petrolíferos podem...", alternativas: ["nada", "se desenvolver sempre", "acabar com a pobreza sozinhos", "depender demais da commodity e ignorar diversificação"], correta: 3, explicacao: "Doença holandesa: moeda valorizada mata indústria." },
    { pergunta: "A índice de Gini da terra brasileira indica...", alternativas: ["distribuição equânime", "fim do latifúndio", "forte concentração fundiária", "reforma completa"], correta: 2, explicacao: "Entre os piores do mundo." },
    { pergunta: "A matriz elétrica brasileira é renovável em cerca de...", alternativas: ["50%", "100%", "85%", "20%"], correta: 2, explicacao: "Uma das mais limpas do mundo." },
    { pergunta: "PNAE conecta agricultura familiar com...", alternativas: ["mineração", "petróleo", "exportação", "merenda escolar"], correta: 3, explicacao: "Compras públicas da agricultura familiar." }
  ]
};
