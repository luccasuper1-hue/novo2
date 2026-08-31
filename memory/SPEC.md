# Acolhe — especificação viva

Protótipo educacional (CRA + craco, JavaScript) que apresenta uma plataforma
conectando estudantes a profissionais de Psicologia. **Não há backend em uso pelo
frontend** — todo o estado vive no navegador (localStorage). O FastAPI em
`backend/` permanece com o endpoint template `/api/status`.

## Stack
- `frontend/` CRA 5 + craco 7, React 19, react-router-dom 7, framer-motion, sonner, tailwind + radix/shadcn.
- Scripts: `yarn dev` (= `craco start`, usado pelo supervisor), `yarn start`, `yarn build`.
- `frontend/.env` define HOST/PORT/DANGEROUSLY_DISABLE_HOST_CHECK/WDS_SOCKET_PORT para rodar atrás do proxy de preview.
- `backend/` FastAPI + motor, rotas em `api_router` sob `/api`.

## Estado / persistência (localStorage)
- `acolhe-auth` — sessão demonstrativa `{ role, label }`.
- `acolhe-booking` — agendamento (`professionalId`, `topicId`, `dayIndex`, `time`, `confirmed`, `moods`…).
- `acolhe-theme` — `system | light | dark` (aplicado via atributo `data-theme`).
- `acolhe-onboarding` — marca o onboarding como visto.

## Posicionamento (evolução B2B2C)
"A Acolhe é uma plataforma que ajuda instituições de ensino a ampliar e organizar o
acesso dos estudantes a apoio, orientação e encaminhamento adequado." O estudante segue
sendo o usuário/beneficiário central; a instituição é o cliente potencial; o profissional
integra o ecossistema. A plataforma NÃO se posiciona como substituta de psicólogos nem
como IA terapeuta, e tudo que é hipótese aparece rotulado como DEMO / em validação.

## Rotas
Marketing: `/`, `/como-funciona`, `/para-estudantes`, `/profissionais`,
`/instituicoes`, `/instituicoes/painel`, `/privacidade`, `/termos`, `/ajuda`,
`/preciso-ajuda`, `/recursos`, `/login`, `*` (404).
Aliases preparados para o SaaS futuro: `/aluno` → `/para-estudantes`,
`/profissional` → `/profissionais`, `/instituicao` → `/instituicoes`.
App do estudante: `/app`, `/app/assunto`, `/app/profissionais`,
`/app/profissional/:id`, `/app/agendamento`, `/app/pagamento`,
`/app/confirmacao`, `/app/sessao`, `/app/pos-conversa`, `/app/agenda`,
`/app/jornada`. Profissional: `/profissional-dashboard` (exige login com papel
`professional`, senão redireciona para `/login?next=...`).

## Camada institucional (novos arquivos)
- `src/institutional.css` — estilos da camada B2B2C + correções de navegação; usa só os tokens existentes, então funciona nos dois temas.
- `src/data-institutional.js` — dados demonstrativos (públicos, capacidades, níveis de acesso, planos, mercados, indicadores, séries do painel).
- `src/components/Institutional.jsx` — `AudienceBand`, `InstitutionStrip`, `HowByAudience`, `StudentPossibilities`, `ReferralFlow`, `CapabilitiesSection`, `ProPanelPreview`, `AccessLevelsSection`, `PlansSection`, `MarketSection`, `ImpactSection`, `AiSection`, `ValidationSection`.
- `src/components/LeadForm.jsx` — formulários de interesse institucional e da rede de profissionais (demo, nada é enviado/armazenado; não aprova cadastro).
- `src/components/InstitutionDashboardPanels.jsx` — painel institucional com recharts (área, barras, barras de demanda, operação, limites de privacidade), cores derivadas do tema ativo.

Distribuição por página: home (`AudienceBand`, `InstitutionStrip`, `ValidationSection`),
`/como-funciona` (`HowByAudience`, `ReferralFlow`, `AiSection`), `/para-estudantes`
(`StudentPossibilities`), `/profissionais` (`CapabilitiesSection`, `ProPanelPreview`,
`LeadForm` no âncora `#demo-form`), `/instituicoes` (`CapabilitiesSection`, `PlansSection`,
`MarketSection`, `ImpactSection`, `LeadForm` no âncora `#contato-institucional`),
`/privacidade` (`AccessLevelsSection`), `/instituicoes/painel` (`InstitutionDashboardPanels`).

## Fluxo principal
`/app` (onboarding → humor) → assunto → profissionais (busca/filtros) → perfil →
login se necessário → agendamento (dia/horário) → pagamento fake (Pix/cartão) →
confirmação → sessão simulada → pós-conversa → jornada (resumo + download PNG/TXT).

## Correções aplicadas
1. Ambiente: adicionado script `dev` e `frontend/.env` — sem eles o projeto não subia no pod.
2. `auth.js`: sessão passou a persistir em `acolhe-auth` (antes o login era perdido a cada recarregamento).
3. `NavigateToLogin`: virou `<Navigate to="/login?next=..." replace/>` (antes renderizava uma tela quase em branco).
4. Painel do profissional: botão "Editar horários" agora dá feedback via toast (antes era um botão morto).
5. `AppShell`: item "Conversar" não fica mais ativo em `/profissional-dashboard`.
6. Hambúrguer aparecia no desktop (`.icon-button{display:grid}` vencia `.mobile-menu{display:none}`) e só acendia o backdrop — agora está oculto acima de 850px.
7. Drawer mobile ficava com ~118px de altura e escondia quase todos os links: `.site-header` tem `backdrop-filter`, o que o torna bloco de contenção do `position:fixed`. Corrigido com altura de viewport explícita (`100dvh`).
8. Menu do tema no mobile abria fora da tela (`right:0` com o botão à esquerda) — agora ancora à esquerda, com largura limitada à viewport e z-index acima do drawer.
