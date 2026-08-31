# PRD — Acolhe

## Problem statement (original)
Refinamento completo da experiência MOBILE do Acolhe sem alterar a identidade visual nem o desktop: hero mobile em coluna centrada com mockup contido, grids virando 1 coluna, espaçamento intencional, breakpoints em 390/414/480/768/1024/desktop, navegação mobile corrigida, tipografia escalonada, mockups/3D reduzidos mas preservados, containers sem overflow. Correção específica: o card de onboarding (após clicar em "Quero conversar") aparecia lá embaixo em vez de centralizado na viewport.

## Arquitetura
- Frontend: React (CRACO) SPA em `/app/frontend`, arquivo único `src/App.js` com todas as rotas; estilos em camadas: `index.css` (tokens) → `App.css` → `theme-dark.css` → `institutional.css` → `brand.css` → **`mobile.css` (novo, carregado por último)**.
- Backend: FastAPI em `/app/backend/server.py` (healthcheck `/api/`); o app é essencialmente front-end demonstrativo.
- Auth: demonstrativa, localStorage (`src/auth.js`, DEMO_ACCOUNTS).

## Personas
- Estudante (fluxo /app: assunto → profissional → horário → confirmação → sessão demo)
- Profissional (dashboard demo)
- Instituição de ensino (páginas B2B + painel demonstrativo)

## Implementado
- 2026-08-29: Código-fonte sincronizado do artifact `acolhe61-main.zip` para `/app`.
- 2026-08-29: **Fix do onboarding** — overlay preso dentro de `.route-fade` (transform residual criava containing block e centralizava o card na página inteira). Solução: `createPortal(..., document.body)` em `components/Onboarding.jsx`. Card agora centraliza na viewport imediatamente.
- 2026-08-29: **Camada mobile dedicada `src/mobile.css`** com breakpoints ≤1024, ≤850, ≤768, ≤600, ≤480, ≤390:
  - Hero mobile: coluna única centrada, texto primeiro, mockup com max-width 420/380px, paddings reduzidos, headline escalonada (42→38→35px), CTAs com área de toque ≥48–52px.
  - Header compacto (66px) e botão de fechar do drawer acima do drawer (z-index 30).
  - Grids (categorias, passos) viram 1 coluna real em ≤600px; cards com altura natural e padding reduzido.
  - Seções: padding vertical 75→62/56/50/46px; alturas fixas e min-heights removidos no mobile.
  - Tipografia editorial preservada (DM Sans + Fraunces) com escala mobile.
  - Proteção anti-overflow em mockups, forms e cards.
  - Desktop (≥1025px) intocado — verificado em 1280×800.

## Verificado
- 390×844: home, drawer, onboarding, /app, /app/profissionais — sem overflow horizontal.
- 414×896: /app/agendamento OK. 480×900: /instituicoes OK. 768×1024: home OK. 1024×768: painel institucional OK. 1280×800: desktop preservado.
- Tema escuro no mobile funcionando.
- Backend `/api/` responde.

## Backlog
- P1: revisão fina do dark mode no drawer/sessão em telas ≤390.
- P2: gestos de swipe no onboarding mobile.
- P2: auditoria de safe-area-inset em iPhones com notch para bottom-nav.
