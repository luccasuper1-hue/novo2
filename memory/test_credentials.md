# Test Credentials
# Agent writes here when creating/modifying auth credentials (admin accounts, test users).
# Testing agent reads this before auth tests. Fork/continuation agents read on startup.

## Acolhe — login demonstrativo (frontend-only, localStorage)
Rota: /login
- Estudante:    identificador `student.demo`      senha `student123`
- Profissional: identificador `professional.demo` senha `professional123`

Não há auth real no backend; as credenciais vivem em /app/frontend/src/auth.js (DEMO_ACCOUNTS).
Para ver o onboarding de primeiro acesso, limpe a chave `acolhe-onboarding` do localStorage.
