window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f2-a8-mat"] = {
  aulas: [
    {
      id: "f2-a8-mat-1",
      titulo: "Potências e raízes",
      blocos: [
        { tipo: "paragrafo", texto: "Potência é multiplicar um número por ele mesmo várias vezes: 2⁴ = 2 × 2 × 2 × 2 = 16. A raiz é a operação inversa: √16 = 2... pera, √16 = 4! (porque 4 × 4 = 16)." },
        { tipo: "titulo", texto: "Elementos da potência" },
        { tipo: "lista", itens: ["Base: o número que se multiplica (no 2⁴, a base é 2)", "Expoente: quantas vezes se multiplica (o 4)", "Potência: o resultado (16)"] },
        { tipo: "titulo", texto: "Propriedades das potências" },
        { tipo: "lista", itens: ["Produto de mesma base: soma os expoentes (2³ × 2² = 2⁵)", "Quociente de mesma base: subtrai os expoentes (2⁵ ÷ 2² = 2³)", "Potência de potência: multiplica ((2²)³ = 2⁶)", "Expoente 1: o próprio número (5¹ = 5); expoente 0: 1 (7⁰ = 1)", "Expoente negativo: inverte a base (2⁻² = 1/2² = 1/4)"] },
        { tipo: "exemplo", texto: "Cuidado com base negativa: (−2)² = 4 (par → positivo); (−2)³ = −8 (ímpar → negativo). Mas −2² = −4 (o sinal está FORA da potência)." },
        { tipo: "titulo", texto: "Raízes" },
        { tipo: "paragrafo", texto: "√a busca o número que elevado ao quadrado dá a: √81 = 9. Raiz cúbica: ∛27 = 3 (3 × 3 × 3). Raiz quadrada de número negativo não existe nos reais; a cúbica de negativo existe (∛−8 = −2)." },
        { tipo: "dica", texto: "Decore os quadrados perfeitos até 15: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. Acelera tudo!" },
        { tipo: "atencao", texto: "√(a²) = |a|: a raiz do quadrado é o valor absoluto (√(−3)² = 3, não −3)." }
      ],
      atividade: [
        { pergunta: "Quanto vale 3⁴?", alternativas: ["81", "27", "12", "64"], correta: 0, explicacao: "3 × 3 × 3 × 3 = 81." },
        { pergunta: "Simplificando 2³ × 2⁴:", alternativas: ["2¹²", "2⁷", "4⁷", "2¹"], correta: 1, explicacao: "Mesma base: somam-se os expoentes (3+4=7)." },
        { pergunta: "Quanto vale √144?", alternativas: ["12", "14", "11", "72"], correta: 0, explicacao: "12 × 12 = 144." },
        { pergunta: "(−3)² é igual a...", alternativas: ["6", "9", "−6", "−9"], correta: 1, explicacao: "Base negativa com expoente par: positivo." }
      ]
    },
    {
      id: "f2-a8-mat-2",
      titulo: "Teorema de Pitágoras",
      blocos: [
        { tipo: "paragrafo", texto: "Em todo triângulo RETÂNGULO (que tem um ângulo de 90°), o quadrado da HIPOTENUSA (lado oposto ao ângulo reto, o maior) é igual à soma dos quadrados dos CATETOS." },
        { tipo: "titulo", texto: "A fórmula" },
        { tipo: "paragrafo", texto: "a² = b² + c², onde a é a hipotenusa; b e c são os catetos. Para achar um cateto: b² = a² − c²." },
        { tipo: "exemplo", texto: "Escada de 5 m encostada a 3 m da parede: qual a altura que ela alcança? 5² = 3² + h² → 25 = 9 + h² → h² = 16 → h = 4 m." },
        { tipo: "titulo", texto: "Triângulos notáveis" },
        { tipo: "lista", itens: ["3-4-5: o trio pitagórico mais famoso (5² = 9 + 16)", "6-8-10 e 5-12-13: múltiplos e variações", "Triângulo retângulo 45°-45°-90°: catetos iguais, hipotenusa = cateto × √2", "30°-60°-90°: hipotenusa = 2 × cateto menor"] },
        { tipo: "exemplo", texto: "Distância em linha reta: para ir de um ponto a outro pela diagonal de um retângulo 9 m × 12 m, andamos √(81 + 144) = √225 = 15 m." },
        { tipo: "dica", texto: "Antes de aplicar, confira: tem ângulo reto? Então Pitágoras serve. Sem ângulo reto, NÃO USE." },
        { tipo: "atencao", texto: "A hipotenusa é sempre o MAIOR lado. Se seu cálculo deu hipotenusa menor que um cateto, algo está errado." }
      ],
      atividade: [
        { pergunta: "Em um triângulo retângulo de catetos 6 e 8, a hipotenusa é...", alternativas: ["14", "12", "10", "48"], correta: 2, explicacao: "36 + 64 = 100 → √100 = 10." },
        { pergunta: "Hipotenusa 13, um cateto 5. O outro cateto é...", alternativas: ["10", "18", "12", "8"], correta: 2, explicacao: "169 − 25 = 144 → √144 = 12." },
        { pergunta: "O lado oposto ao ângulo reto chama-se...", alternativas: ["base", "altura", "hipotenusa", "cateto"], correta: 2, explicacao: "É o maior lado do triângulo retângulo." },
        { pergunta: "Um quadrado de lado 1 tem diagonal de...", alternativas: ["2", "√3", "√2", "1"], correta: 2, explicacao: "1² + 1² = 2 → diagonal = √2." }
      ]
    },
    {
      id: "f2-a8-mat-3",
      titulo: "Semelhança de triângulos e escalas",
      blocos: [
        { tipo: "paragrafo", texto: "Dois triângulos são SEMELHANTES quando têm ângulos iguais e lados proporcionais — mesma forma, tamanho diferente." },
        { tipo: "titulo", texto: "Casos de semelhança" },
        { tipo: "lista", itens: ["AA: dois ângulos iguais (o mais usado!)", "LAL: dois lados proporcionais e o ângulo entre eles igual", "LLL: os três lados proporcionais"] },
        { tipo: "exemplo", texto: "Se um triângulo tem lados 3, 4, 5 e outro tem 6, 8, 10, eles são semelhantes (razão 1:2). O que dobra os lados dobra a altura, mas multiplica a ÁREA por 4 (2²)!" },
        { tipo: "titulo", texto: "Razão de semelhança (k)" },
        { tipo: "paragrafo", texto: "k = lado do maior ÷ lado correspondente do menor. Perímetros escalam com k; áreas com k²; volumes com k³." },
        { tipo: "titulo", texto: "Escalas" },
        { tipo: "paragrafo", texto: "Escala é semelhança aplicada a mapas e plantas: 1:50.000 significa que cada unidade no desenho vale 50.000 no real. É a mesma lógica da semelhança de figuras." },
        { tipo: "exemplo", texto: "Uma maquete em escala 1:100 de um prédio de 30 m terá 30 cm de altura. E uma área de 100 m² no real aparece com 100 ÷ 100² = 0,01 m² = 100 cm² na maquete (áreas escalam com k²)." },
        { tipo: "dica", texto: "Para achar medidas com sombra: triângulo formado pelo poste e sua sombra é semelhante ao da pessoa e sua sombra (mesmo Sol, mesmos ângulos — caso AA)." },
        { tipo: "atencao", texto: "Razão de semelhança não é de áreas: se os lados dobram, a área QUADRUPLICA (k² = 4). Erro clássico de prova!" }
      ],
      atividade: [
        { pergunta: "Triângulos 3-4-5 e 9-12-15 são...", alternativas: ["diferentes", "congruentes", "retângulos só", "semelhantes (k=3)"], correta: 3, explicacao: "Todos os lados multiplicados por 3." },
        { pergunta: "O caso de semelhança mais usado é...", alternativas: ["LAA", "LL", "AA (dois ângulos)", "SSS inverso"], correta: 2, explicacao: "Bastam dois ângulos iguais." },
        { pergunta: "Se k = 2, a área fica multiplicada por...", alternativas: ["8", "2", "4", "16"], correta: 2, explicacao: "Áreas escalam com k² = 4." },
        { pergunta: "Mapa 1:25.000: 4 cm representam...", alternativas: ["10 km", "100 m", "1 km", "100 km"], correta: 2, explicacao: "4 × 25.000 cm = 100.000 cm = 1 km." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quanto vale 5³?", alternativas: ["125", "243", "75", "15"], correta: 0, explicacao: "5 × 5 × 5 = 125." },
      { pergunta: "7⁰ é igual a...", alternativas: ["7", "0", "1", "não existe"], correta: 2, explicacao: "Todo número (≠0) elevado a 0 vale 1." },
      { pergunta: "Quanto vale ∛27?", alternativas: ["1/3", "27", "3", "9"], correta: 2, explicacao: "3 × 3 × 3 = 27." },
      { pergunta: "Catetos 9 e 12: hipotenusa...", alternativas: ["21", "20", "13", "15"], correta: 3, explicacao: "81 + 144 = 225 → 15." },
      { pergunta: "Se os lados de um triângulo triplicam (k=3), o perímetro...", alternativas: ["não muda", "multiplica por 9", "triplica", "multiplica por 27"], correta: 2, explicacao: "Perímetros escalam com k." },
      { pergunta: "Escala 1:500: 2 cm no desenho valem...", alternativas: ["50 m", "10 m", "100 m", "5 m"], correta: 1, explicacao: "2 × 500 cm = 1.000 cm = 10 m." }
    ]
  },
  exameFinal: [
    { pergunta: "2⁻³ é igual a...", alternativas: ["−8", "8", "−6", "1/8"], correta: 3, explicacao: "Expoente negativo inverte: 1/2³ = 1/8." },
    { pergunta: "(−4)³ vale...", alternativas: ["−64", "12", "−12", "64"], correta: 0, explicacao: "Expoente ímpar mantém o sinal negativo." },
    { pergunta: "Um triângulo 5-12-13 é...", alternativas: ["impossível", "obtusângulo", "retângulo", "equilátero"], correta: 2, explicacao: "25 + 144 = 169: Pitágoras bate." },
    { pergunta: "Uma árvore de 6 m projeta sombra de 4 m; ao lado, sombra de 6 m pertence a um poste de...", alternativas: ["4 m", "9 m", "12 m", "8 m"], correta: 1, explicacao: "Semelhança: 6/4 = x/6 → x = 9 m." },
    { pergunta: "Se k = 3, o volume de sólidos semelhantes multiplica por...", alternativas: ["81", "3", "27", "9"], correta: 2, explicacao: "Volumes escalam com k³." }
  ]
};
