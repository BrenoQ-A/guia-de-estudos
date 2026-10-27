window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f2-a7-mat"] = {
  aulas: [
    {
      id: "f2-a7-mat-1",
      titulo: "Números inteiros: reta numérica e operações",
      blocos: [
        { tipo: "paragrafo", texto: "Números inteiros incluem os positivos, o zero e os NEGATIVOS (usados para temperaturas, dívidas e altitudes abaixo do nível do mar)." },
        { tipo: "titulo", texto: "A reta numérica" },
        { tipo: "paragrafo", texto: "Na reta, o zero fica no centro; positivos à direita, negativos à esquerda. Quanto mais à DIREITA, MAIOR o número: −5 < −3 < 0 < 2. Cuidado: −5 é MENOR que −3 (mais fundo no 'frio')." },
        { tipo: "exemplo", texto: "Termômetro: se a temperatura está em −8 °C e sobe 3 graus, vai para −5 °C. Se está em −2 °C e cai 6 graus, vai para −8 °C." },
        { tipo: "titulo", texto: "Operações com sinais" },
        { tipo: "lista", itens: ["Soma de sinais iguais: mantém o sinal (−3 + (−4) = −7)", "Soma de sinais diferentes: subtrai e fica o sinal do maior valor absoluto (−7 + 4 = −3)", "Multiplicação/Divisão: sinais IGUAIS dão POSITIVO; sinais DIFERENTES dão NEGATIVO", "(−) × (−) = +; (−) × (+) = −"] },
        { tipo: "exemplo", texto: "−6 × 4 = −24. −6 × (−4) = 24. 18 ÷ (−3) = −6. E o oposto de −7 é 7." },
        { tipo: "dica", texto: "Para somar inteiros na reta, comece no primeiro número e 'ande': positivo para a direita, negativo para a esquerda." },
        { tipo: "atencao", texto: "O erro clássico: achar que −10 > −2. Menos dez é MUITO mais frio/fundo: −10 < −2. Sempre visualize a reta!" }
      ],
      atividade: [
        { pergunta: "Qual número é MAIOR: −7 ou −2?", alternativas: ["−7", "−2", "são iguais", "depende"], correta: 1, explicacao: "−2 está mais à direita na reta: −2 > −7." },
        { pergunta: "Quanto é (−5) + 8?", alternativas: ["3", "13", "−3", "−13"], correta: 0, explicacao: "Sinais diferentes: 8 − 5 = 3, sinal do maior (positivo)." },
        { pergunta: "Quanto é (−6) × (−5)?", alternativas: ["11", "30", "−11", "−30"], correta: 1, explicacao: "Sinais iguais na multiplicação: resultado positivo." },
        { pergunta: "A temperatura está em −3 °C e cai 5 °C. Fica em...", alternativas: ["−2 °C", "8 °C", "−8 °C", "2 °C"], correta: 2, explicacao: "−3 − 5 = −8 °C." }
      ]
    },
    {
      id: "f2-a7-mat-2",
      titulo: "Razão, proporção e regra de três",
      blocos: [
        { tipo: "paragrafo", texto: "Razão é a comparação entre dois números pela divisão: a/b. Proporção é a igualdade entre duas razões: 2/4 = 6/12." },
        { tipo: "titulo", texto: "Propriedade fundamental" },
        { tipo: "paragrafo", texto: "Em toda proporção, o produto dos MEIOS é igual ao produto dos EXTREMOS: se a/b = c/d, então a × d = b × c. É a base da regra de três." },
        { tipo: "titulo", texto: "Regra de três simples" },
        { tipo: "exemplo", texto: "3 cadernos custam R$ 15. Quanto custam 5? Organize: 3 → 15; 5 → x. As grandezas variam juntas (mais cadernos, mais reais): direta. x = 15 × 5 ÷ 3 = R$ 25." },
        { tipo: "exemplo", texto: "Grandezas INVERSAS: 4 operários constroem em 12 dias; 8 operários levam quanto tempo? Mais operários, menos dias: x = 4 × 12 ÷ 8 = 6 dias." },
        { tipo: "titulo", texto: "Porcentagem aplicada" },
        { tipo: "paragrafo", texto: "A porcentagem é razão de denominador 100. Aplicações: desconto (R$ 80 com 15% off: 80 × 0,15 = 12 de desconto → paga 68), aumento, juros simples (J = C × i × t)." },
        { tipo: "lista", itens: ["Direta: as duas sobem ou descem juntas (velocidade e distância)", "Inversa: uma sobe, a outra desce (operários e dias, velocidade e tempo)", "Sempre identifique o tipo antes de calcular"] },
        { tipo: "atencao", texto: "Na grandeza inversa, INVIRTA a razão antes de multiplicar. Esquecer isso é o erro mais comum da regra de três!" }
      ],
      atividade: [
        { pergunta: "Se 2 kg de arroz custam R$ 12, quanto custam 5 kg?", alternativas: ["R$ 30", "R$ 20", "R$ 24", "R$ 36"], correta: 0, explicacao: "Proporção direta: 12 × 5 ÷ 2 = 30." },
        { pergunta: "Um carro faz 100 km em 2h. Em 5h, a quanto chega?", alternativas: ["250 km", "300 km", "500 km", "200 km"], correta: 0, explicacao: "50 km/h × 5h = 250 km." },
        { pergunta: "8 pizzas alimentam 32 pessoas. Para 48 pessoas?", alternativas: ["10", "12", "16", "14"], correta: 1, explicacao: "8 × 48 ÷ 32 = 12 pizzas." },
        { pergunta: "3 torneiras enchem a piscina em 6h. Com 6 torneiras?", alternativas: ["6h", "2h", "3h", "12h"], correta: 2, explicacao: "Inversa: 3 × 6 ÷ 6 = 3h (mais torneiras, menos tempo)." }
      ]
    },
    {
      id: "f2-a7-mat-3",
      titulo: "Equações do 1º grau",
      blocos: [
        { tipo: "paragrafo", texto: "Equação do 1º grau é uma igualdade com uma letra (incógnita) elevada à primeira potência: 3x + 5 = 20. Resolver é achar o valor de x que torna a igualdade verdadeira." },
        { tipo: "titulo", texto: "Como resolver" },
        { tipo: "paragrafo", texto: "Passo a passo: isole a incógnita. Os termos com x ficam de um lado, os números do outro. Ao passar um termo para o outro lado, TROQUE o sinal (operação inversa)." },
        { tipo: "exemplo", texto: "3x + 5 = 20 → 3x = 20 − 5 → 3x = 15 → x = 15 ÷ 3 → x = 5. Verificação: 3 × 5 + 5 = 20. Bateu!" },
        { tipo: "exemplo", texto: "2x − 7 = x + 3 → 2x − x = 3 + 7 → x = 10. Verifique: 2 × 10 − 7 = 13 e 10 + 3 = 13." },
        { tipo: "titulo", texto: "Problemas com equações" },
        { tipo: "lista", itens: ["Traduza o enunciado: 'o triplo de um número' = 3x", "'a soma de um número com 4' = x + 4", "'metade de um número' = x/2", "Monte a igualdade, resolva e confira"] },
        { tipo: "exemplo", texto: "'A soma de três números consecutivos é 48. Quais são?' → x + (x+1) + (x+2) = 48 → 3x + 3 = 48 → 3x = 45 → x = 15. Resposta: 15, 16 e 17." },
        { tipo: "atencao", texto: "NUNCA esqueça a verificação: substitua o valor encontrado na equação original. Se não bater, algo saiu errado." }
      ],
      atividade: [
        { pergunta: "Resolvendo 4x = 28, encontramos x =", alternativas: ["112", "7", "24", "32"], correta: 1, explicacao: "x = 28 ÷ 4 = 7." },
        { pergunta: "Quanto vale x em 2x + 6 = 14?", alternativas: ["8", "6", "10", "4"], correta: 3, explicacao: "2x = 8 → x = 4." },
        { pergunta: "Resolvendo 5x − 3 = 2x + 9:", alternativas: ["x = 3", "x = 6", "x = 4", "x = 2"], correta: 2, explicacao: "5x − 2x = 9 + 3 → 3x = 12 → x = 4." },
        { pergunta: "'O dobro de um número mais 3 é 11.' O número é...", alternativas: ["6", "5", "7", "4"], correta: 3, explicacao: "2x + 3 = 11 → 2x = 8 → x = 4." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "O oposto de −9 é...", alternativas: ["0", "−9", "9", "−1/9"], correta: 2, explicacao: "O oposto (simétrico) muda o sinal." },
      { pergunta: "Quanto é (−12) + 7?", alternativas: ["19", "−5", "−19", "5"], correta: 1, explicacao: "Sinais diferentes: 12 − 7 = 5, sinal do maior (negativo)." },
      { pergunta: "Quanto é (−10) ÷ 2?", alternativas: ["5", "−20", "−5", "20"], correta: 2, explicacao: "Sinais diferentes na divisão: negativo." },
      { pergunta: "R$ 250 com 20% de desconto custa...", alternativas: ["R$ 200", "R$ 210", "R$ 230", "R$ 220"], correta: 0, explicacao: "250 × 0,20 = 50; 250 − 50 = 200." },
      { pergunta: "Quanto vale x em x/3 = 6?", alternativas: ["9", "3", "2", "18"], correta: 3, explicacao: "x = 6 × 3 = 18." },
      { pergunta: "A soma de dois números consecutivos é 27. O maior é...", alternativas: ["12", "14", "15", "13"], correta: 1, explicacao: "x + x + 1 = 27 → x = 13; o maior é 14." }
    ]
  },
  exameFinal: [
    { pergunta: "Na reta numérica, entre −4 e 2 há quantos inteiros (excluindo extremos)?", alternativas: ["5", "7", "4", "6"], correta: 0, explicacao: "−3, −2, −1, 0, 1: são 5." },
    { pergunta: "Quanto é (−2) × (−2) × (−2)?", alternativas: ["−6", "8", "−8", "6"], correta: 2, explicacao: "Dois sinais negativos dão +, o terceiro inverte: −8." },
    { pergunta: "12 operários constroem em 10 dias; 20 operários em...", alternativas: ["4 dias", "6 dias", "12 dias", "8 dias"], correta: 1, explicacao: "Inversa: 12 × 10 ÷ 20 = 6 dias." },
    { pergunta: "Resolvendo 3(x − 2) = 9, x vale...", alternativas: ["1", "7", "5", "3"], correta: 2, explicacao: "3x − 6 = 9 → 3x = 15 → x = 5." },
    { pergunta: "Um produto de R$ 40 teve aumento de 15%. Novo preço:", alternativas: ["R$ 48", "R$ 55", "R$ 46", "R$ 44"], correta: 2, explicacao: "40 × 0,15 = 6; 40 + 6 = 46." }
  ]
};
