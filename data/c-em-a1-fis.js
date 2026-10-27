window.ColegioConteudo = window.ColegioConteudo || {};

window.ColegioConteudo["em-a1-fis"] = {
  aulas: [
    {
      id: "em-a1-fis-1",
      titulo: "Cinemática: movimento uniforme",
      blocos: [
        { tipo: "paragrafo", texto: "Cinemática descreve o movimento sem se preocupar com suas causas. Começamos por posições, referências e o movimento uniforme (velocidade constante)." },
        { tipo: "titulo", texto: "Conceitos base" },
        { tipo: "lista", itens: ["Referencial: o ponto de vista do observador (movimento é relativo!)", "Deslocamento (Δs): variação de posição, s_final − s_inicial", "Velocidade média: v = Δs/Δt (m/s no SI; 3,6 km/h = 1 m/s)", "Movimento uniforme (MU): velocidade constante, aceleração nula"] },
        { tipo: "titulo", texto: "Equação horária do MU" },
        { tipo: "exemplo", texto: "s = s₀ + v·t. Um carro em x = 100 m com v = 20 m/s: s = 100 + 20t. Em t = 10 s, s = 300 m. Se v < 0 (reto: contrário da origem), a posição diminui." },
        { tipo: "titulo", texto: "Gráficos do MU" },
        { tipo: "lista", itens: ["s × t: reta inclinada (subindo se v > 0, descendo se v < 0); a inclinação é a velocidade", "v × t: reta horizontal (constante); a área sob ela é o deslocamento"] },
        { tipo: "exemplo", texto: "Dois trens, um em s₀ = 0 com v = 30 m/s e outro em s₀ = 200 m com v = 10 m/s: quando se alcançam? 30t = 200 + 10t → t = 10 s, em s = 300 m." },
        { tipo: "dica", texto: "Para converter: km/h → m/s divide por 3,6; m/s → km/h multiplica por 3,6 (72 km/h = 20 m/s)." },
        { tipo: "atencao", texto: "Velocidade média usa DESLOCAMENTO total ÷ tempo total, não média simples das velocidades! Ida 60 km/h e volta 60 km/h com mesma distância: média é 60, mas com tempos diferentes não é média aritmética." }
      ],
      atividade: [
        { pergunta: "No MU, a aceleração é...", alternativas: ["nula", "negativa", "constante e não nula", "crescente"], correta: 0, explicacao: "Velocidade constante: a = 0." },
        { pergunta: "72 km/h equivalem a...", alternativas: ["7,2 m/s", "20 m/s", "26 m/s", "200 m/s"], correta: 1, explicacao: "72 ÷ 3,6 = 20." },
        { pergunta: "s = 50 + 10t. A posição em t = 4 s é...", alternativas: ["40 m", "90 m", "100 m", "50 m"], correta: 1, explicacao: "50 + 10(4) = 90 m." },
        { pergunta: "No gráfico v × t do MU, a área sob a reta é...", alternativas: ["nada", "o deslocamento", "a aceleração", "a força"], correta: 1, explicacao: "v × Δt = Δs." }
      ]
    },
    {
      id: "em-a1-fis-2",
      titulo: "Movimento uniformemente variado e Torricelli",
      blocos: [
        { tipo: "paragrafo", texto: "No movimento uniformemente variado (MUV), a aceleração é constante: a velocidade muda igualmente a cada segundo. É o carro acelerando ou freiando." },
        { tipo: "titulo", texto: "As três equações" },
        { tipo: "lista", itens: ["v = v₀ + a·t (velocidade)", "s = s₀ + v₀·t + (a·t²)/2 (posição — Torricelli não! Esta é a de Torricelli em usos comuns... veja abaixo)", "v² = v₀² + 2·a·Δs (Torricelli: sem tempo!)"] },
        { tipo: "exemplo", texto: "Carro de 20 m/s freando com a = −4 m/s²: quando para? 0 = 20 − 4t → t = 5 s. Quanto andou até parar? v² = v₀² + 2aΔs → 0 = 400 − 8Δs → Δs = 50 m." },
        { tipo: "titulo", texto: "Gráficos do MUV" },
        { tipo: "lista", itens: ["v × t: reta inclinada (a = inclinação); área = deslocamento", "s × t: parábola (concavidade = sinal de a)", "a × t: reta horizontal"] },
        { tipo: "titulo", texto: "Classificação" },
        { tipo: "paragrafo", texto: "a > 0 com v > 0: acelerado (v aumenta); a < 0 com v > 0: retardado (v diminui). Sinal de a sozinho não decide: compare com o sinal de v." },
        { tipo: "dica", texto: "Escolha a equação pelo que o problema NÃO dá: tem tempo? Use v = v₀ + at ou s = s₀ + v₀t + at²/2. Sem tempo? Torricelli." },
        { tipo: "atencao", texto: "Cuidado com unidades: a em m/s², v em m/s, t em s. E sinal: freio é a negativa quando v é positiva." }
      ],
      atividade: [
        { pergunta: "v = v₀ + a·t é a equação...", alternativas: ["da velocidade no MUV", "de Torricelli", "da posição", "do MU"], correta: 0, explicacao: "Velocidade em função do tempo." },
        { pergunta: "De 0 a 20 m/s em 4 s: a aceleração é...", alternativas: ["16 m/s²", "80 m/s²", "0,2 m/s²", "5 m/s²"], correta: 3, explicacao: "a = Δv/Δt = 20/4 = 5." },
        { pergunta: "Queda com v₀ = 0 e a = 10 m/s²: velocidade em 3 s é...", alternativas: ["90 m/s", "10 m/s", "3 m/s", "30 m/s"], correta: 3, explicacao: "v = 0 + 10·3 = 30." },
        { pergunta: "Torricelli é útil quando o problema não fornece...", alternativas: ["distância", "velocidade", "tempo", "aceleração"], correta: 2, explicacao: "v² = v₀² + 2aΔs dispensa t." }
      ]
    },
    {
      id: "em-a1-fis-3",
      titulo: "Queda livre e lançamento vertical",
      blocos: [
        { tipo: "paragrafo", texto: "Perto da Terra (sem resistência do ar), todo corpo cai com a MESMA aceleração da gravidade: g ≈ 9,8 m/s² (usamos 10 m/s² nos cálculos). Galileu provou: massa não importa!" },
        { tipo: "titulo", texto: "Queda livre" },
        { tipo: "lista", itens: ["Soltado do repouso: v₀ = 0, a = g", "v = g·t", "h = (g·t²)/2", "v² = 2·g·h (Torricelli da queda)"] },
        { tipo: "exemplo", texto: "Pedra solta de 45 m (g = 10): tempo até o chão: 45 = 5t² → t = 3 s. Velocidade ao chegar: v = 10 × 3 = 30 m/s (ou v² = 2 × 10 × 45 = 900)." },
        { tipo: "titulo", texto: "Lançamento vertical para cima" },
        { tipo: "paragrafo", texto: "Sobe com desaceleração (a = −g), para no ponto mais alto (v = 0) e desce acelerando. Tempo de subida: t = v₀/g. Altura máxima: h = v₀²/2g. Tempo total de voo: 2 × t_subida (mesma altura de partida)." },
        { tipo: "exemplo", texto: "Bola lançada a 20 m/s para cima (g = 10): sobe por 2 s até 20 m; volta em 2 s (total 4 s), chegando ao chão com 20 m/s (para baixo) — simetria do movimento." },
        { tipo: "dica", texto: "No ponto mais alto do lançamento vertical: v = 0, mas a ACELERAÇÃO continua g (não zero!). Nunca diga que 'no topo a aceleração é zero'." },
        { tipo: "atencao", texto: "Sem resistência do ar, a pedra e a pena caem juntas (comprovado na Lua, Apollo 15). Com ar, massa e forma importam — mas isso é aerodinâmica, não gravidade." }
      ],
      atividade: [
        { pergunta: "Na queda livre (sem ar), a aceleração depende da...", alternativas: ["nada: é g para todos", "altura só", "forma", "massa"], correta: 0, explicacao: "Galileu: g é igual para todos." },
        { pergunta: "Corpo solto de 80 m (g = 10): tempo de queda...", alternativas: ["16 s", "2 s", "4 s", "8 s"], correta: 2, explicacao: "80 = 5t² → t² = 16 → t = 4 s." },
        { pergunta: "No ponto mais alto do lançamento, a velocidade é...", alternativas: ["máxima", "zero", "negativa", "g"], correta: 1, explicacao: "Inverte o sentido: v = 0 ali." },
        { pergunta: "Lançado a 30 m/s para cima (g = 10): altura máxima...", alternativas: ["90 m", "15 m", "30 m", "45 m"], correta: 3, explicacao: "h = v₀²/2g = 900/20 = 45 m." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "No MU, o gráfico s × t é...", alternativas: ["parábola", "hipérbole", "horizontal", "reta inclinada"], correta: 3, explicacao: "Posição cresce linearmente." },
      { pergunta: "54 km/h em m/s é...", alternativas: ["5,4", "150", "18", "15"], correta: 3, explicacao: "54 ÷ 3,6 = 15 m/s." },
      { pergunta: "De 10 m/s a 30 m/s em 5 s: a aceleração média é...", alternativas: ["4 m/s²", "20 m/s²", "8 m/s²", "2 m/s²"], correta: 0, explicacao: "Δv/Δt = 20/5 = 4." },
      { pergunta: "Freando de 20 m/s com a = −5 m/s², o carro para em...", alternativas: ["10 s", "4 s", "2 s", "5 s"], correta: 1, explicacao: "0 = 20 − 5t → t = 4 s." },
      { pergunta: "Corpo solto de 20 m (g = 10): velocidade ao chão...", alternativas: ["20 m/s", "40 m/s", "5 m/s", "10 m/s"], correta: 0, explicacao: "v² = 2·10·20 = 400 → v = 20." },
      { pergunta: "No topo do lançamento vertical...", alternativas: ["v = g e a = 0", "v = 0 e a = 0", "v máx", "v = 0 e a = g"], correta: 3, explicacao: "Para de subir, mas continua acelerando para baixo." }
    ]
  },
  exameFinal: [
    { pergunta: "Movimento relativo significa que...", alternativas: ["só a Terra move", "velocidade é absoluta", "o movimento depende do referencial", "nada se move"], correta: 2, explicacao: "Passageiro de trem: está parado em relação ao trem, movendo em relação ao chão." },
    { pergunta: "s = s₀ + v₀t + at²/2 é a equação...", alternativas: ["da posição no MUV", "da velocidade", "de Torricelli", "do MU"], correta: 0, explicacao: "Posição em função do tempo." },
    { pergunta: "Área sob o gráfico v × t vale...", alternativas: ["força", "aceleração", "deslocamento", "massa"], correta: 2, explicacao: "v·Δt = Δs." },
    { pergunta: "Com resistência do ar desprezível, moeda e pena soltas juntas...", alternativas: ["chegam juntas", "nunca caem", "a moeda primeiro", "a pena primeiro"], correta: 0, explicacao: "Mesma g para ambos." },
    { pergunta: "Lançado para cima com v₀, o tempo total de voo é...", alternativas: ["v₀/g", "2v₀/g", "g/v₀", "v₀²/2g"], correta: 1, explicacao: "Subida = v₀/g; ida e volta = 2v₀/g." }
  ]
};
