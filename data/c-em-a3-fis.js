window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a3-fis"] = {
  aulas: [
    {
      id: "em-a3-fis-1",
      titulo: "Eletrostática: cargas, eletrização e Coulomb",
      blocos: [
        { tipo: "paragrafo", texto: "A eletricidade estática estuda cargas em repouso: por que o balão gruda no teto e por que dá choque na maçaneta." },
        { tipo: "titulo", texto: "Cargas elétricas" },
        { tipo: "lista", itens: ["Carga elementar: e = 1,6 × 10⁻¹⁹ C (próton +, elétron −)", "Corpos carregados: excesso ou falta de elétrons (prótons não se movem!)", "Princípios: cargas iguais se repelem, opostas se atraem; a carga total se conserva"] },
        { tipo: "titulo", texto: "Processos de eletrização" },
        { tipo: "lista", itens: ["Atrito: transferência de elétrons entre materiais (peteca no cabelo)", "Contato: tocar um corpo condutor carregado transfere a carga (distribui)", "Indução: aproximar sem tocar — separa cargas e, com aterramento, o corpo fica carregado SEM contato direto com a fonte"] },
        { tipo: "titulo", texto: "Lei de Coulomb" },
        { tipo: "exemplo", texto: "F = k·|q₁·q₂|/d², com k ≈ 9 × 10⁹ N·m²/C². Dobrar a distância divide a força por 4 (quadrado da distância!). Duas cargas de 1 μC a 1 m: F = 9 × 10⁹ × (10⁻¹²)/1 = 9 mN." },
        { tipo: "paragrafo", texto: "Campo elétrico (E = F/q): região onde uma carga sente força; direção da força numa carga de prova positiva. Vetores saem das cargas positivas e entram nas negativas. Condutores: cargas livres; isolantes: presas." },
        { tipo: "dica", texto: "O 'poder das pontas' (para-raios) e a gaiola de Faraday (interior de condutor sem campo) são aplicações clássicas." },
        { tipo: "atencao", texto: "Eletrizar por atrito não 'cria' carga: transfere. O pente carregado negativamente deixa o cabelo positivo (mesma soma total)." }
      ],
      atividade: [
        { pergunta: "Duplicar a distância entre duas cargas divide a força por...", alternativas: ["8", "4", "2", "16"], correta: 1, explicacao: "F ∝ 1/d²." },
        { pergunta: "Eletrização por indução NÃO exige...", alternativas: ["separação de cargas", "contato com a fonte", "aterramento", "aproximação"], correta: 1, explicacao: "Aproximação + aterramento bastam." },
        { pergunta: "Cargas de sinais opostos se...", alternativas: ["anulam a massa", "atraem", "ignoram", "repelem"], correta: 1, explicacao: "Princípio básico da eletrostática." },
        { pergunta: "O campo elétrico aponta...", alternativas: ["para as cargas positivas", "nada", "sempre para baixo", "saindo das positivas, entrando nas negativas"], correta: 3, explicacao: "Convenção da força em carga positiva de prova." }
      ]
    },
    {
      id: "em-a3-fis-2",
      titulo: "Eletrodinâmica: Ohm, potência e consumo",
      blocos: [
        { tipo: "paragrafo", texto: "Com corrente circulando, entra a Eletrodinâmica: corrente (i), tensão (U), resistência (R) e a Lei de Ohm que as amarra." },
        { tipo: "titulo", texto: "Grandezas e Lei de Ohm" },
        { tipo: "lista", itens: ["Corrente: i = Q/t (cargas por segundo; Ampères)", "Tensão: 'pressão' elétrica (Volts)", "Resistência: oposição ao fluxo (Ohms)", "Lei de Ohm: U = R·i (para condutores ôhmicos)", "Resistores em série: soma; em paralelo: 1/R = 1/R₁ + 1/R₂ (+...); em paralelo a resistência cai!"] },
        { tipo: "exemplo", texto: "Chuveiro de 5.500 W em 220 V: i = P/U = 25 A — por isso a fiação precisa ser grossa e disjuntor dedicado!" },
        { tipo: "titulo", texto: "Potência e energia elétrica" },
        { tipo: "lista", itens: ["P = U·i = R·i² = U²/R (Watts)", "Consumo em kWh: E = P(kW) × t(h)", "Sua conta de luz: 1 kWh custa ~R$ 0,90 — chuveiro 5,5 kW por 1 h/dia no mês = 165 kWh ≈ R$ 150!"] },
        { tipo: "exemplo", texto: "Lâmpada de 60 W ligada 5 h/dia por 30 dias: 60 × 5 × 30 = 9.000 Wh = 9 kWh ≈ R$ 8/mês. Trocar por LED de 9 W: 1,35 kWh — 85% de economia." },
        { tipo: "dica", texto: "Curto-circuito: R ≈ 0 → pela lei, i explode (U = Ri com R minúsculo exige i gigantesco): fios derretem, incêndio. Disjuntor interrompe." },
        { tipo: "atencao", texto: "Série divide a tensão; paralelo divide a corrente e mantém a tensão igual — por isso as tomadas da casa são em PARALELO: cada aparelho recebe 127 V ou 220 V completo." }
      ],
      atividade: [
        { pergunta: "U = R·i é a...", alternativas: ["lei de Ohm", "1ª lei de Kirchhoff", "lei de Newton", "lei de Coulomb"], correta: 0, explicacao: "Tensão = resistência × corrente." },
        { pergunta: "Lâmpada de 100 W em 220 V: corrente de...", alternativas: ["0,45 A", "4,5 A", "2,2 A", "22 A"], correta: 0, explicacao: "i = P/U = 100/220 ≈ 0,45 A." },
        { pergunta: "Em um circuito em PARALELO, a resistência equivalente é...", alternativas: ["sempre igual", "a soma", "menor que a menor", "maior que a maior"], correta: 2, explicacao: "Caminhos extras facilitam a corrente." },
        { pergunta: "Aparelho de 2 kW por 3 h consome...", alternativas: ["2 kWh", "600 kWh", "0,66 kWh", "6 kWh"], correta: 3, explicacao: "E = 2 × 3 = 6 kWh." }
      ]
    },
    {
      id: "em-a3-fis-3",
      titulo: "Ondulatória e óptica",
      blocos: [
        { tipo: "paragrafo", texto: "Som e luz são ondas — mas de tipos diferentes. Ondas transportam energia SEM transportar matéria." },
        { tipo: "titulo", texto: "Ondas" },
        { tipo: "lista", itens: ["Elementos: comprimento λ, frequência f, amplitude A, período T = 1/f", "Equação fundamental: v = λ·f (velocidade = comprimento × frequência)", "Ondas mecânicas (som, mar): precisam de meio; eletromagnéticas (luz, rádio): viajam no vácuo (c = 3×10⁸ m/s)", "Reflexão, refração (mudança de meio) e difração (contornar obstáculos)"] },
        { tipo: "titulo", texto: "Som" },
        { tipo: "lista", itens: ["Onda mecânica longitudinal (~340 m/s no ar)", "Frequência = altura do som (20 Hz a 20.000 Hz audíveis; ultrassom acima)", "Amplitude = intensidade (decibéis); 85 dB contínuos danificam a audição", "Efeito Doppler: ambulância se aproximando soa mais aguda"] },
        { tipo: "titulo", texto: "Luz: reflexão e refração" },
        { tipo: "exemplo", texto: "Espelhos planos: imagem virtual, simétrica, do mesmo tamanho. Espelhos esféricos (côncavo: farol, telescópio; convexo: retrovisor 'objetos são mais próximos do que aparentam'). Refração: luz 'dobra' ao mudar de meio — o canudo 'quebra' na água; índice de refração n = c/v (água ≈ 1,33)." },
        { tipo: "paragrafo", texto: "Lentes: convexas (convergentes, hipermetropia) e côncavas (divergentes, miopia). A luz branca se dispersa em cores (prisma, arco-íris): cada cor tem frequência própria." },
        { tipo: "dica", texto: "Arco-íris = refração + reflexão interna + dispersão nas gotas de água. E o céu azul = espalhamento (Rayleigh): o azul espalha mais que o vermelho." },
        { tipo: "atencao", texto: "A frequência da onda NÃO muda ao mudar de meio (a fonte é a mesma): mudam a velocidade e o comprimento. É a pegadinha clássica da refração." }
      ],
      atividade: [
        { pergunta: "Ondas eletromagnéticas...", alternativas: ["viajam no vácuo", "são só sonoras", "precisam de ar", "não existem"], correta: 0, explicacao: "Luz viaja no vácuo: 3×10⁸ m/s." },
        { pergunta: "v = λ·f relaciona...", alternativas: ["calor e temperatura", "tensão e corrente", "força e massa", "velocidade, comprimento e frequência"], correta: 3, explicacao: "Equação fundamental da ondulatória." },
        { pergunta: "Ultrassom tem frequência...", alternativas: ["abaixo de 20 Hz", "acima de 20 kHz", "audível", "zero"], correta: 1, explicacao: "Bats, sonar e ecografia." },
        { pergunta: "Na refração, o que muda ao entrar num novo meio?", alternativas: ["nada", "velocidade e comprimento", "a cor sempre", "frequência"], correta: 1, explicacao: "Frequência permanece; v e λ mudam." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Lei de Coulomb: F ∝ ...", alternativas: ["1/d²", "d", "1/d", "d²"], correta: 0, explicacao: "Inversamente proporcional ao quadrado." },
      { pergunta: "Dois resistores iguais em paralelo: R equivale a...", alternativas: ["2R", "R²", "R", "R/2"], correta: 3, explicacao: "1/Req = 1/R + 1/R → Req = R/2." },
      { pergunta: "P = U·i serve para calcular...", alternativas: ["calor específico", "trabalho mecânico", "potência elétrica", "força"], correta: 2, explicacao: "Watts = Volts × Ampères." },
      { pergunta: "O som é onda...", alternativas: ["eletromagnética transversal", "mecânica longitudinal", "de luz", "sem meio"], correta: 1, explicacao: "Compressões do ar." },
      { pergunta: "O efeito Doppler percebe-se...", alternativas: ["no fusível", "na pilha", "no espelho plano", "na sirene que passa"], correta: 3, explicacao: "Frequência muda com o movimento relativo." },
      { pergunta: "Espelho convexo usado em retrovisores amplia...", alternativas: ["o campo de visão", "a imagem", "o brilho", "a velocidade"], correta: 0, explicacao: "Imagens menores: mais área vista." }
    ]
  },
  exameFinal: [
    { pergunta: "A conservação da carga diz que...", alternativas: ["prótons se movem", "carga se cria", "a soma total não muda", "elétrons somem"], correta: 2, explicacao: "Só transfere de um corpo a outro." },
    { pergunta: "Curto-circuito ocorre com resistência...", alternativas: ["alta", "infinita", "negativa", "quase nula"], correta: 3, explicacao: "Corrente dispara pelo caminho fácil." },
    { pergunta: "1 kWh equivale a energia de...", alternativas: ["1 W sempre", "1.000 W por 1 h", "1.000 J", "1 W por 1.000 h"], correta: 1, explicacao: "Unidade comercial de energia." },
    { pergunta: "No vácuo, a luz viaja a...", alternativas: ["0", "3×10⁸ m/s", "9,8 m/s²", "340 m/s"], correta: 1, explicacao: "Velocidade máxima do Universo." },
    { pergunta: "Miopia é corrigida com lente...", alternativas: ["divergente", "espelho", "convergente", "plana"], correta: 0, explicacao: "Imagem se forma antes da retina: diverge." }
  ]
};
