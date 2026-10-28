window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a2-por"] = {
  aulas: [
    {
      id: "f1-a2-por-1",
      titulo: "Encontros vocálicos e consonantais (sílabas complexas)",
      blocos: [
        { tipo: "paragrafo", texto: "A sílaba é a unidade de som da palavra, e a divisão silábica correta é exigida na hifenização de textos, na leitura de nomes próprios e na grafia de termos usados em documentos. Duas sequências de letras costumam dificultar essa divisão: os encontros vocálicos e os encontros consonantais." },
        { tipo: "titulo", texto: "Encontro vocálico" },
        { tipo: "paragrafo", texto: "Encontro vocálico é a sequência de duas ou mais vogais. Quando permanecem na mesma sílaba, formam um ditongo, como o 'ai' de pai; quando caem em sílabas separadas, formam um hiato, como o 'a' e o 'ú' de sa-ú-de. O tritongo reúne três vogais na mesma sílaba, como o 'uai' de Paraguai." },
        { tipo: "lista", itens: ["pai — ditongo: a + i na mesma sílaba", "saúde — hiato: sa-ú-de, vogais em sílabas separadas", "Paraguai — tritongo: pa-ra-guai, três vogais juntas", "queijo — ditongo: quei-jo, as vogais e + i juntas"] },
        { tipo: "titulo", texto: "Encontro consonantal" },
        { tipo: "paragrafo", texto: "Encontro consonantal é a sequência de duas ou mais consoantes adjacentes, cada uma conservando o próprio som. Quando ocupam a mesma sílaba, como o 'pr' de pra-zo e o 'bl' de blo-co, permanecem juntas na divisão; quando caem em sílabas vizinhas, como o 'dm' de ad-mi-nis-tra-ção, mantêm-se em sílabas distintas." },
        { tipo: "exemplo", texto: "Em um contrato, a palavra prazo (pra-zo) traz o encontro consonantal pr, e a palavra admissão (ad-mis-são) reúne dois casos: o encontro 'dm' em sílabas vizinhas e o dígrafo ss, que nunca se separa." },
        { tipo: "atencao", texto: "Armadilha comum: confundir encontro consonantal com dígrafo. Em 'pr', cada consoante tem som próprio (p + r); em dígrafos como ch, lh, nh, rr e ss, duas letras representam um som único. Por isso rr e ss permanecem na mesma sílaba na divisão: car-ro, as-si-na-tu-ra." }
      ],
      atividade: [
        { pergunta: "Na palavra PRAZO (pra-zo), a sequência PR é classificada como:", alternativas: ["dígrafo", "encontro consonantal, pois cada consoante conserva o próprio som", "encontro vocálico", "hiato"], correta: 1, explicacao: "P e R são consoantes com sons independentes na mesma sílaba: encontro consonantal." },
        { pergunta: "Em ADMISSÃO (ad-mis-são), a sequência SS:", alternativas: ["forma um encontro vocálico", "representa dois sons consonantais distintos", "se separa na divisão silábica", "é um dígrafo: duas letras com um único som"], correta: 3, explicacao: "SS reproduz um único som de s e por isso não se separa na divisão silábica." },
        { pergunta: "A palavra SAÚDE (sa-ú-de) apresenta:", alternativas: ["hiato, pois as vogais ficam em sílabas separadas", "tritongo, pois reúne três vogais", "encontro consonantal", "dígrafo consonantal"], correta: 0, explicacao: "As vogais a e ú são adjacentes, mas caem em sílabas diferentes: é um hiato." },
        { pergunta: "Qual palavra contém dígrafo?", alternativas: ["prato", "bloco", "carro", "tabela"], correta: 2, explicacao: "RR é dígrafo: duas letras, um único som de r. Em prato e bloco há encontro consonantal." }
      ]
    },
    {
      id: "f1-a2-por-2",
      titulo: "Substantivo próprio e comum; singular e plural",
      blocos: [
        { tipo: "paragrafo", texto: "Substantivo é a palavra que nomeia seres, lugares, instituições, sentimentos e objetos. Ele funciona como núcleo das expressões usadas em formulários e documentos: o campo 'nome' de qualquer cadastro exige um substantivo próprio; a descrição de um produto, um substantivo comum." },
        { tipo: "titulo", texto: "Comum e próprio" },
        { tipo: "paragrafo", texto: "O substantivo comum nomeia a espécie inteira: cidade, empresa, funcionário. O substantivo próprio individualiza um único representante dessa espécie e se escreve com inicial maiúscula: Recife, Petrobras, Marta. A maiúscula funciona como sinal de individualização." },
        { tipo: "exemplo", texto: "Em um contrato de aluguel: 'a empresa (comum) denominada Vento Leste Ltda. (próprio)'. A palavra empresa designa qualquer organização do tipo; a razão social identifica aquela empresa específica." },
        { tipo: "titulo", texto: "Singular e plural" },
        { tipo: "paragrafo", texto: "O número indica quantidade: singular para um elemento, plural para mais de um. A regra básica acrescenta -s; formas terminadas em -r recebem -es (mar → mares), as terminadas em -l trocam para -is (animal → animais) e as em -m passam a -ns (álbum → álbuns). O substantivo comanda a concordância: artigo e adjetivo acompanham seu número." },
        { tipo: "lista", itens: ["lar → lares (terminado em -r: acrescenta -es)", "animal → animais (terminado em -l: troca para -is)", "álbum → álbuns (terminado em -m: troca para -ns)", "pão → pães (plural com mudança interna do ditongo)"] },
        { tipo: "atencao", texto: "Armadilha comum: descuidar da concordância em textos formais. Escrever 'os documento anexos' compromete a credibilidade do documento; o correto é 'os documentos anexos' — o substantivo no plural exige artigo e adjetivo também no plural." }
      ],
      atividade: [
        { pergunta: "Na frase 'A empresa Vento Leste contratou contadores', os substantivos Vento Leste e contadores classificam-se respectivamente como:", alternativas: ["comum e próprio", "próprio e próprio", "próprio e comum", "comum e comum"], correta: 2, explicacao: "Vento Leste individualiza uma empresa específica (próprio); contadores nomeia a espécie (comum)." },
        { pergunta: "O plural de 'animal' é:", alternativas: ["animais", "animales", "animals", "animães"], correta: 0, explicacao: "Palavras terminadas em -l trocam esse sufixo por -is no plural." },
        { pergunta: "O plural de 'cidadão' é:", alternativas: ["cidadões", "cidadães", "cidadãs", "cidadãos"], correta: 3, explicacao: "Cidadão segue a regra geral dos terminados em -ão: acrescenta -s (cidadãos), como em irmãos." },
        { pergunta: "Em um contrato, a expressão grafada em conformidade com a concordância é:", alternativas: ["os documento anexos", "os documentos anexos", "os documentos anexo", "o documentos anexos"], correta: 1, explicacao: "Substantivo, artigo e adjetivo devem concordar no plural: os documentos anexos." }
      ]
    },
    {
      id: "f1-a2-por-3",
      titulo: "Bilhete e convite: textos práticos do dia a dia (ortografia: ç, ss, s, z)",
      blocos: [
        { tipo: "paragrafo", texto: "Bilhete e convite são textos práticos: breves, de estrutura fixa e função imediata — avisar ou convocar. Na vida adulta, aparecem em recados de condomínio, avisos de portaria e convites de reunião; sua eficácia depende de clareza e de ortografia correta." },
        { tipo: "titulo", texto: "O bilhete" },
        { tipo: "paragrafo", texto: "O bilhete comunica um fato pontual. Sua estrutura básica reúne três elementos: o destinatário (a quem se dirige), a mensagem (o fato e, quando necessário, o pedido) e a assinatura de quem escreve. A data é recomendável quando o aviso envolve prazos." },
        { tipo: "exemplo", texto: "Bilhete de portaria: 'Sr. Almeida, sua encomenda chegou hoje às 10h30. Retire até as 18h ou autorize a entrega no dia seguinte. Portaria, 12/03.' Destinatário, fato, prazo e assinatura: nenhuma informação dispensável." },
        { tipo: "titulo", texto: "O convite" },
        { tipo: "paragrafo", texto: "O convite convoca pessoas para um evento e responde a quatro perguntas: quem convida, o que ocorrerá, quando e onde. Em versão digital, como e-mail ou mensagem de agenda, esses mesmos campos permanecem obrigatórios; a ausência de qualquer um deles gera dúvidas e ausências." },
        { tipo: "lista", itens: ["ç — representa o som de s: coração, maçã, substituição", "ss — representa o som de s entre vogais: processo, admissão, necessário", "s — representa o som de s no início e no final de palavra: sala, semana, país", "z — representa o som de z: zangado, raiz, feliz"] },
        { tipo: "atencao", texto: "Armadilha comum em textos formais: escrever 'excessão', forma inexistente. O correto é 'exceção', com ç. Da mesma forma, 'análise' se escreve com s, não com z. Em caso de dúvida persistente, o dicionário decide." }
      ],
      atividade: [
        { pergunta: "São elementos indispensáveis de um convite:", alternativas: ["o horário de encerramento e a lista de presentes", "o código de vestimenta e a programação completa", "o preço do estacionamento e o cardápio", "quem convida, o evento, a data, a hora e o local"], correta: 3, explicacao: "Sem convidado identificado, evento definido e data, hora e local, o convite não cumpre sua função." },
        { pergunta: "A estrutura básica de um bilhete reúne:", alternativas: ["capa, sumário e referências", "destinatário, mensagem e assinatura", "título, resumo e conclusão", "anexos, gráficos e tabelas"], correta: 1, explicacao: "Todo bilhete indica a quem se dirige, comunica o fato e identifica quem escreveu." },
        { pergunta: "A grafia correta é:", alternativas: ["excessão", "esceção", "exceção", "exeção"], correta: 2, explicacao: "Exceção escreve-se com ç, como coração e substituição; 'excessão' é erro frequente em textos formais." },
        { pergunta: "Em qual das palavras o som de s aparece representado por SS?", alternativas: ["processo", "raiz", "sala", "coração"], correta: 0, explicacao: "Em processo, o som de s entre vogais é grafado com ss; raiz usa z, sala usa s e coração usa ç." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Qual palavra apresenta encontro vocálico?", alternativas: ["pauta", "prato", "carro", "tabela"], correta: 0, explicacao: "Em pauta (pau-ta), as vogais a + u permanecem juntas na mesma sílaba: ditongo." },
      { pergunta: "A divisão silábica de TRABALHO (tra-bal-ho) mostra que:", alternativas: ["o encontro tr foi eliminado", "o dígrafo lh conserva dois sons distintos", "o dígrafo lh permanece inteiro na mesma sílaba", "lh é um encontro vocálico"], correta: 2, explicacao: "Dígrafos como lh, nh, rr e ss não se separam na divisão silábica, pois representam um som único." },
      { pergunta: "Em um cadastro de endereço, os campos 'tipo de logradouro' e 'Avenida Brasil' ilustram respectivamente substantivos:", alternativas: ["próprio e comum", "comum e próprio", "ambos comuns", "ambos próprios"], correta: 1, explicacao: "'Tipo de logradouro' nomeia a classe (comum); 'Avenida Brasil' identifica uma via específica (próprio)." },
      { pergunta: "O plural de 'pão' e de 'capital' é respectivamente:", alternativas: ["pãos e capitaes", "pães e capitaes", "pões e capitais", "pães e capitais"], correta: 3, explicacao: "Pão muda o ditongo (pães); capital, terminado em -l, troca para -is (capitais)." },
      { pergunta: "A frase de um aviso de condomínio totalmente correta é:", alternativas: ["A quadra será fechada para manutenção.", "A quadra sera fechada para manutenção.", "A quadra será fechada para manutenzão.", "A quadra será fechada para manutenssão."], correta: 0, explicacao: "Manutenção escreve-se com ç, e o futuro 'será' exige acento agudo." },
      { pergunta: "A regra de uso do ç (cê-cedilha) está corretamente formulada em:", alternativas: ["usa-se ç no fim de palavras com som de z", "usa-se ç sempre no lugar de ss", "usa-se ç para representar o som de s, como em coração e maçã", "usa-se ç apenas em nomes próprios"], correta: 2, explicacao: "O ç registra o som de s; a troca de ss por ç ou o uso de ç no lugar de z são erros de grafia." }
    ]
  },
  exameFinal: [
    { pergunta: "O que diferencia dígrafo de encontro consonantal?", alternativas: ["no dígrafo, cada letra conserva o próprio som; no encontro, as letras se fundem", "no dígrafo, duas letras representam um único som; no encontro consonantal, cada consoante mantém o som", "ambos representam sequências de vogais", "não há diferença: os termos são sinônimos"], correta: 1, explicacao: "Em ch, lh, nh, rr e ss o som é único; em pr, tr, bl cada consoante soa separadamente." },
    { pergunta: "A palavra PARAGUAI (pa-ra-guai) apresenta:", alternativas: ["hiato", "encontro consonantal", "dígrafo", "tritongo: três vogais na mesma sílaba"], correta: 3, explicacao: "As três vogais u + a + i permanecem juntas na última sílaba, formando um tritongo." },
    { pergunta: "Em um convite de reunião enviado por e-mail, a informação DISPENSÁVEL é:", alternativas: ["a data e a hora", "o local ou o link de acesso", "a receita do almoço", "o assunto da reunião"], correta: 2, explicacao: "Data, hora, local e assunto são obrigatórios; o cardápio não integra a função do convite." },
    { pergunta: "A frase do relatório escrita em conformidade com a concordância é:", alternativas: ["As decisões foram tomadas pelos diretores.", "As decisões foram tomadas pelo diretores.", "A decisões foram tomadas pelos diretores.", "As decisões foi tomada pelos diretores."], correta: 0, explicacao: "Substantivo, artigo e verbo concordam no plural: as decisões foram tomadas." },
    { pergunta: "A palavra grafada corretamente é:", alternativas: ["análize", "análise", "analize", "analisse"], correta: 1, explicacao: "O dicionário registra análise, com s; as formas com z ou com ss são grafias incorretas." }
  ]
};
