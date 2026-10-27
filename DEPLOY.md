# 🚀 Guia de Deploy — GitHub Pages

O Colégio Horizonte é 100% estático (HTML/CSS/JS, sem backend), então o
GitHub Pages o hospeda gratuitamente com HTTPS. O repositório local já está
inicializado com o commit inicial. Faltam apenas seus passos:

## Passo 1 — Criar o repositório no GitHub

1. Crie uma conta em [github.com](https://github.com) (se ainda não tiver).
2. Acesse [github.com/new](https://github.com/new) e crie um repositório:
   - **Nome:** `colegio-horizonte`
   - **Visibilidade:** Public (necessário para Pages no plano gratuito)
   - **NÃO** marque "Add a README" (já temos um).

## Passo 2 — Conectar e enviar o código

No terminal, dentro da pasta `colegio/`:

```bash
git remote add origin https://github.com/SEU_USUARIO/colegio-horizonte.git
git push -u origin main
```

O GitHub pedirá seu usuário e senha — use um **Personal Access Token** como
senha (GitHub → Settings → Developer settings → Tokens). O navegador abre
o login automaticamente se você tiver o Git Credential Manager.

## Passo 3 — Ativar o GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)` → Save
3. Aguarde 1-2 minutos.

## Passo 4 — Acessar

O site fica no ar em:

```
https://SEU_USUARIO.github.io/colegio-horizonte/
```

Com HTTPS automático. Compartilhe o link com quem quiser estudar!

## Atualizações futuras

Depois de editar conteúdo (novas aulas, correções):

```bash
git add -A
git commit -m "Descrição da alteração"
git push
```

O site atualiza sozinho em ~1 minuto.

## Alternativas (se preferir)

- **Netlify Drop:** arraste a pasta `colegio/` em [app.netlify.com/drop](https://app.netlify.com/drop) — no ar em 30 segundos, sem git.
- **Vercel / Cloudflare Pages:** importam o mesmo repositório do GitHub e deployam igual.

## Verificação local antes de subir

```bash
node tools/validar.js     # valida as 70 disciplinas e 1.610 questões
python3 -m http.server 8931   # teste local em http://localhost:8931
```
