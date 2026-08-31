/* ============================================================
   Dados demonstrativos da camada institucional.
   Todos fictícios e rotulados como DEMO na interface — nenhum
   número aqui representa resultado real da Acolhe.
   ============================================================ */

export const audiences = [
  {
    id: "estudante",
    tag: "Usuário",
    role: "Quem usa e se beneficia",
    title: "O estudante continua no centro",
    text: "Chega sem precisar saber o que fazer, conta o que está sentindo e encontra o próximo passo — orientação, recursos ou encaminhamento.",
    to: "/para-estudantes",
    cta: "Ver a experiência do estudante",
  },
  {
    id: "profissional",
    tag: "Ecossistema",
    role: "Quem oferece apoio",
    title: "O profissional com espaço próprio",
    text: "Recebe solicitações sob sua responsabilidade, organiza disponibilidade e faz encaminhamentos em um ambiente adequado à sua atuação.",
    to: "/profissionais",
    cta: "Ver a área do profissional",
  },
  {
    id: "instituicao",
    tag: "Cliente",
    role: "Quem pode contratar",
    title: "A instituição como parceira",
    text: "Amplia sua estrutura de apoio estudantil, acompanha a utilização por indicadores agregados e organiza encaminhamentos — sem acessar conversas.",
    to: "/instituicoes",
    cta: "Ver a proposta institucional",
  },
];

export const b2b2cFlow = [
  { label: "Instituição", title: "Contrata a plataforma", text: "Disponibiliza a Acolhe para seus estudantes." },
  { label: "Estudante", title: "Utiliza a plataforma", text: "Encontra orientação e o próximo passo." },
  { label: "Profissional", title: "Oferece apoio adequado", text: "Atende e encaminha quando necessário." },
];

export const institutionCapabilities = [
  { icon: "layout", title: "Painel administrativo", text: "Uma visão geral da operação da Acolhe dentro da instituição." },
  { icon: "users", title: "Usuários institucionais", text: "Gestão de acessos de equipe e vínculos institucionais." },
  { icon: "badge", title: "Profissionais vinculados", text: "Organização dos profissionais que atendem a instituição." },
  { icon: "activity", title: "Acompanhamento de utilização", text: "Quanto a plataforma está sendo usada ao longo do tempo." },
  { icon: "route", title: "Gestão de encaminhamentos", text: "Visão administrativa dos encaminhamentos, sem conteúdo privado." },
  { icon: "chart", title: "Indicadores agregados", text: "Alcance, demanda por categoria e utilização — sempre agregados." },
];

export const proCapabilities = [
  { icon: "user", title: "Perfil profissional", text: "Áreas de atuação, formatos de atendimento e informações públicas." },
  { icon: "calendar", title: "Disponibilidade e horários", text: "Definição dos dias e janelas em que pode receber conversas." },
  { icon: "inbox", title: "Solicitações sob sua responsabilidade", text: "Apenas o que pertence à sua atuação, nada além disso." },
  { icon: "route", title: "Encaminhamentos", text: "Registro do direcionamento para o serviço mais adequado." },
  { icon: "folder", title: "Registros em ambiente apropriado", text: "Anotações profissionais separadas da visão institucional." },
  { icon: "history", title: "Acompanhamento dos casos", text: "Histórico do que está sob sua atuação, com confidencialidade." },
];

export const accessLevels = [
  {
    id: "estudante",
    tag: "Estudante",
    title: "Controle e transparência",
    can: ["Ver e gerir suas próprias informações", "Saber quem acessa o quê", "Escolher seguir ou parar quando quiser"],
    cannot: ["Não recebe diagnóstico da plataforma"],
    scope: "O estudante deveria ser sempre o primeiro a saber o que acontece com as informações dele.",
  },
  {
    id: "profissional",
    tag: "Profissional",
    title: "Apenas o necessário",
    can: ["Informações dos casos sob sua atuação", "Registros no ambiente profissional adequado", "Histórico do próprio acompanhamento"],
    cannot: ["Não acessa casos de outros profissionais"],
    scope: "Acesso limitado ao que a atuação exige, com confidencialidade profissional como princípio.",
  },
  {
    id: "instituicao",
    tag: "Instituição",
    title: "Indicadores, não conversas",
    can: ["Indicadores agregados de utilização", "Dados administrativos e operacionais", "Visão geral de alcance e demanda"],
    cannot: ["Não acessa conversas entre estudante e profissional", "Não acessa registros individuais de estudantes"],
    scope: "A instituição enxerga a operação, nunca o conteúdo privado de quem buscou apoio.",
  },
];

export const plans = [
  {
    id: "essencial",
    name: "Essencial",
    idea: "A porta de entrada funcionando para os estudantes.",
    basis: "Faixa por número de estudantes",
    features: ["Plataforma para estudantes", "Recursos de apoio e conteúdo", "Encaminhamento para serviço adequado", "Materiais de divulgação interna"],
  },
  {
    id: "institucional",
    name: "Institucional",
    idea: "Tudo do Essencial, com gestão e visibilidade.",
    basis: "Faixa por número de estudantes",
    featured: true,
    features: ["Tudo do plano Essencial", "Painel administrativo", "Indicadores agregados de utilização", "Ferramentas institucionais de gestão"],
  },
  {
    id: "completo",
    name: "Completo",
    idea: "Operação integrada com a rede de profissionais.",
    basis: "Escopo definido com a instituição",
    features: ["Tudo do plano Institucional", "Integração com profissionais parceiros", "Gestão avançada de encaminhamentos", "Recursos avançados de operação"],
  },
];

export const marketSegments = [
  { label: "Escolas de ensino médio", first: true },
  { label: "Redes de ensino" },
  { label: "Universidades" },
  { label: "Cursos técnicos" },
  { label: "Educação profissional" },
  { label: "Organizações que atendem estudantes" },
];

export const impactIndicators = [
  { icon: "users", title: "Estudantes alcançados", text: "Quantas pessoas encontraram um primeiro passo." },
  { icon: "school", title: "Instituições participantes", text: "Quantas escolas e redes ofereceram o acesso." },
  { icon: "badge", title: "Profissionais participantes", text: "Quem compõe a rede de apoio e encaminhamento." },
  { icon: "message", title: "Solicitações de apoio", text: "Quantos pedidos de conversa foram feitos." },
  { icon: "route", title: "Encaminhamentos", text: "Quantas pessoas chegaram ao serviço adequado." },
  { icon: "check", title: "Atendimentos realizados", text: "Conversas efetivamente acontecidas." },
  { icon: "activity", title: "Taxa de utilização", text: "Quanto do acesso disponível foi aproveitado." },
  { icon: "heart", title: "Satisfação com a experiência", text: "Como as pessoas avaliam o caminho percorrido." },
];

export const aiUses = [
  { title: "Navegação e organização", text: "Ajudar a organizar informações e orientar a pessoa até o caminho adequado." },
  { title: "Recomendação de recursos", text: "Sugerir conteúdos de apoio compatíveis com o que a pessoa trouxe." },
  { title: "Automação administrativa", text: "Reduzir trabalho operacional de agendamento, organização e registros." },
  { title: "Organização de encaminhamentos", text: "Apoiar a estruturação do direcionamento feito por profissionais." },
  { title: "Análise de dados agregados", text: "Identificar padrões gerais de utilização, sem expor pessoas." },
  { title: "Apoio operacional aos profissionais", text: "Diminuir tarefas repetitivas para sobrar tempo de atuação." },
];

export const howByAudience = [
  {
    id: "estudante",
    tag: "Estudante",
    title: "Para quem precisa de apoio",
    text: "Sem formulários longos, sem precisar explicar tudo de uma vez.",
    steps: ["Você chega", "Conta o que precisa", "Encontra o próximo passo", "Recebe orientação ou encaminhamento adequado"],
  },
  {
    id: "profissional",
    tag: "Profissional",
    title: "Para quem oferece apoio",
    text: "Um ambiente que respeita a natureza do trabalho profissional.",
    steps: ["Recebe solicitações", "Organiza sua disponibilidade", "Realiza seu trabalho", "Faz encaminhamentos quando necessário"],
  },
  {
    id: "instituicao",
    tag: "Instituição",
    title: "Para quem oferece a estrutura",
    text: "Ampliar o apoio estudantil sem invadir a privacidade de ninguém.",
    steps: ["Contrata a plataforma", "Disponibiliza aos estudantes", "Acompanha a utilização", "Visualiza indicadores agregados", "Amplia sua estrutura de apoio"],
  },
];

export const studentCan = [
  { title: "Acessar a Acolhe", text: "Pela instituição ou por conta própria, em poucos toques." },
  { title: "Dizer como está se sentindo", text: "Com as palavras que você tiver — não precisa ser exato." },
  { title: "Encontrar orientação inicial", text: "Um ponto de partida para entender o que está acontecendo." },
  { title: "Ver recursos de apoio", text: "Conteúdos educativos curtos sobre o que aparece na vida escolar." },
  { title: "Descobrir os caminhos disponíveis", text: "O que existe para você agora, de forma clara." },
  { title: "Solicitar ou agendar atendimento", text: "Quando isso fizer sentido e estiver disponível." },
  { title: "Ser encaminhado ao serviço adequado", text: "Para um profissional ou serviço apropriado ao seu caso." },
  { title: "Acompanhar seus encaminhamentos", text: "Saber em que ponto do caminho você está." },
];

export const referralSteps = [
  { icon: "user", title: "O estudante chega", text: "Sem precisar de diagnóstico prévio, vocabulário técnico ou clareza total sobre o que sente." },
  { icon: "search", title: "Identificação da necessidade", text: "A plataforma ajuda a organizar o que a pessoa trouxe e a entender o tipo de apoio que faz sentido." },
  { icon: "book", title: "Orientação e recursos", text: "Conteúdo educativo e orientações iniciais para o que pode ser resolvido com informação e acolhimento." },
  { icon: "route", title: "Encaminhamento quando necessário", focus: true, text: "Quando o caso pede mais do que uma conversa inicial, a Acolhe direciona para o caminho adequado." },
  { icon: "badge", title: "Profissional ou serviço adequado", text: "Um profissional da rede ou um serviço especializado — a escolha considera adequação, não conveniência." },
];

/* Séries do painel institucional — fictícias, marcadas como DEMO */
export const dashUsageSeries = [
  { mes: "Fev", acessos: 96, solicitacoes: 24 },
  { mes: "Mar", acessos: 142, solicitacoes: 38 },
  { mes: "Abr", acessos: 168, solicitacoes: 45 },
  { mes: "Mai", acessos: 214, solicitacoes: 61 },
  { mes: "Jun", acessos: 236, solicitacoes: 68 },
  { mes: "Jul", acessos: 198, solicitacoes: 52 },
  { mes: "Ago", acessos: 262, solicitacoes: 74 },
];

export const dashWeekSeries = [
  { dia: "Seg", conversas: 21 },
  { dia: "Ter", conversas: 34 },
  { dia: "Qua", conversas: 28 },
  { dia: "Qui", conversas: 39 },
  { dia: "Sex", conversas: 30 },
  { dia: "Sáb", conversas: 12 },
  { dia: "Dom", conversas: 7 },
];

export const dashDemand = [
  { label: "Pressão escolar e provas", value: 32 },
  { label: "Ansiedade e preocupação", value: 24 },
  { label: "Relações e família", value: 18 },
  { label: "Rotina e organização", value: 14 },
  { label: "Futuro e escolhas", value: 12 },
];

export const dashKpis = [
  { icon: "users", value: "312", label: "Estudantes alcançados", trend: "de 640 com acesso disponível" },
  { icon: "activity", value: "1.316", label: "Acessos à plataforma", trend: "últimos 6 meses (fictício)" },
  { icon: "message", value: "362", label: "Solicitações de apoio", trend: "média de 52 por mês" },
  { icon: "check", value: "148", label: "Atendimentos realizados", trend: "conversas concluídas" },
  { icon: "route", value: "37", label: "Encaminhamentos", trend: "para serviço adequado" },
  { icon: "badge", value: "9", label: "Profissionais vinculados", trend: "rede demonstrativa" },
  { icon: "chart", value: "47%", label: "Taxa de utilização", trend: "do acesso contratado" },
  { icon: "heart", value: "4,6/5", label: "Satisfação com a experiência", trend: "pesquisa demonstrativa" },
];

export const dashOperations = [
  { title: "Solicitações aguardando profissional", detail: "Fila administrativa — sem conteúdo das conversas", status: "3 abertas", tone: "op-open" },
  { title: "Encaminhamentos concluídos no mês", detail: "Somente contagem agregada", status: "12 concluídos", tone: "op-done" },
  { title: "Profissionais com agenda publicada", detail: "Disponibilidade informada pelos próprios profissionais", status: "7 de 9", tone: "" },
  { title: "Convites de acesso pendentes", detail: "Gestão de usuários institucionais", status: "24 pendentes", tone: "op-open" },
];
