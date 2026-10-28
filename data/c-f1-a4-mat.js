window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a4-mat"] = {
  aulas: [
    {
      id: "f1-a4-mat-1",
      titulo: "Números até 100.000: classes e decomposição",
      blocos: [
        { tipo: "paragrafo", texto: "Números grandes organizam-se em CLASSES (unidades e milhares), cada uma com três ordens: unidade, dezena e centena. Ler um número grande é ler duas classes com o mesmo vocabulário." },
        { tipo: "titulo", texto: "As ordens até 100.000" },
        { tipo: "lista", itens: ["Classe das unidades: U, D, C (1 a 999)", "Classe dos milhares: UM, DM, CM (1.000 a 999.999)", "Exemplo de leitura: 45.230 = quarenta e cinco mil (classe dos milhares) + duzentos e trinta (classe das unidades)"] },
        { tipo: "titulo", texto: "Decomposição" },
        { tipo: "paragrafo", texto: "Decompor é expressar o número como soma do valor posicional de cada algarismo. É a habilidade que sustenta contas encaixadas e estimativas." },
        { tipo: "exemplo", texto: "34.521 = 30.000 + 4.000 + 500 + 20 + 1. O algarismo 4 vale 4.000 (4 unidades de milhar), não 4 — o VALOR depende da POSIÇÃO. Esse é o princípio do sistema decimal indo-arábico." },
        { tipo: "titulo", texto: "Comparação e arredondamento" },
        { tipo: "paragrafo", texto: "Para comparar: mais algarismos vence (sem zeros à esquerda); empatando, compare algarismo a algarismo da esquerda para a direita. Arredondar para o milhar mais próximo: olhe a centena — 5 ou mais, sobe; 4 ou menos, mantém (72.500 → 73.000; 72.400 → 72.000)." },
        { tipo: "dica", texto: "Leitura com classe: separe mentalmente 3 algarismos por vez da direita para a esquerda (34.521 → 34 | 521): 'trinta e quatro mil' + 'quinhentos e vinte e um'. Funciona até milhões." },
        { tipo: "atencao", texto: "Zeros internos mudam tudo: 40.007 ≠ 4.007 ≠ 470. E o algarismo 0 entre não zeros ('dezena vazia') é o erro mais comum na escrita por extenso: 40.007 = quarenta mil e sete." }
      ],
      atividade: [
        { pergunta: "Como se lê 45.000?", alternativas: ["Quatro mil e quinhentos", "Quarenta e cinco mil", "Quatrocentos e cinco mil", "Quatro mil"], correta: 1, explicacao: "4 DM + 5 UM: quarenta e cinco mil." },
        { pergunta: "A decomposição de 23.400 é...", alternativas: ["2.000 + 3.400", "20.000 + 3.000 + 400", "23.000 + 4.000", "200 + 34"], correta: 1, explicacao: "Valor posicional de cada algarismo." },
        { pergunta: "No número 58.731, o algarismo 8 vale...", alternativas: ["8", "80", "800", "8.000"], correta: 3, explicacao: "Está na casa das unidades de milhar." },
        { pergunta: "Arredondando 72.500 para o milhar mais próximo:", alternativas: ["72.000", "73.000", "70.000", "75.000"], correta: 1, explicacao: "Centena 5: arredonda para cima." }
      ]
    },
    {
      id: "f1-a4-mat-2",
      titulo: "Frações equivalentes e números decimais",
      blocos: [
        { tipo: "paragrafo", texto: "Fração e decimal são duas escritas para a mesma ideia: parte de um todo. Converter entre elas e compará-las com segurança é competência diária — de descontos a medidas de receita." },
        { tipo: "titulo", texto: "Frações equivalentes" },
        { tipo: "paragrafo", texto: "Multiplicar ou dividir numerador e denominador pelo MESMO número mantém o valor: 1/2 = 2/4 = 3/6 = 5/10. É o princípio que permite simplificar (dividir até a forma mínima) e comparar (igualar denominadores)." },
        { tipo: "exemplo", texto: "Simplificação: 6/8 ÷ 2/2 = 3/4. Comparação: 2/3 x 3/4 → comum em 12: 8/12 x 9/12 → 3/4 > 2/3. O 'pedaço' de 3/4 é maior." },
        { tipo: "titulo", texto: "Decimais: a escrita com vírgula" },
        { tipo: "paragrafo", texto: "A vírgula separa inteiros das partes: 1ª casa = décimos, 2ª = centésimos, 3ª = milésimos. Conversões fundamentais: 1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; 1/10 = 0,1; 1/100 = 0,01." },
        { tipo: "titulo", texto: "Comparando decimais" },
        { tipo: "paragrafo", texto: "Iguale o número de casas decimais com zeros e compare como inteiros: 0,7 → 0,70; 0,25 → 0,25; logo 0,70 > 0,25. Na soma/subtração, ALINHE AS VÍRGULAS." },
        { tipo: "dica", texto: "Traduza todo decimal para 'centésimos' quando comparar: 0,7 = 70/100; 0,25 = 25/100. Setenta centésimos vencem vinte e cinco — a intuição desmonta a pegadinha '25 é maior que 7'." },
        { tipo: "atencao", texto: "0,7 é MAIOR que 0,25 apesar de '7 < 25': a comparação se faz casa a casa (décimos primeiro), não pelos algarismos crus. Esse erro aparece em toda prova de concursos." }
      ],
      atividade: [
        { pergunta: "Qual fração é equivalente a 1/2?", alternativas: ["2/3", "3/6", "2/5", "1/4"], correta: 1, explicacao: "3/6 simplificado: 1/2." },
        { pergunta: "Quanto vale 1/4 em decimal?", alternativas: ["0,10", "0,25", "0,40", "0,75"], correta: 1, explicacao: "Um quarto: 25 centésimos." },
        { pergunta: "Qual é MAIOR: 0,8 ou 0,45?", alternativas: ["0,45", "0,8", "iguais", "depende do contexto"], correta: 1, explicacao: "0,80 > 0,45." },
        { pergunta: "3/4 de um bolo consumidos deixam...", alternativas: ["um quarto", "metade", "três quartos", "nada"], correta: 0, explicacao: "4/4 − 3/4 = 1/4." }
      ]
    },
    {
      id: "f1-a4-mat-3",
      titulo: "Perímetro e área de retângulos e quadrados",
      blocos: [
        { tipo: "paragrafo", texto: "Perímetro mede o CONTORNO (cerca, rodapé, corrimão); área mede a SUPERFÍCIE (piso, grama, tinta). São grandezas diferentes, com unidades diferentes — confundi-las é o erro de maior custo em obras e provas." },
        { tipo: "titulo", texto: "Fórmulas essenciais" },
        { tipo: "lista", itens: ["Retângulo: P = 2 × (base + altura); A = base × altura", "Quadrado: P = 4 × lado; A = lado²", "Unidades: perímetro em m (linear); área em m² (quadrada)", "Conversão de área: 1 m² = 100 dm² = 10.000 cm²"] },
        { tipo: "exemplo", texto: "Sala de 6 m × 4 m: perímetro = 2 × (6 + 4) = 20 m de rodapé; área = 6 × 4 = 24 m² de piso. Se o piso custa R$ 80/m², a obra: 24 × 80 = R$ 1.920. Perímetro e área respondem perguntas diferentes — e têm preços diferentes." },
        { tipo: "titulo", texto: "Propriedades que resolvem problemas" },
        { tipo: "paragrafo", texto: "Figuras de MESMO perímetro podem ter áreas diferentes: retângulos 10×2 e 6×6 ambos têm P = 24 m, mas áreas de 20 m² e 36 m². Entre retângulos de mesmo perímetro, o QUADRADO maximiza a área — princípio usado de cercas a embalagens." },
        { tipo: "paragrafo", texto: "Figuras compostas: quebre a forma em retângulos, calcule cada área e some; para perímetro, percorra o contorno somando TODOS os lados (inclusive os que a figura 'esconde')." },
        { tipo: "dica", texto: "Sempre pergunte: 'a questão fala de contorno ou de superfície?' Cerca, moldura, fita = perímetro. Piso, tinta, grama, tapete = área. A unidade (m x m²) já entrega a resposta." },
        { tipo: "atencao", texto: "Área tem expoente: 24 m², nunca '24 m'. E dobrar o lado QUADRUPLICA a área (k²): um terreno de lado dobrado não custa o dobro de cerca nem o dobro de grama — perimetra com k e areja com k²." }
      ],
      atividade: [
        { pergunta: "O perímetro de um quadrado de lado 5 cm é...", alternativas: ["10 cm", "20 cm", "25 cm", "50 cm"], correta: 1, explicacao: "P = 4 × 5 = 20 cm." },
        { pergunta: "A área de um retângulo de 8 m por 3 m é...", alternativas: ["11 m²", "22 m²", "24 m²", "30 m²"], correta: 2, explicacao: "A = 8 × 3 = 24 m²." },
        { pergunta: "Perímetro mede...", alternativas: ["a superfície", "o contorno", "o volume", "o peso"], correta: 1, explicacao: "Medida linear da borda." },
        { pergunta: "Um terreno quadrado de 7 m de lado tem área de...", alternativas: ["14 m²", "28 m²", "49 m²", "77 m²"], correta: 2, explicacao: "7 × 7 = 49 m²." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Como se lê 60.050?", alternativas: ["Seis mil e cinquenta", "Sessenta mil e cinquenta", "Seiscentos e cinquenta", "Sessenta e cinco mil"], correta: 1, explicacao: "6 DM + 5 D: sessenta mil e cinquenta." },
      { pergunta: "Qual fração é equivalente a 2/4?", alternativas: ["1/3", "1/2", "2/8", "3/4"], correta: 1, explicacao: "Simplificação por 2: 1/2." },
      { pergunta: "Quanto é 0,5 + 0,25?", alternativas: ["0,30", "0,70", "0,75", "7,5"], correta: 2, explicacao: "0,50 + 0,25 = 0,75." },
      { pergunta: "O perímetro de um retângulo 9 cm × 2 cm é...", alternativas: ["11 cm", "18 cm", "22 cm", "27 cm"], correta: 2, explicacao: "P = 2 × (9 + 2) = 22 cm." },
      { pergunta: "A área de um quadrado de lado 6 m é...", alternativas: ["12 m²", "24 m²", "36 m²", "66 m²"], correta: 2, explicacao: "6 × 6 = 36 m²." },
      { pergunta: "No número 73.402, o algarismo 3 vale...", alternativas: ["3", "30", "300", "3.000"], correta: 3, explicacao: "Casa das unidades de milhar." }
    ]
  },
  exameFinal: [
    { pergunta: "Comparando 72.400 e 72.500 arredondados ao milhar:", alternativas: ["ambos viram 73.000", "72.000 e 73.000", "ambos viram 72.000", "não se arredonda"], correta: 1, explicacao: "Centena 4 mantém; centena 5 sobe." },
    { pergunta: "Frações equivalentes representam...", alternativas: ["a mesma quantidade", "quantidades distintas", "somas", "inteiros só"], correta: 0, explicacao: "1/2 = 2/4 = 3/6." },
    { pergunta: "Qual decimal equivale a 7/10?", alternativas: ["0,07", "0,7", "7,0", "70"], correta: 1, explicacao: "Sete décimos." },
    { pergunta: "0,35 comparado a 0,4 é...", alternativas: ["maior", "menor", "igual", "incomparável"], correta: 1, explicacao: "0,35 < 0,40." },
    { pergunta: "Uma piscina de 10 m × 5 m tem perímetro de...", alternativas: ["15 m", "30 m", "50 m", "25 m"], correta: 1, explicacao: "P = 2 × (10 + 5) = 30 m (área seria 50 m²)." }
  ]
};
