window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f1-a2-mat"] = {
  aulas: [
    {
      id: "f1-a2-mat-1",
      titulo: "Adição e subtração até 100 com reagrupamento",
      blocos: [
        { tipo: "paragrafo", texto: "Agora as contas ficam mais desafiadoras: vamos somar e subtrair números em que as unidades passam de 9 ou faltam!" },
        { tipo: "titulo", texto: "Somando com reagrupamento" },
        { tipo: "paragrafo", texto: "Quando as unidades somadas passam de 9, transformamos 10 unidades em 1 dezena. Isso é o reagrupamento (também chamado de 'vai um')." },
        { tipo: "exemplo", texto: "47 + 38: unidades 7 + 8 = 15. Guardamos 5 e reagrupamos 10 unidades virando 1 dezena extra. Dezenas: 4 + 3 + 1 = 8. Resultado: 85." },
        { tipo: "titulo", texto: "Subtraindo com reagrupamento" },
        { tipo: "paragrafo", texto: "Na subtração, quando a unidade de cima é menor que a de baixo, pegamos emprestada 1 dezena e quebramos em 10 unidades." },
        { tipo: "exemplo", texto: "52 − 27: 2 é menor que 7. Pegamos 1 dezena do 5 (que vira 4) e juntamos às unidades: 12 − 7 = 5. Dezenas: 4 − 2 = 2. Resultado: 25." },
        { tipo: "dica", texto: "Sempre comece a conta pelas UNIDADES (coluna da direita) e depois vá para as dezenas." },
        { tipo: "atencao", texto: "Esquecer o 'vai um' é o erro mais comum! Anote a dezena extra bem pequena em cima da coluna das dezenas." }
      ],
      atividade: [
        { pergunta: "Quanto é 28 + 15?", alternativas: ["53", "43", "44", "33"], correta: 1, explicacao: "8 + 5 = 13 (reagrupa 1 dezena); 2 + 1 + 1 = 4. Resultado: 43." },
        { pergunta: "Quanto é 63 − 28?", alternativas: ["44", "36", "45", "35"], correta: 3, explicacao: "Pega emprestado: 13 − 8 = 5; 5 − 2 = 3. Resultado: 35." },
        { pergunta: "Em 36 + 47, o reagrupamento acontece porque...", alternativas: ["os números são grandes", "sempre acontece", "6 + 7 = 13, passa de 9", "3 + 4 = 7"], correta: 2, explicacao: "13 unidades viram 3 unidades + 1 dezena reagrupada." },
        { pergunta: "Quanto é 90 − 45?", alternativas: ["35", "50", "45", "55"], correta: 2, explicacao: "Pega emprestado: 10 − 5 = 5; 8 − 4 = 4. Resultado: 45." }
      ]
    },
    {
      id: "f1-a2-mat-2",
      titulo: "Multiplicação: soma de parcelas iguais, dobro e metade",
      blocos: [
        { tipo: "paragrafo", texto: "Multiplicar é uma forma esperta de somar quantidades IGUAIS várias vezes." },
        { tipo: "titulo", texto: "A ideia da multiplicação" },
        { tipo: "exemplo", texto: "4 × 3 é o mesmo que 3 + 3 + 3 + 3 = 12. Também pode ser 4 + 4 + 4 = 12. Multiplicação é soma de parcelas iguais!" },
        { tipo: "paragrafo", texto: "Os números da multiplicação têm nomes: 4 × 3 = 12. O 4 e o 3 são os fatores e o 12 é o produto." },
        { tipo: "titulo", texto: "O dobro" },
        { tipo: "paragrafo", texto: "O dobro de um número é ele multiplicado por 2. Dobro de 6 é 12 (6 × 2 = 12). É como ter duas vezes a mesma coisa." },
        { tipo: "titulo", texto: "A metade" },
        { tipo: "paragrafo", texto: "A metade é repartir em 2 partes iguais. Metade de 12 é 6. A metade é o contrário do dobro: se o dobro de 6 é 12, a metade de 12 é 6." },
        { tipo: "lista", itens: ["Dobro de 5 = 10", "Dobro de 25 = 50", "Metade de 20 = 10", "Metade de 100 = 50"] },
        { tipo: "atencao", texto: "Todo número tem dobro, mas só os números PARES (0, 2, 4, 6, 8...) têm metade exata e inteira. Metade de 7 é 3 e meia (3,5)." }
      ],
      atividade: [
        { pergunta: "Quanto é 5 × 4?", alternativas: ["24", "20", "16", "9"], correta: 1, explicacao: "5 × 4 = 4 + 4 + 4 + 4 + 4 = 20." },
        { pergunta: "Qual soma é IGUAL a 3 × 6?", alternativas: ["6 + 3", "6 + 6 + 6", "3 + 3 + 3", "3 + 3"], correta: 1, explicacao: "3 × 6 é três vezes o 6: 6 + 6 + 6 = 18." },
        { pergunta: "O dobro de 18 é...", alternativas: ["36", "9", "38", "28"], correta: 0, explicacao: "18 × 2 = 36." },
        { pergunta: "A metade de 40 é...", alternativas: ["80", "30", "25", "20"], correta: 3, explicacao: "40 repartido em 2 partes iguais dá 20 para cada." }
      ]
    },
    {
      id: "f1-a2-mat-3",
      titulo: "Nosso dinheiro: moedas, cédulas e problemas",
      blocos: [
        { tipo: "paragrafo", texto: "O dinheiro do Brasil é o REAL (R$). Com ele compramos tudo: pão, brinquedos e livros. Saber usar dinheiro é matemática de verdade!" },
        { tipo: "titulo", texto: "Moedas e cédulas" },
        { tipo: "lista", itens: ["Moedas: 5, 10, 25 e 50 centavos, e 1 real", "Cédulas: 2, 5, 10, 20, 50, 100 e 200 reais", "100 centavos = 1 real"] },
        { tipo: "titulo", texto: "Comprando e recebendo troco" },
        { tipo: "paragrafo", texto: "Quando compramos, somamos os preços para saber o total. Se pagamos com mais dinheiro do que o total, recebemos o TROCO de volta (uma subtração!)." },
        { tipo: "exemplo", texto: "Você compra um caderno de R$ 12 e um lápis de R$ 3. Total: 12 + 3 = R$ 15. Você paga com uma cédula de R$ 20. Troco: 20 − 15 = R$ 5." },
        { tipo: "titulo", texto: "Juntando dinheiro" },
        { tipo: "paragrafo", texto: "Para comprar algo caro, muita gente junta dinheiro aos poucos. Se você guarda R$ 2 por semana, em 5 semanas terá 2 × 5 = R$ 10." },
        { tipo: "atencao", texto: "Cuidado ao somar: R$ 1,50 + R$ 1,50 = R$ 3,00 (duas moedas de 1 real e uma de 50 centavos... na verdade 50 + 50 = 1 real, mais 2 reais = 3 reais)." }
      ],
      atividade: [
        { pergunta: "Quantos centavos há em 1 real?", alternativas: ["10", "50", "1000", "100"], correta: 3, explicacao: "1 real = 100 centavos." },
        { pergunta: "Você compra uma bala de R$ 0,50 e paga com R$ 1. Qual é o troco?", alternativas: ["R$ 0,50", "R$ 1,50", "R$ 0,25", "R$ 2,00"], correta: 0, explicacao: "Troco: 1,00 − 0,50 = R$ 0,50." },
        { pergunta: "Uma pipa custa R$ 8 e um carretel de linha R$ 4. Quanto custam juntos?", alternativas: ["R$ 14", "R$ 11", "R$ 10", "R$ 12"], correta: 3, explicacao: "8 + 4 = R$ 12." },
        { pergunta: "Se você guarda R$ 3 por semana, quanto terá em 4 semanas?", alternativas: ["R$ 7", "R$ 16", "R$ 12", "R$ 10"], correta: 2, explicacao: "3 × 4 = R$ 12." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 37 + 26?", alternativas: ["63", "62", "57", "53"], correta: 0, explicacao: "7 + 6 = 13 (reagrupa); 3 + 2 + 1 = 6. Resultado: 63." },
      { pergunta: "Quanto é 71 − 34?", alternativas: ["43", "27", "47", "37"], correta: 3, explicacao: "Pega emprestado: 11 − 4 = 7; 6 − 3 = 3. Resultado: 37." },
      { pergunta: "Quanto é 6 × 5?", alternativas: ["30", "11", "25", "35"], correta: 0, explicacao: "6 × 5 = 5 + 5 + 5 + 5 + 5 + 5 = 30." },
      { pergunta: "O dobro de 35 é...", alternativas: ["75", "60", "17", "70"], correta: 3, explicacao: "35 × 2 = 70." },
      { pergunta: "A metade de 90 é...", alternativas: ["50", "180", "30", "45"], correta: 3, explicacao: "90 repartido em 2 partes iguais: 45." },
      { pergunta: "Uma bola custa R$ 15 e você paga com R$ 20. O troco é...", alternativas: ["R$ 5", "R$ 15", "R$ 10", "R$ 35"], correta: 0, explicacao: "20 − 15 = R$ 5 de troco." }
    ]
  },
  exameFinal: [
    { pergunta: "No reagrupamento da adição, 10 unidades viram...", alternativas: ["1 centena", "10 dezenas", "1 dezena", "somem"], correta: 2, explicacao: "10 unidades formam exatamente 1 dezena." },
    { pergunta: "Quanto é 45 + 38?", alternativas: ["93", "82", "73", "83"], correta: 3, explicacao: "5 + 8 = 13; 4 + 3 + 1 = 8. Resultado: 83." },
    { pergunta: "3 × 7 é igual a qual soma?", alternativas: ["7 + 7", "7 + 7 + 7", "3 + 7", "3 + 3 + 3"], correta: 1, explicacao: "3 × 7 significa três vezes 7." },
    { pergunta: "Se o dobro de um número é 22, o número é...", alternativas: ["44", "11", "12", "10"], correta: 1, explicacao: "11 × 2 = 22; a metade de 22 é 11." },
    { pergunta: "Compras de R$ 7 e R$ 9; pagamento com R$ 20. O troco é...", alternativas: ["R$ 16", "R$ 4", "R$ 6", "R$ 5"], correta: 1, explicacao: "Total: 7 + 9 = 16. Troco: 20 − 16 = R$ 4." }
  ]
};
