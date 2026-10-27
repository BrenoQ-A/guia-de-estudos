window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a3-bio"] = {
  aulas: [
    {
      id: "em-a3-bio-1",
      titulo: "Ecologia: relações, energia e ciclos",
      blocos: [
        { tipo: "paragrafo", texto: "Ecologia estuda as interações entre seres vivos e o ambiente. Sua unidade é o ecossistema: biocenose (vida) + biótopo (físico)." },
        { tipo: "titulo", texto: "Relações ecológicas" },
        { tipo: "lista", itens: ["Intraespecíficas (mesma espécie): cooperação (abelhas), competição (por alimento), canibalismo, colonização", "Interestradecíficas: predação, parasitismo (+/−), comensalismo (+/0), mutualismo (+/+), competição intergenérica (−/−)"] },
        { tipo: "exemplo", texto: "Mutualismo clássico: micorrizas (fungos nas raízes aumentam a absorção de água/nutrientes — 90% das plantas dependem); polinização (abelha × flor). Comensalismo: peixe-piloto no tubarão." },
        { tipo: "titulo", texto: "Fluxo de energia" },
        { tipo: "lista", itens: ["Cadeia alimentar: produtor (planta) → consumidor 1 → consumidor 2... decompositores reciclam", "A cada nível, ~90% da energia se perde (calor, respiração): pirâmides de energia SEMPRE decrescentes", "Por isso poucos predadores de topo: precisa de imensa base vegetal"] },
        { tipo: "titulo", texto: "Ciclos biogeoquímicos" },
        { tipo: "paragrafo", texto: "Carbono: fotossíntese retira CO₂; respiração e combustão devolvem — o desequilíbrio humano (fósseis) aquece o planeta. Nitrogênio: 78% do ar, mas só fixação (bactérias, raios) o torna usável — por isso fertilizantes nitrogenados (Haber-Bosch) revolucionaram a agricultura. Água e fósforo completam." },
        { tipo: "dica", texto: "Pirâmide invertida de números pode ocorrer (uma árvore × milhares de pulgões), mas a de ENERGIA nunca: é física (2ª lei da termodinâmica)." },
        { tipo: "atencao", texto: "Eutrofização: excesso de nutrientes (esgoto/fertilizante) → explosão de algas → falta de O₂ → mortandade. Ciclo de nitrogênio mal gerido mata rios." }
      ],
      atividade: [
        { pergunta: "Predação é relação...", alternativas: ["−/−", "+/+", "+/−", "0/+"], correta: 2, explicacao: "Predador ganha; presa perde." },
        { pergunta: "Micorrizas são exemplo de...", alternativas: ["predação", "competição", "comensalismo", "mutualismo"], correta: 3, explicacao: "Fungo + raiz: todos ganham." },
        { pergunta: "A cada nível trófico se perde cerca de...", alternativas: ["10%", "100%", "50%", "90%"], correta: 3, explicacao: "Energia em calor: pirâmide decrescente." },
        { pergunta: "A fixação do nitrogênio atmosférico é feita por...", alternativas: ["animais", "plantas direto", "só raios", "bactérias"], correta: 3, explicacao: "Rhizobium nas leguminosas e cianobactérias." }
      ]
    },
    {
      id: "em-a3-bio-2",
      titulo: "Evolução: evidências e especiação",
      blocos: [
        { tipo: "paragrafo", texto: "A síntese evolutiva moderna une Darwin (seleção natural) com a genética: mutação, recombinação, deriva gênica e migração mudam as frequências gênicas das populações." },
        { tipo: "titulo", texto: "Evidências da evolução" },
        { tipo: "lista", itens: ["Fósseis e o registro geológico (transições: Tiktaalik — peixe com 'punho')", "Anatomia comparada: homólogos (mesma origem, funções diferentes — braço, asa, nadadeira) e análogos (mesma função, origens distintas — asa de ave e de inseto)", "Vestigiais: apêndice, mamilos masculinos, ossos da pelve em baleias", "Biologia molecular: código genético universal; similaridade de DNA como 'relógio' de parentesco"] },
        { tipo: "titulo", texto: "Especiação: como nasce uma espécie" },
        { tipo: "exemplo", texto: "Especiação ALOPÁTRICA (a mais comum): uma população se divide por barreira geográfica (rio, montanha, ilha); isoladas, as duas populações acumulam diferenças genéticas; ao reencontrar, já não cruzam — nasceu uma espécie nova. Darwin e os tentilhões das Galápagos." },
        { tipo: "paragrafo", texto: "Simpátrica: sem barreira física — poliploidia em plantas, seleção disruptiva, comportamento (acasalamento por canto). Deriva genética: sorte pura mudando alelos (efeito fundador, gargalo de garrafa — chitas e mamutes passaram por isso)." },
        { tipo: "dica", texto: "Espécie biológica: população que cruza naturalmente e gera descendentes FÉRTEIS (mula é estéril: cavalo e jumento são espécies distintas)." },
        { tipo: "atencao", texto: "Evolução não é 'aperfeiçoamento': é adaptação ao ambiente atual. Órgãos vestigiais mostram herança, não projeto perfeito." }
      ],
      atividade: [
        { pergunta: "Estruturas homólogas indicam...", alternativas: ["ancestral comum", "mutação recente", "mesma função", "nada"], correta: 0, explicacao: "Mesma origem embriológica." },
        { pergunta: "A especiação alopátrica exige...", alternativas: ["mesmo território", "clonagem", "mutação letal", "isolamento geográfico"], correta: 3, explicacao: "Barreira separa as populações." },
        { pergunta: "Efeito gargalo é exemplo de...", alternativas: ["deriva genética", "seleção natural", "mutação dirigida", "migração"], correta: 0, explicacao: "Sorte que reduz variabilidade." },
        { pergunta: "Mula é estéril porque cavalo e jumento são...", alternativas: ["espécies distintas", "a mesma espécie", "gêneros idênticos", "raças"], correta: 0, explicacao: "Critério biológico de espécie." }
      ]
    },
    {
      id: "em-a3-bio-3",
      titulo: "Imunidade: defesas, vacinas e epidemiologia",
      blocos: [
        { tipo: "paragrafo", texto: "Seu corpo defende-se em camadas: barreiras, imunidade inata (rápida e genérica) e imunidade adaptativa (lenta, específica e com MEMÓRIA)." },
        { tipo: "titulo", texto: "O sistema imunológico" },
        { tipo: "lista", itens: ["Barreiras: pele, muco, ácido gástrico, flora", "Inata: inflamação, febre, fagócitos (macrófagos, neutrófilos), complemento — minutos a horas", "Adaptativa: linfócitos B (anticorpos, imunidade humoral) e T (matam células infectadas, imunidade celular)", "Memória imunológica: célula B/T de memória guarda o 'mold' do patógeno — resposta posterior rápida e forte"] },
        { tipo: "titulo", texto: "Vacinas" },
        { tipo: "exemplo", texto: "Vacina = treinar o sistema imune SEM a doença: agente morto (sabin), atenuado (sarampo), subunidade (hepatite B), mRNA (COVID-19: instrução para fabricar a proteína spike). Soro = anticorpos prontos (passiva, imediata e curta); vacina = imunidade ATIVA e duradoura." },
        { tipo: "titulo", texto: "Epidemiologia" },
        { tipo: "paragrafo", texto: "Doenças: endemia (constante numa região), epidemia (surto acima do esperado), pandemia (mundo — COVID-19, gripe de 1918). Vetores: mosquito da dengue (Aedes aegypti), barbeiro (Chagas). Imunidade de rebanho: quando a fração imune bloqueia a circulação — só se atinge com vacinação em massa (nunca 'deixar todos pegarem')." },
        { tipo: "dica", texto: "Anticorpo no exame pode significar: vacina prévia, doença passada ou doença em curso — depende do tipo de anticorpo (IgM recente, IgG antiga)." },
        { tipo: "atencao", texto: "Doenças autoimunes (lúpus, diabetes tipo 1) e alergias são o sistema imune ERRANDO: atacando o próprio corpo ou alérgenos inofensivos." }
      ],
      atividade: [
        { pergunta: "A imunidade adaptativa se caracteriza por...", alternativas: ["resposta imediata genérica", "não ter células", "só barreiras físicas", "especificidade e memória"], correta: 3, explicacao: "Linfócitos T e B com memória." },
        { pergunta: "Anticorpos são produzidos por linfócitos...", alternativas: ["B", "T citotóxicos", "hemácias", "macrófagos"], correta: 0, explicacao: "Plasmócitos (B ativados) secretam." },
        { pergunta: "Vacina induz imunidade...", alternativas: ["inexistente", "passiva", "só innata", "ativa"], correta: 3, explicacao: "Corpo fabrica própria defesa + memória." },
        { pergunta: "A dengue tem como vetor o...", alternativas: ["Aedes aegypti", "Anopheles só", "barbeiro", "pulga"], correta: 0, explicacao: "Mosquito urbano de água parada." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Mutualismo é relação...", alternativas: ["−/0", "+/−", "0/0", "+/+"], correta: 3, explicacao: "Ambos beneficiados e dependentes." },
      { pergunta: "A pirâmide de energia é sempre...", alternativas: ["aleatória", "constante", "decrescente", "invertida"], correta: 2, explicacao: "Perda de calor a cada nível." },
      { pergunta: "Asa de ave e asa de inseto são estruturas...", alternativas: ["análogas", "homólogas", "idênticas", "vestigiais"], correta: 0, explicacao: "Mesma função, origens diferentes." },
      { pergunta: "Soro tem ação...", alternativas: ["passiva e imediata", "de memória", "ativa e duradoura", "nula"], correta: 0, explicacao: "Anticorpos prontos, curto prazo." },
      { pergunta: "IgM indica infecção...", alternativas: ["antiga", "herdada", "impossível", "recente"], correta: 3, explicacao: "Primeiro anticorpo produzido." },
      { pergunta: "A polinização é exemplo de relação...", alternativas: ["de competição", "predatória", "mutualística", "de parasitismo"], correta: 2, explicacao: "Animal come néctar, planta se reproduz." }
    ]
  },
  exameFinal: [
    { pergunta: "Eutrofização é...", alternativas: ["chuva ácida", "purificação de rios", "enriquecimento de água por nutrientes que mata o oxigênio", "mudança climática"], correta: 2, explicacao: "Esgoto e fertilizantes: algas dominam." },
    { pergunta: "Tiktaalik é evidência fóssil de...", alternativas: ["transição peixe-tetrápode", "plantas", "dinossauro", "humanos"], correta: 0, explicacao: "Nadadeiras com 'punhos'." },
    { pergunta: "O efeito fundador exemplifica...", alternativas: ["mutação", "deriva genética", "seleção natural", "fluxo gênico"], correta: 1, explicacao: "Poucos fundadores: alelos por sorte." },
    { pergunta: "Imunidade de rebanho exige...", alternativas: ["todos doentes", "alta fração imunizada (vacinação)", "só os jovens", "medicamentos"], correta: 1, explicacao: "Protege os que não podem se vacinar." },
    { pergunta: "Ciclo do carbono e aquecimento global se ligam por...", alternativas: ["marés", "nitrogênio", "fotossíntese só", "emissão fóssil que excede a absorção"], correta: 3, explicacao: "Desbalanceio antropogênico." }
  ]
};
