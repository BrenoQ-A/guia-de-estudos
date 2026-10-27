// Validação dos arquivos de conteúdo do Colégio Horizonte.
// Uso: node tools/validar.js
// Verifica sintaxe (carregando cada arquivo), presença de conteúdo
// para todas as 70 disciplinas e as regras de schema.

"use strict";

const fs = require("fs");
const path = require("path");

global.window = {};
const raiz = path.join(__dirname, "..");

// 1. estrutura
require(path.join(raiz, "data", "estrutura.js"));
const E = global.window.ColegioEstrutura;

// ids esperados
const esperados = [];
for (const seg of E.segmentos) {
  for (const ano of E.anosPorSegmento[seg.id]) {
    for (const d of E.grades[seg.id]) {
      esperados.push(seg.id + "-a" + ano + "-" + d.chave);
    }
  }
}

// 2. carrega todos os data/c-*.js existentes
const arquivos = fs.readdirSync(path.join(raiz, "data"))
  .filter(f => /^c-.*\.js$/.test(f))
  .sort();
for (const f of arquivos) {
  try {
    require(path.join(raiz, "data", f));
  } catch (e) {
    console.log("ERRO DE SINTAXE em " + f + ": " + e.message);
  }
}
const C = global.window.ColegioConteudo || {};

let erros = 0, avisos = 0;
const err = (msg) => { console.log("  ✗ " + msg); erros++; };
const aviso = (msg) => { console.log("  ⚠ " + msg); avisos++; };

function checaQuestao(q, onde) {
  if (!q || typeof q.pergunta !== "string" || !q.pergunta.trim()) return err(onde + ": pergunta vazia");
  if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4) return err(onde + ": precisa de 4 alternativas");
  if (typeof q.correta !== "number" || q.correta < 0 || q.correta > 3 || !Number.isInteger(q.correta))
    return err(onde + ": 'correta' deve ser índice 0-3 (recebi " + JSON.stringify(q.correta) + ")");
  if (!q.explicacao || !String(q.explicacao).trim()) return err(onde + ": sem explicação");
  for (const alt of q.alternativas) {
    if (typeof alt !== "string" || !alt.trim()) return err(onde + ": alternativa vazia");
  }
}

const faltando = esperados.filter(id => !C[id]);
console.log("=".repeat(64));
console.log("VALIDAÇÃO DO CONTEÚDO — " + new Date().toISOString());
console.log("=".repeat(64));
console.log("Disciplinas esperadas: " + esperados.length);
console.log("Arquivos de conteúdo encontrados: " + arquivos.length);
if (faltando.length) {
  console.log("\nFALTANDO CONTEÚDO (" + faltando.length + "):");
  faltando.forEach(id => console.log("  - " + id));
  erros += faltando.length;
}

const distrib = { 0: 0, 1: 0, 2: 0, 3: 0 };
let totalQuestoes = 0;

for (const id of esperados) {
  const c = C[id];
  if (!c) continue;
  const prefixo = "[" + id + "]";
  if (!Array.isArray(c.aulas) || c.aulas.length !== 3) { err(prefixo + " precisa de 3 aulas (tem " + (c.aulas || []).length + ")"); continue; }

  c.aulas.forEach((a, i) => {
    const onde = prefixo + " aula " + (i + 1);
    if (a.id !== id + "-" + (i + 1)) err(onde + ": id deveria ser '" + id + "-" + (i + 1) + "' (recebi " + a.id + ")");
    if (!a.titulo || !a.titulo.trim()) err(onde + ": sem título");
    if (!Array.isArray(a.blocos) || a.blocos.length < 6) err(onde + ": poucos blocos (" + (a.blocos || []).length + ", mínimo 6)");
    a.blocos.forEach((b, j) => {
      const t = b && b.tipo;
      if (["titulo", "paragrafo", "dica", "atencao", "exemplo"].includes(t)) {
        if (!b.texto || !b.texto.trim()) err(onde + " bloco " + j + " (" + t + "): texto vazio");
      } else if (t === "lista") {
        if (!Array.isArray(b.itens) || b.itens.length < 2) err(onde + " bloco " + j + " (lista): menos de 2 itens");
      } else {
        err(onde + " bloco " + j + ": tipo desconhecido '" + t + "'");
      }
    });
    if (!Array.isArray(a.atividade) || a.atividade.length !== 4) {
      err(onde + ": atividade precisa de 4 questões (tem " + (a.atividade || []).length + ")");
    } else {
      a.atividade.forEach((q, qi) => {
        checaQuestao(q, onde + " questão " + (qi + 1));
        if (q && typeof q.correta === "number") { distrib[q.correta]++; totalQuestoes++; }
      });
    }
  });

  if (!c.prova || !Array.isArray(c.prova.questoes) || c.prova.questoes.length !== 6) {
    err(prefixo + ": prova precisa de 6 questões (tem " + (c.prova && c.prova.questoes || []).length + ")");
  } else {
    c.prova.questoes.forEach((q, qi) => {
      checaQuestao(q, prefixo + " prova questão " + (qi + 1));
      if (q && typeof q.correta === "number") { distrib[q.correta]++; totalQuestoes++; }
    });
  }

  if (!Array.isArray(c.exameFinal) || c.exameFinal.length !== 5) {
    err(prefixo + ": exameFinal precisa de 5 questões (tem " + (c.exameFinal || []).length + ")");
  } else {
    c.exameFinal.forEach((q, qi) => {
      checaQuestao(q, prefixo + " exameFinal questão " + (qi + 1));
      if (q && typeof q.correta === "number") { distrib[q.correta]++; totalQuestoes++; }
    });
  }
}

console.log("\nDistribuição dos índices corretos: " + JSON.stringify(distrib) + " (total " + totalQuestoes + " questões)");
const somaDistrib = distrib[0] + distrib[1] + distrib[2] + distrib[3];
if (somaDistrib && distrib[0] / somaDistrib > 0.5) aviso("mais de 50% das respostas corretas estão na alternativa 'a'");

console.log("\n" + (erros === 0 ? "✅ TUDO CERTO" : "✗ " + erros + " erro(s)") + (avisos ? " · " + avisos + " aviso(s)" : ""));
process.exit(erros === 0 ? 0 : 1);
