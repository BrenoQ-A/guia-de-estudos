window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a1-bio"] = {
  aulas: [
    {
      id: "em-a1-bio-1",
      titulo: "Citologia: membrana, citoplasma e organelas",
      blocos: [
        { tipo: "paragrafo", texto: "A célula eucariota é uma fábrica organizada: membrana (muralha), citoplasma (chão de fábrica) e organelas (setores especializados)." },
        { tipo: "titulo", texto: "Membrana plasmática" },
        { tipo: "lista", itens: ["Modelo do mosaico fluido: bicamada de fosfolipídios + proteínas", "Permeabilidade SELETIVA: escolhe o que entra e sai", "Transportes passivos (sem energia): difusão e osmose (a favor do gradiente)", "Transportes ativos (com ATP): contra o gradiente (bomba de sódio-potássio)"] },
        { tipo: "exemplo", texto: "Osmose no dia a dia: alface em água pura fica túrgida (água entra); em salmoura, murcha (água sai). A hemólise de células em água destilada é osmose letal." },
        { tipo: "titulo", texto: "Principais organelas" },
        { tipo: "lista", itens: ["Núcleo: guarda o DNA; nucleoplasma + carioteca + nucléolo (fábrica de ribossomos)", "Mitocôndria: respiração celular → ATP; tem DNA próprio (herança materna!)", "Ribossomos: síntese de proteínas", "Retículo endoplasmático: rugoso (proteínas) e liso (lípidios, desintoxicação)", "Complexo de Golgi: processa e expede proteínas (o 'correio')", "Lisossomos: digestão intracelular (enzimas)", "Cloroplastos (só vegetal): fotossíntese", "Vacúolos: armazenamento"] },
        { tipo: "dica", texto: "Analogia: núcleo = sala de comando; mitocôndria = usina; ribossomo = operário; Golgi = logística; lisossomo = limpeza." },
        { tipo: "atencao", texto: "Mitocôndria e cloroplasto têm DNA e ribossomos próprios: a teoria endossimbiótica diz que foram bactérias ancestrais engolidas por células maiores." }
      ],
      atividade: [
        { pergunta: "A organela produtora de ATP é a...", alternativas: ["mitocôndria", "membrana", "lisossomo", "nucléolo"], correta: 0, explicacao: "Respiração celular: usina da célula." },
        { pergunta: "A osmose é transporte...", alternativas: ["de íons só", "de proteínas", "ativo de água", "passivo de água"], correta: 3, explicacao: "Água atravessa sem gasto de energia." },
        { pergunta: "O 'correio' da célula é o...", alternativas: ["nucleoplasma", "vacúolo", "Golgi", "retículo"], correta: 2, explicacao: "Empacota e expede secreções." },
        { pergunta: "Lisossomos contêm...", alternativas: ["DNA", "clorofila", "hemoglobina", "enzimas digestivas"], correta: 3, explicacao: "Digestão intracelular." }
      ]
    },
    {
      id: "em-a1-bio-2",
      titulo: "Moléculas da vida",
      blocos: [
        { tipo: "paragrafo", texto: "A vida se constrói com poucas famílias de moléculas: água, carboidratos, lipídios, proteínas e ácidos nucleicos." },
        { tipo: "titulo", texto: "As macromoléculas" },
        { tipo: "lista", itens: ["Carboidratos: energia rápida e estrutura (glicose, amido, celulose, quitina)", "Lipídios: reserva energética concentrada, membranas, hormônios (gorduras, fosfolipídios, esteroides)", "Proteínas: quase tudo — enzimas, defesa, transporte, estrutura (aminoácidos + ligações peptídicas)", "Ácidos nucleicos: DNA e RNA (informação genética)"] },
        { tipo: "exemplo", texto: "Energia por grama: carboidratos ~4 kcal, proteínas ~4 kcal, lipídios ~9 kcal — por isso gordura é a reserva mais eficiente (1 kg de gordura vale ~2 kg de glicogênio em energia)." },
        { tipo: "titulo", texto: "Enzimas: o motor da vida" },
        { tipo: "paragrafo", texto: "Enzimas são proteínas CATALISADORAS: aceleram reações sem se gastar. Cada enzima é específica (chave-fechadura: substrato no sítio ativo) e depende de temperatura e pH ideais. Febre alta desnatura enzimas: por isso hipertermia mata." },
        { tipo: "dica", texto: "Água: solvente universal, térmica (dificulta mudanças de temperatura), participa de reações (hidrólise) e dá turgência às células — 70% do seu corpo." },
        { tipo: "atencao", texto: "A desnaturação (calor, pH extremo) desfaz a forma 3D da proteína: o ovo cozido nunca volta a ficar cru. Estrutura perdida = função perdida." }
      ],
      atividade: [
        { pergunta: "Energia mais concentrada por grama está nos...", alternativas: ["carboidratos", "lipídios", "sais", "proteínas"], correta: 1, explicacao: "9 kcal/g contra 4 kcal/g." },
        { pergunta: "Celulose é um carboidrato de função...", alternativas: ["de defesa", "hormonal", "estrutural (parede celular)", "energética humana"], correta: 2, explicacao: "Fibra estrutural que não digerimos." },
        { pergunta: "Enzimas são...", alternativas: ["vitaminas", "ácidos nucleicos", "lipídios", "proteínas catalisadoras"], correta: 3, explicacao: "Especificidade e sítio ativo." },
        { pergunta: "Calor excessivo em proteínas causa...", alternativas: ["ativação", "multiplicação", "nada", "desnaturação"], correta: 3, explicacao: "Forma 3D desfeita: função perdida." }
      ]
    },
    {
      id: "em-a1-bio-3",
      titulo: "Núcleo, mitose e meiose",
      blocos: [
        { tipo: "paragrafo", texto: "No núcleo, o DNA se organiza em cromossomos. A divisão celular replica esse material: MITOSE (2 células iguais) e MEIOSE (4 células com metade dos cromossomos)." },
        { tipo: "titulo", texto: "Mitose: crescimento e renovação" },
        { tipo: "lista", itens: ["Prófase: cromossomos condensam, carioteca some", "Metáfase: cromossomos na linha equatorial", "Anáfase: cromátides-irmãs separam para polos", "Telófase: núcleos se reconstituem; citocinese divide a célula", "Resultado: 2 células com o MESMO número de cromossomos (2n → 2n)"] },
        { tipo: "titulo", texto: "Meiose: a fábrica de gametas" },
        { tipo: "lista", itens: ["Duas divisões seguidas (meiose I e II)", "Resultado: 4 células haploides (n) — gametas ou esporos", "Meiose I: separa cromossomos HOMÓLOGOS (2n → n); crossing-over na prófase I gera variabilidade", "Meiose II: separa cromátides (como mitose)"] },
        { tipo: "exemplo", texto: "Humano: 46 cromossomos (2n). Gametas: 23 (n). Fecundação: 23 + 23 = 46. O crossing-over (troca de pedaços entre homólogos) e a distribuição aleatória explicam por que irmãos (exceto gêmeos idênticos) são diferentes." },
        { tipo: "dica", texto: "Cromátide = 'metade' do cromossomo duplicado (com a mesma cópia). Homólogos = par (um da mãe, um do pai) com os MESMOS genes em posições iguais." },
        { tipo: "atencao", texto: "Erro de separação na meiose (nondisjunção) gera aneuploidias: trissomia do 21 (Síndrome de Down), Klinefelter (XXY), Turner (X0)." }
      ],
      atividade: [
        { pergunta: "A mitose produz...", alternativas: ["gametas", "esporos só", "2 células iguais à original", "4 células haploides"], correta: 2, explicacao: "2n → 2n: crescimento e reparo." },
        { pergunta: "O crossing-over acontece na...", alternativas: ["prófase I da meiose", "mitose", "telófase", "interfase"], correta: 0, explicacao: "Troca de trechos entre homólogos: variabilidade." },
        { pergunta: "Gametas humanos têm...", alternativas: ["92", "0", "46 cromossomos", "23 cromossomos"], correta: 3, explicacao: "Haploides: metade do número." },
        { pergunta: "Na anáfase da mitose separam-se...", alternativas: ["organelas só", "homólogos", "cromátides-irmãs", "núcleos"], correta: 2, explicacao: "Cópias idênticas vão para polos opostos." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "O modelo do mosaico fluido descreve...", alternativas: ["o citoesqueleto", "a membrana plasmática", "o núcleo", "o Golgi"], correta: 1, explicacao: "Fosfolipídios fluidos + proteínas." },
      { pergunta: "DNA próprio (herança materna) existe na...", alternativas: ["vacúolo", "mitocôndria", "lisossomo", "ribossomo"], correta: 1, explicacao: "E no cloroplasto: endossimbiose." },
      { pergunta: "Fosfolipídios formam...", alternativas: ["enzimas", "membranas", "osso", "DNA"], correta: 1, explicacao: "Bicamada: cabeças hidrofílicas, caudas hidrofóbicas." },
      { pergunta: "A fase em que os cromossomos alinham no equador é a...", alternativas: ["telófase", "anáfase", "prófase", "metáfase"], correta: 3, explicacao: "Metáfase: 'equador da divisão'." },
      { pergunta: "A meiose é essencial para...", alternativas: ["crescer musculos", "formar gametas e variabilidade", "curar feridas", "fotossintetizar"], correta: 1, explicacao: "Haploidia + recombinação." },
      { pergunta: "Trissomia do 21 resulta de...", alternativas: ["câncer", "nondisjunção (separação falha)", "mutação puntual", "osmose"], correta: 1, explicacao: "Par 21 não separa: 3 cópias." }
    ]
  },
  exameFinal: [
    { pergunta: "Transporte ativo requer...", alternativas: ["frio", "água destilada", "ATP", "só difusão"], correta: 2, explicacao: "Contra o gradiente: energia." },
    { pergunta: "A enzima interage com seu substrato no...", alternativas: ["sítio ativo", "vacúolo", "Golgi", "núcleo"], correta: 0, explicacao: "Modelo chave-fechadura." },
    { pergunta: "Células haploides (n) surgem por...", alternativas: ["mitose", "apoptose", "osmose", "meiose"], correta: 3, explicacao: "Redução pela metade." },
    { pergunta: "Homólogos são cromossomos...", alternativas: ["do par (mãe e pai), mesmos genes", "de espécies distintas", "só de DNA bacteriano", "idênticos como cópias"], correta: 0, explicacao: "Um de cada progenitor." },
    { pergunta: "Variabilidade genética na meiose vem de...", alternativas: ["mitose I", "nenhuma", "osmose", "crossing-over e distribuição independente"], correta: 3, explicacao: "Prófase I e metáfase I." }
  ]
};
