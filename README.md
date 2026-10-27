# 🎓 Colégio Horizonte

Aplicação web de estudos que simula um colégio completo: do **1º ano do Ensino
Fundamental** à **3ª série do Ensino Médio** (12 anos/séries letivas, 70
disciplinas, 210 aulas), com atividades, provas, boletim escolar e um
**Exame Final de Certificação** com certificado para imprimir.

## Como executar

Não precisa instalar nada. Basta servir a pasta com qualquer servidor estático:

```bash
cd colegio
python3 -m http.server 8931
# ou: npx serve .
```

Depois abra `http://localhost:8931`.

> Também funciona abrindo o `index.html` direto no navegador (duplo clique),
> pois todo o conteúdo é carregado via tags `<script>`.

## Como funciona (regras da escola)

1. **Matrícula** — no primeiro acesso, o aluno escolhe avatar e nome.
2. **Corredor** — a tela inicial mostra os três segmentos e as "portas" de cada
   ano/série. Cada ano só desbloqueia quando o anterior for concluído.
3. **Disciplinas** — cada ano tem suas disciplinas (5 no Fundamental I,
   6 no Fundamental II e 7 no Médio). Cada disciplina tem **3 aulas**.
4. **Aulas** — conteúdo teórico + atividade de 4 questões. Nota ≥ 5,0 conclui a
   aula (+10 pontos de mérito).
5. **Prova da disciplina** — liberada após as 3 aulas; 6 questões; nota ≥ 6,0
   aprova a disciplina (+25 pontos).
6. **Ano concluído** — todas as disciplinas aprovadas desbloqueia o ano seguinte.
7. **Exame Final de Certificação** — liberado ao concluir todos os anos:
   30 questões (10 por segmento) sorteadas do banco de questões. Precisa de
   **70%** de acerto. Cada tentativa sorteia questões novas.
8. **Certificado** — aprovado no exame, o aluno recebe o certificado de
   conclusão, imprimível/salvável em PDF.

O progresso (matrícula, notas, aprovações, pontos) fica salvo no
**localStorage** do navegador. O botão ⚙️ no topo apaga tudo e recomeça.

## Estrutura do projeto

```
colegio/
├── index.html          # página única (SPA) + tags dos arquivos de dados
├── css/style.css       # tema "quadro-negro + caderno"
├── js/
│   ├── dados.js        # junta estrutura + conteúdo, sorteia o exame final
│   ├── estado.js       # progresso, notas, desbloqueios (localStorage)
│   ├── views.js        # telas: início, ano, disciplina, aula, prova,
│   │                   #   boletim, exame final, certificado
│   └── app.js          # roteador (hash) + cabeçalho
├── data/
│   ├── estrutura.js    # segmentos, anos e grade de disciplinas
│   └── c-*.js          # 70 arquivos de conteúdo (um por disciplina)
└── tools/validar.js    # validador de conteúdo: node tools/validar.js
```

## Como adicionar ou editar conteúdo

- Cada disciplina tem um arquivo `data/c-<id>.js`, onde o id segue o padrão
  `segmento-aN-chave` (ex.: `f1-a1-mat` = Fundamental I, 1º ano, Matemática).
- Estrutura de cada arquivo: `aulas` (3), cada uma com `blocos` (tipos:
  `titulo`, `paragrafo`, `lista`, `exemplo`, `dica`, `atencao`) e `atividade`
  (4 questões); `prova.questoes` (6); `exameFinal` (5 questões para a banca do
  exame final).
- Questões: `{ pergunta, alternativas: [4], correta: índice 0-3, explicacao }`.
- Para criar uma nova disciplina, adicione-a em `data/estrutura.js`
  (grade do segmento), crie o arquivo `data/c-<id>.js`, inclua a tag
  `<script>` no `index.html` e rode `node tools/validar.js`.

## Validação

```bash
node tools/validar.js
```

Confere sintaxe, quantidade de aulas/questões, índices de resposta e a
distribuição das alternativas corretas.
