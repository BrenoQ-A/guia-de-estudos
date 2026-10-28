window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a1-mat"] = {
  aulas: [
    {
      id: "f1-a1-mat-1",
      titulo: "Números até 20: contagem, comparação, antecessor e sucessor",
      blocos: [
        { tipo: "paragrafo", texto: "Os números naturais de 0 a 20 são a base de toda operação matemática posterior. No cotidiano adulto, eles aparecem ao conferir troco, contar dias até um prazo ou verificar itens de uma lista de compras." },
        { tipo: "titulo", texto: "Contagem e comparação" },
        { tipo: "paragrafo", texto: "Na sequência numérica, cada número é maior que todos os anteriores: 9 vem depois de 8, logo 9 > 8. Para comparar quantidades, use os sinais > (maior que), < (menor que) e = (igual)." },
        { tipo: "lista", itens: ["17 > 9: dezessete é maior que nove", "5 < 12: cinco é menor que doze", "20 = 20: os dois lados representam a mesma quantidade"] },
        { tipo: "titulo", texto: "Antecessor e sucessor" },
        { tipo: "paragrafo", texto: "O antecessor de um número é o imediatamente anterior na contagem (n − 1); o sucessor é o imediatamente seguinte (n + 1). O antecessor de 20 é 19; o sucessor de 20 é 21." },
        { tipo: "exemplo", texto: "Se um boleto vence no dia 15, o dia 14 é o antecessor e o dia 16 o sucessor. Pagar no dia do sucessor costuma gerar multa e juros — a leitura correta da sequência numérica tem consequência financeira direta." },
        { tipo: "atencao", texto: "Erro comum: supor que 11 vem antes de 9 porque o algarismo 1 é pequeno. A comparação segue a posição na sequência: 9 vem antes de 11 e, portanto, 11 é maior." }
      ],
      atividade: [
        { pergunta: "Qual é o sucessor de 19?", alternativas: ["18", "20", "21", "29"], correta: 1, explicacao: "Sucessor é o número imediatamente seguinte: 19 + 1 = 20." },
        { pergunta: "Qual número é maior que 14 e menor que 16?", alternativas: ["13", "17", "15", "12"], correta: 2, explicacao: "Na contagem, 15 vem imediatamente depois de 14 e antes de 16." },
        { pergunta: "O sinal que completa corretamente a comparação 12 ___ 8 é:", alternativas: ["< (menor que)", "= (igual)", "× (multiplicação)", "> (maior que)"], correta: 3, explicacao: "12 vem depois de 8 na contagem, portanto é maior: 12 > 8." },
        { pergunta: "Qual é o antecessor de 20?", alternativas: ["19", "21", "10", "30"], correta: 0, explicacao: "Antecessor é o número imediatamente anterior: 20 − 1 = 19." }
      ]
    },
    {
      id: "f1-a1-mat-2",
      titulo: "Dezenas e unidades: números até 99",
      blocos: [
        { tipo: "paragrafo", texto: "O sistema de numeração decimal é posicional: o valor de um algarismo depende da casa que ele ocupa. Uma dezena é um grupo de 10 unidades; por isso 47 significa 4 dezenas e 7 unidades, ou 4 × 10 + 7." },
        { tipo: "titulo", texto: "Valor posicional" },
        { tipo: "paragrafo", texto: "O algarismo da esquerda indica dezenas; o da direita, unidades. Em 63, o 6 vale 6 × 10 = 60 e o 3 vale apenas 3. Inverter as posições muda o número: 63 e 36 são quantidades diferentes." },
        { tipo: "lista", itens: ["26 = 2 dezenas e 6 unidades", "50 = 5 dezenas e 0 unidades", "81 = 8 dezenas e 1 unidade", "90 = 9 dezenas e 0 unidades"] },
        { tipo: "titulo", texto: "Comparação de números até 99" },
        { tipo: "paragrafo", texto: "Para comparar números de dois algarismos, observe primeiro as dezenas: quem tem mais dezenas é maior. Só quando as dezenas são iguais a decisão passa para as unidades." },
        { tipo: "exemplo", texto: "Uma conta de R$ 56 é mais alta que uma de R$ 43 porque 5 dezenas superam 3 dezenas, independentemente das unidades. Essa leitura rápida evita erros ao conferir faturas e extratos." },
        { tipo: "atencao", texto: "Erro comum: julgar o número pelo primeiro algarismo sem considerar a casa. Em 38 e 83, os algarismos são os mesmos, mas 83 é maior: nele, o 8 ocupa a casa das dezenas (8 × 10)." }
      ],
      atividade: [
        { pergunta: "No número 63, a quantidade de dezenas é:", alternativas: ["3", "63", "6", "36"], correta: 2, explicacao: "O algarismo 6 ocupa a casa das dezenas: 63 = 6 × 10 + 3." },
        { pergunta: "Qual número representa 7 dezenas e 2 unidades?", alternativas: ["72", "27", "702", "77"], correta: 0, explicacao: "7 dezenas (70) mais 2 unidades formam 72." },
        { pergunta: "Entre 45 e 52, o maior número é:", alternativas: ["45, porque tem mais unidades", "são iguais", "45, porque vem primeiro", "52, porque tem 5 dezenas"], correta: 3, explicacao: "52 possui 5 dezenas contra 4 de 45; mais dezenas indica número maior." },
        { pergunta: "Qual número é maior que 59 e menor que 61?", alternativas: ["58", "60", "62", "50"], correta: 1, explicacao: "60 é o sucessor de 59 e o antecessor de 61." }
      ]
    },
    {
      id: "f1-a1-mat-3",
      titulo: "Adição e subtração simples (sem reagrupamento)",
      blocos: [
        { tipo: "paragrafo", texto: "Adição é a operação de juntar quantidades; subtração é a de retirar. 'Sem reagrupamento' significa que, em cada casa (unidades e dezenas), os cálculos ficam abaixo de 10 e não há transporte de valores entre casas." },
        { tipo: "titulo", texto: "Adição sem reagrupamento" },
        { tipo: "paragrafo", texto: "Alinhe unidades sob unidades e dezenas sob dezenas e some cada casa separadamente. O resultado da adição chama-se total ou soma." },
        { tipo: "exemplo", texto: "23 + 15: unidades, 3 + 5 = 8; dezenas, 2 + 1 = 3; total 38. Em um extrato bancário, um saldo de 23 somado a um depósito de 15 resulta em 38." },
        { tipo: "titulo", texto: "Subtração sem reagrupamento" },
        { tipo: "paragrafo", texto: "Subtraia cada casa separadamente, começando pelas unidades. O resultado chama-se diferença. Para não haver reagrupamento, o algarismo das unidades do número maior deve ser maior ou igual ao do número menor." },
        { tipo: "exemplo", texto: "47 − 25: unidades, 7 − 5 = 2; dezenas, 4 − 2 = 2; diferença 22. Um saldo de 47 após um gasto de 25 deixa 22." },
        { tipo: "dica", texto: "Verifique o cálculo pela operação inversa: se 32 + 16 = 48, então 48 − 16 = 32. Atenção à ordem na subtração: 25 − 12 = 13, mas 12 − 25 não tem resultado entre os números naturais." }
      ],
      atividade: [
        { pergunta: "Quanto é 34 + 25?", alternativas: ["69", "59", "49", "511"], correta: 1, explicacao: "Unidades: 4 + 5 = 9; dezenas: 3 + 2 = 5; total 59." },
        { pergunta: "Quanto é 58 − 34?", alternativas: ["34", "14", "24", "26"], correta: 2, explicacao: "Unidades: 8 − 4 = 4; dezenas: 5 − 3 = 2; resultado 24." },
        { pergunta: "Uma conta de R$ 45 recebe um pagamento de R$ 12. O saldo restante é:", alternativas: ["R$ 57", "R$ 43", "R$ 23", "R$ 33"], correta: 3, explicacao: "45 − 12 = 33: subtraem-se unidades (5 − 2 = 3) e dezenas (4 − 1 = 3)." },
        { pergunta: "Qual operação verifica o resultado de 32 + 16 = 48?", alternativas: ["48 − 16 = 32", "48 + 32 = 80", "32 − 16 = 48", "16 × 32 = 48"], correta: 0, explicacao: "A subtração é a operação inversa da adição: 48 − 16 deve retornar 32." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 42 + 36?", alternativas: ["68", "87", "78", "714"], correta: 2, explicacao: "Unidades: 2 + 6 = 8; dezenas: 4 + 3 = 7; total 78." },
      { pergunta: "Qual é o sucessor de 9?", alternativas: ["10", "11", "8", "19"], correta: 0, explicacao: "9 + 1 = 10." },
      { pergunta: "Qual número tem 3 dezenas e 9 unidades?", alternativas: ["93", "39 dezenas", "903", "39"], correta: 3, explicacao: "3 × 10 + 9 = 39." },
      { pergunta: "Qual é o antecessor de 15?", alternativas: ["16", "14", "5", "50"], correta: 1, explicacao: "15 − 1 = 14." },
      { pergunta: "Quanto é 67 − 23?", alternativas: ["44", "46", "54", "34"], correta: 0, explicacao: "Unidades: 7 − 3 = 4; dezenas: 6 − 2 = 4; resultado 44." },
      { pergunta: "Comparando 71 e 68, é correto afirmar que:", alternativas: ["68 é maior porque termina em 8", "são iguais", "71 é maior porque tem 7 dezenas", "71 é menor porque começa com 7"], correta: 2, explicacao: "7 dezenas superam 6 dezenas, logo 71 > 68." }
    ]
  },
  exameFinal: [
    { pergunta: "Maria tem 6 dezenas de moedas e 4 moedas avulsas. O total de moedas é:", alternativas: ["610", "604", "46", "64"], correta: 3, explicacao: "6 dezenas equivalem a 60; 60 + 4 = 64." },
    { pergunta: "Quanto é 25 + 14?", alternativas: ["49", "39", "29", "310"], correta: 1, explicacao: "Unidades: 5 + 4 = 9; dezenas: 2 + 1 = 3; total 39." },
    { pergunta: "Um saldo de R$ 79 sofreu um débito de R$ 25. O saldo final é:", alternativas: ["R$ 64", "R$ 44", "R$ 54", "R$ 45"], correta: 2, explicacao: "79 − 25: unidades, 9 − 5 = 4; dezenas, 7 − 2 = 5; saldo 54." },
    { pergunta: "Qual número está entre 37 e 39?", alternativas: ["38", "36", "40", "47"], correta: 0, explicacao: "38 é o sucessor de 37 e o antecessor de 39." },
    { pergunta: "A decomposição correta do número 56 é:", alternativas: ["5 dezenas e 56 unidades", "5 dezenas e 6 unidades", "56 dezenas e 5 unidades", "6 dezenas e 5 unidades"], correta: 1, explicacao: "56 = 5 × 10 + 6, ou seja, 5 dezenas e 6 unidades." }
  ]
};
