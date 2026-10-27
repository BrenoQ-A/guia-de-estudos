window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f2-a6-mat"] = {
  aulas: [
    {
      id: "f2-a6-mat-1",
      titulo: "Números naturais: as quatro operações",
      blocos: [
        { tipo: "paragrafo", texto: "Os números naturais (0, 1, 2, 3...) são os primeiros que a humanidade usou para contar. Agora vamos dominar as quatro operações com números grandes." },
        { tipo: "titulo", texto: "Adição e subtração" },
        { tipo: "paragrafo", texto: "Na adição, juntamos parcelas; na subtração, tiramos. Com números grandes, o segredo é o mesmo: alinhar as casas (unidades sob unidades, dezenas sob dezenas) e cuidar do reagrupamento." },
        { tipo: "exemplo", texto: "34.567 + 12.895 = 47.462 (atenção aos 'vai um'). E 34.567 − 12.895 = 21.672." },
        { tipo: "titulo", texto: "Multiplicação" },
        { tipo: "paragrafo", texto: "Multiplicar números de dois ou mais algarismos exige multiplicar por cada algarismo do multiplicador e depois somar os produtos parciais." },
        { tipo: "exemplo", texto: "345 × 27 = 345 × 7 (2.415) + 345 × 20 (6.900) = 9.315." },
        { tipo: "titulo", texto: "Divisão" },
        { tipo: "paragrafo", texto: "Na divisão exata, o dividendo é dividido igualmente; na inexata, sobra o resto. Relação fundamental: dividendo = divisor × quociente + resto." },
        { tipo: "lista", itens: ["Adição: 456 + 234 = 690", "Subtração: 456 − 234 = 222", "Multiplicação: 456 × 20 = 9.120", "Divisão: 456 ÷ 8 = 57 (exata)"] },
        { tipo: "atencao", texto: "Sempre confira divisões com a relação fundamental: 8 × 57 + 0 = 456. Bateu, está certa!" }
      ],
      atividade: [
        { pergunta: "Quanto é 3.456 + 2.789?", alternativas: ["6.145", "5.245", "5.645", "6.245"], correta: 3, explicacao: "6+9=15 (vai 1); 5+8+1=14 (vai 1); 4+7+1=12 (vai 1); 3+2+1=6 → 6.245." },
        { pergunta: "Quanto é 5.000 − 2.345?", alternativas: ["3.655", "3.455", "2.755", "2.655"], correta: 3, explicacao: "Emprestando sucessivamente: 5.000 − 2.345 = 2.655." },
        { pergunta: "Quanto é 234 × 12?", alternativas: ["2.804", "2.808", "2.708", "3.808"], correta: 1, explicacao: "234 × 12 = 234 × 10 + 234 × 2 = 2.340 + 468 = 2.808." },
        { pergunta: "Dividindo 100 por 7, o quociente e o resto são...", alternativas: ["15 e 5", "14 e 2", "13 e 9", "14 e 0"], correta: 1, explicacao: "7 × 14 = 98; resto 2." }
      ]
    },
    {
      id: "f2-a6-mat-2",
      titulo: "Divisibilidade: múltiplos e divisores",
      blocos: [
        { tipo: "paragrafo", texto: "Um número é DIVISOR de outro quando a divisão é exata. E é MÚLTIPLO quando aparece na tabuada do outro. Ex.: 4 é divisor de 12, e 12 é múltiplo de 4." },
        { tipo: "titulo", texto: "Critérios de divisibilidade" },
        { tipo: "lista", itens: ["Por 2: o número termina em 0, 2, 4, 6 ou 8", "Por 3: a soma dos algarismos é divisível por 3 (273 → 2+7+3=12 → sim)", "Por 5: termina em 0 ou 5", "Por 10: termina em 0"] },
        { tipo: "exemplo", texto: "1.470 é divisível por 2 (termina em 0), por 3 (1+4+7+0=12) e por 5 (termina em 0). Então também é divisível por 6 e por 10!" },
        { tipo: "titulo", texto: "MMC e MDC" },
        { tipo: "paragrafo", texto: "O MMC (mínimo múltiplo comum) é o menor número que é múltiplo de dois números ao mesmo tempo: MMC(4, 6) = 12. Serve para somar frações e encontrar periodicidades. O MDC (máximo divisor comum) é o maior divisor comum: MDC(12, 18) = 6. Serve para simplificar frações e repartir em grupos iguais." },
        { tipo: "titulo", texto: "Números primos" },
        { tipo: "paragrafo", texto: "Primo tem exatamente 2 divisores: 1 e ele mesmo. Os primeiros: 2, 3, 5, 7, 11, 13, 17, 19, 23... O número 1 não é primo (tem só um divisor) e 2 é o único primo par." },
        { tipo: "dica", texto: "Todo número natural (maior que 1) ou é primo, ou se escreve como produto de primos: 60 = 2 × 2 × 3 × 5 (fatoração)." }
      ],
      atividade: [
        { pergunta: "O número 345 é divisível por 3 porque...", alternativas: ["a soma 3+4+5=12 é divisível por 3", "o algarismo 3 aparece nele", "é um número par", "termina em 5"], correta: 0, explicacao: "Pelo critério, somamos os algarismos: 12 é múltiplo de 3." },
        { pergunta: "O MMC de 4 e 6 é...", alternativas: ["24", "2", "10", "12"], correta: 3, explicacao: "Múltiplos de 4: 4, 8, 12... Múltiplos de 6: 6, 12. O menor comum é 12." },
        { pergunta: "O MDC de 12 e 18 é...", alternativas: ["36", "9", "6", "2"], correta: 2, explicacao: "Divisores comuns: 1, 2, 3, 6. O maior é 6." },
        { pergunta: "Qual destes números é PRIMO?", alternativas: ["27", "21", "33", "29"], correta: 3, explicacao: "29 só é divisível por 1 e por 29." }
      ]
    },
    {
      id: "f2-a6-mat-3",
      titulo: "Frações: equivalentes, comparação e operações",
      blocos: [
        { tipo: "paragrafo", texto: "A fração 3/4 diz: dividimos o todo em 4 partes (denominador) e pegamos 3 (numerador). Agora vamos operar com elas." },
        { tipo: "titulo", texto: "Frações equivalentes" },
        { tipo: "paragrafo", texto: "Multiplicando ou dividindo numerador e denominador pelo mesmo número, a fração mantém o valor: 2/3 = 4/6 = 6/9. Isso é a base para comparar e somar frações diferentes." },
        { tipo: "titulo", texto: "Comparando frações" },
        { tipo: "paragrafo", texto: "Mesmo denominador? Compare os numeradores: 3/7 > 2/7. Denominadores diferentes? Reduza ao mesmo denominador (usando o MMC): 1/3 vs 1/4 → 4/12 vs 3/12 → 1/3 > 1/4." },
        { tipo: "exemplo", texto: "Somando 1/4 + 1/6: MMC(4,6)=12 → 3/12 + 2/12 = 5/12." },
        { tipo: "titulo", texto: "Operações" },
        { tipo: "lista", itens: ["Mesmo denominador: some/subtraia os numeradores (2/9 + 5/9 = 7/9)", "Denominadores diferentes: iguale-os pelo MMC, depois some", "Multiplicação: multiplique em linha (2/3 × 4/5 = 8/15)", "Divisão: multiplique pela fração invertida (2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3)"] },
        { tipo: "atencao", texto: "Na MULTIPLICAÇÃO você NÃO usa o MMC (é multiplicar direto). O MMC só serve para somar/subtrair e comparar! Confundir isso é o erro nº 1." }
      ],
      atividade: [
        { pergunta: "Qual fração é equivalente a 3/5?", alternativas: ["6/10", "5/3", "9/15", "3/10"], correta: 0, explicacao: "3/5 × 2/2 = 6/10." },
        { pergunta: "Quanto é 1/4 + 1/4?", alternativas: ["1/8", "1", "1/2", "2/8"], correta: 2, explicacao: "Mesmo denominador: 2/4, que simplifica para 1/2." },
        { pergunta: "Quanto é 2/3 × 3/4?", alternativas: ["6/12 = 1/2", "5/7", "8/9", "2/4"], correta: 0, explicacao: "2 × 3 = 6; 3 × 4 = 12; simplificando: 1/2." },
        { pergunta: "Quanto é 1/2 ÷ 1/4?", alternativas: ["1/6", "1/2", "1/8", "2"], correta: 3, explicacao: "1/2 × 4/1 = 4/2 = 2." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 1.234 + 876?", alternativas: ["1.910", "2.010", "2.110", "2.100"], correta: 2, explicacao: "1.234 + 876 = 2.110." },
      { pergunta: "O número 720 é divisível por 2, 3 e 5?", alternativas: ["por nenhum", "só por 2", "por 2 e 3", "por 2, 3 e 5"], correta: 3, explicacao: "Termina em 0 (2 e 5) e 7+2+0=9 (3)." },
      { pergunta: "O MMC de 6 e 8 é...", alternativas: ["12", "48", "16", "24"], correta: 3, explicacao: "Múltiplos de 6: 6,12,18,24. De 8: 8,16,24." },
      { pergunta: "O MDC de 24 e 36 é...", alternativas: ["72", "8", "6", "12"], correta: 3, explicacao: "Divisores comuns até 12: MDC = 12." },
      { pergunta: "Quanto é 2/5 + 1/10?", alternativas: ["3/15", "1/2", "3/10", "5/10 = 1/2"], correta: 1, explicacao: "2/5 = 4/10; 4/10 + 1/10 = 5/10 = 1/2." },
      { pergunta: "Quanto é 3/4 ÷ 3/8?", alternativas: ["1/2", "3/2", "2", "9/32"], correta: 2, explicacao: "3/4 × 8/3 = 24/12 = 2." }
    ]
  },
  exameFinal: [
    { pergunta: "A relação fundamental da divisão é...", alternativas: ["D = d ÷ q", "D = q − d + r", "D = d + q − r", "D = d × q + r"], correta: 3, explicacao: "Dividendo = divisor × quociente + resto." },
    { pergunta: "9.999 é divisível por 3 porque...", alternativas: ["9+9+9+9=36, divisível por 3", "é par", "termina em 9", "é primo"], correta: 0, explicacao: "A soma dos algarismos decide a divisibilidade por 3." },
    { pergunta: "O número 1 não é primo porque...", alternativas: ["não existe", "é grande demais", "é par", "tem apenas um divisor"], correta: 3, explicacao: "Primo precisa de exatamente 2 divisores." },
    { pergunta: "Para somar 1/6 + 1/8, o denominador comum mais simples é...", alternativas: ["24", "14", "48", "6"], correta: 0, explicacao: "MMC(6,8) = 24." },
    { pergunta: "Dividir por uma fração equivale a...", alternativas: ["inverter o resultado", "somar as frações", "subtrair denominadores", "multiplicar pela fração invertida"], correta: 3, explicacao: "a/b ÷ c/d = a/b × d/c." }
  ]
};
