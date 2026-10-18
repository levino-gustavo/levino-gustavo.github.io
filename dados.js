const DADOS = { 
  nome: "Gustavo Levino",
  nomeCompleto: "Gustavo Levino Batista Oliveira Santos",
  cargo: "Estudante de Engenharia da Computação",
  frase: "Busco minha primeira oportunidade em tecnologia, para aplicar o que aprendo e crescer na prática.",
  disponivel: "Disponível para oportunidades",
  local: "Sorocaba, SP",
  foto: "assets/foto.jpg", //colocar minha fotinha mai tard
  curriculo: "assets/Gustavo_Levino.pdf",

  contatos: {
    email: "gustavolev@outlook.com.br",
    linkedin: "https://www.linkedin.com/in/gustavo-levino",
    github: "https://github.com/levino-gustavo/levino-gustavo.github.io",
    whatsapp: "5515991250071"
  },

  bio: [
    "Sou estudante de Engenharia da Computação na Facens e tenho formação técnica em Tecnologia da Informação e em Logística, ambas pela Etec Fernando Prestes.",
    "Na prática, já desenvolvi um site completo em HTML e CSS como TCC (infelizmente acabou se perdendo) e apliquei a metodologia DMAIC para identificar e resolver problemas. Também uso ferramentas de Inteligência Artificial para pesquisar, analisar informações e otimizar tarefas.",
    "Atuei como Jovem Aprendiz em uma empresa de grande porte, o que me deu rotina de ambiente corporativo, responsabilidade e trabalho em equipe."
  ],

  objetivos: [
    "Conseguir minha primeira vaga em tecnologia",
    "Aplicar na prática o que aprendo na faculdade",
    "Contribuir com os resultados da equipe e evoluir continuamente"
  ],

  /* status pode ser: "concluido", "andamento" ou "planejado" */
  projetos: [
    {
      titulo: "Site do TCC (Técnico em TI)",
      status: "concluido",
      descricao: "Site desenvolvido em equipe com três colegas como projeto de conclusão do curso técnico. Cuidei de estrutura e estilo com HTML e CSS.",
      tecnologias: ["HTML", "CSS", "Trabalho em equipe"],
      link: "",
      linkTexto: "Ver código"
    },
    {
      titulo: "Aeroporto de Sorocaba como porto de carga",
      status: "concluido",
      descricao: "TCC de Logística que propõe transformar o aeroporto Bertram Luiz Leupolz, hoje voltado à manutenção de aeronaves, em um polo de carga e transporte, aliviando aeroportos vizinhos.",
      tecnologias: ["Logística", "Análise de viabilidade", "DMAIC"],
      link: "",
      linkTexto: "Ver trabalho"
    },
    {
      titulo: "Este portfólio",
      status: "andamento",
      descricao: "Site responsivo publicado no GitHub Pages, com todo o conteúdo em um único arquivo de dados para facilitar as atualizações.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Git", "GitHub Pages"],
      link: "https://github.com/levino-gustavo",
      linkTexto: "Ver repositório"
    }
    /* para adicionar um projeto, copie um bloco acima (de { até }), coloque uma vírgula
       entre eles e troque os textos. */
  ],

  experiencia: [
    {
      titulo: "Jovem Aprendiz",
      onde: "Sorocaba Refrescos (via Instituto Técnico Educacional Mirian Menchini)",
      periodo: "",
      descricao: "Contato com a rotina e os processos de uma empresa de grande porte, com atividades fabris e operacionais. Desenvolvi organização, responsabilidade, comunicação, trabalho em equipe e cumprimento de procedimentos."
    }
  ],

  formacao: [
    { titulo: "Engenharia da Computação", onde: "Facens Sorocaba", periodo: "Em andamento", atual: true },
    { titulo: "Técnico em Logística", onde: "Etec Fernando Prestes", periodo: "Concluído em dez/2025" },
    { titulo: "Técnico em Tecnologia da Informação", onde: "Etec Fernando Prestes", periodo: "Concluído em dez/2024" },
    { titulo: "Ensino Médio", onde: "Colégio Ápice", periodo: "Concluído em dez/2024" }
  ],

  cursos: [
    { titulo: "Pacote Office", onde: "Projeto Trilha | ITEMM", detalhe: "6 horas, mar/2025" },
    { titulo: "Escolha e Gestão de Carreira (Start Profissional)", onde: "Projeto Trilha | ITEMM", detalhe: "7 horas, mar/2025" },
    { titulo: "Educação Financeira", onde: "Projeto Trilha | ITEMM", detalhe: "6 horas, mar/2025" },
    { titulo: "Introdução a Libras", onde: "Projeto Trilha | ITEMM", detalhe: "5 horas, mar/2025" },
    { titulo: "Excel Básico/Intermediário", onde: "", detalhe: "18 horas, mar/2022" },
    { titulo: "Desenvolvedor RPA Básico", onde: "", detalhe: "8 horas, fev/2022" }
  ],

  habilidades: [
    { grupo: "Tecnologia", itens: ["HTML", "CSS", "Git e GitHub", "Excel", "Pacote Office", "RPA (básico)", "Ferramentas de IA"] },
    { grupo: "Método", itens: ["DMAIC", "Análise e organização", "Análise crítica"] },
    { grupo: "Pessoais", itens: ["Trabalho em equipe", "Comunicação", "Resiliência", "Adaptabilidade", "Inteligência emocional", "Foco em desenvolvimento"] }
  ]
};
