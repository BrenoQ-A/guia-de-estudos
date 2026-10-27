window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a4-mat"] = {
  aulas: [
    {
      id: "f1-a4-mat-1",
      titulo: "Números até 100.000",
      blocos: [
        { tipo: "paragrafo", texto: "Agora os números ficam grandes de verdade: até 100.000! Para ler e escrever esses números, precisamos conhecer as classes." },
        { tipo: "titulo", texto: "As ordens e classes" },
        { tipo: "paragrafo", texto: "Cada casa do número tem um nome: unidades (U), dezenas (D), centenas (C), unidades de milhar (UM), dezenas de milhar (DM) e centenas de milhar (CM). As primeiras três casas formam a classe das UNIDADES; as próximas, a classe dos MILHARES." },
        { tipo: "exemplo", texto: "O número 34.521 se lê: trinta e quatro mil, quinhentos e vinte e um. Ou seja: 3 DM + 4 UM + 5 C + 2 D + 1 U." },
        { tipo: "titulo", texto: "Decomposição" },
        { tipo: "paragrafo", texto: "Decompor é 'desmontar' o número em suas partes: 34.521 = 30.000 + 4.000 + 500 + 20 + 1. Isso ajuda a entender o valor de cada algarismo." },
        { tipo: "titulo", texto: "Comparando números grandes" },
        { tipo: "paragrafo", texto: "Para comparar, conte primeiro quantos algarismos cada número tem: o de mais casas é maior (se não houver zeros à esquerda). Tendo o mesmo número de casas, compare algarismo por algarismo, da esquerda para a direita." },
        { tipo: "exemplo", texto: "72.500 > 9.999 (5 casas vencem 4 casas). E 72.500 vs 72.400? Mesmas casas; compare da esquerda: 7=7, 2=2, 5>4, então 72.500 > 72.400." },
        { tipo: "atencao", texto: "O zero no meio muda tudo: 40.007 tem 40 mil e 7 unidades; não é 'quatro mil e sete'!" }
      ],
      atividade: [
        { pergunta: "Como se lê o número 45.000?", alternativas: ["Quatro mil", "Quatrocentos e cinco mil", "Quatro mil e quinhentos", "Quarenta e cinco mil"], correta: 3, explicacao: "45.000 tem 4 DM e 5 UM: quarenta e cinco mil." },
        { pergunta: "A decomposição de 23.400 é...", alternativas: ["200 + 34", "20.000 + 3.000 + 400", "2.000 + 3.400", "23.000 + 4.000"], correta: 1, explicacao: "2 DM (20.000) + 3 UM (3.000) + 4 C (400)." },
        { pergunta: "Qual número é MAIOR?", alternativas: ["10.001", "9.998", "10.000", "9.999"], correta: 0, explicacao: "10.001 é o único com 5 algarismos e o maior valor." },
        { pergunta: "No número 58.731, o algarismo 8 vale...", alternativas: ["8 unidades", "800", "8.000", "80"], correta: 2, explicacao: "O 8 está na casa das unidades de milhar: 8.000." }
      ]
    },
    {
      id: "f1-a4-mat-2",
      titulo: "Frações equivalentes e números decimais",
      blocos: [
        { tipo: "paragrafo", texto: "Frações dividem o todo em partes iguais. E os números decimais são outra forma de representar partes do todo, usando a vírgula." },
        { tipo: "titulo", texto: "Frações equivalentes" },
        { tipo: "paragrafo", texto: "Frações equivalentes representam a MESMA quantidade, apesar de parecerem diferentes: 1/2 = 2/4 = 4/8. Multiplicando ou dividindo numerador e denominador pelo mesmo número, a fração continua a mesma quantidade." },
        { tipo: "exemplo", texto: "Meia pizza: se cortar em 2 pedaços e comer 1 (1/2), ou cortar em 4 e comer 2 (2/4) — a pizza comida é a mesma!" },
        { tipo: "titulo", texto: "Do décimo ao centésimo" },
        { tipo: "paragrafo", texto: "Quando dividimos o todo em 10 partes, cada parte é 1/10 = 0,1 (um décimo). Em 100 partes, cada uma é 1/100 = 0,01 (um centésimo). A vírgula marca essa transição: 0,5 é metade; 0,25 é um quarto." },
        { tipo: "lista", itens: ["1/2 = 0,5", "1/4 = 0,25", "3/4 = 0,75", "1/10 = 0,1", "1/100 = 0,01"] },
        { tipo: "titulo", texto: "Comparando decimais" },
        { tipo: "paragrafo", texto: "Para comparar 0,7 e 0,25, alinhe as casas decimais: 0,70 e 0,25. Agora compare: 70 centésimos > 25 centésimos. Então 0,7 > 0,25." },
        { tipo: "atencao", texto: "0,7 é MAIOR que 0,25, apesar de 7 parecer menor que 25! Sempre compare pelo valor da casa decimal, não pelos algarismos crus." }
      ],
      atividade: [
        { pergunta: "Qual fração é equivalente a 1/2?", alternativas: ["3/6", "1/4", "2/5", "2/3"], correta: 0, explicacao: "2/4, 3/6, 4/8... todas equivalem a 1/2." },
        { pergunta: "Quanto é 1/4 em decimal?", alternativas: ["0,10", "0,25", "0,40", "0,75"], correta: 1, explicacao: "Um quarto do todo é 0,25 (25 centésimos)." },
        { pergunta: "Qual é MAIOR: 0,8 ou 0,45?", alternativas: ["0,8", "depende", "são iguais", "0,45"], correta: 0, explicacao: "0,80 > 0,45: oitenta centésimos vencem quarenta e cinco." },
        { pergunta: "3/4 do bolo comido significa...", alternativas: ["um quarto restante", "bolo dobrado", "nada restante", "meio bolo"], correta: 0, explicacao: "Se 3/4 foram comidos, resta 1/4 do bolo." }
      ]
    },
    {
      id: "f1-a4-mat-3",
      titulo: "Perímetro e área de retângulos",
      blocos: [
        { tipo: "paragrafo", texto: "Perímetro é a medida do CONTORNO de uma figura, como uma cerca em volta do terreno. Área é a medida da SUPERFÍCIE interna, como o gramado dentro da cerca." },
        { tipo: "titulo", texto: "Calculando o perímetro" },
        { tipo: "paragrafo", texto: "Para achar o perímetro, some todos os lados. No retângulo, os lados opostos são iguais: P = 2 × (base + altura)." },
        { tipo: "exemplo", texto: "Um retângulo de 6 m por 4 m: P = 6 + 4 + 6 + 4 = 20 metros de cerca." },
        { tipo: "titulo", texto: "Calculando a área do retângulo" },
        { tipo: "paragrafo", texto: "A área é base × altura. Pense em quadradinhos de 1 m² preenchendo o chão: em 6 colunas de 4 quadradinhos, são 24 quadradinhos." },
        { tipo: "exemplo", texto: "A = 6 × 4 = 24 metros quadrados (m²) de gramado." },
        { tipo: "titulo", texto: "Quadrado e o triângulo" },
        { tipo: "lista", itens: ["Quadrado: P = 4 × lado; A = lado × lado", "Retângulo: P = 2 × (b + h); A = b × h", "Unidades: perímetro em metros (m); área em metros quadrados (m²)"] },
        { tipo: "dica", texto: "Dois terrenos podem ter o mesmo perímetro e áreas diferentes! Um 10×2 e um 6×6 ambos têm perímetro 24 m, mas as áreas são 20 m² e 36 m²." },
        { tipo: "atencao", texto: "Não esqueça as unidades: perímetro em m (ou cm), área em m² (ou cm²). Esquecer o 'quadrado' da área é erro clássico!" }
      ],
      atividade: [
        { pergunta: "O perímetro de um quadrado de lado 5 cm é...", alternativas: ["10 cm", "25 cm", "20 cm", "50 cm"], correta: 2, explicacao: "P = 4 × 5 = 20 cm (soma dos 4 lados)." },
        { pergunta: "A área de um retângulo de 8 m por 3 m é...", alternativas: ["24 m²", "11 m²", "30 m²", "22 m²"], correta: 0, explicacao: "A = 8 × 3 = 24 m²." },
        { pergunta: "Perímetro mede...", alternativas: ["a superfície interna", "o contorno da figura", "o peso", "o volume"], correta: 1, explicacao: "Perímetro é a medida da borda, do contorno." },
        { pergunta: "Um terreno de 7 m por 7 m tem área de...", alternativas: ["77 m²", "49 m²", "28 m²", "14 m²"], correta: 1, explicacao: "7 × 7 = 49 m² (é um quadrado: lado × lado)." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Como se lê 60.050?", alternativas: ["Sessenta mil e cinquenta", "Sessenta e cinco mil", "Seiscentos e cinquenta", "Seis mil e cinquenta"], correta: 0, explicacao: "6 DM + 5 D: sessenta mil e cinquenta." },
      { pergunta: "A decomposição de 12.307 é...", alternativas: ["1.000 + 2.307", "12.000 + 307", "12.300 + 70", "10.000 + 2.000 + 300 + 7"], correta: 3, explicacao: "1 DM + 2 UM + 3 C + 0 D + 7 U." },
      { pergunta: "Qual fração é equivalente a 2/4?", alternativas: ["2/8", "1/2", "3/4", "1/3"], correta: 1, explicacao: "2/4 simplificado é 1/2." },
      { pergunta: "Quanto é 0,5 + 0,25?", alternativas: ["0,70", "0,75", "7,5", "0,30"], correta: 1, explicacao: "0,50 + 0,25 = 0,75." },
      { pergunta: "O perímetro de um retângulo 9 cm × 2 cm é...", alternativas: ["27 cm", "11 cm", "18 cm", "22 cm"], correta: 3, explicacao: "P = 2 × (9 + 2) = 22 cm." },
      { pergunta: "A área de um quadrado de lado 6 m é...", alternativas: ["36 m²", "24 m²", "66 m²", "12 m²"], correta: 0, explicacao: "A = 6 × 6 = 36 m²." }
    ]
  },
  exameFinal: [
    { pergunta: "No número 73.402, o algarismo 3 está na casa das...", alternativas: ["unidades de milhar", "centenas", "dezenas de milhar", "unidades"], correta: 0, explicacao: "7 DM, 3 UM, 4 C, 0 D, 2 U: o 3 vale 3.000." },
    { pergunta: "Frações equivalentes representam...", alternativas: ["quantidades diferentes", "a mesma quantidade", "soma de frações", "números inteiros"], correta: 1, explicacao: "1/2, 2/4, 3/6... mesma quantidade, escritas diferentes." },
    { pergunta: "Qual decimal equivale a 7/10?", alternativas: ["7,0", "0,7", "0,07", "70"], correta: 1, explicacao: "Sete décimos = 0,7." },
    { pergunta: "Comparando 0,35 e 0,4:", alternativas: ["não dá para comparar", "0,35 > 0,4", "são iguais", "0,35 < 0,4"], correta: 3, explicacao: "0,35 vs 0,40: quarenta centésimos > trinta e cinco." },
    { pergunta: "Uma piscina de 10 m × 5 m tem perímetro de...", alternativas: ["25 m", "15 m", "30 m", "50 m"], correta: 2, explicacao: "P = 2 × (10 + 5) = 30 m (a área seria 50 m²)." }
  ]
};
