// ============================================================
// Colégio Horizonte — telas (views)
// Renderizam as rotas: início, ano, disciplina, aula, prova,
// boletim, exame final e certificado.
// ============================================================

window.Views = (function () {
  "use strict";

  var AVATARES = ["🦊", "🐼", "🦉", "🐯", "🚀", "⭐", "🐬", "🦖"];

  // ---------- helpers de DOM ----------
  function el(tag, cls, texto) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto !== undefined && texto !== null) e.textContent = texto;
    return e;
  }

  function botaoLink(href, texto, classe) {
    var a = el("a", classe || "btn btn-primario", texto);
    a.href = href;
    return a;
  }

  function barraDeProgresso(percentual, mostrarTexto) {
    var wrap = el("div");
    var linha = el("div", "progresso-linha");
    if (mostrarTexto !== false) {
      linha.appendChild(el("span", null, mostrarTexto || ""));
      linha.appendChild(el("span", null, Math.round(percentual * 100) + "%"));
    }
    var barra = el("div", "barra");
    var fill = el("span");
    fill.style.width = Math.min(100, Math.round(percentual * 100)) + "%";
    barra.appendChild(fill);
    wrap.appendChild(linha);
    wrap.appendChild(barra);
    return wrap;
  }

  function confete() {
    var cores = ["#f6b73c", "#1b5b3f", "#e11d48", "#0ea5e9", "#8b5cf6", "#16a34a"];
    var c = el("div", "confete");
    for (var i = 0; i < 80; i++) {
      var p = document.createElement("i");
      p.style.left = (Math.random() * 100) + "%";
      p.style.background = cores[i % cores.length];
      p.style.animationDuration = (2.2 + Math.random() * 1.8) + "s";
      p.style.animationDelay = (Math.random() * 0.7) + "s";
      p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      c.appendChild(p);
    }
    document.body.appendChild(c);
    setTimeout(function () { c.remove(); }, 5000);
  }

  // ---------- motor de quiz (atividades, provas e exame) ----------
  // cfg: { titulo, instrucao, questoes, textoBotao,
  //        aoEntregar(acertos, total) -> { aprovado, notaExibida, mensagem, acoes:[Element], comemorar } }
  function montarQuiz(cfg) {
    var raiz = el("section", "quiz");
    raiz.appendChild(el("h2", null, cfg.titulo));
    raiz.appendChild(el("p", "instrucao", cfg.instrucao || ""));

    var letras = ["a", "b", "c", "d", "e"];
    var form = el("form");
    var refs = [];

    cfg.questoes.forEach(function (q, qi) {
      var item = el("div", "questao");
      if (q.contexto) item.appendChild(el("div", "contexto", q.contexto));

      var enunciado = el("div", "enunciado");
      enunciado.appendChild(el("span", "indice", String(qi + 1)));
      enunciado.appendChild(document.createTextNode(" " + q.pergunta));
      item.appendChild(enunciado);

      var alts = el("div", "alternativas");
      var radios = [];
      q.alternativas.forEach(function (alt, ai) {
        var lab = el("label", "alternativa");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + qi;
        input.value = String(ai);
        lab.appendChild(input);
        lab.appendChild(el("span", "letra", letras[ai] + ")"));
        lab.appendChild(document.createTextNode(" " + alt));
        alts.appendChild(lab);
        radios.push({ label: lab, input: input });
      });
      item.appendChild(alts);

      var explic = el("div", "explicacao");
      explic.appendChild(el("b", null, "Resposta comentada"));
      explic.appendChild(document.createTextNode(" " + (q.explicacao || "")));
      item.appendChild(explic);

      form.appendChild(item);
      refs.push({ q: q, radios: radios });
    });

    var msg = el("div", "quiz-msg-erro", "Responda todas as questões antes de entregar.");
    form.appendChild(msg);

    var botao = el("button", "btn btn-primario", cfg.textoBotao || "Corrigir");
    botao.type = "submit";
    form.appendChild(botao);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var respostas = [];
      var faltando = false;
      refs.forEach(function (r) {
        var escolhida = -1;
        r.radios.forEach(function (rd) {
          if (rd.input.checked) escolhida = parseInt(rd.input.value, 10);
        });
        if (escolhida < 0) faltando = true;
        respostas.push(escolhida);
      });
      if (faltando) { msg.style.display = "block"; return; }
      msg.style.display = "none";

      var acertos = 0;
      refs.forEach(function (r, i) {
        var escolhida = respostas[i];
        var correta = r.q.correta;
        if (escolhida === correta) acertos += 1;
        r.radios.forEach(function (rd, ai) {
          rd.input.disabled = true;
          rd.label.classList.remove("certa", "errada");
          if (ai === correta) rd.label.classList.add("certa");
          else if (ai === escolhida) rd.label.classList.add("errada");
        });
      });
      botao.remove();

      var info = cfg.aoEntregar(acertos, refs.length);
      var resultado = el("div", "resultado " + (info.aprovado ? "aprovado" : "reprovado"));
      resultado.appendChild(el("div", "nota-grande", info.notaExibida));
      resultado.appendChild(el("div", "mensagem", info.mensagem));
      var acoes = el("div", "acoes");
      (info.acoes || []).forEach(function (a) { acoes.appendChild(a); });
      resultado.appendChild(acoes);
      raiz.appendChild(resultado);
      resultado.scrollIntoView({ behavior: "smooth", block: "center" });
      if (info.comemorar) confete();
    });

    raiz.appendChild(form);
    return raiz;
  }

  function botaoRecarregar(texto) {
    var b = el("button", "btn btn-secundario", texto || "🔄 Tentar novamente");
    b.type = "button";
    b.addEventListener("click", function () { window.App.rotear(); });
    return b;
  }

  // ============================================================
  // TELA: Início (matrícula + corredor da escola)
  // ============================================================
  function inicio(container) {
    var perfil = window.Estado.perfil();
    if (!perfil) {
      container.appendChild(montarMatricula());
      return;
    }

    var geral = window.Estado.progressoGeral();
    var prox = window.Estado.proximoPasso();

    // ----- hero com carteirinha -----
    var hero = el("section", "hero");
    var apres = el("div", "hero-apresentacao");
    apres.appendChild(el("h1", null, "Bem-vindo(a) de volta, " + perfil.nome + "! 👋"));
    apres.appendChild(el("p", null,
      "Este é o seu colégio. Caminhe pelos corredores, entre nas salas, " +
      "estude as aulas de cada disciplina e vença as provas para avançar de ano. " +
      "Ao concluir tudo, o Exame Final de Certificação te espera."));
    var acoes = el("div", "hero-acoes");
    if (prox) {
      var destino = prox.tipo === "aula" ? "#/aula/" + prox.disc.id + "/" + prox.aula.id
        : prox.tipo === "prova" ? "#/prova/" + prox.disc.id
        : prox.tipo === "exame" ? "#/exame"
        : "#/certificado";
      var rotulo = prox.tipo === "aula" ? "▶ Continuar: " + prox.disc.nome + " — " + prox.aula.titulo
        : prox.tipo === "prova" ? "📝 Fazer a prova de " + prox.disc.nome
        : prox.tipo === "exame" ? "🏆 Fazer o Exame Final"
        : "🏅 Ver meu certificado";
      acoes.appendChild(botaoLink(destino, rotulo, "btn btn-primario"));
    }
    acoes.appendChild(botaoLink("#/boletim", "📋 Ver boletim", "btn btn-secundario"));
    apres.appendChild(acoes);
    hero.appendChild(apres);

    var carteira = el("aside", "carteirinha");
    carteira.appendChild(el("div", "cab", "Carteira estudantil · " + window.Dados.escola.anoLetivo));
    var alunoBox = el("div", "aluno");
    alunoBox.appendChild(el("span", "avatar", perfil.avatar));
    var nomeBox = el("div");
    nomeBox.appendChild(el("strong", null, perfil.nome));
    var st = window.Estado;
    var serieAtual = "(comece o 1º ano)";
    window.Dados.anos.forEach(function (ano) {
      if (st.anoDesbloqueado(ano.id)) serieAtual = ano.rotulo + " · " + ano.segmentoNome;
    });
    nomeBox.appendChild(el("small", null, "Cursando: " + serieAtual));
    alunoBox.appendChild(nomeBox);
    carteira.appendChild(alunoBox);
    var dados = el("div", "dados");
    var d1 = el("div"); d1.appendChild(el("span", null, "Pontos de mérito")); d1.appendChild(el("b", null, String(st.pontos())));
    var d2 = el("div"); d2.appendChild(el("span", null, "Progresso")); d2.appendChild(el("b", null, Math.round(geral.percentual * 100) + "%"));
    dados.appendChild(d1); dados.appendChild(d2);
    carteira.appendChild(dados);
    hero.appendChild(carteira);
    container.appendChild(hero);

    var barraGeral = barraDeProgresso(geral.percentual,
      geral.aprovadas + " de " + geral.total + " disciplinas concluídas");
    container.appendChild(barraGeral);

    // ----- corredores da escola -----
    var mapa = window.Estado.mapaDesbloqueio();
    window.Dados.curso.forEach(function (seg) {
      var sec = el("section", "segmento");
      var cab = el("div", "segmento-cab");
      cab.appendChild(el("span", "emblema", seg.emoji));
      var tit = el("div");
      tit.appendChild(el("h2", null, seg.nome));
      tit.appendChild(el("div", "faixa", seg.faixa + " · " + seg.descricao));
      cab.appendChild(tit);
      var anosOk = 0;
      seg.anos.forEach(function (ano) { if (window.Estado.anoStats(ano).completo) anosOk += 1; });
      var estado = el("span", "estado", anosOk === seg.anos.length ? "🏅 concluído" : anosOk + "/" + seg.anos.length + " anos concluídos");
      cab.appendChild(estado);
      sec.appendChild(cab);

      var portas = el("div", "portas");
      seg.anos.forEach(function (ano) {
        var stats = window.Estado.anoStats(ano);
        var desbloqueado = mapa[ano.id];
        var porta = desbloqueado
          ? el("a", " porta" + (stats.completo ? "" : ""))
          : el("div", "porta bloqueada");
        porta.style.background = "linear-gradient(180deg, " + seg.cor + " 0%, " + seg.cor + "cc 100%)";
        if (desbloqueado) porta.href = "#/ano/" + ano.id;
        if (!desbloqueado) porta.appendChild(el("span", "cadeado", "🔒"));
        porta.appendChild(el("span", "numero-placa", ano.rotulo));
        porta.appendChild(el("span", "janela"));
        if (stats.completo) {
          porta.appendChild(el("span", "situacao", "✅ Ano concluído"));
        } else {
          porta.appendChild(el("span", "situacao", stats.aprovadas + "/" + stats.totalDisciplinas + " disciplinas"));
          var mb = el("div", "barra minibarra");
          var f = el("span");
          f.style.width = Math.round((stats.aprovadas / stats.totalDisciplinas) * 100) + "%";
          mb.appendChild(f);
          porta.appendChild(mb);
        }
        if (!desbloqueado) porta.title = "Complete o ano anterior para desbloquear";
        portas.appendChild(porta);
      });
      sec.appendChild(portas);
      container.appendChild(sec);
    });
  }

  function montarMatricula() {
    var card = el("section", "card matricula");
    card.appendChild(el("h2", null, "📋 Matrícula no Colégio Horizonte"));
    card.appendChild(el("p", null,
      "Antes de entrar nas salas, faça sua matrícula: escolha um avatar e diga como quer ser chamado(a)."));

    var escolhido = AVATARES[0];
    var avatares = el("div", "avatares");
    AVATARES.forEach(function (av, i) {
      var b = el("button", i === 0 ? "selecionado" : null, av);
      b.type = "button";
      b.addEventListener("click", function () {
        escolhido = av;
        Array.prototype.forEach.call(avatares.children, function (c) { c.classList.remove("selecionado"); });
        b.classList.add("selecionado");
      });
      avatares.appendChild(b);
    });
    card.appendChild(avatares);

    var campo = el("div", "campo");
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Seu nome ou apelido";
    input.maxLength = 40;
    campo.appendChild(input);
    card.appendChild(campo);

    var aviso = el("div", "aviso erro");
    aviso.style.display = "none";
    card.appendChild(aviso);

    var b = el("button", "btn btn-primario btn-bloco", "✅ Confirmar matrícula");
    b.addEventListener("click", function () {
      var nome = input.value.trim();
      if (nome.length < 2) {
        aviso.textContent = "Escreva seu nome (pelo menos 2 letras).";
        aviso.style.display = "block";
        return;
      }
      window.Estado.matricular(nome, escolhido);
      window.App.rotear();
    });
    card.appendChild(b);
    return card;
  }

  // ============================================================
  // TELA: Sala do ano (lista de disciplinas)
  // ============================================================
  function ano(container, anoId) {
    var ano = window.Dados.getAno(anoId);
    if (!ano) { container.appendChild(avisoNaoEncontrado("ano")); return; }
    if (!window.Estado.anoDesbloqueado(anoId)) {
      container.appendChild(trava("🔒 Sala trancada",
        "Este ano ainda não foi liberado. Conclua todas as disciplinas do ano anterior para avançar.",
        "#/inicio", "Voltar ao corredor"));
      return;
    }

    var m = el("div", "migalhas");
    m.appendChild(el("a", null, "Início")); m.firstChild.href = "#/inicio";
    m.appendChild(document.createTextNode(" › " + ano.segmentoNome + " › " + ano.rotulo));
    container.appendChild(m);

    var tit = el("h1", null, "Sala do " + ano.rotulo + " 🚪");
    tit.style.fontFamily = "Georgia, serif";
    container.appendChild(tit);

    var stats = window.Estado.anoStats(ano);
    container.appendChild(barraDeProgresso(stats.aprovadas / stats.totalDisciplinas,
      stats.completo ? "Ano concluído! Parabéns 🎉" :
      stats.aprovadas + " de " + stats.totalDisciplinas + " disciplinas aprovadas (nota ≥ 6,0 na prova)"));

    var grade = el("div", "grade-disciplinas");
    ano.disciplinas.forEach(function (d) {
      var ds = window.Estado.disciplinaStats(d);
      var card = el("a", "disc-card");
      card.href = "#/disciplina/" + d.id;
      var faixa = el("div", "faixa-cor");
      faixa.style.background = d.cor;
      card.appendChild(faixa);
      var corpo = el("div", "corpo");
      var topo = el("div", "topo");
      topo.appendChild(el("span", "emoji", d.emoji));
      topo.appendChild(el("strong", null, d.nome));
      corpo.appendChild(topo);
      corpo.appendChild(el("div", "status",
        ds.aprovada ? "Prova: nota " + window.Estado.notaTexto(ds.notaProva) :
        "Aulas: " + ds.aulasFeitas + "/" + ds.totalAulas + " · prova " + (ds.provaLiberada ? "liberada 📝" : "pendente")));
      var selo = el("span", "selo " + (ds.aprovada ? "selo-aprovado" : ds.aulasFeitas > 0 ? "selo-andamento" : "selo-bloqueado"),
        ds.aprovada ? "✅ Aprovado" : ds.aulasFeitas > 0 ? "📖 Em curso" : "🆕 Começar");
      corpo.appendChild(selo);
      card.appendChild(corpo);
      grade.appendChild(card);
    });
    container.appendChild(grade);
  }

  // ============================================================
  // TELA: Disciplina (lista de aulas + prova)
  // ============================================================
  function disciplina(container, discId) {
    var d = window.Dados.getDisciplina(discId);
    if (!d) { container.appendChild(avisoNaoEncontrado("disciplina")); return; }
    if (!window.Estado.anoDesbloqueado(d.anoId)) {
      container.appendChild(trava("🔒 Conteúdo bloqueado",
        "Conclua o ano anterior para estudar esta disciplina.", "#/inicio", "Voltar"));
      return;
    }

    var m = el("div", "migalhas");
    var a1 = el("a", null, "Início"); a1.href = "#/inicio";
    var a2 = el("a", null, d.anoId ? window.Dados.getAno(d.anoId).rotulo : ""); a2.href = "#/ano/" + d.anoId;
    m.appendChild(a1); m.appendChild(document.createTextNode(" › ")); m.appendChild(a2);
    m.appendChild(document.createTextNode(" › " + d.nome));
    container.appendChild(m);

    var cab = el("div", "aula-cab");
    var rotulo = el("div", "rotulo");
    var chip = el("span", "chip-disc", d.emoji + " " + d.nome);
    chip.style.background = d.cor;
    rotulo.appendChild(chip);
    rotulo.appendChild(document.createTextNode(" " + window.Dados.getAno(d.anoId).rotulo + " · " + window.Dados.getAno(d.anoId).segmentoNome));
    cab.appendChild(rotulo);
    var h1 = el("h1", null, d.nome);
    cab.appendChild(h1);
    container.appendChild(cab);

    if (!d.conteudo) {
      var av = el("div", "aviso", "🚧 O conteúdo desta disciplina está em preparação. Volte em breve!");
      container.appendChild(av);
      return;
    }

    var ds = window.Estado.disciplinaStats(d);
    var resumo = el("p", null, "Estude as " + d.conteudo.aulas.length + " aulas e vença a prova da disciplina (média 6,0) para recebê-la no boletim.");
    container.appendChild(resumo);

    var lista = el("div", "lista-aulas");
    var anteriorConcluida = true;
    d.conteudo.aulas.forEach(function (aula, i) {
      var info = window.Estado.aulaInfo(aula.id);
      var concluida = !!(info && info.feita);
      var liberada = anteriorConcluida; // primeira aula sempre liberada
      var item = liberada ? el("a", "aula-item") : el("div", "aula-item bloqueada");
      if (liberada) item.href = "#/aula/" + d.id + "/" + aula.id;
      var num = el("span", "num", String(i + 1));
      num.style.background = d.cor;
      item.appendChild(num);
      var infoBox = el("div", "info");
      infoBox.appendChild(el("strong", null, aula.titulo));
      infoBox.appendChild(el("small", null,
        concluida ? "✅ Concluída · melhor nota " + window.Estado.notaTexto(info.nota) :
        liberada ? "▶ Disponível para estudo" : "🔒 Conclua a aula anterior primeiro"));
      item.appendChild(infoBox);
      item.appendChild(el("span", "marca", concluida ? "✅" : liberada ? "▶" : "🔒"));
      lista.appendChild(item);
      anteriorConcluida = concluida;
    });
    container.appendChild(lista);

    // ----- prova da disciplina -----
    var provaCard = el("div", "prova-card" + (ds.provaLiberada ? " aberta" : ""));
    provaCard.appendChild(el("h3", null, "📝 Prova de " + d.nome));
    var pInfo = window.Estado.provaInfo(d.id);
    if (ds.aprovada) {
      provaCard.appendChild(el("p", null,
        "✅ Aprovado(a)! Nota " + window.Estado.notaTexto(pInfo.nota) +
        " (melhor de " + pInfo.tentativas + " tentativa" + (pInfo.tentativas > 1 ? "s" : "") + ")."));
    } else if (ds.provaLiberada) {
      provaCard.appendChild(el("p", null,
        "Todas as aulas concluídas! A prova tem " + d.conteudo.prova.questoes.length +
        " questões sobre tudo o que você estudou. Precisa de nota 6,0 ou mais para ser aprovado(a). " +
        (pInfo ? "Sua melhor nota até agora: " + window.Estado.notaTexto(pInfo.nota) + ". " : "") +
        "Boa prova!"));
      provaCard.appendChild(botaoLink("#/prova/" + d.id, "🚪 Entrar na sala da prova", "btn btn-primario"));
    } else {
      var restam = ds.totalAulas - ds.aulasFeitas;
      provaCard.appendChild(el("p", null,
        "🔒 A prova abre quando você concluir as " + ds.totalAulas +
        " aulas. Faltam " + restam + " aula" + (restam > 1 ? "s" : "") + "."));
    }
    container.appendChild(provaCard);
  }

  // ============================================================
  // TELA: Aula (conteúdo + atividade)
  // ============================================================
  function aula(container, discId, aulaId) {
    var d = window.Dados.getDisciplina(discId);
    var achado = d && d.conteudo ? window.Dados.getAula(discId, aulaId) : null;
    if (!achado) { container.appendChild(avisoNaoEncontrado("aula")); return; }
    if (!window.Estado.anoDesbloqueado(d.anoId)) {
      container.appendChild(trava("🔒 Aula bloqueada", "Conclua o ano anterior.", "#/disciplina/" + d.id, "Voltar"));
      return;
    }

    var aulaObj = achado.aula;
    var indice = achado.indice;

    // aula anterior precisa estar concluída
    if (indice > 0) {
      var anterior = d.conteudo.aulas[indice - 1];
      if (!window.Estado.aulaConcluida(anterior.id)) {
        container.appendChild(trava("🔒 Ainda não!",
          "Primeiro conclua a aula \"" + anterior.titulo + "\".",
          "#/aula/" + d.id + "/" + anterior.id, "Ir para a aula anterior"));
        return;
      }
    }

    var wrap = el("div", "aula-corpo");

    var m = el("div", "migalhas");
    var a1 = el("a", null, window.Dados.getAno(d.anoId).rotulo); a1.href = "#/ano/" + d.anoId;
    var a2 = el("a", null, d.nome); a2.href = "#/disciplina/" + d.id;
    m.appendChild(a1); m.appendChild(document.createTextNode(" › ")); m.appendChild(a2);
    m.appendChild(document.createTextNode(" › Aula " + (indice + 1)));
    wrap.appendChild(m);

    var cab = el("div", "aula-cab");
    var rotulo = el("div", "rotulo");
    var chip = el("span", "chip-disc", d.emoji + " " + d.nome);
    chip.style.background = d.cor;
    rotulo.appendChild(chip);
    var infoAula = window.Estado.aulaInfo(aulaObj.id);
    if (infoAula && infoAula.feita) rotulo.appendChild(document.createTextNode(" ✅ concluída · nota " + window.Estado.notaTexto(infoAula.nota)));
    cab.appendChild(rotulo);
    cab.appendChild(el("h1", null, "Aula " + (indice + 1) + ": " + aulaObj.titulo));
    wrap.appendChild(cab);

    // ----- conteúdo -----
    var conteudo = el("article", "conteudo");
    aulaObj.blocos.forEach(function (b) {
      if (b.tipo === "titulo") {
        conteudo.appendChild(el("h3", null, b.texto));
      } else if (b.tipo === "paragrafo") {
        conteudo.appendChild(el("p", null, b.texto));
      } else if (b.tipo === "lista") {
        var ul = el("ul");
        (b.itens || []).forEach(function (item) { ul.appendChild(el("li", null, item)); });
        conteudo.appendChild(ul);
      } else if (b.tipo === "exemplo") {
        var ex = el("div", "caixa caixa-exemplo");
        ex.appendChild(document.createTextNode(b.texto));
        conteudo.appendChild(ex);
      } else if (b.tipo === "dica") {
        var dc = el("div", "caixa caixa-dica");
        dc.appendChild(document.createTextNode(b.texto));
        conteudo.appendChild(dc);
      } else if (b.tipo === "atencao") {
        var at = el("div", "caixa caixa-atencao");
        at.appendChild(document.createTextNode(b.texto));
        conteudo.appendChild(at);
      }
    });
    wrap.appendChild(conteudo);

    // ----- atividade -----
    wrap.appendChild(montarQuiz({
      titulo: "✏️ Atividade da aula",
      instrucao: "Responda as questões. Acertando pelo menos metade (nota 5,0), a aula fica concluída e você ganha 10 pontos de mérito.",
      questoes: aulaObj.atividade,
      textoBotao: "Corrigir atividade",
      aoEntregar: function (acertos, total) {
        var r = window.Estado.registrarAula(aulaObj.id, acertos, total);
        var acoes = [];
        var aulaSeguinte = d.conteudo.aulas[indice + 1];
        if (r.aprovada) {
          if (aulaSeguinte) {
            acoes.push(botaoLink("#/aula/" + d.id + "/" + aulaSeguinte.id, "Próxima aula: " + aulaSeguinte.titulo + " →", "btn btn-verde"));
          } else {
            acoes.push(botaoLink("#/disciplina/" + d.id, "Ver a prova da disciplina 📝", "btn btn-verde"));
          }
          acoes.push(botaoLink("#/disciplina/" + d.id, "Voltar à disciplina", "btn btn-secundario"));
        } else {
          acoes.push(botaoRecarregar("🔄 Estudar novamente e refazer"));
          acoes.push(botaoLink("#/disciplina/" + d.id, "Voltar à disciplina", "btn btn-secundario"));
        }
        return {
          aprovado: r.aprovada,
          notaExibida: "Nota " + window.Estado.notaTexto(r.nota),
          mensagem: (r.aprovada
            ? (r.concluidaAgora ? "Aula concluída! +" + r.pontosGanhos + " pontos de mérito ⭐" : "Aula já estava concluída — boa revisão!")
            : "Você acertou " + acertos + " de " + total + ". Precisa de nota 5,0. Reveja a aula e tente de novo!"),
          acoes: acoes,
          comemorar: r.concluidaAgora
        };
      }
    }));

    wrap.appendChild(el("p", null, ""));
    var voltar = botaoLink("#/disciplina/" + d.id, "← Voltar para " + d.nome, "btn btn-secundario sem-impressao");
    wrap.appendChild(voltar);
    container.appendChild(wrap);
  }

  // ============================================================
  // TELA: Prova da disciplina
  // ============================================================
  function prova(container, discId) {
    var d = window.Dados.getDisciplina(discId);
    if (!d || !d.conteudo) { container.appendChild(avisoNaoEncontrado("prova")); return; }
    var ds = window.Estado.disciplinaStats(d);
    if (!ds.provaLiberada) {
      container.appendChild(trava("🔒 Prova trancada",
        "Conclua todas as aulas de " + d.nome + " para liberar a prova.",
        "#/disciplina/" + d.id, "Voltar à disciplina"));
      return;
    }

    var wrap = el("div", "aula-corpo");
    var m = el("div", "migalhas");
    var a1 = el("a", null, d.nome); a1.href = "#/disciplina/" + d.id;
    m.appendChild(a1); m.appendChild(document.createTextNode(" › Prova"));
    wrap.appendChild(m);

    var questoes = d.conteudo.prova.questoes;
    var cab = el("div", "aula-cab");
    var chip = el("span", "chip-disc", d.emoji + " " + d.nome + " · " + window.Dados.getAno(d.anoId).rotulo);
    chip.style.background = d.cor;
    cab.appendChild(chip);
    cab.appendChild(el("h1", null, "Prova de " + d.nome + " 📝"));
    wrap.appendChild(cab);

    var pInfo = window.Estado.provaInfo(d.id);
    var intro = el("p", null,
      questoes.length + " questões sobre as aulas de " + d.nome + ". Aprovação com nota 6,0 ou mais" +
      (pInfo ? ". Sua melhor nota até agora: " + window.Estado.notaTexto(pInfo.nota) : "") + ". Boa sorte!");
    wrap.appendChild(intro);

    wrap.appendChild(montarQuiz({
      titulo: "Prova — silêncio, por favor! 🤫",
      instrucao: "Leia com calma. Você pode refazer a prova quantas vezes quiser — vale a melhor nota.",
      questoes: questoes,
      textoBotao: "Entregar prova",
      aoEntregar: function (acertos, total) {
        var r = window.Estado.registrarProva(d.id, acertos, total);
        var acoes = [];
        if (r.aprovado) {
          acoes.push(botaoLink("#/ano/" + d.anoId, "Voltar à sala do ano →", "btn btn-verde"));
          acoes.push(botaoLink("#/boletim", "Ver boletim 📋", "btn btn-secundario"));
        } else {
          acoes.push(botaoRecarregar("🔄 Refazer a prova"));
          acoes.push(botaoLink("#/disciplina/" + d.id, "Revisar as aulas", "btn btn-secundario"));
        }
        return {
          aprovado: r.aprovado,
          notaExibida: "Nota " + window.Estado.notaTexto(r.nota),
          mensagem: (r.aprovado
            ? (r.aprovadoAgora ? "Aprovado(a) em " + d.nome + "! +" + r.pontosGanhos + " pontos de mérito ⭐" : "Aprovado(a)! Esta prova já estava vencida.")
            : "Você acertou " + acertos + " de " + total + " (precisa de 6,0). Respire fundo e tente de novo!"),
          acoes: acoes,
          comemorar: r.aprovadoAgora
        };
      }
    }));

    wrap.appendChild(el("p", null, ""));
    wrap.appendChild(botaoLink("#/disciplina/" + d.id, "← Sair da sala de prova", "btn btn-secundario sem-impressao"));
    container.appendChild(wrap);
  }

  // ============================================================
  // TELA: Boletim escolar
  // ============================================================
  function boletim(container) {
    var geral = window.Estado.progressoGeral();
    var tit = el("h1", null, "📋 Boletim escolar");
    tit.style.fontFamily = "Georgia, serif";
    container.appendChild(tit);
    container.appendChild(barraDeProgresso(geral.percentual,
      geral.aprovadas + " de " + geral.total + " disciplinas · " + window.Estado.pontos() + " pontos de mérito"));

    window.Dados.curso.forEach(function (seg) {
      var segBox = el("section", "boletim-seg");
      var cab = el("div", "segmento-cab");
      cab.appendChild(el("span", "emblema", seg.emoji));
      var t = el("div");
      t.appendChild(el("h2", null, seg.nome));
      t.appendChild(el("div", "faixa", seg.faixa));
      cab.appendChild(t);
      segBox.appendChild(cab);

      seg.anos.forEach(function (ano) {
        var stats = window.Estado.anoStats(ano);
        var boxAno = el("div", "boletim-ano");
        var h3 = el("h3", null, ano.rotulo + (stats.completo ? "  ✅" : ""));
        boxAno.appendChild(h3);

        var tabela = el("table", "tabela");
        var thead = el("thead");
        var trh = el("tr");
        ["Disciplina", "Aulas", "Prova", "Situação"].forEach(function (h) { trh.appendChild(el("th", null, h)); });
        thead.appendChild(trh);
        tabela.appendChild(thead);
        var tbody = el("tbody");
        ano.disciplinas.forEach(function (d) {
          var ds = window.Estado.disciplinaStats(d);
          var tr = el("tr");
          var td1 = el("td", null, d.emoji + " " + d.nome);
          td1.style.borderLeft = "5px solid " + d.cor;
          tr.appendChild(td1);
          tr.appendChild(el("td", null, ds.aulasFeitas + "/" + ds.totalAulas));
          tr.appendChild(el("td", null, ds.notaProva !== null ? window.Estado.notaTexto(ds.notaProva) : "—"));
          var sit = ds.aprovada ? "✅ Aprovado" : ds.aulasFeitas > 0 ? "📖 Cursando" : "—";
          var tdS = el("td", "situacao-td", sit);
          tdS.style.color = ds.aprovada ? "var(--verde-ok)" : ds.aulasFeitas > 0 ? "var(--amarelo-escuro)" : "var(--tinta-suave)";
          tr.appendChild(tdS);
          tbody.appendChild(tr);
        });
        tabela.appendChild(tbody);
        boxAno.appendChild(tabela);
        segBox.appendChild(boxAno);
      });
      container.appendChild(segBox);
    });
  }

  // ============================================================
  // TELA: Exame Final de Certificação
  // ============================================================
  function exame(container) {
    var tit = el("h1", null, "🏆 Exame Final de Certificação");
    tit.style.fontFamily = "Georgia, serif";
    container.appendChild(tit);

    if (!window.Estado.tudoCompleto()) {
      var geral = window.Estado.progressoGeral();
      var t = trava("🔒 Exame ainda não liberado",
        "O Exame Final abre quando você for aprovado(a) em todas as " + geral.total +
        " disciplinas do colégio (Fundamental I ao Médio). Faltam " + (geral.total - geral.aprovadas) + " disciplinas.",
        "#/inicio", "Continuar estudando");
      container.appendChild(t);
      var barra = barraDeProgresso(geral.percentual, "Progresso do curso completo");
      container.appendChild(barra);
      return;
    }

    var info = window.Estado.exameInfo();

    // ----- introdução -----
    var intro = el("section", "card exame-trava");
    intro.appendChild(el("div", "icone", "🎓"));
    intro.appendChild(el("h2", null, "Parabéns, você chegou ao fim do percurso!"));
    intro.appendChild(el("p", null,
      "O Exame Final de Certificação tem 30 questões sorteadas de todo o colégio — 10 do Fundamental I, " +
      "10 do Fundamental II e 10 do Ensino Médio. Você precisa acertar 70% (21 questões) para receber " +
      "seu certificado de conclusão. Não há limite de tentativas; cada exame sorteia questões novas."));
    if (info) {
      intro.appendChild(el("p", null,
        (info.aprovado ? "✅ Você já foi aprovado(a) com " + Math.round(info.percentual * 100) + "%!" :
          "Sua melhor tentativa: " + Math.round(info.percentual * 100) + "% (precisa de 70%).") +
        " · tentativas: " + info.tentativas));
    }
    if (!info || !info.aprovado) {
      var iniciar = el("button", "btn btn-primario", "🚀 Iniciar exame");
      iniciar.addEventListener("click", function () { montarExame(); });
      intro.appendChild(iniciar);
    } else {
      intro.appendChild(botaoLink("#/certificado", "🏅 Ver meu certificado", "btn btn-primario"));
    }
    container.appendChild(intro);

    function montarExame() {
      container.innerHTML = "";
      container.appendChild(tit);
      var sorteio = window.Dados.sortearExameFinal(10);
      var questoes = sorteio.map(function (item) {
        return Object.assign({}, item.questao, {
          contexto: item.disciplinaNome + " · " + item.anoRotulo
        });
      });

      container.appendChild(montarQuiz({
        titulo: "Exame Final — 30 questões",
        instrucao: "Responda com calma. Acertando 21 de 30 você recebe o certificado do Colégio Horizonte.",
        questoes: questoes,
        textoBotao: "Entregar exame",
        aoEntregar: function (acertos, total) {
          var r = window.Estado.registrarExame(acertos, total);
          var acoes = [];
          if (r.aprovado) {
            acoes.push(botaoLink("#/certificado", "🏅 Receber meu certificado", "btn btn-verde"));
          } else {
            acoes.push(botaoRecarregar("🔄 Fazer novo exame (novo sorteio)"));
          }
          return {
            aprovado: r.aprovado,
            notaExibida: Math.round(r.percentual * 100) + "%",
            mensagem: (r.aprovado
              ? "Certificado garantido! Aproveitamento de " + acertos + " de " + total + " questões." + (r.pontosGanhos ? " +" + r.pontosGanhos + " pontos de mérito ⭐" : "")
              : "Você acertou " + acertos + " de " + total + " (precisa de 21). Cada nova tentativa sorteia questões novas — vai dar certo!"),
            acoes: acoes,
            comemorar: r.aprovado
          };
        }
      }));
    }
  }

  // ============================================================
  // TELA: Certificado
  // ============================================================
  function certificado(container) {
    var perfil = window.Estado.perfil();
    if (!window.Estado.exameAprovado()) {
      container.appendChild(trava("🔒 Certificado pendente",
        "Conclua todas as disciplinas e seja aprovado(a) no Exame Final de Certificação para receber seu certificado.",
        "#/exame", "Ir para o Exame Final"));
      return;
    }

    var info = window.Estado.exameInfo();
    var moldura = el("section", "certificado-moldura");
    moldura.appendChild(el("div", "cab", window.Dados.escola.nome + " · " + window.Dados.escola.anoLetivo));
    moldura.appendChild(el("div", "selo-final", "🎓"));
    moldura.appendChild(el("h1", null, "Certificado de Conclusão"));
    moldura.appendChild(el("p", null, "Certificamos que"));
    moldura.appendChild(el("div", "nome", perfil.nome));
    moldura.appendChild(el("p", null,
      "concluiu com aproveitamento o curso integral do " + window.Dados.escola.nome +
      ", abrangendo todo o Ensino Fundamental (1º ao 9º ano) e o Ensino Médio (1ª à 3ª série), " +
      "com aprovação em todas as disciplinas e aproveitamento de " + Math.round(info.percentual * 100) +
      "% no Exame Final de Certificação."));
    moldura.appendChild(el("p", null,
      "Conferido em " + new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" }) +
      " · " + window.Estado.pontos() + " pontos de mérito acumulados."));
    var assinaturas = el("div", "assinaturas");
    var a1 = el("div");
    a1.appendChild(el("strong", null, "Direção do Colégio Horizonte"));
    a1.appendChild(el("div", null, "Ensino Fundamental e Médio"));
    var a2 = el("div");
    a2.appendChild(el("strong", null, "Secretaria Acadêmica"));
    a2.appendChild(el("div", null, "Registro escolar nº HZ-" + String(Date.now()).slice(-6)));
    assinaturas.appendChild(a1);
    assinaturas.appendChild(a2);
    moldura.appendChild(assinaturas);
    container.appendChild(moldura);

    var acoes = el("div", "sem-impressao");
    acoes.style.textAlign = "center";
    var imprimir = el("button", "btn btn-primario", "🖨️ Imprimir / salvar em PDF");
    imprimir.addEventListener("click", function () { window.print(); });
    acoes.appendChild(imprimir);
    container.appendChild(acoes);
    confete();
  }

  // ---------- avisos reutilizáveis ----------
  function trava(titulo, texto, hrefVoltar, textoVoltar) {
    var card = el("section", "card exame-trava");
    card.appendChild(el("div", "icone", titulo.slice(0, 2)));
    card.appendChild(el("h2", null, titulo.replace(/^\S+\s/, "")));
    card.appendChild(el("p", null, texto));
    if (hrefVoltar) card.appendChild(botaoLink(hrefVoltar, textoVoltar || "Voltar", "btn btn-secundario"));
    return card;
  }

  function avisoNaoEncontrado(oQue) {
    var card = el("section", "card exame-trava");
    card.appendChild(el("h2", null, "🤔 Não encontramos este " + oQue));
    card.appendChild(botaoLink("#/inicio", "Voltar ao início", "btn btn-secundario"));
    return card;
  }

  return {
    inicio: inicio,
    ano: ano,
    disciplina: disciplina,
    aula: aula,
    prova: prova,
    boletim: boletim,
    exame: exame,
    certificado: certificado
  };
})();
