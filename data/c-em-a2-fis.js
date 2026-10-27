window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a2-fis"] = {
  aulas: [
    {
      id: "em-a2-fis-1",
      titulo: "Leis de Newton",
      blocos: [
        { tipo: "paragrafo", texto: "A Dinâmica explica AS CAUSAS do movimento: forças. Newton (1687) formulou três leis que regem tudo — de uma bola de futebol a planetas." },
        { tipo: "titulo", texto: "As três leis" },
        { tipo: "lista", itens: ["1ª (Inércia): sem força resultante, o corpo fica em repouso ou em MU. A inércia é proporcional à massa", "2ª (Fundamental): F = m·a — a força resultante produz aceleração na mesma direção e sentido", "3ª (Ação e reação): a toda força corresponde outra de mesma intensidade, direção oposta, em CORPOS DIFERENTES"] },
        { tipo: "exemplo", texto: "Empurrando um carrinho de 4 kg com 12 N (sem atrito): a = F/m = 3 m/s². Na 3ª lei: você empurra o carrinho, o carrinho empurra você de volta com 12 N (por isso empurrar paredes dói)." },
        { tipo: "titulo", texto: "Forças cotidianas" },
        { tipo: "lista", itens: ["Peso: P = m·g (para baixo; NÃO é a massa!)", "Normal: reação da superfície, perpendicular a ela", "Atrito: f = μ·N, contrário ao movimento (estático > cinético)", "Tensão: na corda, puxando ao longo dela"] },
        { tipo: "paragrafo", texto: "Situações clássicas: plano inclinado (decompor o peso em Px = mg·sen θ e Py = mg·cos θ), elevador (balança marca mais na subida acelerada, menos na descida acelerada) e pêndulo." },
        { tipo: "dica", texto: "Passo a passo de qualquer problema: 1) desenhe o corpo isolado com TODAS as forças; 2) escolha eixos (um na direção do movimento); 3) aplique F = ma em cada eixo." },
        { tipo: "atencao", texto: "Ação e reação NÃO se cancelam: agem em corpos DIFERENTES. Cavalo puxa carro, carro puxa cavalo — mas o carro anda porque a resultante sobre ELE não é nula." }
      ],
      atividade: [
        { pergunta: "F = m·a é a lei...", alternativas: ["de Coulomb", "fundamental (2ª)", "da ação e reação", "da inércia"], correta: 1, explicacao: "Força resultante = massa × aceleração." },
        { pergunta: "O peso de um corpo de 5 kg (g = 10 m/s²) é...", alternativas: ["50 N", "0,5 N", "10 N", "5 N"], correta: 0, explicacao: "P = m·g = 50 N (não confunda com a massa!)." },
        { pergunta: "Num elevador subindo acelerado, a balança marca...", alternativas: ["zero", "mais", "menos", "o peso normal"], correta: 1, explicacao: "Normal > peso: sensação de mais pesado." },
        { pergunta: "Ação e reação agem em...", alternativas: ["apenas planos", "o mesmo corpo", "corpos sempre em contato", "corpos diferentes"], correta: 3, explicacao: "Por isso não se cancelam." }
      ]
    },
    {
      id: "em-a2-fis-2",
      titulo: "Trabalho, potência e energia",
      blocos: [
        { tipo: "paragrafo", texto: "Trabalho (τ) é a energia transferida por uma força: τ = F·d·cos θ (Joules). Potência é a rapidez de fazer trabalho: P = τ/t (Watts). E energia é a capacidade de fazer trabalho." },
        { tipo: "titulo", texto: "Energias" },
        { tipo: "lista", itens: ["Cinética: Ec = m·v²/2 (energia do movimento)", "Potencial gravitacional: Ep = m·g·h (energia da altura)", "Potencial elástica: Epel = k·x²/2 (mola comprimida/esticada)", "Energia mecânica: Em = Ec + Ep"] },
        { tipo: "titulo", texto: "Conservação da energia mecânica" },
        { tipo: "exemplo", texto: "Pedra de 2 kg solta de 20 m (g = 10): no início, só potencial (Ep = 400 J). No chão, tudo virou cinética: v = √(2·400/2) = 20 m/s. Sem atrito, Em se conserva!" },
        { tipo: "paragrafo", texto: "Com atrito, energia mecânica 'sai' como calor: τ_atrito = −f·d. O Teorema da Energia-Work: τ_resultante = ΔEc. O corredor gasta energia contra o atrito e para acelerar: P = τ/t conta o 'custo' em Watts (1 W = 1 J/s; motor de 1 CV ≈ 736 W)." },
        { tipo: "exemplo", texto: "Máquina de 2.000 W trabalhando por 10 s: τ = P·t = 20.000 J. Sua conta de luz usa kWh: 1 kWh = 3.6 MJ — energia de um chuveiro 5.500 W ligado por 10 minutos." },
        { tipo: "dica", texto: "Trabalho da GRAVIDADE não depende do caminho (só da altura: mgh) — força conservadora. O atrito depende do caminho — força dissipativa." },
        { tipo: "atencao", texto: "Força perpendicular ao movimento não faz trabalho (cos 90° = 0): carregar mochila em plano horizontal gasta ENERGIA, mas o trabalho da força do ombro na mochila (vertical) sobre ela é zero." }
      ],
      atividade: [
        { pergunta: "Ec de um corpo de 4 kg a 3 m/s é...", alternativas: ["18 J", "12 J", "6 J", "36 J"], correta: 0, explicacao: "Ec = 4·9/2 = 18 J." },
        { pergunta: "Ep gravitacional de 2 kg a 5 m (g = 10):", alternativas: ["50 J", "20 J", "10 J", "100 J"], correta: 3, explicacao: "Ep = 2·10·5 = 100 J." },
        { pergunta: "Motor de 1.000 W por 5 s realiza trabalho de...", alternativas: ["200 J", "5.000 J", "5 kJ", "1.005 J"], correta: 1, explicacao: "τ = P·t = 5.000 J." },
        { pergunta: "Energia mecânica se conserva quando...", alternativas: ["há atrito forte", "o corpo para", "só forças conservadoras agem", "sempre"], correta: 2, explicacao: "Sem dissipação, Em é constante." }
      ]
    },
    {
      id: "em-a2-fis-3",
      titulo: "Impulso e quantidade de movimento",
      blocos: [
        { tipo: "paragrafo", texto: "Quantidade de movimento (momento linear): Q = m·v (kg·m/s). Impulso: I = F·Δt (quando F é constante) — e o Teorema do Impulso diz I = ΔQ." },
        { tipo: "titulo", texto: "O teorema do impulso" },
        { tipo: "exemplo", texto: "Bola de 0,5 kg batendo numa raquete: entra com 10 m/s, sai com 20 m/s no sentido oposto. ΔQ = 0,5·(−20) − 0,5·10 = −15 kg·m/s. Se o contato durou 0,05 s, a força média foi 300 N — grande, porque Δt é pequeno!" },
        { tipo: "paragrafo", texto: "Por que isso importa? Airbags e capacetes AUMENTAM o Δt da parada, reduzindo a força sobre o corpo (mesmo ΔQ). Pular com os joelhos dobrados salva os ossos pela mesma razão." },
        { tipo: "titulo", texto: "Conservação da quantidade de movimento" },
        { tipo: "lista", itens: ["Em sistemas isolados (sem força externa), Q total se conserva", "Colisões elásticas: conservam Q e energia cinética (bolinhas de sinuca)", "Colisões inelásticas: conservam Q, perdem Ec (batida de carros)", "Colisão perfeitamente inelástica: corpos se juntam e seguem juntos"] },
        { tipo: "exemplo", texto: "Carro A (1.000 kg, 20 m/s) bate na traseira do carro B parado (1.500 kg), juntos após a batida: 1.000·20 = (2.500)·v → v = 8 m/s. Energia 'perdida' virou amassados e calor." },
        { tipo: "dica", texto: "Cohetes funcionam por conservação de Q: ejetam gás para trás (com Q negativo), ganham Q para frente. Nada de 'empurrar no ar'!" },
        { tipo: "atencao", texto: "Conservação de Q vale mesmo com energia se dissipando — a batida inelástica conserva momento. Quantidade de movimento é a lei mais robusta da mecânica." }
      ],
      atividade: [
        { pergunta: "Q de um carro de 1.000 kg a 30 m/s vale...", alternativas: ["0,03", "3.000 kg·m/s", "33 kg·m/s", "30.000 kg·m/s"], correta: 3, explicacao: "Q = m·v = 30.000." },
        { pergunta: "Airbag protege porque...", alternativas: ["aumenta a força", "cancela a massa", "aumenta o tempo de contato, reduzindo a força", "reduz o impulso"], correta: 2, explicacao: "Mesmo ΔQ com Δt maior: F menor." },
        { pergunta: "Numa colisão perfeitamente inelástica, os corpos...", alternativas: ["param sempre", "se juntam", "quicam", "explodem"], correta: 1, explicacao: "Seguem juntos após a batida." },
        { pergunta: "Q total de um sistema isolado...", alternativas: ["é sempre zero", "se conserva", "aumenta", "diminui"], correta: 1, explicacao: "Sem forças externas: constante." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Corpo de 8 kg sob força resultante de 24 N acelera...", alternativas: ["0,33 m/s²", "3 m/s²", "32 m/s²", "192 m/s²"], correta: 1, explicacao: "a = F/m = 3." },
      { pergunta: "A força de atrito vale...", alternativas: ["m·v", "F·d", "m·g", "μ·N"], correta: 3, explicacao: "Proporcional à normal e ao coeficiente." },
      { pergunta: "Trabalho de 100 N por 10 m (mesma direção):", alternativas: ["1.000 J", "0", "10 J", "110 J"], correta: 0, explicacao: "τ = F·d = 1.000 J." },
      { pergunta: "Em queda livre, a energia potencial...", alternativas: ["é nula sempre", "diminui, virando cinética", "aumenta", "é constante"], correta: 1, explicacao: "Altura cai: Ep → Ec." },
      { pergunta: "Impulso tem unidade de...", alternativas: ["Watt", "Joule", "Newton", "N·s (= kg·m/s)"], correta: 3, explicacao: "F·Δt = ΔQ." },
      { pergunta: "Colisão elástica conserva...", alternativas: ["Q e Ec", "só Ec", "só Q", "nada"], correta: 0, explicacao: "Definição de colisão elástica." }
    ]
  },
  exameFinal: [
    { pergunta: "A 1ª lei de Newton explica o cinto de segurança pelo conceito de...", alternativas: ["atrito", "inércia", "potência", "gravidade"], correta: 1, explicacao: "O corpo tende a continuar o movimento." },
    { pergunta: "No plano inclinado, a componente do peso paralela ao plano vale...", alternativas: ["zero", "mg·sen θ", "mg·cos θ", "mg"], correta: 1, explicacao: "É ela que 'puxa' o bloco para baixo do plano." },
    { pergunta: "1 CV equivale a cerca de...", alternativas: ["100 W", "1 W", "736 W", "10 W"], correta: 2, explicacao: "Cavalo-vapor, unidade de motores." },
    { pergunta: "A energia mecânica de um sistema com atrito...", alternativas: ["dobra", "diminui (vira calor)", "aumenta", "é constante"], correta: 1, explicacao: "Dissipação térmica." },
    { pergunta: "Recuo de arma e colete que cede são exemplos de...", alternativas: ["Pitágoras", "gravidade", "potencial elástico", "3ª lei e impulso"], correta: 3, explicacao: "Ação-reação e aumento de Δt." }
  ]
};
