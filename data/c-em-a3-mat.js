window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["em-a3-mat"] = {
  aulas: [
    {
      id: "em-a3-mat-1",
      titulo: "Logaritmos",
      blocos: [
        { tipo: "paragrafo", texto: "Logaritmo é o expoente: log_a b = x significa a^x = b (com a > 0, a ≠ 1, b > 0). O log responde: 'a elevado a que número dá b?'" },
        { tipo: "titulo", texto: "Definição e consequências" },
        { tipo: "lista", itens: ["log_2 8 = 3 (porque 2³ = 8)", "log_a a = 1; log_a 1 = 0", "a^(log_a b) = b (logaritmando 'desfaz' a base)", "log de número ≤ 0 não existe nos reais"] },
        { tipo: "titulo", texto: "Propriedades operatórias" },
        { tipo: "lista", itens: ["Produto: log_a (M·N) = log_a M + log_a N", "Quociente: log_a (M/N) = log_a M − log_a N", "Potência: log_a (M^p) = p·log_a M (o expoente 'sai'!", "Mudança de base: log_a b = log_c b / log_c a"] },
        { tipo: "exemplo", texto: "log_2 16 + log_2 4 = log_2 64 = 6. E log 500 (base 10): log 500 = log(5·100) = log 5 + 2 ≈ 0,7 + 2 = 2,7." },
        { tipo: "titulo", texto: "Equações e aplicações" },
        { tipo: "paragrafo", texto: "Equações: log_2(x − 1) = 3 → x − 1 = 8 → x = 9 (verifique o domínio!). Aplicações clássicas: pH = −log[H⁺], escala de Richter, decibéis, juros compostos e meia-vida radioativa (decaimento exponencial)." },
        { tipo: "exemplo", texto: "Bactérias dobrando por hora: N(t) = 1000·2^t. Quando chegam a 128.000? 2^t = 128 → t = log_2 128 = 7 horas." },
        { tipo: "dica", texto: "Colcheia: se a questão dá log 2 ≈ 0,3 e log 3 ≈ 0,48, TUDO se resolve por propriedades (log 6 = log 2 + log 3 = 0,78; log 4 = 0,6...)." },
        { tipo: "atencao", texto: "log_a (M + N) NÃO é log M + log N! Só produto e quociente viram soma/subtração. E sempre cheque o DOMÍNIO (argumento > 0) antes de dar a resposta." }
      ],
      atividade: [
        { pergunta: "log_3 81 vale...", alternativas: ["9", "4", "27", "3"], correta: 1, explicacao: "3⁴ = 81." },
        { pergunta: "log_2 8 + log_2 4 =", alternativas: ["log_2 32 = 5", "2", "log_2 12", "6"], correta: 0, explicacao: "8·4 = 32 = 2⁵." },
        { pergunta: "Se log 2 ≈ 0,3, então log 8 vale...", alternativas: ["0,9", "2,4", "1,2", "0,6"], correta: 0, explicacao: "8 = 2³ → 3·0,3 = 0,9." },
        { pergunta: "A solução de log_3(x) = 2 é...", alternativas: ["x = 6", "x = 5", "x = 9", "x = 8"], correta: 2, explicacao: "3² = 9." }
      ]
    },
    {
      id: "em-a3-mat-2",
      titulo: "Geometria espacial: áreas e volumes",
      blocos: [
        { tipo: "paragrafo", texto: "No espaço, os sólidos ganham volume. Os principais: prismas, pirâmides, cilindros, cones e esferas." },
        { tipo: "titulo", texto: "Prismas e cilindros" },
        { tipo: "lista", itens: ["Prisma: duas bases congruentes + faces laterais retangulares", "Volume do prisma: V = A_base × altura", "Cilindro: V = π·r²·h; área lateral = 2πrh; total = 2πr(r+h)", "Cubo: V = a³; área total = 6a²"] },
        { tipo: "titulo", texto: "Pirâmides e cones" },
        { tipo: "lista", itens: ["V = (1/3) × A_base × altura — exatamente 1/3 do prisma equivalente!", "Cone: V = (1/3)·πr²h; geratriz g = √(r² + h²)", "Área lateral do cone: πrg (o 'setor' desenrolado)"] },
        { tipo: "titulo", texto: "Esfera e semelhança" },
        { tipo: "lista", itens: ["Esfera: V = (4/3)πr³; área = 4πr²", "Sólidos semelhantes de razão k: áreas ×k², volumes ×k³", "Unidade: 1 L = 1 dm³; 1 mL = 1 cm³"] },
        { tipo: "exemplo", texto: "Cilindro de r = 3 m e h = 5 m: V = π·9·5 = 45π ≈ 141,3 m³. Cone equivalente (mesmas medidas): 15π — exatamente um terço!" },
        { tipo: "exemplo", texto: "Esfera de 2 m de raio: V = (4/3)π·8 = 32π/3 ≈ 33,5 m³. Duplicando o raio (k = 2): volume ×8 (2³) — mas a área só ×4." },
        { tipo: "dica", texto: "Cortes de sólidos: plano horizontal no cilindro = círculos iguais; no cone = círculos que encolhem; seção de esfera = círculo (o máximo é o equador)." },
        { tipo: "atencao", texto: "A ALTURA do prisma/pirâmide/cone é perpendicular à base — não é a aresta lateral! Em pirâmide oblíqua, a altura cai fora da base." }
      ],
      atividade: [
        { pergunta: "Volume de um cubo de aresta 3 cm:", alternativas: ["9 cm³", "18 cm³", "81 cm³", "27 cm³"], correta: 3, explicacao: "a³ = 27." },
        { pergunta: "Volume de um cilindro r = 2, h = 10:", alternativas: ["40π", "80π", "10π", "20π"], correta: 0, explicacao: "π·4·10 = 40π." },
        { pergunta: "Um cone com o mesmo raio e altura de um cilindro tem volume...", alternativas: ["1/3 do cilindro", "1/2", "3 vezes maior", "igual"], correta: 0, explicacao: "V = (1/3)πr²h." },
        { pergunta: "Duplicando a aresta de um cubo, o volume multiplica por...", alternativas: ["4", "8", "6", "2"], correta: 1, explicacao: "k³ = 8." }
      ]
    },
    {
      id: "em-a3-mat-3",
      titulo: "Geometria analítica: reta e circunferência",
      blocos: [
        { tipo: "paragrafo", texto: "A geometria analítica une álgebra e geometria: pontos viram pares ordenados e figuras viram equações." },
        { tipo: "titulo", texto: "Distância e ponto médio" },
        { tipo: "lista", itens: ["Distância entre A(x₁,y₁) e B(x₂,y₂): d = √[(x₂−x₁)² + (y₂−y₁)²]", "Ponto médio: M = ((x₁+x₂)/2, (y₁+y₂)/2)"] },
        { tipo: "titulo", texto: "Equação da reta" },
        { tipo: "lista", itens: ["Reduzida: y = ax + b (a = inclinação; b = onde corta o eixo y)", "Coeficiente angular: a = Δy/Δx = (y₂−y₁)/(x₂−x₁)", "Geral: ax + by + c = 0", "Retas paralelas: mesmo a; perpendiculares: a₁·a₂ = −1"] },
        { tipo: "exemplo", texto: "Reta por (1, 2) e (3, 8): a = (8−2)/(3−1) = 3; b = 2 − 3·1 = −1 → y = 3x − 1. Verifique em (3, 8): 9 − 1 = 8 ✓." },
        { tipo: "titulo", texto: "Circunferência" },
        { tipo: "lista", itens: ["Centro C(a, b) e raio r: (x − a)² + (y − b)² = r²", "Exemplo: (x−2)² + (y+1)² = 25 → centro (2, −1), raio 5", "Tangência: reta que toca a circunferência em um ponto (d(C, reta) = r); secante corta em 2; externa em 0"] },
        { tipo: "paragrafo", texto: "Distância ponto-reta: d = |a·x₀ + b·y₀ + c| / √(a² + b²). Aplicação: decidir se uma reta corta, tangencia ou não toca uma circunferência comparando com r." },
        { tipo: "dica", texto: "Interseção de reta e circunferência: substitua a reta na equação da circunferência e resolva (Bhaskara). Δ = 0: tangente; Δ > 0: secante." },
        { tipo: "atencao", texto: "(x+3)² + (y−1)² = 9 tem centro (−3, 1) — ATENÇÃO ao sinal! E r² = 9 → r = 3 (não 9)." }
      ],
      atividade: [
        { pergunta: "Distância entre (0,0) e (3,4):", alternativas: ["25", "7", "5", "√7"], correta: 2, explicacao: "√(9+16) = 5 (terno pitagórico)." },
        { pergunta: "Coeficiente angular da reta por (1,1) e (3,7):", alternativas: ["6", "3", "1/3", "2"], correta: 1, explicacao: "(7−1)/(3−1) = 3." },
        { pergunta: "O centro de (x+2)² + (y−5)² = 16 é...", alternativas: ["(−2, 5)", "(−2, −5)", "(2, 5)", "(2, −5)"], correta: 0, explicacao: "Sinais trocam dentro dos parênteses." },
        { pergunta: "Retas y = 2x + 1 e y = 2x − 3 são...", alternativas: ["concorrentes", "paralelas", "coincidentes", "perpendiculares"], correta: 1, explicacao: "Mesmo coeficiente angular." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "log_5 125 vale...", alternativas: ["25", "5", "3", "2"], correta: 2, explicacao: "5³ = 125." },
      { pergunta: "log_a M^p equivale a...", alternativas: ["log_a M / p", "p·log_a M", "(log_a M)^p", "log_a p"], correta: 1, explicacao: "Expoente desce multiplicando." },
      { pergunta: "Volume da pirâmide de base 36 cm² e altura 10 cm:", alternativas: ["90 cm³", "360 cm³", "120 cm³", "3600 cm³"], correta: 2, explicacao: "V = 36·10/3 = 120." },
      { pergunta: "Área total da esfera de r = 3:", alternativas: ["12π", "27π", "9π", "36π"], correta: 3, explicacao: "4π·9 = 36π." },
      { pergunta: "A reta por (0,3) e (2,7) é y =", alternativas: ["2x + 3", "x + 3", "2x − 3", "3x + 3"], correta: 0, explicacao: "a = 4/2 = 2; b = 3." },
      { pergunta: "(x−1)² + (y−2)² = 49 tem raio...", alternativas: ["7", "√7", "49", "24"], correta: 0, explicacao: "r² = 49 → r = 7." }
    ]
  },
  exameFinal: [
    { pergunta: "O logaritmo de número negativo...", alternativas: ["vale −1", "existe", "não existe nos reais", "é infinito"], correta: 2, explicacao: "Domínio: b > 0." },
    { pergunta: "Mudança de base: log_a b =", alternativas: ["log_c b / log_c a", "log b · log a", "b/a", "log_a c / log_b c"], correta: 0, explicacao: "Divide logs na base nova." },
    { pergunta: "1 litro equivale a...", alternativas: ["1 dm³", "1 cm³", "10 cm³", "1 m³"], correta: 0, explicacao: "Cubo de 10 cm de aresta." },
    { pergunta: "Se as áreas de sólidos semelhantes multiplicam por 9, os volumes por...", alternativas: ["27", "3", "81", "9"], correta: 0, explicacao: "k² = 9 → k = 3 → k³ = 27." },
    { pergunta: "Retas perpendiculares têm coeficientes angulares com produto...", alternativas: ["−1", "0", "1", "2"], correta: 0, explicacao: "a₁·a₂ = −1." }
  ]
};
