// ============================================================
// Colégio Horizonte — estado e progresso do aluno
// Persistência em localStorage. Regras escolares:
//   · Aula concluída: nota da atividade ≥ 5,0 (4 questões)
//   · Disciplina aprovada: nota da prova ≥ 6,0 (6 questões)
//   · Ano desbloqueado: ano anterior totalmente aprovado
//   · Exame Final liberado: todos os anos aprovados
//   · Certificado: aprovação ≥ 70% no Exame Final
// ============================================================

window.Estado = (function () {
  "use strict";

  var CHAVE = "colegio-horizonte-v1";
  var PONTOS_AULA = 10;
  var PONTOS_PROVA = 25;
  var PONTOS_EXAME = 100;

  var st = carregar();

  function novo() {
    return {
      perfil: null, // { nome, avatar, matriculadoEm }
      pontos: 0,
      progresso: {
        aulas: {},        // idDaAula -> { feita, nota, tentativas }
        provas: {},       // idDaDisciplina -> { aprovado, nota, tentativas }
        exameFinal: null  // { aprovado, percentual, tentativas }
      }
    };
  }

  function carregar() {
    try {
      var bruto = localStorage.getItem(CHAVE);
      if (bruto) {
        var obj = JSON.parse(bruto);
        if (obj && obj.progresso && obj.progresso.aulas && obj.progresso.provas) {
          // completa campos que por ventura faltem
          obj.pontos = obj.pontos || 0;
          return obj;
        }
      }
    } catch (e) { /* localStorage indisponível ou corrompido */ }
    return novo();
  }

  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(st)); } catch (e) {}
  }

  function reiniciar() {
    st = novo();
    salvar();
  }

  // ---------- Perfil ----------
  function matricular(nome, avatar) {
    st.perfil = { nome: nome, avatar: avatar, matriculadoEm: new Date().toISOString() };
    salvar();
  }
  function perfil() { return st.perfil; }
  function pontos() { return st.pontos; }

  function notaTexto(n) {
    return (Math.round(n * 10) / 10).toFixed(1).replace(".", ",");
  }

  // ---------- Aulas ----------
  function aulaInfo(aulaId) {
    return st.progresso.aulas[aulaId] || null;
  }
  function aulaConcluida(aulaId) {
    var a = aulaInfo(aulaId);
    return !!(a && a.feita);
  }
  // Retorna { nota, aprovada, pontosGanhos, concluidaAgora }
  function registrarAula(aulaId, acertos, total) {
    var nota = (acertos / total) * 10;
    var reg = st.progresso.aulas[aulaId] || { feita: false, nota: 0, tentativas: 0 };
    var jaFeita = reg.feita;
    reg.tentativas += 1;
    reg.nota = Math.max(reg.nota, nota);
    if (nota >= 5) reg.feita = true;
    var ganhou = 0;
    if (reg.feita && !jaFeita) { st.pontos += PONTOS_AULA; ganhou = PONTOS_AULA; }
    st.progresso.aulas[aulaId] = reg;
    salvar();
    return { nota: nota, aprovada: nota >= 5, pontosGanhos: ganhou, concluidaAgora: reg.feita && !jaFeita };
  }

  // ---------- Provas ----------
  function provaInfo(discId) {
    return st.progresso.provas[discId] || null;
  }
  function discAprovada(discId) {
    var p = provaInfo(discId);
    return !!(p && p.aprovado);
  }
  function registrarProva(discId, acertos, total) {
    var nota = (acertos / total) * 10;
    var reg = st.progresso.provas[discId] || { aprovado: false, nota: 0, tentativas: 0 };
    var jaAprovado = reg.aprovado;
    reg.tentativas += 1;
    reg.nota = Math.max(reg.nota, nota);
    if (nota >= 6) reg.aprovado = true;
    var ganhou = 0;
    if (reg.aprovado && !jaAprovado) { st.pontos += PONTOS_PROVA; ganhou = PONTOS_PROVA; }
    st.progresso.provas[discId] = reg;
    salvar();
    return { nota: nota, aprovado: nota >= 6, pontosGanhos: ganhou, aprovadoAgora: reg.aprovado && !jaAprovado };
  }

  // ---------- Exame final ----------
  function exameInfo() { return st.progresso.exameFinal; }
  function exameAprovado() {
    var e = st.progresso.exameFinal;
    return !!(e && e.aprovado);
  }
  function registrarExame(acertos, total) {
    var perc = total ? acertos / total : 0;
    var reg = st.progresso.exameFinal || { aprovado: false, percentual: 0, tentativas: 0 };
    var jaAprovado = reg.aprovado;
    reg.tentativas += 1;
    reg.percentual = Math.max(reg.percentual, perc);
    if (perc >= 0.7) reg.aprovado = true;
    var ganhou = 0;
    if (reg.aprovado && !jaAprovado) { st.pontos += PONTOS_EXAME; ganhou = PONTOS_EXAME; }
    st.progresso.exameFinal = reg;
    salvar();
    return { percentual: perc, aprovado: perc >= 0.7, pontosGanhos: ganhou };
  }

  // ---------- Agregações (dependem de js/dados.js) ----------
  function disciplinaStats(disc) {
    var totalAulas = disc.conteudo ? disc.conteudo.aulas.length : 0;
    var feitas = 0;
    if (disc.conteudo) {
      disc.conteudo.aulas.forEach(function (a) {
        if (aulaConcluida(a.id)) feitas += 1;
      });
    }
    var prova = provaInfo(disc.id);
    return {
      totalAulas: totalAulas,
      aulasFeitas: feitas,
      aprovada: discAprovada(disc.id),
      notaProva: prova ? prova.nota : null,
      provaLiberada: totalAulas > 0 && feitas === totalAulas,
      completa: !!(disc.conteudo) && feitas === totalAulas && discAprovada(disc.id)
    };
  }

  function anoStats(ano) {
    var total = ano.disciplinas.length;
    var aprovadas = 0;
    var comConteudo = 0;
    ano.disciplinas.forEach(function (d) {
      if (d.conteudo) comConteudo += 1;
      if (discAprovada(d.id)) aprovadas += 1;
    });
    return {
      totalDisciplinas: total,
      aprovadas: aprovadas,
      comConteudo: comConteudo,
      completo: total > 0 && aprovadas === total
    };
  }

  // Mapa anoId -> desbloqueado (sequência escolar)
  function mapaDesbloqueio() {
    var mapa = {};
    var anteriorOk = true;
    window.Dados.anos.forEach(function (ano) {
      mapa[ano.id] = anteriorOk;
      if (!mapa[ano.id]) return;
      anteriorOk = anteriorOk && anoStats(ano).completo;
    });
    return mapa;
  }

  function anoDesbloqueado(anoId) {
    return !!mapaDesbloqueio()[anoId];
  }

  function tudoCompleto() {
    return window.Dados.anos.every(function (ano) {
      return anoStats(ano).completo;
    });
  }

  // Progresso geral: disciplinas aprovadas / total
  function progressoGeral() {
    var total = 0, aprovadas = 0;
    window.Dados.anos.forEach(function (ano) {
      var s = anoStats(ano);
      total += s.totalDisciplinas;
      aprovadas += s.aprovadas;
    });
    return { total: total, aprovadas: aprovadas, percentual: total ? aprovadas / total : 0 };
  }

  // Primeira pendência do percurso, para o botão "Continuar estudando"
  function proximoPasso() {
    var mapa = mapaDesbloqueio();
    for (var i = 0; i < window.Dados.anos.length; i++) {
      var ano = window.Dados.anos[i];
      if (!mapa[ano.id]) break;
      for (var j = 0; j < ano.disciplinas.length; j++) {
        var d = ano.disciplinas[j];
        if (!d.conteudo) continue;
        if (discAprovada(d.id)) continue;
        var stats = disciplinaStats(d);
        for (var k = 0; k < d.conteudo.aulas.length; k++) {
          var aula = d.conteudo.aulas[k];
          if (!aulaConcluida(aula.id)) {
            return { tipo: "aula", ano: ano, disc: d, aula: aula };
          }
        }
        if (stats.provaLiberada) {
          return { tipo: "prova", ano: ano, disc: d };
        }
      }
    }
    if (tudoCompleto()) {
      return exameAprovado() ? { tipo: "certificado" } : { tipo: "exame" };
    }
    return null;
  }

  return {
    matricular: matricular,
    perfil: perfil,
    pontos: pontos,
    notaTexto: notaTexto,
    reiniciar: reiniciar,
    aulaInfo: aulaInfo,
    aulaConcluida: aulaConcluida,
    registrarAula: registrarAula,
    provaInfo: provaInfo,
    discAprovada: discAprovada,
    registrarProva: registrarProva,
    exameInfo: exameInfo,
    exameAprovado: exameAprovado,
    registrarExame: registrarExame,
    disciplinaStats: disciplinaStats,
    anoStats: anoStats,
    mapaDesbloqueio: mapaDesbloqueio,
    anoDesbloqueado: anoDesbloqueado,
    tudoCompleto: tudoCompleto,
    progressoGeral: progressoGeral,
    proximoPasso: proximoPasso
  };
})();
