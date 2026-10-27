window.GuiaConteudo = window.GuiaConteudo || {};

window.GuiaConteudo["f1-a1-mat"] = {
  aulas: [
    {
      id: "f1-a1-mat-1",
      titulo: "Números até 20: contagem e comparação",
      blocos: [
        { tipo: "paragrafo", texto: "Os números servem para contar tudo: brinquedos, dedos, bolachas do lanche. Nesta aula vamos contar até 20 e aprender a dizer qual número é maior ou menor." },
        { tipo: "titulo", texto: "Contando de 1 a 20" },
        { tipo: "lista", itens: ["1, 2, 3, 4, 5", "6, 7, 8, 9, 10", "11, 12, 13, 14, 15", "16, 17, 18, 19, 20"] },
        { tipo: "titulo", texto: "Antecessor e sucessor" },
        { tipo: "paragrafo", texto: "O antecessor é o número que vem antes na fila. O sucessor é o que vem depois. Na fila dos números, o 4 está entre o 3 (antecessor) e o 5 (sucessor)." },
        { tipo: "exemplo", texto: "Antecessor de 10 é o 9. Sucessor de 10 é o 11. Antecessor de 1 não existe (o 1 é o primeiro da fila!)." },
        { tipo: "titulo", texto: "Maior e menor" },
        { tipo: "paragrafo", texto: "Para comparar, usamos os sinais: > (maior que), < (menor que) e = (igual). O bico do sinal sempre aponta para o número menor, como uma boca aberta que quer comer o maior." },
        { tipo: "dica", texto: "Para descobrir qual número é maior, conte quantos objetos cada grupo tem. O grupo com mais objetos tem o número maior." }
      ],
      atividade: [
        { pergunta: "Qual é o sucessor do número 7?", alternativas: ["7", "6", "8", "9"], correta: 2, explicacao: "O sucessor vem depois: 7, 8. O sucessor de 7 é 8." },
        { pergunta: "Qual número é MAIOR?", alternativas: ["12", "3", "15", "9"], correta: 2, explicacao: "Na contagem, 15 vem depois de 12, 9 e 3, então é o maior." },
        { pergunta: "O que completa: 5 ___ 6?", alternativas: ["= (igual)", "> (maior que)", "< (menor que)", "+ (mais)"], correta: 2, explicacao: "5 é menor que 6, então usamos <." },
        { pergunta: "Qual é o antecessor do número 13?", alternativas: ["12", "14", "13", "11"], correta: 0, explicacao: "O antecessor vem antes: 12 vem antes de 13." }
      ]
    },
    {
      id: "f1-a1-mat-2",
      titulo: "Dezenas e unidades: números até 99",
      blocos: [
        { tipo: "paragrafo", texto: "Os números a partir de 10 são formados por pacotes de 10 chamados dezenas e por unidades soltinhas." },
        { tipo: "titulo", texto: "O pacote de 10" },
        { tipo: "paragrafo", texto: "Uma dezena é um pacote com 10 unidades. Se você tem 10 lápis, pode juntá-los em 1 pacote de dezena. Se tem 23 lápis, são 2 pacotes de 10 e mais 3 soltos." },
        { tipo: "exemplo", texto: "O número 34 tem 3 dezenas e 4 unidades. Isso é 3 × 10 + 4 = 34. O número 40 tem 4 dezenas e 0 unidades." },
        { tipo: "lista", itens: ["20 = 2 dezenas", "35 = 3 dezenas e 5 unidades", "57 = 5 dezenas e 7 unidades", "90 = 9 dezenas"] },
        { tipo: "titulo", texto: "Comparando números grandes" },
        { tipo: "paragrafo", texto: "Para saber qual número é maior, primeiro olhe as dezenas. Quem tem mais dezenas é maior. Se as dezenas forem iguais, olhe as unidades." },
        { tipo: "atencao", texto: "Cuidado: 19 é maior que 21? NÃO! 19 tem 1 dezena e 21 tem 2 dezenas. Mais dezenas sempre ganha, mesmo que 19 pareça 'grande'." }
      ],
      atividade: [
        { pergunta: "Quantas dezenas e unidades tem o número 47?", alternativas: ["7 dezenas e 4 unidades", "4 dezenas e 47 unidades", "4 dezenas e 7 unidades", "47 dezenas"], correta: 2, explicacao: "47 = 4 pacotes de 10 e 7 soltinhas: 4 dezenas e 7 unidades." },
        { pergunta: "Qual número tem 6 dezenas e 2 unidades?", alternativas: ["26", "602", "62", "68"], correta: 2, explicacao: "6 dezenas (60) + 2 unidades = 62." },
        { pergunta: "Qual número é MAIOR: 38 ou 41?", alternativas: ["são iguais", "41", "38", "não dá para saber"], correta: 1, explicacao: "41 tem 4 dezenas e 38 tem só 3. Mais dezenas, maior o número." },
        { pergunta: "Qual é o número formado por 2 dezenas e 9 unidades?", alternativas: ["29", "92", "27", "209"], correta: 0, explicacao: "2 dezenas (20) + 9 unidades = 29." }
      ]
    },
    {
      id: "f1-a1-mat-3",
      titulo: "Adição e subtração sem reagrupamento",
      blocos: [
        { tipo: "paragrafo", texto: "Adicionar é juntar. Subtrair é tirar. São as duas operações que mais usamos no dia a dia: contar figurinhas e dividir balas." },
        { tipo: "titulo", texto: "Adição (juntar)" },
        { tipo: "paragrafo", texto: "O sinal de adição é +. O resultado se chama total ou soma. Se você tem 12 figurinhas e ganha 5, junte tudo: 12 + 5 = 17 figurinhas." },
        { tipo: "exemplo", texto: "34 + 5: primeiro some as unidades (4 + 5 = 9) e mantenha as dezenas (3). Resultado: 39." },
        { tipo: "titulo", texto: "Subtração (tirar)" },
        { tipo: "paragrafo", texto: "O sinal é −. O resultado se chama diferença ou resto. Se você tem 18 balas e come 3, sobram: 18 − 3 = 15 balas." },
        { tipo: "exemplo", texto: "27 − 4: subtraia as unidades (7 − 4 = 3) e mantenha as dezenas (2). Resultado: 23." },
        { tipo: "dica", texto: "Na adição, a ordem não importa: 3 + 5 é igual a 5 + 3. Já na subtração a ordem importa: 5 − 3 não é igual a 3 − 5!" },
        { tipo: "atencao", texto: "Só alinhe as unidades com as unidades e as dezenas com as dezenas quando escrever a conta no caderno." }
      ],
      atividade: [
        { pergunta: "Quanto é 14 + 3?", alternativas: ["27", "16", "18", "17"], correta: 3, explicacao: "4 + 3 = 7 unidades, e a dezena 1 fica: resultado 17." },
        { pergunta: "Quanto é 19 − 6?", alternativas: ["13", "12", "25", "14"], correta: 0, explicacao: "9 − 6 = 3, dezena 1 fica: resultado 13." },
        { pergunta: "Maria tinha 25 adesivos e ganhou 4. Quantos ela tem agora?", alternativas: ["28", "30", "21", "29"], correta: 3, explicacao: "Ganhou, então soma: 25 + 4 = 29." },
        { pergunta: "Havia 36 pássaros no galho e 5 voaram. Quantos ficaram?", alternativas: ["32", "41", "31", "30"], correta: 2, explicacao: "Voaram, então subtrai: 36 − 5 = 31." }
      ]
    }
  ],
  prova: {
    questoes: [
      { pergunta: "Qual é o antecessor do número 20?", alternativas: ["21", "18", "19", "22"], correta: 2, explicacao: "O antecessor vem antes: 19." },
      { pergunta: "Quanto é 9 < 12? Essa comparação está...", alternativas: ["certa, porque 9 é maior", "certa, porque 9 é menor que 12", "errada, porque 9 é maior", "errada, são iguais"], correta: 1, explicacao: "9 vem antes de 12 na contagem, então 9 < 12 está certa." },
      { pergunta: "Quantas dezenas tem o número 70?", alternativas: ["0", "17", "70", "7"], correta: 3, explicacao: "70 é 7 pacotes de 10: 7 dezenas." },
      { pergunta: "Qual número tem 3 dezenas e 8 unidades?", alternativas: ["308", "35", "83", "38"], correta: 3, explicacao: "3 dezenas (30) + 8 unidades = 38." },
      { pergunta: "Quanto é 45 + 4?", alternativas: ["49", "41", "48", "85"], correta: 0, explicacao: "5 + 4 = 9; dezena 4 fica: 49." },
      { pergunta: "Quanto é 28 − 5?", alternativas: ["23", "22", "24", "33"], correta: 0, explicacao: "8 − 5 = 3; dezena 2 fica: 23." }
    ]
  },
  exameFinal: [
    { pergunta: "O sucessor de 39 é...", alternativas: ["38", "40", "41", "30"], correta: 1, explicacao: "Depois de 39 vem 40 (vira 1 dezena a mais)." },
    { pergunta: "Qual é o maior número?", alternativas: ["28", "45", "41", "39"], correta: 1, explicacao: "45 tem 4 dezenas e 5 unidades; é o maior do grupo." },
    { pergunta: "5 dezenas e 3 unidades formam o número...", alternativas: ["58", "503", "53", "35"], correta: 2, explicacao: "5 dezenas = 50, mais 3 unidades = 53." },
    { pergunta: "Numa festa havia 30 doces; 8 foram comidos. Quantos sobraram?", alternativas: ["38", "23", "20", "22"], correta: 3, explicacao: "Subtração: 30 − 8 = 22." },
    { pergunta: "Quanto é 12 + 7 − 5?", alternativas: ["14", "13", "12", "24"], correta: 0, explicacao: "Primeiro 12 + 7 = 19; depois 19 − 5 = 14." }
  ]
};
