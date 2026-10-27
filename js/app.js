// ============================================================
// Colégio Horizonte — roteador e inicialização
// Rotas (hash):
//   #/inicio                      corredor da escola
//   #/ano/{anoId}                 sala do ano (disciplinas)
//   #/disciplina/{discId}         aulas da disciplina + prova
//   #/aula/{discId}/{aulaId}      conteúdo + atividade
//   #/prova/{discId}              prova da disciplina
//   #/boletim                     boletim escolar
//   #/exame                       exame final de certificação
//   #/certificado                 certificado de conclusão
// ============================================================

(function () {
  "use strict";

  var app = document.getElementById("app");

  function rotaAtual() {
    var hash = location.hash.replace(/^#\/?/, "");
    var partes = hash.split("/").filter(Boolean);
    return { nome: partes[0] || "inicio", args: partes.slice(1) };
  }

  function rotear() {
    var rota = rotaAtual();
    var precisaMatricula = ["ano", "disciplina", "aula", "prova", "boletim", "exame", "certificado"];
    if (!window.Estado.perfil() && precisaMatricula.indexOf(rota.nome) !== -1) {
      rota = { nome: "inicio", args: [] };
      location.hash = "#/inicio";
    }

    app.innerHTML = "";
    window.scrollTo(0, 0);
    var V = window.Views;

    try {
      switch (rota.nome) {
        case "ano": V.ano(app, rota.args[0]); break;
        case "disciplina": V.disciplina(app, rota.args[0]); break;
        case "aula": V.aula(app, rota.args[0], rota.args[1]); break;
        case "prova": V.prova(app, rota.args[0]); break;
        case "boletim": V.boletim(app); break;
        case "exame": V.exame(app); break;
        case "certificado": V.certificado(app); break;
        case "inicio":
        default: V.inicio(app); break;
      }
    } catch (erro) {
      app.innerHTML = "";
      var card = document.createElement("section");
      card.className = "card exame-trava";
      var h2 = document.createElement("h2");
      h2.textContent = "😵 Algo saiu do previsto";
      card.appendChild(h2);
      var p = document.createElement("p");
      p.textContent = "Ocorreu um erro ao abrir esta página: " + erro.message;
      card.appendChild(p);
      var a = document.createElement("a");
      a.className = "btn btn-secundario";
      a.href = "#/inicio";
      a.textContent = "Voltar ao início";
      card.appendChild(a);
      app.appendChild(card);
    }

    atualizarCabecalho(rota.nome);
  }

  function atualizarCabecalho(rotaNome) {
    // destaque do menu
    var links = document.querySelectorAll("#nav-principal a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("ativa", links[i].getAttribute("data-rota") === rotaNome);
    }

    // chip do aluno
    var chip = document.getElementById("aluno-chip");
    chip.innerHTML = "";
    var perfil = window.Estado.perfil();
    if (perfil) {
      var av = document.createElement("span");
      av.className = "avatar";
      av.textContent = perfil.avatar;
      var nome = document.createElement("span");
      nome.textContent = perfil.nome;
      var pts = document.createElement("span");
      pts.className = "pontos";
      pts.textContent = "⭐ " + window.Estado.pontos();
      chip.appendChild(av);
      chip.appendChild(nome);
      chip.appendChild(pts);
    }

    // estado do exame final no menu
    var linkExame = document.getElementById("nav-exame");
    if (linkExame) {
      var concluido = window.Estado.exameAprovado();
      linkExame.textContent = concluido ? "📝 Exame ✅" : "📝 Exame Final";
      var geral = window.Estado.progressoGeral();
      linkExame.title = geral.aprovadas + "/" + geral.total + " disciplinas concluídas";
    }
  }

  window.addEventListener("hashchange", rotear);

  document.getElementById("btn-reiniciar").addEventListener("click", function () {
    var ok = confirm(
      "Isso apaga sua matrícula, todo o progresso, notas e pontos, e começa o ano letivo do zero.\n\n" +
      "Tem certeza que quer reiniciar?");
    if (ok) {
      window.Estado.reiniciar();
      location.hash = "#/inicio";
      rotear();
    }
  });

  // API usada pelas views (recarregar a tela atual)
  window.App = { rotear: rotear };

  rotear();
})();
