window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a5-mat"] = {
  aulas: [
    {
      id: "f1-a5-mat-1",
      titulo: "Operações com números decimais",
      blocos: [
        { tipo: "paragrafo", texto: "Números decimais estão em todo lugar: no preço do pão (R$ 7,50), na nota da prova (8,75) e no peso da mochila (3,2 kg). Vamos aprender a fazer contas com eles!" },
        { tipo: "titulo", texto: "Adição e subtração" },
        { tipo: "paragrafo", texto: "O segredo é ALINHAR AS VÍRGULAS, uma embaixo da outra. Complete com zeros se precisar: 4,5 vira 4,50." },
        { tipo: "exemplo", texto: "4,5 + 12,75 → alinhe: 04,50 + 12,75 = 17,25. E 12,75 − 4,5 = 12,75 − 04,50 = 8,25." },
        { tipo: "titulo", texto: "Multiplicação" },
        { tipo: "paragrafo", texto: "Multiplique normalmente, sem vírgula, e conte no final quantas casas decimais existiam nos fatores juntas. Esse é o número de casas do resultado." },
        { tipo: "exemplo", texto: "2,3 × 1,4: multiplique 23 × 14 = 322. Fatores tinham 1 + 1 = 2 casas decimais. Resultado: 3,22." },
        { tipo: "titulo", texto: "Divisão" },
        { tipo: "paragrafo", texto: "Quando o divisor tem vírgula, iguale as casas: multiplique ambos por 10, 100... até o divisor ficar inteiro. 7,2 ÷ 0,8 = 72 ÷ 8 = 9." },
        { tipo: "lista", itens: ["0,5 é a metade de 1", "0,25 é um quarto", "Multiplicar por 0,1 divide por 10 (3,4 × 0,1 = 0,34)", "Multiplicar por 0,5 é tirar a metade (80 × 0,5 = 40)"] },
        { tipo: "atencao", texto: "0,7 × 0,5 = 0,35 (e não 3,5!): duas casas decimais no total. Sempre conte as casas antes de colocar a vírgula." }
      ],
      atividade: [
        { pergunta: "Quanto é 3,4 + 2,75?", alternativas: ["5,79", "6,15", "5,15", "6,05"], correta: 1, explicacao: "Alinhando as vírgulas: 3,40 + 2,75 = 6,15." },
        { pergunta: "Quanto é 10 − 4,6?", alternativas: ["6,4", "6,6", "5,6", "5,4"], correta: 3, explicacao: "10,0 − 4,6 = 5,4." },
        { pergunta: "Quanto é 0,3 × 0,4?", alternativas: ["12", "1,2", "0,7", "0,12"], correta: 3, explicacao: "3 × 4 = 12; duas casas decimais: 0,12." },
        { pergunta: "Quanto é 8,1 ÷ 0,9?", alternativas: ["9", "0,9", "90", "0,09"], correta: 0, explicacao: "Iguale as casas: 81 ÷ 9 = 9." }
      ]
    },
    {
      id: "f1-a5-mat-2",
      titulo: "Porcentagem: descontos e acréscimos",
      blocos: [
        { tipo: "paragrafo", texto: "Porcentagem é uma fração de denominador 100. O símbolo % lê-se 'por cento': 25% significa 25 de cada 100, ou 0,25 do total." },
        { tipo: "titulo", texto: "Como calcular" },
        { tipo: "paragrafo", texto: "Para achar x% de um número, transforme a porcentagem em decimal e multiplique. 10% = 0,1; 25% = 0,25; 50% = 0,5." },
        { tipo: "exemplo", texto: "Um tênis de R$ 200 com 25% de desconto: 200 × 0,25 = 50 reais de desconto. Você paga 200 − 50 = R$ 150." },
        { tipo: "titulo", texto: "Porcentagens especiais" },
        { tipo: "lista", itens: ["10% = dividir por 10 (10% de 350 = 35)", "50% = tirar a metade (50% de 90 = 45)", "25% = metade da metade (25% de 80 = 20)", "100% = o todo inteiro (100% de 45 = 45)"] },
        { tipo: "titulo", texto: "Aumento e juros" },
        { tipo: "paragrafo", texto: "Porcentagem também pode acrescentar: um aumento de 10% no salário de R$ 1.000 soma 100 reais, virando R$ 1.100. Juros do banco funcionam assim também." },
        { tipo: "dica", texto: "Para juntar descontos seguidos, cuidado: 20% + 10% não é 30% do preço! Calcule um de cada vez sobre o valor atualizado." },
        { tipo: "atencao", texto: "25% de 40 é 10; mas 25% DE 400 é 100. A porcentagem sempre depende do valor total sobre o qual ela incide." }
      ],
      atividade: [
        { pergunta: "Quanto é 10% de R$ 60?", alternativas: ["R$ 10", "R$ 0,60", "R$ 60", "R$ 6"], correta: 3, explicacao: "60 ÷ 10 = R$ 6." },
        { pergunta: "Um livro de R$ 80 com 50% de desconto custa...", alternativas: ["R$ 60", "R$ 40", "R$ 50", "R$ 30"], correta: 1, explicacao: "Metade de 80 é 40." },
        { pergunta: "Quanto é 25% de R$ 200?", alternativas: ["R$ 75", "R$ 25", "R$ 50", "R$ 100"], correta: 2, explicacao: "200 × 0,25 = 50 (metade da metade de 200)." },
        { pergunta: "Uma conta de R$ 100 com acréscimo de 10% fica...", alternativas: ["R$ 100", "R$ 110", "R$ 101", "R$ 90"], correta: 1, explicacao: "100 + 10% de 100 (10) = R$ 110." }
      ]
    },
    {
      id: "f1-a5-mat-3",
      titulo: "Gráficos, tabelas e média",
      blocos: [
        { tipo: "paragrafo", texto: "Dados ficam mais fáceis de entender quando organizados em tabelas e gráficos. Saber lê-los é uma superpoder da vida adulta!" },
        { tipo: "titulo", texto: "Tabelas e tipos de gráficos" },
        { tipo: "lista", itens: ["Tabela: organiza os dados em linhas e colunas", "Gráfico de barras: compara quantidades com barras verticais ou horizontais", "Gráfico de linha: mostra evolução no tempo (temperatura da semana, crescimento)", "Gráfico de pizza (setores): mostra partes de um todo (como 100% dividido)"] },
        { tipo: "exemplo", texto: "Barras: faltas na semana — Seg 2, Ter 0, Qua 3, Qui 1, Sex 2. A barra da quarta é a mais alta: dia com mais faltas. Linha: se a temperatura sobe de 20 °C para 30 °C na semana, a linha sobe também." },
        { tipo: "titulo", texto: "A média simples" },
        { tipo: "paragrafo", texto: "A média é o valor que 'divide igualmente' o total. Some todos os valores e divida pela quantidade deles." },
        { tipo: "exemplo", texto: "Notas: 6, 8 e 10. Soma = 24. Quantidade = 3. Média = 24 ÷ 3 = 8,0." },
        { tipo: "dica", texto: "Antes de responder qualquer pergunta sobre gráfico, leia o título, as legendas e as escalas dos eixos. Muita gente erra por pular essa leitura!" },
        { tipo: "atencao", texto: "Cuidado com a escala: barras cortadas no eixo podem exagerar visualmente pequenas diferenças. Veja sempre os números." }
      ],
      atividade: [
        { pergunta: "O gráfico de LINHA é ideal para mostrar...", alternativas: ["nomes", "evolução no tempo", "cores", "partes de um todo"], correta: 1, explicacao: "Linhas mostram variação contínua, como temperaturas por dia." },
        { pergunta: "A média de 4, 6 e 8 é...", alternativas: ["6", "8", "18", "7"], correta: 0, explicacao: "Soma 18 ÷ 3 = 6." },
        { pergunta: "Para mostrar porcentagens de um todo, usa-se o gráfico de...", alternativas: ["linha", "colunas só", "pizza (setores)", "nenhum"], correta: 2, explicacao: "O gráfico de pizza divide 100% em fatias." },
        { pergunta: "Num gráfico de barras, a barra mais alta indica...", alternativas: ["o total", "o maior valor", "a média", "o menor valor"], correta: 1, explicacao: "Quanto maior a barra, maior a quantidade." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 5,25 + 3,75?", alternativas: ["8,00", "8,10", "8,90", "9,00"], correta: 3, explicacao: "0,25 + 0,75 = 1,00; mais 5 + 3 = 9,00." },
      { pergunta: "Quanto é 1,5 × 0,2?", alternativas: ["0,30", "0,03", "30", "3,0"], correta: 0, explicacao: "15 × 2 = 30; três casas decimais? Não: 1 + 1 = 2 casas → 0,30." },
      { pergunta: "Quanto é 20% de R$ 150?", alternativas: ["R$ 30", "R$ 20", "R$ 15", "R$ 45"], correta: 0, explicacao: "150 × 0,20 = 30." },
      { pergunta: "Uma camiseta de R$ 50 com 10% de desconto custa...", alternativas: ["R$ 35", "R$ 49", "R$ 40", "R$ 45"], correta: 3, explicacao: "Desconto de 5 reais: 50 − 5 = 45." },
      { pergunta: "O gráfico de pizza serve para...", alternativas: ["medir peso", "listar nomes", "mostrar proporções de um todo", "mostrar evolução"], correta: 2, explicacao: "As fatias representam partes do 100%." },
      { pergunta: "A média de 7, 9 e 11 é...", alternativas: ["8", "10", "9", "27"], correta: 2, explicacao: "Soma 27 ÷ 3 = 9." }
    ]
  },
  exameFinal: [
    { pergunta: "Quanto é 12,5 − 3,8?", alternativas: ["8,3", "9,7", "8,7", "9,3"], correta: 2, explicacao: "12,5 − 3,8 = 8,7." },
    { pergunta: "Quanto é 0,6 × 0,5?", alternativas: ["1,1", "0,11", "3,0", "0,30"], correta: 3, explicacao: "6 × 5 = 30; duas casas: 0,30." },
    { pergunta: "Quanto é 50% de 70 + 10% de 100?", alternativas: ["40", "45", "35", "50"], correta: 1, explicacao: "35 + 10 = 45." },
    { pergunta: "Num gráfico de barras das vendas (Jan 10, Fev 15, Mar 8), o mês com MENOS vendas é...", alternativas: ["Janeiro", "Março", "Nenhum", "Fevereiro"], correta: 1, explicacao: "A menor barra é Março (8)." },
    { pergunta: "A média de 5 provas com notas 8, 7, 10, 6 e 9 é...", alternativas: ["40", "7", "9", "8"], correta: 3, explicacao: "Soma 40 ÷ 5 = 8,0." }
  ]
};
