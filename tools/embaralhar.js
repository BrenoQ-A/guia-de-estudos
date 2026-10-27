// Embaralha as alternativas de todas as questões do Colégio Horizonte,
// corrigindo o índice da resposta correta. Uso: node tools/embaralhar.js
// Roda sobre data/c-*.js e reescreve os arquivos no mesmo formato.

"use strict";

const fs = require("fs");
const path = require("path");

global.window = {};
const raiz = path.join(__dirname, "..");
const pasta = path.join(raiz, "data");

const arquivos = fs.readdirSync(pasta).filter(f => /^c-.*\.js$/.test(f)).sort();

// Serializa um valor no estilo do projeto (chaves sem aspas, strings escapadas)
function ser(v, indent) {
  const pad = " ".repeat(indent);
  const padInt = " ".repeat(indent + 2);
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "number") return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    if (v.every(x => typeof x === "string" || typeof x === "number")) {
      return "[" + v.map(x => JSON.stringify(x)).join(", ") + "]";
    }
    return "[\n" + v.map(x => padInt + ser(x, indent + 2)).join(",\n") + "\n" + pad + "]";
  }
  // objeto
  const chaves = Object.keys(v);
  const partes = chaves.map(k => k + ": " + ser(v[k], indent));
  return "{ " + partes.join(", ") + " }";
}

// Permutação de Fisher-Yates com registro do mapeamento
function permutar(n) {
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx; // novaPosicao -> antigaPosicao
}

function embaralharQuestao(q) {
  const p = permutar(q.alternativas.length);
  const novas = p.map(i => q.alternativas[i]);
  const novaCorreta = p.indexOf(q.correta);
  return Object.assign({}, q, { alternativas: novas, correta: novaCorreta });
}

let totalQuestoes = 0;

for (const arquivo of arquivos) {
  delete require.cache[require.resolve(path.join(pasta, arquivo))];
  require(path.join(pasta, arquivo));
}

const C = global.window.ColegioConteudo;

for (const arquivo of arquivos) {
  const m = arquivo.match(/^c-(.+)\.js$/);
  const id = m[1];
  const c = C[id];
  if (!c) continue;

  c.aulas.forEach(aula => {
    aula.atividade = aula.atividade.map(q => { totalQuestoes++; return embaralharQuestao(q); });
  });
  c.prova.questoes = c.prova.questoes.map(q => { totalQuestoes++; return embaralharQuestao(q); });
  c.exameFinal = c.exameFinal.map(q => { totalQuestoes++; return embaralharQuestao(q); });

  // Reescreve o arquivo
  const linhas = [];
  linhas.push("window.ColegioConteudo = window.ColegioConteudo || {};");
  linhas.push("");
  linhas.push("window.ColegioConteudo[" + JSON.stringify(id) + "] = {");
  linhas.push("  aulas: [");
  c.aulas.forEach(aula => {
    linhas.push("    {");
    linhas.push("      id: " + JSON.stringify(aula.id) + ",");
    linhas.push("      titulo: " + JSON.stringify(aula.titulo) + ",");
    linhas.push("      blocos: [");
    aula.blocos.forEach(b => linhas.push("        " + ser(b, 8) + ","));
    // remove vírgula da última linha de blocos
    if (linhas.length && linhas[linhas.length - 1].endsWith(",")) {
      linhas[linhas.length - 1] = linhas[linhas.length - 1].slice(0, -1);
    }
    linhas.push("      ],");
    linhas.push("      atividade: [");
    aula.atividade.forEach(q => linhas.push("        " + ser(q, 8) + ","));
    if (linhas.length && linhas[linhas.length - 1].endsWith(",")) {
      linhas[linhas.length - 1] = linhas[linhas.length - 1].slice(0, -1);
    }
    linhas.push("      ]");
    linhas.push("    },");
  });
  if (linhas.length && linhas[linhas.length - 1].endsWith(",")) {
    linhas[linhas.length - 1] = linhas[linhas.length - 1].slice(0, -1);
  }
  linhas.push("  ],");
  linhas.push("  prova: {");
  linhas.push("    questoes: [");
  c.prova.questoes.forEach(q => linhas.push("      " + ser(q, 6) + ","));
  if (linhas.length && linhas[linhas.length - 1].endsWith(",")) {
    linhas[linhas.length - 1] = linhas[linhas.length - 1].slice(0, -1);
  }
  linhas.push("    ]");
  linhas.push("  },");
  linhas.push("  exameFinal: [");
  c.exameFinal.forEach(q => linhas.push("    " + ser(q, 4) + ","));
  if (linhas.length && linhas[linhas.length - 1].endsWith(",")) {
    linhas[linhas.length - 1] = linhas[linhas.length - 1].slice(0, -1);
  }
  linhas.push("  ]");
  linhas.push("};");

  fs.writeFileSync(path.join(pasta, arquivo), linhas.join("\n") + "\n", "utf-8");
}

// Relatório de distribuição
const distrib = { 0: 0, 1: 0, 2: 0, 3: 0 };
for (const arquivo of arquivos) {
  delete require.cache[require.resolve(path.join(pasta, arquivo))];
  require(path.join(pasta, arquivo));
}
const C2 = global.window.ColegioConteudo;
for (const arquivo of arquivos) {
  const id = arquivo.match(/^c-(.+)\.js$/)[1];
  const c = C2[id];
  if (!c) continue;
  const todas = [...c.aulas.flatMap(a => a.atividade), ...c.prova.questoes, ...c.exameFinal];
  todas.forEach(q => distrib[q.correta]++);
}

console.log("Questões embaralhadas:", totalQuestoes);
console.log("Nova distribuição dos gabaritos:", JSON.stringify(distrib));
