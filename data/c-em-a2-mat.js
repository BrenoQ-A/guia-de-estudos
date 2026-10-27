window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["em-a2-mat"] = {
  aulas: [
    {
      id: "em-a2-mat-1",
      titulo: "Progressões: PA e PG",
      blocos: [
        { tipo: "paragrafo", texto: "Progressão é uma sequência com padrão. Aritmética (PA): soma-se uma RAZÃO constante. Geométrica (PG): multiplica-se uma RAZÃO constante." },
        { tipo: "titulo", texto: "Progressão Aritmética" },
        { tipo: "lista", itens: ["Termo geral: aₙ = a₁ + (n − 1)·r", "Exemplo: 2, 5, 8, 11... (a₁ = 2, r = 3); a₁₀ = 2 + 9·3 = 29", "Soma dos n primeiros termos: Sₙ = (a₁ + aₙ)·n/2", "Termo médio: em 3 termos, o central é a média"] },
        { tipo: "titulo", texto: "Progressão Geométrica" },
        { tipo: "lista", itens: ["Termo geral: aₙ = a₁ · q^(n−1)", "Exemplo: 2, 6, 18, 54... (a₁ = 2, q = 3); a₅ = 2·3⁴ = 162", "Soma finita: Sₙ = a₁·(qⁿ − 1)/(q − 1), para q ≠ 1", "Soma infinita (|q| < 1): S = a₁/(1 − q)", "Meio geométrico: b² = a·c entre três termos"] },
        { tipo: "exemplo", texto: "Problema clássico: juros compostos dobram a cada período (PG de razão 2). R$ 100 dobrando por ano: a₅ = 100·2⁴ = R$ 1.600 em 4 dobragens." },
        { tipo: "dica", texto: "PA: termos equidistantes têm a MESMA soma (a₁ + aₙ = a₂ + aₙ₋₁). PG: equidistantes têm o MESMO produto. Uso nas provas para economizar tempo!" },
        { tipo: "atencao", texto: "PG com q negativo alterna sinais (3, −6, 12...). E cuidado com 'daqui a n anos': conta-se (n−1) multiplicações, não n." }
      ],
      atividade: [
        { pergunta: "Na PA (4, 9, 14...), o 10º termo é...", alternativas: ["54", "49", "45", "50"], correta: 1, explicacao: "a₁₀ = 4 + 9·5 = 49." },
        { pergunta: "Na PG (3, 6, 12...), o 6º termo é...", alternativas: ["96", "192", "72", "48"], correta: 0, explicacao: "a₆ = 3·2⁵ = 96." },
        { pergunta: "A soma de 1+2+3+...+100 é...", alternativas: ["101", "10.100", "5.050", "4.950"], correta: 2, explicacao: "S = (1+100)·100/2 = 5.050 (Gauss!)." },
        { pergunta: "Soma infinita da PG 8, 4, 2, 1... vale...", alternativas: ["16", "12", "15", "∞"], correta: 0, explicacao: "S = 8/(1 − 1/2) = 16." }
      ]
    },
    {
      id: "em-a2-mat-2",
      titulo: "Trigonometria no triângulo retângulo e leis",
      blocos: [
        { tipo: "paragrafo", texto: "No triângulo retângulo, as razões trigonométricas ligam ângulos a lados: seno (cateto oposto/hipotenusa), cosseno (adjacente/hipotenusa) e tangente (oposto/adjacente)." },
        { tipo: "titulo", texto: "Razões fundamentais" },
        { tipo: "lista", itens: ["sen θ = cateto oposto / hipotenusa", "cos θ = cateto adjacente / hipotenusa", "tg θ = oposto / adjacente = sen/cos", "Valores notáveis: sen 30° = 1/2, cos 30° = √3/2, tg 30° = √3/3; sen 45° = cos 45° = √2/2; sen 60° = √3/2, cos 60° = 1/2"] },
        { tipo: "exemplo", texto: "Escada de 10 m a 30° do chão: altura alcançada = 10·sen 30° = 5 m; distância da parede = 10·cos 30° = 10·√3/2 ≈ 8,66 m." },
        { tipo: "titulo", texto: "Leis dos senos e dos cossenos" },
        { tipo: "lista", itens: ["Lei dos senos (qualquer triângulo): a/sen A = b/sen B = c/sen C", "Lei dos cossenos: a² = b² + c² − 2bc·cos A", "Pitágoras é caso particular da lei dos cossenos (A = 90° → cos 90° = 0)"] },
        { tipo: "exemplo", texto: "Triângulo com b = 8, c = 5 e ângulo A = 60° entre eles: a² = 64 + 25 − 2·8·5·(1/2) = 89 − 40 = 49 → a = 7." },
        { tipo: "dica", texto: "Quando usar: 2 lados + ângulo ENTRE eles → lei dos cossenos. 2 ângulos + 1 lado (ou 2 lados + 1 ângulo oposto) → lei dos senos." },
        { tipo: "atencao", texto: "Ângulo em graus ou radianos: na calculadora, confira o modo! E radianos: 180° = π rad; 30° = π/6; 45° = π/4; 60° = π/3." }
      ],
      atividade: [
        { pergunta: "sen 30° vale...", alternativas: ["√3/2", "1/2", "√2/2", "1"], correta: 1, explicacao: "Valor notável fundamental." },
        { pergunta: "cos 60° vale...", alternativas: ["1/2", "0", "√2/2", "√3/2"], correta: 0, explicacao: "Complementar do seno de 30°." },
        { pergunta: "Triângulo com lados 6 e 8 e ângulo de 90° entre eles: o 3º lado mede...", alternativas: ["14", "10", "2", "48"], correta: 1, explicacao: "Pitágoras (caso da lei dos cossenos)." },
        { pergunta: "45° em radianos é...", alternativas: ["π/6", "π/4", "π/2", "π/3"], correta: 1, explicacao: "180° = π → 45° = π/4." }
      ]
    },
    {
      id: "em-a2-mat-3",
      titulo: "Matrizes e determinantes",
      blocos: [
        { tipo: "paragrafo", texto: "Matriz é uma tabela m × n (linhas × colunas) de números. É a linguagem de computadores, gráficos de jogos e sistemas de equações." },
        { tipo: "titulo", texto: "Operações" },
        { tipo: "lista", itens: ["Igualdade: mesmas dimensões e elementos iguais", "Soma/subtração: elemento a elemento (mesma ordem!)", "Multiplicação por escalar: multiplica cada elemento", "Produto de matrizes: A(m×n) × B(n×p) = C(m×p) — linha × coluna, somando produtos (ordem importa!)", "Transposta (Aᵀ): troca linhas por colunas"] },
        { tipo: "exemplo", texto: "A = [[1,2],[3,4]], B = [[0,1],[1,0]]: A×B = [[1·0+2·1, 1·1+2·0],[3·0+4·1, 3·1+4·0]] = [[2,1],[4,3]]. B×A daria [[3,4],[1,2]]: diferente! AB ≠ BA." },
        { tipo: "titulo", texto: "Matrizes especiais e determinantes" },
        { tipo: "lista", itens: ["Identidade (I): diagonal 1, resto 0 (I×A = A)", "Inversa (A⁻¹): A·A⁻¹ = I (só existe se det ≠ 0)", "det de 2×2: ad − bc (diagonal principal − secundária)", "det de 3×3: regra de Sarrus (3 diagonais de cada sentido)"] },
        { tipo: "exemplo", texto: "det [[2,3],[1,4]] = 2·4 − 3·1 = 5. det ≠ 0 → matriz tem inversa e sistema associado tem solução única." },
        { tipo: "dica", texto: "Aplicação clássica: sistemas lineares via regra de Cramer (x = det_Ax/det_A). E em ENEM, costuma ser matriz de dados (leitura de tabela) + uma operação simples." },
        { tipo: "atencao", texto: "Só existe produto de matrizes quando o número de COLUNAS da primeira é igual ao de LINHAS da segunda. AB ≠ BA em geral!" }
      ],
      atividade: [
        { pergunta: "A matriz A é 2×3 e B é 3×2. O produto AB tem dimensão...", alternativas: ["não existe", "2×3", "3×3", "2×2"], correta: 3, explicacao: "(2×3)×(3×2) = 2×2." },
        { pergunta: "det [[4,1],[2,3]] =", alternativas: ["10", "−10", "6", "14"], correta: 0, explicacao: "4·3 − 1·2 = 10." },
        { pergunta: "A transposta de [[1,2],[3,4]] é...", alternativas: ["[[1,3],[2,4]]", "[[2,1],[4,3]]", "[[1,2],[3,4]]", "[[4,3],[2,1]]"], correta: 0, explicacao: "Linhas viram colunas." },
        { pergunta: "Uma matriz com determinante 0...", alternativas: ["tem inversa", "é impossível", "não tem inversa", "é identidade"], correta: 2, explicacao: "Inversa exige det ≠ 0." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Na PA (7, 10, 13...), a₁₅ =", alternativas: ["46", "52", "45", "49"], correta: 3, explicacao: "7 + 14·3 = 49." },
      { pergunta: "Soma da PA (2, 5, 8, 11, 14):", alternativas: ["45", "35", "38", "40"], correta: 3, explicacao: "S = (2+14)·5/2 = 40." },
      { pergunta: "Na PG (5, 10, 20...), a₇ =", alternativas: ["80", "640", "160", "320"], correta: 3, explicacao: "5·2⁶ = 320." },
      { pergunta: "tg 45° vale...", alternativas: ["1", "0", "√3", "√2/2"], correta: 0, explicacao: "sen 45°/cos 45° = 1." },
      { pergunta: "Lei dos cossenos: a² = b² + c² − ...", alternativas: ["2a·cos B", "2bc·cos A", "bc", "bc·sen A"], correta: 1, explicacao: "Generalização de Pitágoras." },
      { pergunta: "det [[1,2],[3,5]] =", alternativas: ["1", "−1", "5", "11"], correta: 1, explicacao: "1·5 − 2·3 = −1." }
    ]
  },
  exameFinal: [
    { pergunta: "O termo médio de uma PA de 3 termos é...", alternativas: ["a média geométrica", "o dobro", "a razão", "a média aritmética"], correta: 3, explicacao: "PA: média aritmética." },
    { pergunta: "A soma infinita da PG existe se...", alternativas: ["sempre", "|q| < 1", "q = 1", "|q| > 1"], correta: 1, explicacao: "Termos encolhem: converge." },
    { pergunta: "Em um triângulo, a/sen A = b/sen B é...", alternativas: ["Bhaskara", "a lei dos senos", "Pitágoras", "a lei dos cossenos"], correta: 1, explicacao: "Proporção entre lados e senos opostos." },
    { pergunta: "Para resolver 2 lados + ângulo entre eles, use...", alternativas: ["Bhaskara", "lei dos cossenos", "lei dos senos", "só Pitágoras"], correta: 1, explicacao: "Cossenos resolve o lado oposto direto." },
    { pergunta: "A×B e B×A são geralmente...", alternativas: ["transpostas", "iguais", "diferentes", "sempre impossíveis"], correta: 2, explicacao: "Produto de matrizes não é comutativo." }
  ]
};
