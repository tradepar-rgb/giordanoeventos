# Giordano Eventos

Site corporativo da Giordano Eventos, publicado em Cloudflare Workers.

O site apresenta a empresa como especialista em hospitalidade, recepcao, coffee break, apoio de catering, operacao de campo, feiras, exposicoes, congressos e eventos corporativos em todo o Brasil.

## Estado atual

- Dominio principal: `https://giordanoeventos.com`
- Dominio com www: `https://www.giordanoeventos.com`
- Worker Cloudflare: `giordano-eventos`
- Publicacao atual feita via Wrangler direto para Cloudflare Workers
- Base de conteudo/admin simples incluida no Worker

## Estrutura

- `src/worker.js`: site, rotas, admin simples e estilos
- `public/`: arquivos estaticos publicados pelo Worker
- `migrations/`: schema D1 usado pelo CMS simples
- `wrangler.toml`: configuracao Cloudflare Workers
- `.dev.vars.example`: exemplo de variaveis locais

## Rotas principais

- `/`: home
- `/quem-somos`: apresentacao institucional
- `/servicos`: servicos
- `/portfolio`: portfolio e galeria
- `/clientes`: segmentos atendidos
- `/equipe`: Maria Ruth e Roberta
- `/contato`: contato
- `/admin`: acesso simples ao admin

## Variaveis e segredos

Variaveis publicas configuradas no `wrangler.toml`:

- `SITE_NAME`
- `PUBLIC_BASE_URL`
- `ADMIN_EMAIL`

Segredo que deve existir na Cloudflare:

- `ADMIN_PASSWORD`

Nao versionar `.dev.vars` com senha real.

## Desenvolvimento local

Instalar dependencias:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

## Deploy

Publicar em producao:

```bash
npm run deploy
```

O deploy atual usa as rotas:

- `giordanoeventos.com/*`
- `www.giordanoeventos.com/*`

## GitHub

Esta pasta foi organizada para virar a fonte oficial do projeto no GitHub.

Recomendacao de fluxo daqui em diante:

1. Fazer alteracoes no codigo local.
2. Criar commit no Git.
3. Subir para o GitHub.
4. Publicar na Cloudflare a partir da versao versionada.
5. Evitar mudancas diretas em producao sem commit.

## Observacoes importantes

- O site deve manter linguagem de atuacao nacional: feiras, exposicoes e eventos corporativos em todo o Brasil.
- Sao Paulo pode aparecer como base, mas nao como limite de atendimento.
- O botao de orcamento/proposta foi removido por decisao do projeto.
- O admin e propositalmente simples nesta fase.
