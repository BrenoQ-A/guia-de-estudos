window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["f1-a1-por"] = {
  aulas: [
    {
      id: "f1-a1-por-1",
      titulo: "O alfabeto: vogais e consoantes",
      blocos: [
        { tipo: "paragrafo", texto: "O nosso alfabeto tem 26 letras. Com essas letrinhas conseguimos escrever todas as palavras que conhecemos: nomes de pessoas, de animais, de brinquedos e muito mais." },
        { tipo: "titulo", texto: "As vogais" },
        { tipo: "paragrafo", texto: "Cinco letras são muito especiais: A, E, I, O, U. Elas são as vogais. Toda palavra precisa ter pelo menos uma vogal, porque é ela que dá voz às palavras. Tente falar B sem juntar uma vogal... impossível!" },
        { tipo: "lista", itens: ["A de abelha", "E de elefante", "I de igreja", "O de ovo", "U de urso"] },
        { tipo: "titulo", texto: "As consoantes" },
        { tipo: "paragrafo", texto: "As outras 21 letras são as consoantes: B, C, D, F, G, H, J, L, M, N, P, Q, R, S, T, V, X, Z e o W, Y e K, que aparecem mais em nomes e palavras de outros idiomas. As consoantes fazem companhia para as vogais e juntas formam os sons das palavras." },
        { tipo: "exemplo", texto: "A palavra BOLA é formada pelas letras B, O, L e A. As vogais são O e A. As consoantes são B e L." },
        { tipo: "dica", texto: "Cantar o alfabeto em voz alta ajuda a decorar a ordem das letras. Peça a alguém para cantar com você!" },
        { tipo: "atencao", texto: "O Y e o W quase sempre aparecem em palavras vindas de outros idiomas, como Youtube e wi-fi. Também usamos o Y em alguns nomes próprios." }
      ],
      atividade: [
        { pergunta: "Quantas letras tem o nosso alfabeto?", alternativas: ["24 letras", "30 letras", "26 letras", "20 letras"], correta: 2, explicacao: "O alfabeto português tem 26 letras, de A até Z." },
        { pergunta: "Qual opção tem APENAS vogais?", alternativas: ["A, E, I", "A, B, C", "I, J, O", "E, F, U"], correta: 0, explicacao: "A, E e I são vogais. B, C, F e J são consoantes." },
        { pergunta: "Quais são as vogais da palavra LUA?", alternativas: ["L e A", "só a letra A", "L e U", "U e A"], correta: 3, explicacao: "Em LUA, as vogais são U e A. A letra L é consoante." },
        { pergunta: "Qual palavra começa com uma VOGAL?", alternativas: ["gato", "bola", "dado", "abelha"], correta: 3, explicacao: "Abelha começa com A, que é vogal. Bola, gato e dado começam com consoantes." }
      ]
    },
    {
      id: "f1-a1-por-2",
      titulo: "Sílabas e formação de palavras",
      blocos: [
        { tipo: "paragrafo", texto: "As palavras são formadas por pedacinhos chamados sílabas. Cada sílaba tem uma vogal sozinha ou acompanhada de consoantes." },
        { tipo: "exemplo", texto: "A palavra BO-LA tem 2 sílabas. A palavra PA-PE-LA tem 3 sílabas. A palavra SA-LA também tem 2 sílabas." },
        { tipo: "titulo", texto: "Batendo palmas para contar sílabas" },
        { tipo: "paragrafo", texto: "Um jeito divertido de contar sílabas é bater palmas: uma palma para cada pedacinho. CO-RA-ÇÃO dá 3 palmas! ES-CO-LA dá 3 palmas! PA-TO dá 2 palmas!" },
        { tipo: "lista", itens: ["PÉ tem 1 sílaba", "SO-LA tem 2 sílabas", "LA-PI-SEI-RA tem 4 sílabas", "BO-LA tem 2 sílabas"] },
        { tipo: "titulo", texto: "Palavras pequenas e grandes" },
        { tipo: "paragrafo", texto: "Algumas palavras têm só uma sílaba, como PÉ, PÃO e SOL. Outras têm muitas, como A-VE-NI-DA. Não confunda: contar letras é diferente de contar sílabas!" },
        { tipo: "atencao", texto: "A palavra CHÁ tem 3 letras (C, H, A), mas só 1 sílaba. Número de letras e número de sílabas não são a mesma coisa." },
        { tipo: "dica", texto: "Coloque a mão espalmada embaixo do queixo e fale a palavra devagar: o queixo desce uma vez para cada sílaba!" }
      ],
      atividade: [
        { pergunta: "Quantas sílabas tem a palavra PATO?", alternativas: ["4 sílabas", "2 sílabas", "1 sílaba", "3 sílabas"], correta: 1, explicacao: "PA-TO tem 2 sílabas: PA e TO." },
        { pergunta: "Qual palavra tem APENAS 1 sílaba?", alternativas: ["pé", "escola", "casa", "bola"], correta: 0, explicacao: "PÉ tem só 1 sílaba. BO-LA tem 2, CA-SA tem 2 e ES-CO-LA tem 3." },
        { pergunta: "Quantas sílabas tem a palavra ESCOLA?", alternativas: ["4 sílabas", "2 sílabas", "3 sílabas", "5 sílabas"], correta: 2, explicacao: "ES-CO-LA tem 3 sílabas. São 3 palmas!" },
        { pergunta: "Qual é a separação correta das sílabas de BOLA?", alternativas: ["B-OLA", "BO-LA", "BOL-A", "BOLA é uma sílaba só"], correta: 1, explicacao: "A separação certa é BO-LA, duas sílabas." }
      ]
    },
    {
      id: "f1-a1-por-3",
      titulo: "Frases simples: ordem e pontuação",
      blocos: [
        { tipo: "paragrafo", texto: "Quando juntamos palavras para contar uma ideia completa, formamos uma frase. Toda frase começa com letra maiúscula e termina com um sinal de pontuação." },
        { tipo: "titulo", texto: "A ordem das palavras" },
        { tipo: "paragrafo", texto: "As palavras precisam estar em ordem para a frase fazer sentido. 'O gato bebe leite.' está certinho. Já 'leite gato o bebe' ficou uma bagunça, não ficou?" },
        { tipo: "titulo", texto: "Os sinais do fim da frase" },
        { tipo: "lista", itens: ["Ponto final (.) — usamos quando afirmamos algo: Eu tenho um cachorro.", "Ponto de interrogação (?) — usamos quando perguntamos: Você tem um cachorro?", "Ponto de exclamação (!) — usamos quando sentimos algo forte: Que cachorro fofo!"] },
        { tipo: "exemplo", texto: "Veja três frases com a mesma ideia: 'Eu gosto de sorvete.' (afirmação), 'Você gosta de sorvete?' (pergunta) e 'Adoro sorvete!' (emoção forte)." },
        { tipo: "paragrafo", texto: "Toda frase começa com letra maiúscula. Se a frase começa com o nome de uma pessoa, de um lugar ou de um bicho de estimação, esse nome também leva maiúscula." },
        { tipo: "atencao", texto: "Escrever 'ana foi à praia' está errado. O certo é 'Ana foi à praia.': frase começa com maiúscula e nome próprio também é maiúsculo." }
      ],
      atividade: [
        { pergunta: "Com que tipo de letra começamos uma frase?", alternativas: ["Número", "Letra minúscula", "Qualquer letra", "Letra maiúscula"], correta: 3, explicacao: "Toda frase começa com letra maiúscula." },
        { pergunta: "Qual sinal usamos no fim de uma PERGUNTA?", alternativas: ["Ponto de interrogação (?)", "Ponto de exclamação (!)", "Ponto final (.)", "Vírgula (,)"], correta: 0, explicacao: "Perguntas terminam com ponto de interrogação (?)." },
        { pergunta: "Qual frase está escrita CORRETAMENTE?", alternativas: ["Eu gosto de pipoca?", "eu gosto de pipoca", "Eu gosto de pipoca.", "eu gosto de pipoca!"], correta: 2, explicacao: "Começa com maiúscula e termina com ponto final, pois é uma afirmação." },
        { pergunta: "Qual destas é uma frase que mostra ADMIRAÇÃO (emoção forte)?", alternativas: ["arco-íris no céu", "Que bonito o arco-íris!", "Você viu o arco-íris?", "O arco-íris apareceu."], correta: 1, explicacao: "A exclamação (!) mostra emoção forte, como admiração." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Quantas letras tem o alfabeto português?", alternativas: ["26", "28", "21", "24"], correta: 0, explicacao: "São 26 letras, de A a Z." },
      { pergunta: "Quais são as cinco vogais?", alternativas: ["A, E, I, O, U", "E, I, O, U, Y", "B, C, D, F, G", "A, B, C, D, E"], correta: 0, explicacao: "As vogais são A, E, I, O, U." },
      { pergunta: "Na palavra GATO, quantas são as consoantes?", alternativas: ["2", "4", "1", "3"], correta: 0, explicacao: "G e T são consoantes; A e O são vogais." },
      { pergunta: "Quantas sílabas tem a palavra BONECA?", alternativas: ["2", "4", "3", "1"], correta: 2, explicacao: "BO-NE-CA tem 3 sílabas." },
      { pergunta: "Qual frase está correta?", alternativas: ["o pato nada no lago", "O pato nada no lago.", "O pato nada no lago?", "O pato nada no lago!"], correta: 1, explicacao: "Afirmação: maiúscula no começo e ponto final no fim." },
      { pergunta: "Qual palavra começa com consoante?", alternativas: ["elefante", "bola", "ovo", "uva"], correta: 1, explicacao: "Bola começa com B, uma consoante. As outras começam com vogais." }
    ]
  },
  exameFinal: [
    { pergunta: "Toda sílaba precisa ter, pelo menos, uma:", alternativas: ["letra maiúscula", "vogal", "vírgula", "consoante"], correta: 1, explicacao: "A vogal é o coração da sílaba; sem ela a sílaba não soa." },
    { pergunta: "Quantas sílabas tem a palavra MELANCIA?", alternativas: ["5", "4", "3", "2"], correta: 1, explicacao: "ME-LAN-CIA tem 4 sílabas: ME, LAN, CI, A." },
    { pergunta: "Qual sinal termina a frase 'Você quer brincar ___'", alternativas: ["?", "!", ",", "."], correta: 0, explicacao: "É uma pergunta, então termina com ponto de interrogação." },
    { pergunta: "Qual opção contém apenas consoantes?", alternativas: ["O, U, M", "A, E, B", "A, E, I", "B, D, F"], correta: 3, explicacao: "B, D e F são consoantes; as outras opções têm vogais." },
    { pergunta: "O que toda frase precisa ter no começo?", alternativas: ["Letra minúscula", "Letra maiúscula", "Número", "Ponto final"], correta: 1, explicacao: "Toda frase começa com letra maiúscula; o sinal de pontuação fica no fim." }
  ]
};
