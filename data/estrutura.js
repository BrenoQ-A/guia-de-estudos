// ============================================================
// Guia de Estudos — Estrutura do curso (segmentos, anos e disciplinas). O conteúdo de cada disciplina
// fica em data/c-<id>.js (ex.: data/c-f1-a1-mat.js).
// ============================================================

window.GuiaEstrutura = {
  escola: {
    nome: "Guia de Estudos",
    moto: "Um passo de cada vez, do Fundamental ao Médio.",
    anoLetivo: "2026"
  },

  segmentos: [
    {
      id: "f1",
      ordem: 1,
      nome: "Ensino Fundamental I",
      faixa: "1º ao 5º ano",
      descricao: "Os primeiros passos: ler, escrever, contar e descobrir o mundo.",
      cor: "#0d9488",
      emoji: "🏫"
    },
    {
      id: "f2",
      ordem: 2,
      nome: "Ensino Fundamental II",
      faixa: "6º ao 9º ano",
      descricao: "Aprofundando o raciocínio: exatas, ciências, humanas e inglês.",
      cor: "#4f46e5",
      emoji: "🧭"
    },
    {
      id: "em",
      ordem: 3,
      nome: "Ensino Médio",
      faixa: "1ª à 3ª série",
      descricao: "O último trecho antes do voo: exatas, humanas e vida.",
      cor: "#b45309",
      emoji: "🎓"
    }
  ],

  // anos de cada segmento: [numero] — o rótulo (ano/série) é derivado
  anosPorSegmento: { "f1": [1, 2, 3, 4, 5], "f2": [6, 7, 8, 9], "em": [1, 2, 3] },

  // grades de disciplinas por segmento (id da disciplina = seg + "-a" + numero + "-" + chave)
  grades: {
    "f1": [
      { chave: "por", nome: "Língua Portuguesa", emoji: "📖", cor: "#e11d48" },
      { chave: "mat", nome: "Matemática",        emoji: "🔢", cor: "#4f46e5" },
      { chave: "cie", nome: "Ciências",          emoji: "🔬", cor: "#16a34a" },
      { chave: "his", nome: "História",          emoji: "🏛️", cor: "#b45309" },
      { chave: "geo", nome: "Geografia",         emoji: "🌍", cor: "#0ea5e9" }
    ],
    "f2": [
      { chave: "por", nome: "Língua Portuguesa", emoji: "📖", cor: "#e11d48" },
      { chave: "mat", nome: "Matemática",        emoji: "🔢", cor: "#4f46e5" },
      { chave: "cie", nome: "Ciências",          emoji: "🔬", cor: "#16a34a" },
      { chave: "his", nome: "História",          emoji: "🏛️", cor: "#b45309" },
      { chave: "geo", nome: "Geografia",         emoji: "🌍", cor: "#0ea5e9" },
      { chave: "ing", nome: "Inglês",            emoji: "🗣️", cor: "#8b5cf6" }
    ],
    "em": [
      { chave: "por", nome: "Língua Portuguesa", emoji: "📖", cor: "#e11d48" },
      { chave: "mat", nome: "Matemática",        emoji: "🔢", cor: "#4f46e5" },
      { chave: "fis", nome: "Física",            emoji: "⚡", cor: "#ea580c" },
      { chave: "qui", nome: "Química",           emoji: "⚗️", cor: "#0d9488" },
      { chave: "bio", nome: "Biologia",          emoji: "🧬", cor: "#65a30d" },
      { chave: "his", nome: "História",          emoji: "🏛️", cor: "#b45309" },
      { chave: "geo", nome: "Geografia",         emoji: "🌍", cor: "#0ea5e9" }
    ]
  },

  // rótulos dos anos por segmento ("Nº ano" para fundamental, "Nª série" para médio)
  rotuloAno: function (segId, numero) {
    if (segId === "em") {
      var sup = ["ª", "ª", "ª"];
      return numero + sup[numero - 1] + " série";
    }
    var ord = ["º", "º", "º", "º", "º", "º", "º", "º", "º"];
    return numero + ord[numero - 1] + " ano";
  }
};
