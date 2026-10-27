window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a3-mat"] = {
  aulas: [
    {
      id: "f1-a3-mat-1",
      titulo: "Multiplicação e tabuadas até 9",
      blocos: [
        { tipo: "paragrafo", texto: "A multiplicação é um jeito esperto de somar o mesmo número várias vezes. Em vez de escrever 4 + 4 + 4 + 4, podemos escrever 4 × 4. Muito mais rápido!" },
        { tipo: "titulo", texto: "Multiplicar é somar várias vezes" },
        { tipo: "paragrafo", texto: "Quando multiplicamos, o primeiro número diz quantas vezes vamos somar o segundo. Então 3 × 5 quer dizer: três vezes o número 5, ou seja, 5 + 5 + 5, que dá 15. O sinal da multiplicação é o ×, os números que multiplicamos se chamam fatores e o resultado se chama produto." },
        { tipo: "exemplo", texto: "Uma caixa tem 4 lápis. Quantos lápis há em 3 caixas iguais? É 4 × 3 = 12 lápis. É a mesma coisa que 4 + 4 + 4 = 12. Aqui os fatores são 4 e 3, e o produto é 12." },
        { tipo: "titulo", texto: "As tabuadas" },
        { tipo: "lista", itens: ["Tabuada do 2: 2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6, 2 × 4 = 8, 2 × 5 = 10...", "Tabuada do 5: 5 × 1 = 5, 5 × 2 = 10, 5 × 3 = 15, 5 × 4 = 20, 5 × 5 = 25...", "Tabuada do 9: 9 × 1 = 9, 9 × 2 = 18, 9 × 3 = 27, 9 × 4 = 36, 9 × 5 = 45..."] },
        { tipo: "paragrafo", texto: "Na tabuada do 5, todo produto termina em 5 ou em 0. Na tabuada do 9, olhe o resultado: os algarismos somados sempre dão 9! Em 9 × 4 = 36, temos 3 + 6 = 9. Que mágica!" },
        { tipo: "dica", texto: "Treine um pouco todo dia, cantando ou brincando de adivinhar a tabuada. Quem pratica todos os dias nunca esquece!" }
      ],
      atividade: [
        { pergunta: "Quanto é 4 × 3?", alternativas: ["12", "7", "34", "9"], correta: 0, explicacao: "4 × 3 é a mesma coisa que 4 + 4 + 4 = 12." },
        { pergunta: "Quanto é 5 × 6?", alternativas: ["11", "25", "56", "30"], correta: 3, explicacao: "5 × 6 = 30, pois 5 + 5 + 5 + 5 + 5 + 5 = 30." },
        { pergunta: "A expressão 2 × 8 é igual a qual soma?", alternativas: ["8 + 8", "2 + 2 + 2", "2 + 8", "8 + 8 + 8"], correta: 0, explicacao: "2 × 8 quer dizer duas vezes o 8, então 8 + 8 = 16." },
        { pergunta: "Quantas rodas têm 5 bicicletas, se cada uma tem 2 rodas?", alternativas: ["12 rodas", "10 rodas", "25 rodas", "7 rodas"], correta: 1, explicacao: "5 × 2 = 10 rodas." }
      ]
    },
    {
      id: "f1-a3-mat-2",
      titulo: "Divisão: exata e com resto",
      blocos: [
        { tipo: "paragrafo", texto: "A divisão serve para repartir coisas em partes iguais. Se temos 12 balas e 3 crianças, dividimos as balas para que cada criança receba a mesma quantidade." },
        { tipo: "titulo", texto: "Repartindo em partes iguais" },
        { tipo: "paragrafo", texto: "O sinal da divisão é o ÷. Em 12 ÷ 3 = 4, dizemos: doze dividido por três é igual a quatro. Cada criança fica com 4 balas, e ninguém fica triste!" },
        { tipo: "exemplo", texto: "18 figurinhas para 6 amigos: 18 ÷ 6 = 3. Cada amigo recebe 3 figurinhas. Podemos conferir com a multiplicação: 6 × 3 = 18. Deu certo!" },
        { tipo: "titulo", texto: "Divisão exata e divisão com resto" },
        { tipo: "paragrafo", texto: "Às vezes a divisão sai perfeita, como 10 ÷ 2 = 5. Isso é divisão exata. Outras vezes sobra um pedacinho, que chamamos de resto." },
        { tipo: "exemplo", texto: "13 brigadeiros para 2 crianças: 13 ÷ 2 = 6 com resto 1. Cada criança recebe 6 brigadeiros, e sobra 1 brigadeiro no prato!" },
        { tipo: "lista", itens: ["Dividendo: o número que vamos repartir (as 13 balas).", "Divisor: por quantos grupos vamos dividir (as 2 crianças).", "Quociente: o resultado, o que cada um recebe (6 balas).", "Resto: o que sobra no final (1 bala)."] }
      ],
      atividade: [
        { pergunta: "Quanto é 10 ÷ 2?", alternativas: ["4", "5", "8", "6"], correta: 1, explicacao: "10 ÷ 2 = 5, porque 5 × 2 = 10." },
        { pergunta: "Quanto é 14 ÷ 4?", alternativas: ["5 com resto 1", "2 com resto 6", "4 com resto 1", "3 com resto 2"], correta: 3, explicacao: "4 × 3 = 12, e 14 - 12 = 2. Então 14 ÷ 4 = 3 com resto 2." },
        { pergunta: "Quanto é 18 ÷ 3?", alternativas: ["6", "9", "7", "5"], correta: 0, explicacao: "18 ÷ 3 = 6, porque 6 × 3 = 18." },
        { pergunta: "15 balas divididas igualmente entre 5 amigos: quantas balas cada um recebe?", alternativas: ["2 balas", "4 balas", "5 balas", "3 balas"], correta: 3, explicacao: "15 ÷ 5 = 3. Cada amigo recebe 3 balas." }
      ]
    },
    {
      id: "f1-a3-mat-3",
      titulo: "Frações: partes do todo",
      blocos: [
        { tipo: "paragrafo", texto: "Quando dividimos algo inteiro em pedaços iguais, cada pedaço é uma fração. Fração é um pedacinho de um todo!" },
        { tipo: "titulo", texto: "Uma pizza dividida" },
        { tipo: "paragrafo", texto: "Imagine uma pizza cortada em 4 pedaços iguais. Se você come 1 pedaço, comeu um quarto da pizza, que escrevemos assim: 1/4. Se comeu 2 pedaços, comeu 2/4." },
        { tipo: "exemplo", texto: "Um bolo cortado em 8 pedaços iguais e você comeu 3: você comeu 3/8 do bolo. O 3 diz quantos pedaços você comeu, e o 8 diz em quantos pedaços o bolo foi dividido." },
        { tipo: "titulo", texto: "Numerador e denominador" },
        { tipo: "paragrafo", texto: "Na fração 2/5, o número de cima (2) é o numerador: ele conta as partes escolhidas. O número de baixo (5) é o denominador: ele conta em quantas partes iguais o todo foi dividido." },
        { tipo: "lista", itens: ["1/2 é a metade: o todo dividido em 2 partes iguais.", "1/3 é um terço: o todo dividido em 3 partes iguais.", "1/4 é um quarto: o todo dividido em 4 partes iguais."] },
        { tipo: "paragrafo", texto: "Para comparar frações com o mesmo denominador, ganha quem tiver o maior numerador: 2/3 é maior que 1/3, porque 2 pedaços são mais que 1 pedaço. Mas cuidado com a pegadinha: dividindo o todo em mais partes, cada parte fica menor! Por isso 1/2 de uma pizza é MAIOR que 1/4 da mesma pizza." }
      ],
      atividade: [
        { pergunta: "Uma pizza foi dividida em 4 pedaços iguais e João comeu 1 pedaço. Que fração João comeu?", alternativas: ["1/4", "1/2", "4/1", "1/3"], correta: 0, explicacao: "O todo tem 4 partes e 1 foi comida: 1/4, um quarto." },
        { pergunta: "Qual fração representa a METADE de algo?", alternativas: ["3/4", "2/3", "1/2", "1/4"], correta: 2, explicacao: "A metade é 1/2: o todo dividido em 2 partes iguais." },
        { pergunta: "Qual é a fração MAIOR?", alternativas: ["são iguais", "1/3", "não sei comparar", "2/3"], correta: 3, explicacao: "Com o mesmo denominador, vence o maior numerador: 2/3 é maior que 1/3." },
        { pergunta: "Na fração 3/4, o que o número 4 indica?", alternativas: ["quantos anos você tem", "quantos pedaços foram comidos", "a cor do bolo", "em quantas partes iguais o todo foi dividido"], correta: 3, explicacao: "O denominador (4) mostra em quantas partes iguais o todo foi dividido." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 7 × 8?", alternativas: ["54", "56", "63", "48"], correta: 1, explicacao: "7 × 8 = 56." },
      { pergunta: "Quanto é 24 ÷ 6?", alternativas: ["6", "4", "5", "3"], correta: 1, explicacao: "24 ÷ 6 = 4, porque 6 × 4 = 24." },
      { pergunta: "Quanto é 17 ÷ 5?", alternativas: ["3 com resto 1", "4 com resto 1", "5 com resto 2", "3 com resto 2"], correta: 3, explicacao: "5 × 3 = 15, e sobram 2. Então é 3 com resto 2." },
      { pergunta: "Uma barra de chocolate tem 10 pedaços iguais e Ana comeu 5. Que fração Ana comeu?", alternativas: ["5/10", "10/5", "5/1", "1/10"], correta: 0, explicacao: "5 pedaços de 10: 5/10, que é a metade da barra." },
      { pergunta: "Quanto é 3 × 9?", alternativas: ["32", "24", "27", "18"], correta: 2, explicacao: "3 × 9 = 27, pois 9 + 9 + 9 = 27." },
      { pergunta: "Quanto é 36 ÷ 4?", alternativas: ["10", "8", "9", "7"], correta: 2, explicacao: "36 ÷ 4 = 9, porque 9 × 4 = 36." }
    ]
  },
  exameFinal: [
    { pergunta: "Quanto é 6 × 6?", alternativas: ["66", "12", "30", "36"], correta: 3, explicacao: "6 × 6 = 36." },
    { pergunta: "Quanto é 20 ÷ 5?", alternativas: ["3", "4", "10", "5"], correta: 1, explicacao: "20 ÷ 5 = 4, porque 4 × 5 = 20." },
    { pergunta: "Quanto é 9 × 4?", alternativas: ["36", "32", "40", "27"], correta: 0, explicacao: "9 × 4 = 36, pois 9 + 9 + 9 + 9 = 36." },
    { pergunta: "Uma pizza tem 8 pedaços iguais e 3 foram comidos. Que fração sobrou?", alternativas: ["8/3", "1/8", "5/8", "3/8"], correta: 2, explicacao: "Se 3 de 8 foram comidos, sobraram 5: fração 5/8." },
    { pergunta: "Quanto é 45 ÷ 9?", alternativas: ["6", "7", "4", "5"], correta: 3, explicacao: "45 ÷ 9 = 5, porque 9 × 5 = 45." }
  ]
};
