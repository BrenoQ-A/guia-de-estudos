// ============================================================
// Guia de Estudos — camada de dados
// Junta a estrutura (segmentos, anos, disciplinas) com o
// conteúdo (aulas, provas, banco do exame final).
// ============================================================

window.Dados = (function () {
  "use strict";

  var E = window.GuiaEstrutura;
  var C = window.GuiaConteudo || {};

  // Curso completo, na ordem escolar
  var CURSO = E.segmentos.map(function (seg) {
    var anos = E.anosPorSegmento[seg.id].map(function (num) {
      var anoId = seg.id + "-a" + num;
      var disciplinas = E.grades[seg.id].map(function (g) {
        var id = anoId + "-" + g.chave;
        return {
          id: id,
          chave: g.chave,
          nome: g.nome,
          emoji: g.emoji,
          cor: g.cor,
          anoId: anoId,
          conteudo: C[id] || null // null = conteúdo ainda em preparação
        };
      });
      return {
        id: anoId,
        numero: num,
        rotulo: E.rotuloAno(seg.id, num),
        segmentoId: seg.id,
        segmentoNome: seg.nome,
        disciplinas: disciplinas
      };
    });
    return {
      id: seg.id,
      nome: seg.nome,
      faixa: seg.faixa,
      descricao: seg.descricao,
      cor: seg.cor,
      emoji: seg.emoji,
      anos: anos
    };
  });

  // Lista plana de todos os anos, em ordem (f1-a1 ... em-a3)
  var ANOS = [];
  CURSO.forEach(function (seg) {
    seg.anos.forEach(function (ano) {
      ANOS.push(ano);
    });
  });

  var DISCIPLINAS = {};
  ANOS.forEach(function (ano) {
    ano.disciplinas.forEach(function (d) {
      DISCIPLINAS[d.id] = d;
    });
  });

  function getAno(anoId) {
    for (var i = 0; i < ANOS.length; i++) if (ANOS[i].id === anoId) return ANOS[i];
    return null;
  }

  function getDisciplina(discId) {
    return DISCIPLINAS[discId] || null;
  }

  function getAula(discId, aulaId) {
    var d = getDisciplina(discId);
    if (!d || !d.conteudo) return null;
    var aulas = d.conteudo.aulas;
    for (var i = 0; i < aulas.length; i++) {
      if (aulas[i].id === aulaId) return { aula: aulas[i], indice: i };
    }
    return null;
  }

  // Banco de questões do Exame Final de Certificação
  function bancoExameFinal() {
    var banco = [];
    ANOS.forEach(function (ano) {
      ano.disciplinas.forEach(function (d) {
        if (d.conteudo && d.conteudo.exameFinal && d.conteudo.exameFinal.length) {
          d.conteudo.exameFinal.forEach(function (q) {
            banco.push({
              segmentoId: ano.segmentoId,
              disciplinaNome: d.nome,
              anoRotulo: ano.rotulo,
              questao: q
            });
          });
        }
      });
    });
    return banco;
  }

  // Embaralhamento Fisher-Yates
  function embaralhar(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // Sorteia o conjunto do exame final: 10 questões por segmento
  function sortearExameFinal(totalPorSegmento) {
    var porSeg = { f1: [], f2: [], em: [] };
    bancoExameFinal().forEach(function (item) {
      if (porSeg[item.segmentoId]) porSeg[item.segmentoId].push(item);
    });
    var sorteio = [];
    ["f1", "f2", "em"].forEach(function (segId) {
      sorteio = sorteio.concat(embaralhar(porSeg[segId]).slice(0, totalPorSegmento));
    });
    return embaralhar(sorteio);
  }

  return {
    escola: E.escola,
    curso: CURSO,
    anos: ANOS,
    disciplinas: DISCIPLINAS,
    getAno: getAno,
    getDisciplina: getDisciplina,
    getAula: getAula,
    bancoExameFinal: bancoExameFinal,
    sortearExameFinal: sortearExameFinal,
    embaralhar: embaralhar
  };
})();
