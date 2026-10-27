window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f2-a9-mat"] = {
  aulas: [
    {
      id: "f2-a9-mat-1",
      titulo: "Função do 1º grau",
      blocos: [
        { tipo: "paragrafo", texto: "Função é uma relação entre duas grandezas: cada valor de x (domínio) corresponde a um único valor de y (imagem). A função do 1º grau (afim) tem a forma f(x) = ax + b, com a ≠ 0." },
        { tipo: "titulo", texto: "Elementos" },
        { tipo: "lista", itens: ["a = coeficiente angular: inclinação da reta (a > 0: crescente; a < 0: decrescente)", "b = coeficiente linear: onde a reta corta o eixo y", "Gráfico: uma reta", "Raiz (ou zero): o valor de x onde y = 0, ou seja, onde a reta corta o eixo x"] },
        { tipo: "exemplo", texto: "f(x) = 2x − 4. Raiz: 2x − 4 = 0 → x = 2. Gráfico: corta y em −4 e x em 2, subindo (a = 2 > 0). Crescimento: cada passo de x em 1, y sobe 2." },
        { tipo: "titulo", texto: "Aplicações" },
        { tipo: "paragrafo", texto: "Taxi: custo = bandeirada + preço por km → f(x) = 5 + 2,5x. Salário com comissão, custo de produção, conversão de moedas, temperatura Celsius-Fahrenheit (F = 1,8C + 32)." },
        { tipo: "exemplo", texto: "Problema: um plano de celular cobra R$ 30 fixos + R$ 1 por minuto. Custo de 100 minutos: f(100) = 30 + 100 = R$ 130. Quantos minutos por R$ 80? 30 + x = 80 → x = 50 minutos." },
        { tipo: "dica", texto: "Para desenhar uma reta, basta DOIS pontos. Escolha x = 0 (dá b) e a raiz (y = 0)." },
        { tipo: "atencao", texto: "Função exige unicidade: cada x tem UM y. Se uma reta vertical cruza o gráfico duas vezes, não é função." }
      ],
      atividade: [
        { pergunta: "A raiz da função f(x) = 3x − 12 é...", alternativas: ["3", "4", "12", "−4"], correta: 1, explicacao: "3x − 12 = 0 → x = 4." },
        { pergunta: "f(x) = −2x + 6 é...", alternativas: ["decrescente", "constante", "crescente", "quadrática"], correta: 0, explicacao: "a = −2 < 0: reta desce." },
        { pergunta: "Onde f(x) = x + 5 corta o eixo y?", alternativas: ["em −5", "em 5", "em 0", "em 1"], correta: 1, explicacao: "b = 5: ponto (0, 5)." },
        { pergunta: "No plano f(x) = 40 + 0,5x, gastar R$ 100 equivale a...", alternativas: ["100 min", "140 min", "60 min", "120 min"], correta: 3, explicacao: "40 + 0,5x = 100 → 0,5x = 60 → x = 120." }
      ]
    },
    {
      id: "f2-a9-mat-2",
      titulo: "Produtos notáveis e fatoração",
      blocos: [
        { tipo: "paragrafo", texto: "Produtos notáveis são multiplicações de expressões algébricas que aparecem tanto que vale decorar seus resultados." },
        { tipo: "titulo", texto: "Os três principais" },
        { tipo: "lista", itens: ["Quadrado da soma: (a + b)² = a² + 2ab + b²", "Quadrado da diferença: (a − b)² = a² − 2ab + b²", "Produto da soma pela diferença: (a + b)(a − b) = a² − b²"] },
        { tipo: "exemplo", texto: "(x + 3)² = x² + 6x + 9. (x − 5)² = x² − 10x + 25. (x + 7)(x − 7) = x² − 49. Cálculo mental: 101² = (100 + 1)² = 10.000 + 200 + 1 = 10.201!" },
        { tipo: "titulo", texto: "Fatoração: o caminho de volta" },
        { tipo: "paragrafo", texto: "Fatorar é escrever como produto. Passos: 1) Fator comum (2x + 4 = 2(x + 2)); 2) Agrupamento; 3) Diferença de quadrados (x² − 9 = (x + 3)(x − 3)); 4) Trinômio quadrado perfeito (x² + 6x + 9 = (x + 3)²)." },
        { tipo: "lista", itens: ["Fator comum: ax + ay = a(x + y)", "Diferença de quadrados: a² − b² = (a + b)(a − b)", "TQP: a² + 2ab + b² = (a + b)²"] },
        { tipo: "dica", texto: "Simplifique frações algébricas fatorando e cancelando: (x² − 4)/(x + 2) = (x + 2)(x − 2)/(x + 2) = x − 2 (com x ≠ −2)." },
        { tipo: "atencao", texto: "(a + b)² NÃO é a² + b²! O termo 2ab (produto dobrado) é o mais esquecido — conta que vale nota." }
      ],
      atividade: [
        { pergunta: "(x + 4)² é igual a...", alternativas: ["x² + 16", "x² + 8x + 16", "x² + 4x + 16", "x² + 8"], correta: 1, explicacao: "a² + 2ab + b²: x² + 8x + 16." },
        { pergunta: "(x + 5)(x − 5) vale...", alternativas: ["x² − 5", "x² + 25", "x² − 25", "x² − 10x + 25"], correta: 2, explicacao: "Soma pela diferença: a² − b²." },
        { pergunta: "Fatorando x² − 36:", alternativas: ["x(x − 36)", "(x + 6)²", "(x + 6)(x − 6)", "(x − 6)²"], correta: 2, explicacao: "Diferença de quadrados." },
        { pergunta: "Calculando mentalmente 99²:", alternativas: ["9.901", "9.810", "10.801", "9.801"], correta: 3, explicacao: "(100 − 1)² = 10.000 − 200 + 1 = 9.801." }
      ]
    },
    {
      id: "f2-a9-mat-3",
      titulo: "Probabilidade e estatística",
      blocos: [
        { tipo: "paragrafo", texto: "Probabilidade mede a chance de um evento: P = casos favoráveis ÷ casos possíveis. Sempre entre 0 (impossível) e 1 (certeza)." },
        { tipo: "titulo", texto: "Espaço amostral" },
        { tipo: "exemplo", texto: "Um dado: espaço amostral {1, 2, 3, 4, 5, 6} (6 casos). Probabilidade de sair número par: favoráveis {2, 4, 6} → P = 3/6 = 1/2 = 50%. Probabilidade de sair 7? Impossível: P = 0." },
        { tipo: "titulo", texto: "Estatística descritiva" },
        { tipo: "lista", itens: ["Média: soma dos valores ÷ quantidade (equilíbrio geral)", "Mediana: valor central dos dados ORDENADOS (robusta a extremos)", "Moda: valor mais frequente (pode não existir ou ser múltipla)", "Amplitude: máximo − mínimo (dispersão simples)"] },
        { tipo: "exemplo", texto: "Notas 4, 6, 6, 8, 10: média = 34 ÷ 5 = 6,8; mediana = 6 (valor central); moda = 6 (mais frequente). Agora 4, 6, 6, 8, 100: a média explode (24,8), mas a mediana continua 6 — por isso salários usam mediana!" },
        { tipo: "dica", texto: "Probabilidade de dois eventos independentes em sequência: multiplica. Duas caras seguidas na moeda: 1/2 × 1/2 = 1/4." },
        { tipo: "atencao", texto: "Média sensível a valores extremos: um bilionário num bairro infla a 'renda média'. Mediana conta a história do habitante típico." }
      ],
      atividade: [
        { pergunta: "Ao lançar um dado, a probabilidade de sair 5 ou 6 é...", alternativas: ["1/3", "1/2", "2/3", "1/6"], correta: 0, explicacao: "2 favoráveis ÷ 6 possíveis = 1/3." },
        { pergunta: "A mediana de 3, 7, 9, 11, 15 é...", alternativas: ["7", "8", "9", "11"], correta: 2, explicacao: "Dados ordenados: o central é 9." },
        { pergunta: "A moda de 2, 2, 3, 4, 4, 4, 5 é...", alternativas: ["3", "4", "2", "5"], correta: 1, explicacao: "O 4 aparece 3 vezes: mais frequente." },
        { pergunta: "Média de 5, 7 e 9:", alternativas: ["6", "8", "7", "9"], correta: 2, explicacao: "21 ÷ 3 = 7." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "f(x) = 5x − 10. A raiz é...", alternativas: ["10", "−2", "5", "2"], correta: 3, explicacao: "5x = 10 → x = 2." },
      { pergunta: "f(x) = 4x + 8 com x = −3 vale...", alternativas: ["20", "−20", "−4", "4"], correta: 2, explicacao: "4 × (−3) + 8 = −12 + 8 = −4." },
      { pergunta: "(x − 3)² desenvolve...", alternativas: ["x² + 6x + 9", "x² − 9", "x² − 6x + 9", "x² − 3x + 9"], correta: 2, explicacao: "a² − 2ab + b²." },
      { pergunta: "Fatorando x² + 8x + 16:", alternativas: ["(x + 4)²", "(x + 8)²", "(x + 4)(x − 4)", "x(x + 16)"], correta: 0, explicacao: "Trinômio quadrado perfeito." },
      { pergunta: "Uma moeda é lançada 2 vezes. P(duas coras) =", alternativas: ["1/2", "1/3", "1/8", "1/4"], correta: 3, explicacao: "1/2 × 1/2 = 1/4." },
      { pergunta: "A mediana de 2, 5, 8, 10 é...", alternativas: ["6,5", "8", "7", "5"], correta: 0, explicacao: "Número par de termos: média dos centrais (5+8)/2 = 6,5." }
    ]
  },
  exameFinal: [
    { pergunta: "Numa função do 1º grau, o coeficiente a indica...", alternativas: ["onde corta o eixo y", "a inclinação da reta", "o domínio", "a raiz"], correta: 1, explicacao: "a > 0 sobe; a < 0 desce." },
    { pergunta: "f(x) = 2x + 1; para f(x) = 9, x vale...", alternativas: ["4", "3", "2", "5"], correta: 0, explicacao: "2x + 1 = 9 → x = 4." },
    { pergunta: "50² pelo produto notável de (50+2)(50−2)... o resultado de 48 × 52 é...", alternativas: ["2.406", "2.496", "2.500", "2.504"], correta: 1, explicacao: "50² − 2² = 2.500 − 4 = 2.496." },
    { pergunta: "Numa urna com 3 bolas vermelhas e 7 azuis, P(vermelha) =", alternativas: ["3/10", "1/2", "3/7", "7/10"], correta: 0, explicacao: "3 favoráveis ÷ 10 totais." },
    { pergunta: "Quando usar a mediana em vez da média?", alternativas: ["quando há valores extremos (outliers)", "quando os dados são pares", "sempre", "nunca"], correta: 0, explicacao: "A mediana resiste a extremos." }
  ]
};
