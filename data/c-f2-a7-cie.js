window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f2-a7-cie"] = {
  aulas: [
    {
      id: "f2-a7-cie-1",
      titulo: "A célula: a unidade da vida",
      blocos: [
        { tipo: "paragrafo", texto: "Toda forma de vida é feita de células — as menores unidades vivas. Algumas células independentes (bactérias), outras juntas formam tecidos, órgãos e organismos." },
        { tipo: "titulo", texto: "Partes básicas" },
        { tipo: "lista", itens: ["Membrana plasmática: a 'muralha' seletiva que controla o que entra e sai", "Citoplasma: o líquido interno onde flutuam as organelas", "Núcleo: o 'quartel-general' que guarda o DNA (nos eucariotos)", "Ribossomos: fábricas de proteínas", "Mitocôndrias: usinas de energia (respiração celular)"] },
        { tipo: "titulo", texto: "Célula animal x vegetal" },
        { tipo: "exemplo", texto: "A célula vegetal tem TRÊS extras: parede celular (rígida, de celulose), cloroplastos (fazem fotossíntese) e um grande vacúolo (reserva de água). A animal não tem nenhuma dessas três estruturas." },
        { tipo: "titulo", texto: "Procariotos x eucariotos" },
        { tipo: "paragrafo", texto: "PROCARIOTOS (bactérias) são células pequenas e simples, sem núcleo organizado — o DNA flutua no citoplasma. EUCARIOTOS (animais, plantas, fungos, protozoários) têm núcleo com membrana e organelas mais complexas." },
        { tipo: "dica", texto: "Mnemonic em português: 'Parede, Plasto e Vacúolo' — as três P's e V que só a planta tem." },
        { tipo: "atencao", texto: "Vírus não são células: não têm metabolismo próprio e só se reproduzem dentro de outras células. Por isso há debate se são 'vivos'." }
      ],
      atividade: [
        { pergunta: "A organela que produz energia é a...", alternativas: ["ribossomo", "mitocôndria", "vacúolo", "membrana"], correta: 1, explicacao: "Mitocôndrias fazem a respiração celular: energia (ATP)." },
        { pergunta: "Qual estrutura só existe na célula VEGETAL?", alternativas: ["Cloroplasto", "Núcleo", "Membrana", "Ribossomo"], correta: 0, explicacao: "Cloroplastos, parede celular e vacúolo são exclusivos vegetais." },
        { pergunta: "Bactérias são células...", alternativas: ["eucariotas", "procariotas", "animais", "de fungos"], correta: 1, explicacao: "Sem núcleo organizado: procariotas." },
        { pergunta: "O núcleo celular guarda o...", alternativas: ["alimento", "sal", "DNA", "oxigênio"], correta: 2, explicacao: "O material genético fica no núcleo dos eucariotos." }
      ]
    },
    {
      id: "f2-a7-cie-2",
      titulo: "Classificação dos seres vivos",
      blocos: [
        { tipo: "paragrafo", texto: "Com milhões de espécies conhecidas, a biologia organiza os seres vivos em categorias — a taxonomia, criada por Lineu no século XVIII com nomes em latim." },
        { tipo: "titulo", texto: "As hierarquias" },
        { tipo: "paragrafo", texto: "Do maior para o menor: DOMÍNIO → REINO → FILO → CLASSE → ORDEM → FAMÍLIA → GÊNERO → ESPÉCIE. O nome científico usa gênero + espécie: Homo sapiens (sempre em itálico)." },
        { tipo: "titulo", texto: "Os cinco reinos" },
        { tipo: "lista", itens: ["Monera: bactérias e cianobactérias (procariotos)", "Protista: protozoários e algas unicelulares", "Fungi: fungos e cogumelos (decompositores)", "Plantae: plantas (fotossintéticas)", "Animalia: animais (heterótrofos multicelulares)"] },
        { tipo: "titulo", texto: "Grupos dos animais" },
        { tipo: "exemplo", texto: "Vertebrados: peixes (escamas, ovos), anfíbios (pele úmida, metamorfose), répteis (escamas secas, ovos com casca), aves (penas, voo) e mamíferos (pelos, amamentam). Invertebrados famosos: insetos, aracnídeos, moluscos e crustáceos." },
        { tipo: "dica", texto: "Para lembrar os vertebrados: 'PARAM' — Peixes, Anfíbios, Répteis, Aves, Mamíferos." },
        { tipo: "atencao", texto: "Nome científico sempre em itálico e com duas palavras: o gênero com maiúscula (Homo) e a espécie com minúscula (sapiens)." }
      ],
      atividade: [
        { pergunta: "Fungos e cogumelos pertencem ao reino...", alternativas: ["Plantae", "Fungi", "Monera", "Animalia"], correta: 1, explicacao: "Fungi: seres decompositores com quitina na parede." },
        { pergunta: "O nome científico do ser humano é...", alternativas: ["Homo sapiens (itálico)", "homo sapiens", "Homo Sapiens", "sapiens homo"], correta: 0, explicacao: "Gênero maiúsculo + espécie minúscula, em itálico." },
        { pergunta: "Bactérias são do reino...", alternativas: ["Fungi", "Protista", "Monera", "Plantae"], correta: 2, explicacao: "Procariotos ficam em Monera." },
        { pergunta: "Mamíferos se caracterizam por...", alternativas: ["não ter esqueleto", "ter escamas", "botar ovos sempre", "amamentar e ter pelos"], correta: 3, explicacao: "Glândulas mamárias e pelos: marca dos mamíferos." }
      ]
    },
    {
      id: "f2-a7-cie-3",
      titulo: "Sistemas digestório e respiratório",
      blocos: [
        { tipo: "paragrafo", texto: "Dois sistemas mantêm o corpo abastecido: um transforma alimento em nutrientes; outro captura o oxigênio do ar. Eles se encontram no sangue." },
        { tipo: "titulo", texto: "Digestório em detalhe" },
        { tipo: "lista", itens: ["Boca: dentes trituram; saliva (amilase) começa a digerir o amido", "Esôfago: empurra por movimentos peristálticos", "Estômago: ácido clorídrico + pepsina digerem proteínas", "Intestino delgado: bile (fígado) emulsiona gorduras; enzimas do pâncreas; vilosidades absorvem nutrientes", "Intestino grosso: absorve água e forma as fezes"] },
        { tipo: "titulo", texto: "Respiratório em detalhe" },
        { tipo: "paragrafo", texto: "Ar entra pelo nariz (filtrado, umedecido, aquecido) → faringe → laringe → traqueia (com cartilagens em C) → bronquios → bronquiolos → ALVÉOLOS. Nos alvéolos, o oxigênio passa para o sangue e o CO2 sai. A respiração é comandada pelo diafragma." },
        { tipo: "exemplo", texto: "Bronquite e asma inflamatórias os bronquios (ar passa com dificuldade); o enfisema destrói os alvéolos (troca de gases prejudicada) — o tabaco agrava todos." },
        { tipo: "dica", texto: "Mastigar bem é o primeiro passo da digestão: os pedaços pequenos aumentam a área de contato para as enzimas." },
        { tipo: "atencao", texto: "Comer e correr ao mesmo tempo dá azia e estômago pesado: o corpo divide o sangue entre digestão e músculos, e ninguém rende." }
      ],
      atividade: [
        { pergunta: "A digestão das proteínas começa no...", alternativas: ["estômago", "boca", "fígado", "intestino grosso"], correta: 0, explicacao: "A pepsina do suco gástrico atua no estômago." },
        { pergunta: "Os vilos intestinais servem para...", alternativas: ["produzir bile", "armazenar fezes", "aumentar a absorção de nutrientes", "filtrar ar"], correta: 2, explicacao: "Aumentam a área de absorção do intestino delgado." },
        { pergunta: "A troca de gases acontece nos...", alternativas: ["traqueias", "narinas", "bronquios", "alvéolos"], correta: 3, explicacao: "Alvéolos são as 'bolhinhas' que tocam o sangue." },
        { pergunta: "A bile, que emulsiona gorduras, é produzida no...", alternativas: ["estômago", "fígado", "pâncreas", "esôfago"], correta: 1, explicacao: "Fígado produz; vesícula biliar armazena." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "A parede celular das plantas é feita de...", alternativas: ["quitina", "celulose", "colágeno", "queratina"], correta: 1, explicacao: "Celulose dá rigidez às células vegetais." },
      { pergunta: "Protozoários ficam no reino...", alternativas: ["Fungi", "Animalia", "Protista", "Monera"], correta: 2, explicacao: "Eucariotos unicelulares: reino Protista." },
      { pergunta: "Aves se caracterizam por...", alternativas: ["amamentar", "pelos", "penas e bicos", "escamas secas"], correta: 2, explicacao: "Penas, bico sem dentes e ossos ocos." },
      { pergunta: "A amilase da saliva digere...", alternativas: ["proteínas", "amidos", "vitaminas", "gorduras"], correta: 1, explicacao: "Por que o pão mastigado fica adocicado!" },
      { pergunta: "O diafragma participa...", alternativas: ["da digestão", "da visão", "da circulação", "da respiração"], correta: 3, explicacao: "Sobe e desce para encher e esvaziar os pulmões." },
      { pergunta: "A hierarquia taxonômica mais ampla é o...", alternativas: ["domínio", "gênero", "espécie", "indivíduo"], correta: 0, explicacao: "Domínio (ou super-reino) abriga os reinos." }
    ]
  },
  exameFinal: [
    { pergunta: "Procariotos diferem de eucariotos por não terem...", alternativas: ["membrana", "DNA", "núcleo organizado", "citoplasma"], correta: 2, explicacao: "O DNA fica solto no citoplasma." },
    { pergunta: "A ordem correta dos vertebrados 'PARAM' é...", alternativas: ["Peixes, Anfíbios, Répteis, Aves, Mamíferos", "Anfíbios, Peixes, Aves, Mamíferos, Répteis", "Peixes, Aves, Répteis, Anfíbios, Mamíferos", "Répteis, Peixes, Aves, Anfíbios, Mamíferos"], correta: 0, explicacao: "Da água para o ar: essa é a sequência evolutiva." },
    { pergunta: "Os movimentos peristálticos...", alternativas: ["filtram o ar", "bombam o sangue", "empurram o alimento pelo tubo digestório", "enchem os pulmões"], correta: 2, explicacao: "Ondas musculares involuntárias do esôfago e intestinos." },
    { pergunta: "No intestino delgado acontece principalmente a...", alternativas: ["formação de fezes", "digestão de proteínas inicial", "absorção de nutrientes", "absorção de água"], correta: 2, explicacao: "Vilosidades captam os nutrientes para o sangue." },
    { pergunta: "Fotossíntese acontece nos...", alternativas: ["lisossomos", "ribossomos", "cloroplastos", "mitocôndrias"], correta: 2, explicacao: "Clorofila dos cloroplastos captura a luz solar." }
  ]
};
