window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a2-mat"] = {
  aulas: [
    {
      id: "f1-a2-mat-1",
      titulo: "Adição e subtração até 100 com reagrupamento",
      blocos: [
        { tipo: "paragrafo", texto: "O reagrupamento é o mecanismo que sustenta todas as operações com números maiores que 9. Dominá-lo aqui evita erros mecânicos em porcentagem, álgebra e cálculo mais adiante." },
        { tipo: "titulo", texto: "Reagrupamento na adição" },
        { tipo: "paragrafo", texto: "Quando a soma das unidades excede 9, dez unidades são convertidas em uma dezena — o chamado 'vai um'. É a mesma lógica de trocar dez notas de 10 por uma de 100." },
        { tipo: "exemplo", texto: "47 + 38: unidades 7 + 8 = 15; reserva-se o 5 e converte-se 10 unidades em 1 dezena. Dezenas: 4 + 3 + 1 = 8. Resultado: 85." },
        { tipo: "titulo", texto: "Reagrupamento na subtração" },
        { tipo: "paragrafo", texto: "Quando a unidade do minuendo é menor que a do subtraendo, toma-se emprestada 1 dezena da casa vizinha, que é desmembrada em 10 unidades." },
        { tipo: "exemplo", texto: "52 − 27: 2 é menor que 7; toma-se 1 dezena do 5 (que passa a 4) e soma-se às unidades: 12 − 7 = 5. Dezenas: 4 − 2 = 2. Resultado: 25." },
        { tipo: "dica", texto: "Opere sempre da direita para a esquerda (unidades primeiro). Anotar o 'vai um' sobre a coluna das dezenas reduz erros de distração." },
        { tipo: "atencao", texto: "O erro mais frequente é omitir o 'vai um' na coluna das dezenas. Verificação rápida: o resultado da soma deve superar cada parcela; o da subtração, ser menor que o minuendo." }
      ],
      atividade: [
        { pergunta: "Quanto é 28 + 15?", alternativas: ["33", "43", "44", "53"], correta: 1, explicacao: "8 + 5 = 13 (reagrupa 1 dezena); 2 + 1 + 1 = 4. Resultado: 43." },
        { pergunta: "Quanto é 63 − 28?", alternativas: ["35", "45", "44", "36"], correta: 0, explicacao: "Empresta-se 1 dezena: 13 − 8 = 5; 5 − 2 = 3. Resultado: 35." },
        { pergunta: "Em 36 + 47, o reagrupamento ocorre porque...", alternativas: ["6 + 7 = 13, superando 9", "os números são grandes", "3 + 4 = 7", "sempre ocorre"], correta: 0, explicacao: "13 unidades são convertidas em 3 unidades + 1 dezena." },
        { pergunta: "Quanto é 90 − 45?", alternativas: ["55", "45", "35", "50"], correta: 1, explicacao: "Empresta-se: 10 − 5 = 5; 8 − 4 = 4. Resultado: 45." }
      ]
    },
    {
      id: "f1-a2-mat-2",
      titulo: "Multiplicação como soma de parcelas iguais",
      blocos: [
        { tipo: "paragrafo", texto: "Multiplicação é a operação que compacta somas de parcelas iguais: 4 × 3 significa quatro parcelas de 3 (ou três de 4). Essa leitura evita decorar tabuadas sem compreender o mecanismo." },
        { tipo: "titulo", texto: "Terminologia" },
        { tipo: "paragrafo", texto: "Em 4 × 3 = 12, os números 4 e 3 são os fatores e o resultado, o produto. A ordem dos fatores não altera o produto (propriedade comutativa): 4 × 3 = 3 × 4." },
        { tipo: "exemplo", texto: "Uma fatura de R$ 45 paga em 6 parcelas: 6 × 45 = 45 + 45 + 45 + 45 + 45 + 45 = 270. Somar seis vezes ou multiplicar dá o mesmo resultado — com custo mental muito diferente." },
        { tipo: "titulo", texto: "Dobro e metade" },
        { tipo: "paragrafo", texto: "O dobro é a multiplicação por 2; a metade, a divisão por 2 — operações inversas. Se o dobro de 6 é 12, a metade de 12 é 6. A metade exata e inteira existe apenas para números pares." },
        { tipo: "lista", itens: ["Dobro de 5 = 10", "Dobro de 25 = 50", "Metade de 20 = 10", "Metade de 100 = 50"] },
        { tipo: "dica", texto: "Para multiplicar por 5, multiplique por 10 e divida por 2 (5 × 18 = 180 ÷ 2 = 90). Para multiplicar por 9, multiplique por 10 e subtraia a parcela (9 × 18 = 180 − 18 = 162)." },
        { tipo: "atencao", texto: "Metade 'quebrada' é possível (metade de 7 = 3,5), mas em contextos de itens inteiros — pessoas, objetos — o resultado fracionário sinaliza erro de leitura do problema." }
      ],
      atividade: [
        { pergunta: "Quanto é 5 × 4?", alternativas: ["9", "16", "20", "24"], correta: 2, explicacao: "5 × 4 = 4 + 4 + 4 + 4 + 4 = 20." },
        { pergunta: "Qual soma equivale a 3 × 6?", alternativas: ["6 + 6 + 6", "3 + 3 + 3", "6 + 3", "3 + 3"], correta: 0, explicacao: "3 × 6 é três parcelas de 6: 6 + 6 + 6 = 18." },
        { pergunta: "O dobro de 18 é...", alternativas: ["9", "28", "36", "38"], correta: 2, explicacao: "18 × 2 = 36." },
        { pergunta: "A metade de 40 é...", alternativas: ["20", "25", "30", "80"], correta: 0, explicacao: "40 ÷ 2 = 20." }
      ]
    },
    {
      id: "f1-a2-mat-3",
      titulo: "Sistema monetário: moedas, cédulas e problemas",
      blocos: [
        { tipo: "paragrafo", texto: "A moeda brasileira é o real (R$), dividido em 100 centavos. Operar com dinheiro é aplicar adição, subtração e multiplicação em um contexto de precisão obrigatória." },
        { tipo: "titulo", texto: "Denominações" },
        { tipo: "lista", itens: ["Moedas: 5, 10, 25 e 50 centavos; R$ 1,00", "Cédulas: R$ 2, 5, 10, 20, 50, 100 e 200", "Conversão: 100 centavos = R$ 1,00"] },
        { tipo: "titulo", texto: "Pagamento e troco" },
        { tipo: "paragrafo", texto: "O total da compra é a soma dos itens. Pagando com valor superior, o troco é a diferença entre o valor pago e o total — uma subtração com reagrupamento aplicada ao cotidiano." },
        { tipo: "exemplo", texto: "Compra de R$ 12 + R$ 3 = R$ 15, paga com R$ 20. Troco: 20 − 15 = R$ 5." },
        { tipo: "titulo", texto: "Acumulação" },
        { tipo: "paragrafo", texto: "Guardar valores constantes por períodos regulares é multiplicação: R$ 2 por semana, durante 5 semanas, totaliza 2 × 5 = R$ 10. É a lógica elementar de juros e parcelamentos que será formalizada mais adiante." },
        { tipo: "dica", texto: "Ao somar valores com centavos, alinhe a vírgula como se alinham as colunas de unidades e dezenas. Desalinhamento é a maior fonte de diferença em conferência de caixa." },
        { tipo: "atencao", texto: "R$ 1,50 + R$ 1,50 = R$ 3,00 (e não R$ 2,10): 50 + 50 centavos completam 1 real, que se soma aos 2 reais." }
      ],
      atividade: [
        { pergunta: "Quantos centavos há em 1 real?", alternativas: ["10", "50", "100", "1000"], correta: 2, explicacao: "1 real = 100 centavos." },
        { pergunta: "Compra de R$ 0,50 paga com R$ 1,00. O troco é...", alternativas: ["R$ 0,25", "R$ 0,50", "R$ 1,50", "R$ 2,00"], correta: 1, explicacao: "Troco: 1,00 − 0,50 = R$ 0,50." },
        { pergunta: "Uma pipa de R$ 8 e um carretel de R$ 4 somam...", alternativas: ["R$ 10", "R$ 11", "R$ 12", "R$ 14"], correta: 2, explicacao: "8 + 4 = R$ 12." },
        { pergunta: "Guardando R$ 3 por semana, em 4 semanas acumula-se...", alternativas: ["R$ 7", "R$ 10", "R$ 12", "R$ 16"], correta: 2, explicacao: "3 × 4 = R$ 12." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 37 + 26?", alternativas: ["53", "63", "62", "57"], correta: 1, explicacao: "7 + 6 = 13 (reagrupa); 3 + 2 + 1 = 6. Resultado: 63." },
      { pergunta: "Quanto é 71 − 34?", alternativas: ["37", "43", "47", "27"], correta: 0, explicacao: "Empresta-se: 11 − 4 = 7; 6 − 3 = 3. Resultado: 37." },
      { pergunta: "Quanto é 6 × 5?", alternativas: ["11", "25", "30", "35"], correta: 2, explicacao: "Seis parcelas de 5: 30." },
      { pergunta: "O dobro de 35 é...", alternativas: ["60", "70", "75", "17"], correta: 1, explicacao: "35 × 2 = 70." },
      { pergunta: "A metade de 90 é...", alternativas: ["30", "45", "50", "180"], correta: 1, explicacao: "90 ÷ 2 = 45." },
      { pergunta: "Uma bola de R$ 15 paga com R$ 20 gera troco de...", alternativas: ["R$ 5", "R$ 10", "R$ 15", "R$ 35"], correta: 0, explicacao: "20 − 15 = R$ 5." }
    ]
  },
  exameFinal: [
    { pergunta: "No reagrupamento da adição, 10 unidades equivalem a...", alternativas: ["10 dezenas", "1 dezena", "1 centena", "nada"], correta: 1, explicacao: "Dez unidades formam exatamente uma dezena." },
    { pergunta: "Quanto é 45 + 38?", alternativas: ["73", "83", "82", "93"], correta: 1, explicacao: "5 + 8 = 13; 4 + 3 + 1 = 8. Resultado: 83." },
    { pergunta: "3 × 7 equivale à soma...", alternativas: ["7 + 7 + 7", "3 + 7", "7 + 7", "3 + 3 + 3"], correta: 0, explicacao: "Três parcelas de 7." },
    { pergunta: "Se o dobro de um número é 22, o número é...", alternativas: ["10", "11", "12", "44"], correta: 1, explicacao: "11 × 2 = 22; a metade de 22 é 11." },
    { pergunta: "Compras de R$ 7 e R$ 9 pagas com R$ 20 geram troco de...", alternativas: ["R$ 4", "R$ 5", "R$ 6", "R$ 16"], correta: 0, explicacao: "Total: 7 + 9 = 16. Troco: 20 − 16 = R$ 4." }
  ]
};
