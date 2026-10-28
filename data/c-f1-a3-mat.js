window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a3-mat"] = {
  aulas: [
    {
      id: "f1-a3-mat-1",
      titulo: "Multiplicação: algoritmo e tabuadas até 9",
      blocos: [
        { tipo: "paragrafo", texto: "A multiplicação compacta somas repetidas e é a operação mais utilizada do cálculo cotidiano — de parcelas de boleto a horas trabalhadas. O domínio das tabuadas até 9 elimina a maior fonte de lentidão em provas." },
        { tipo: "titulo", texto: "O algoritmo com transporte" },
        { tipo: "paragrafo", texto: "Em multiplicações com dois algarismos, multiplica-se cada algarismo do multiplicador separadamente e somam-se os produtos parciais, deslocando uma casa para a esquerda a cada linha." },
        { tipo: "exemplo", texto: "345 × 27: primeiro 345 × 7 = 2.415; depois 345 × 20 = 6.900; soma dos parciais: 2.415 + 6.900 = 9.315. O 'zero' implícito na segunda linha é o deslocamento de posição." },
        { tipo: "titulo", texto: "Atalhos de tabuada" },
        { tipo: "lista", itens: ["×5: multiplica por 10 e divide por 2 (5 × 24 = 240 ÷ 2 = 120)", "×9: multiplica por 10 e subtrai a parcela (9 × 24 = 240 − 24 = 216)", "×11: para números de 2 algarismos, 'separa e soma' (11 × 34 = 374: 3 [3+4] 4)", "Quadrados próximos de 10: 98 × 98 = (100 − 2)² = 9.604"] },
        { tipo: "dica", texto: "As tabuadas do 2, 5 e 10 são triviais; concentre esforço em 6, 7 e 8 — as que mais custam tempo. 15 minutos diários de prática ativa valem mais que reler a tabela." },
        { tipo: "atencao", texto: "Confusão clássica: multiplicar 345 × 27 e somar 345 × 7 + 345 × 2 (sem o zero). O segundo algarismo vale 20, não 2 — o deslocamento de posição é obrigatório." }
      ],
      atividade: [
        { pergunta: "Quanto é 7 × 8?", alternativas: ["54", "56", "63", "64"], correta: 1, explicacao: "Tabuada do 7: 7 × 8 = 56." },
        { pergunta: "Quanto é 234 × 2?", alternativas: ["458", "468", "478", "268"], correta: 1, explicacao: "2 × 4 = 8; 2 × 3 = 6; 2 × 2 = 4 → 468." },
        { pergunta: "Usando o atalho do ×9: 9 × 32 vale...", alternativas: ["288", "298", "272", "322"], correta: 0, explicacao: "320 − 32 = 288." },
        { pergunta: "345 × 27 = (345 × 7) + ...", alternativas: ["345 × 2", "345 × 20", "345 × 27", "34 × 20"], correta: 1, explicacao: "O 2 do 27 está na casa das dezenas: vale 20." }
      ]
    },
    {
      id: "f1-a3-mat-2",
      titulo: "Divisão: exata, com resto e problemas",
      blocos: [
        { tipo: "paragrafo", texto: "Divisão reparte uma quantidade em partes iguais ou mede quantas vezes um número cabe em outro. Seus termos: dividendo ÷ divisor = quociente (+ resto)." },
        { tipo: "titulo", texto: "Divisão exata e inexata" },
        { tipo: "paragrafo", texto: "Exata: o resto é zero (36 ÷ 4 = 9). Inexata: sobra um resto menor que o divisor (37 ÷ 4 = 9, resto 1). A relação fundamental confirma qualquer conta: dividendo = divisor × quociente + resto." },
        { tipo: "exemplo", texto: "Divisão por dois dígitos, 156 ÷ 12: 12 cabe 1 vez em 15 (resta 3); desce o 6 → 36; 12 × 3 = 36. Quociente: 13, resto 0. Verificação: 12 × 13 = 156." },
        { tipo: "titulo", texto: "Divisibilidade útil" },
        { tipo: "lista", itens: ["Por 2: número par", "Por 3: soma dos algarismos divisível por 3 (732 → 12 → sim)", "Por 5: termina em 0 ou 5", "Por 10: termina em 0"] },
        { tipo: "titulo", texto: "Problemas: identificar a operação" },
        { tipo: "paragrafo", texto: "Dividir aparece quando o enunciado REPARTE (repartir 48 reais entre 6 pessoas) ou MEDE frequência (quantas caixas de 12 cabem em 96 unidades). Interpretar o enunciado é metade da solução; o cálculo é a outra metade." },
        { tipo: "dica", texto: "O resto tem significado prático em problemas: 'quantos ônibus de 45 lugares para 200 pessoas?' → 200 ÷ 45 = 4, resto 20 → são necessários 5 ônibus (arredonda-se para cima)." },
        { tipo: "atencao", texto: "Resto nunca pode ser maior ou igual ao divisor: se der resto 50 numa divisão por 12, o quociente está errado — falta uma unidade." }
      ],
      atividade: [
        { pergunta: "Quanto é 84 ÷ 7?", alternativas: ["11", "12", "13", "14"], correta: 1, explicacao: "7 × 12 = 84: divisão exata." },
        { pergunta: "Dividindo 100 por 7, quociente e resto são...", alternativas: ["14 e 2", "13 e 9", "14 e 0", "15 e 5"], correta: 0, explicacao: "7 × 14 = 98; sobra 2." },
        { pergunta: "Repartindo R$ 72 entre 6 pessoas, cada uma recebe...", alternativas: ["R$ 10", "R$ 12", "R$ 14", "R$ 16"], correta: 1, explicacao: "72 ÷ 6 = 12 (exata)." },
        { pergunta: "216 é divisível por 3 porque...", alternativas: ["termina em 6", "2 + 1 + 6 = 9, divisível por 3", "é par", "é múltiplo de 10"], correta: 1, explicacao: "Critério da soma dos algarismos." }
      ]
    },
    {
      id: "f1-a3-mat-3",
      titulo: "Frações: partes do todo e comparação",
      blocos: [
        { tipo: "paragrafo", texto: "Fração representa parte de um todo dividido em partes iguais. Em 3/4, o denominador (4) diz em quantas partes o todo foi dividido; o numerador (3), quantas partes se consideram." },
        { tipo: "titulo", texto: "Leitura e representação" },
        { tipo: "lista", itens: ["1/2: um meio (a metade)", "1/3: um terço", "1/4: um quarto", "2/5: dois quintos", "Fração unitária: numerador 1 (1/2, 1/3, 1/4...)"] },
        { tipo: "exemplo", texto: "Uma pizza cortada em 8 pedaços iguais, com 3 consumidos: resta 5/8. Se cada pedaço custa R$ 7, o consumo foi 3 × 7 = R$ 21 — fração convertida em operação concreta." },
        { tipo: "titulo", texto: "Comparação" },
        { tipo: "paragrafo", texto: "Mesmo denominador: compara-se o numerador (3/7 > 2/7). Mesmo numerador: vence o MENOR denominador (1/2 > 1/3 — dividir por menos partes dá pedaços maiores). Denominadores diferentes: reduza ao mesmo denominador comum antes de comparar." },
        { tipo: "paragrafo", texto: "Fração e número inteiro: quando numerador = denominador, a fração vale 1 (4/4 = 1). Numerador maior que denominador representa mais que o todo (5/4 = 1 inteiro e 1/4) — frações impróprias." },
        { tipo: "dica", texto: "Visualize sempre um retângulo dividido: metade de metade é 1/4. A intuição visual resolve a maioria das questões de comparação sem conta alguma." },
        { tipo: "atencao", texto: "Erro clássico: achar que 1/5 > 1/2 porque 5 > 2. Dividir o todo em MAIS partes gera pedaços MENORES: 1/5 < 1/2. Denominador maior = parte menor." }
      ],
      atividade: [
        { pergunta: "Na fração 3/4, o número 4 indica...", alternativas: ["as partes consideradas", "em quantas partes o todo foi dividido", "o resultado", "a soma"], correta: 1, explicacao: "Denominador: divisor do todo." },
        { pergunta: "Qual fração é MAIOR: 2/3 ou 2/5?", alternativas: ["2/3", "2/5", "são iguais", "não se compara"], correta: 0, explicacao: "Mesmo numerador: menor denominador (3) gera partes maiores." },
        { pergunta: "Uma pizza tem 8 pedaços; 5 foram consumidos. A fração restante é...", alternativas: ["5/8", "3/8", "8/5", "1/8"], correta: 1, explicacao: "Restam 8 − 5 = 3 pedaços: 3/8." },
        { pergunta: "4/4 equivale a...", alternativas: ["0", "1", "4", "1/2"], correta: 1, explicacao: "Todo dividido em 4 e tomado por inteiro: 1." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto é 8 × 7?", alternativas: ["54", "56", "64", "48"], correta: 1, explicacao: "Tabuada: 56." },
      { pergunta: "345 × 20 equivale a 345 × 2 com...", alternativas: ["mesmo valor", "uma casa a mais (deslocamento)", "metade", "sinal trocado"], correta: 1, explicacao: "Multiplicar por 10 desloca uma posição: 6.900." },
      { pergunta: "Quanto é 132 ÷ 11?", alternativas: ["11", "12", "13", "21"], correta: 1, explicacao: "11 × 12 = 132." },
      { pergunta: "A relação fundamental da divisão é...", alternativas: ["D = d × q + r", "D = d + q + r", "D = q ÷ r", "D = d − r"], correta: 0, explicacao: "Dividendo = divisor × quociente + resto." },
      { pergunta: "Qual é a fração MAIOR: 3/4 ou 3/5?", alternativas: ["3/5", "3/4", "iguais", "depende"], correta: 1, explicacao: "Mesmo numerador: 4 partes são maiores que 5." },
      { pergunta: "7/7 equivale a...", alternativas: ["7", "1", "0", "1/7"], correta: 1, explicacao: "Numerador = denominador: o todo inteiro." }
    ]
  },
  exameFinal: [
    { pergunta: "Quanto é 6 × 9 pelo atalho?", alternativas: ["60 − 6 = 54", "60 + 6 = 66", "36", "64"], correta: 0, explicacao: "×9 = ×10 − parcela: 54." },
    { pergunta: "O resto da divisão 95 ÷ 8 é...", alternativas: ["1", "3", "7", "0"], correta: 2, explicacao: "8 × 11 = 88; 95 − 88 = 7." },
    { pergunta: "Em 'repartir R$ 45 entre 5 pessoas', cada uma recebe...", alternativas: ["R$ 8", "R$ 9", "R$ 10", "R$ 11"], correta: 1, explicacao: "45 ÷ 5 = 9 (exata)." },
    { pergunta: "Comparando 1/3 e 1/4, é maior...", alternativas: ["1/4", "1/3", "iguais", "incomparáveis"], correta: 1, explicacao: "Menos divisões = partes maiores." },
    { pergunta: "5/4 representa...", alternativas: ["menos que o todo", "exatamente o todo", "mais que o todo (1 e 1/4)", "uma metade"], correta: 2, explicacao: "Fração imprópria: supera o inteiro." }
  ]
};
