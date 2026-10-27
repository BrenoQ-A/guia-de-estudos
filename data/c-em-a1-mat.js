window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a1-mat"] = {
  aulas: [
    {
      id: "em-a1-mat-1",
      titulo: "Conjuntos e intervalos",
      blocos: [
        { tipo: "paragrafo", texto: "Conjunto é uma coleção bem definida de elementos. É a linguagem-base de toda a matemática do Ensino Médio." },
        { tipo: "titulo", texto: "Notações" },
        { tipo: "lista", itens: ["Pertinência: 3 ∈ A (3 pertence a A); 5 ∉ A (não pertence)", "Contenção: A ⊂ B (A está contido em B; todo elemento de A é de B)", "Igualdade: A = B (têm exatamente os mesmos elementos)", "Conjunto vazio: ∅ (sem elementos)", "Conjuntos numéricos: N (naturais), Z (inteiros), Q (racionais), R (reais), I (irracionais)"] },
        { tipo: "titulo", texto: "Operações" },
        { tipo: "lista", itens: ["União (A ∪ B): elementos de A OU de B", "Interseção (A ∩ B): elementos comuns", "Diferença (A − B): de A, tirando os que estão em B", "Complementar (A^c): fora de A, dentro do universo", "Diagrama de Venn: visualiza tudo isso"] },
        { tipo: "exemplo", texto: "A = {1, 2, 3, 4}, B = {3, 4, 5}: A ∪ B = {1, 2, 3, 4, 5}; A ∩ B = {3, 4}; A − B = {1, 2}." },
        { tipo: "titulo", texto: "Intervalos" },
        { tipo: "paragrafo", texto: "São conjuntos infinitos de reais: [a, b] fechado (inclui extremos); (a, b) aberto (exclui); [a, b) e (a, b] semifechados. ]−∞, +∞[ é todo o R." },
        { tipo: "exemplo", texto: "{x ∈ R | x ≥ 2} = [2, +∞[. {x | −1 < x ≤ 3} = (−1, 3]." },
        { tipo: "atencao", texto: "0 ∈ N depende da convenção (aqui, sim). E ∅ ⊂ A para todo conjunto A (o vazio está contido em qualquer um)." }
      ],
      atividade: [
        { pergunta: "Se A = {2, 4, 6} e B = {4, 6, 8}, então A ∩ B =", alternativas: ["∅", "{2}", "{4, 6}", "{2, 4, 6, 8}"], correta: 2, explicacao: "Comuns: 4 e 6." },
        { pergunta: "O intervalo (1, 5) inclui...", alternativas: ["nem 1 nem 5", "só 1", "1 e 5", "só 5"], correta: 0, explicacao: "Aberto: extremos fora." },
        { pergunta: "√2 pertence a...", alternativas: ["I (irracionais)", "Q", "Z", "N"], correta: 0, explicacao: "Não é razão de inteiros: irracional." },
        { pergunta: "A − B, com A = {1,2,3}, B = {3,4}, é...", alternativas: ["{4}", "{1, 2}", "{3}", "{1, 2, 3}"], correta: 1, explicacao: "Tira de A o que está em B." }
      ]
    },
    {
      id: "em-a1-mat-2",
      titulo: "Funções: domínio, imagem e 1º grau",
      blocos: [
        { tipo: "paragrafo", texto: "Função f: A → B associa a cada x de A um ÚNICO y = f(x) de B. É a máquina: entra x, sai f(x)." },
        { tipo: "titulo", texto: "Domínio e imagem" },
        { tipo: "lista", itens: ["Domínio (D): valores que x pode assumir", "Imagem (Im): valores que f(x) efetivamente atinge", "Contradomínio: conjunto-alvo B (contém a imagem)"] },
        { tipo: "exemplo", texto: "f(x) = 1/(x−2): domínio exclui x = 2 (divisão por zero) → D = {x | x ≠ 2}. f(x) = √x: D = [0, +∞[ (raiz de negativo não existe em R)." },
        { tipo: "titulo", texto: "Função do 1º grau: f(x) = ax + b" },
        { tipo: "lista", itens: ["a > 0: crescente; a < 0: decrescente", "Reta: corta y em b e x na raiz (x = −b/a)", "Domínio e imagem: R (todo o real)", "Crescimento constante: +a por unidade de x"] },
        { tipo: "exemplo", texto: "f(x) = −2x + 8: raiz em x = 4, decrescente. f(0) = 8 (ponto (0,8)); f(4) = 0 (ponto (4,0)). Dois pontos bastam para desenhar a reta." },
        { tipo: "dica", texto: "Teste da reta vertical: se uma vertical cruza o gráfico em mais de um ponto, NÃO é função." },
        { tipo: "atencao", texto: "Cuidado com domínio: divisão (denominador ≠ 0), raiz (radicando ≥ 0) e log (argumento > 0) restringem o domínio!" }
      ],
      atividade: [
        { pergunta: "f(x) = 3x − 6. Então f(2) =", alternativas: ["12", "6", "−6", "0"], correta: 3, explicacao: "3(2) − 6 = 0 (x = 2 é a raiz)." },
        { pergunta: "O domínio de f(x) = 1/(x+1) exclui...", alternativas: ["x = −1", "nada", "x = 1", "x = 0"], correta: 0, explicacao: "x + 1 = 0 anula o denominador." },
        { pergunta: "A função f(x) = 5x + 2 é...", alternativas: ["constante", "decrescente", "parábola", "crescente"], correta: 3, explicacao: "a = 5 > 0." },
        { pergunta: "O domínio de f(x) = √(x−3) é...", alternativas: ["R", "[3, +∞[", "]−∞, 3]", "(3, +∞)"], correta: 1, explicacao: "Radicando x − 3 ≥ 0." }
      ]
    },
    {
      id: "em-a1-mat-3",
      titulo: "Função quadrática: parábola",
      blocos: [
        { tipo: "paragrafo", texto: "Função quadrática: f(x) = ax² + bx + c (a ≠ 0). Seu gráfico é uma PARÁBOLA — curva com vértice, simetria e raízes." },
        { tipo: "titulo", texto: "Elementos da parábola" },
        { tipo: "lista", itens: ["a > 0: concavidade para cima (∪); a < 0: para baixo (∩)", "Vértice: x_v = −b/2a; y_v = f(x_v) (ponto máximo ou mínimo)", "Raízes: equação de Bhaskara: x = (−b ± √Δ)/2a, com Δ = b² − 4ac", "Δ > 0: duas raízes reais; Δ = 0: uma; Δ < 0: nenhuma", "Eixo de simetria: reta vertical x = −b/2a"] },
        { tipo: "exemplo", texto: "f(x) = x² − 6x + 5: Δ = 36 − 20 = 16; x = (6 ± 4)/2 → raízes 1 e 5. Vértice: x_v = 3, y_v = 9 − 18 + 5 = −4. Concavidade para cima: mínimo em (3, −4)." },
        { tipo: "titulo", texto: "Interpretação do gráfico" },
        { tipo: "paragrafo", texto: "As raízes são onde a parábola corta o eixo x. f(x) > 0: trecho acima do eixo; f(x) < 0: abaixo. Para 'quando a altura é máxima?' em problemas, ache o vértice." },
        { tipo: "exemplo", texto: "Uma bola lançada tem altura h(t) = −t² + 8t. Altura máxima: t_v = −8/(2×(−1)) = 4 s; h(4) = −16 + 32 = 16 m. Tempo total de voo: raízes (0 e 8 s)." },
        { tipo: "dica", texto: "Soma e produto das raízes: S = −b/a e P = c/a — atalho para conferir Bhaskara (no exemplo: S = 6, P = 5: raízes 1 e 5 ✓)." },
        { tipo: "atencao", texto: "Se a = 0, NÃO é quadrática (vira reta). E o valor mínimo/máximo está SEMPRE no vértice, nunca nas raízes." }
      ],
      atividade: [
        { pergunta: "Δ de f(x) = x² − 4x + 3 vale...", alternativas: ["4", "−4", "28", "16"], correta: 0, explicacao: "16 − 12 = 4 (duas raízes)." },
        { pergunta: "As raízes de x² − 5x + 6 são...", alternativas: ["−2 e −3", "0 e 5", "1 e 6", "2 e 3"], correta: 3, explicacao: "(6 ± √1)/2 = 2 e 3." },
        { pergunta: "a < 0 significa concavidade para...", alternativas: ["nada", "cima", "lado", "baixo"], correta: 3, explicacao: "∩: vértice é ponto de máximo." },
        { pergunta: "O x do vértice de f(x) = 2x² − 8x + 1 é...", alternativas: ["2", "1", "−2", "4"], correta: 0, explicacao: "−b/2a = 8/4 = 2." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Se A = {1,2} e B = {2,3}, então A ∪ B =", alternativas: ["∅", "{2}", "{1, 2, 3}", "{1, 3}"], correta: 2, explicacao: "União: tudo que aparece em algum." },
      { pergunta: "f(x) = −x + 3. f(5) =", alternativas: ["8", "−8", "2", "−2"], correta: 3, explicacao: "−5 + 3 = −2." },
      { pergunta: "Domínio de f(x) = (x+1)/(x−4):", alternativas: ["R", "x ≠ 0", "x ≠ 4", "x ≠ −1"], correta: 2, explicacao: "Denominador não pode zerar." },
      { pergunta: "Δ de x² + 2x + 5 vale...", alternativas: ["16", "−16", "24", "4"], correta: 1, explicacao: "4 − 20 = −16: sem raízes reais." },
      { pergunta: "O vértice de f(x) = x² − 4x + 3 está em x =", alternativas: ["−2", "3", "4", "2"], correta: 3, explicacao: "−(−4)/2 = 2." },
      { pergunta: "Soma das raízes de 2x² − 8x + 6 = 0 é...", alternativas: ["8", "3", "−4", "4"], correta: 3, explicacao: "S = −b/a = 8/2 = 4." }
    ]
  },
  exameFinal: [
    { pergunta: "Z ∩ N (com 0 ∈ N) é igual a...", alternativas: ["N", "I", "∅", "Z"], correta: 0, explicacao: "Todo natural é inteiro: N ⊂ Z." },
    { pergunta: "O domínio de f(x) = √(2−x) é...", alternativas: ["R", "(2, +∞)", "]−∞, 2]", "[2, +∞["], correta: 2, explicacao: "2 − x ≥ 0 → x ≤ 2." },
    { pergunta: "Uma função f(x) = ax + b passa por (0, 7). Então b =", alternativas: ["1", "−7", "7", "0"], correta: 2, explicacao: "f(0) = b." },
    { pergunta: "O valor máximo de f(x) = −x² + 4x + 1 é...", alternativas: ["4", "2", "1", "5"], correta: 3, explicacao: "y_v em x = 2: −4 + 8 + 1 = 5." },
    { pergunta: "Δ = 0 significa...", alternativas: ["raízes imaginárias", "duas raízes", "nenhuma raiz", "uma raiz dupla"], correta: 3, explicacao: "Bhaskara com raiz zero: raízes iguais." }
  ]
};
