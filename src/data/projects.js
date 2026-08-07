  import fireBurger from "../assets/fire-burger-house.png";
  import Latavolaitaliana from "../assets/la-tavola-italiana.png";
  import pythondevpractice from "../assets/python-dev-practice.png";
  import skycast from "../assets/skycast.png";
import fornononnarosa from "../assets/forno-nonna-rosa.png";
import ironcorefitness from "../assets/ironcorefitness.png";
import portfolio from "../assets/portfolio-pessoal.png"

  export const CATEGORIES = ["Todos", "React", "JavaScript", "Python", "React Native", "HTML/CSS", "Java"];

  export const PROJECTS = [


    {
      id: "fire-burger-house",
      name: "Fire Burger House",
      file: "fire-burger-house",
      category: "HTML/CSS",
      image: fireBurger,
      short: "Landing page institucional para hamburgueria com cardápio digital.",
      full: "Landing page desenvolvida para uma hamburgueria artesanal, com cardápio digital, seção de promoções e integração direta com WhatsApp para pedidos. Foco em performance e em uma experiência visual apetitosa em qualquer dispositivo.",
      techs: ["HTML", "CSS", "JavaScript"],
      challenges: [
        "Layout 100% responsivo sem frameworks CSS",
        "Otimização de imagens para carregamento rápido",
        "Integração com pedidos via WhatsApp",
      ],
      github: "https://github.com/Allan75489/burger-house-website",
      deploy: "https://burger-house-website-wheat.vercel.app",
    },


    {
      id: "la-tavola-italiana",
      name: "La Tavola Italiana",
      file: "la-tavola-italiana",
      category: "React",
      image: Latavolaitaliana,
      short: "Site de restaurante italiano com reservas e cardápio dinâmico.",
      full: "Site institucional para um restaurante italiano, com sistema de reservas, cardápio consumido via API e componentes estilizados que remetem à identidade visual da trattoria. Construído com foco em elegância e usabilidade.",
      techs: ["React", "API", "Styled Components"],
      challenges: [
        "Consumo e cache de dados de uma API de cardápio",
        "Sistema de reservas com validação de horários",
        "Theming consistente com Styled Components",
      ],
      github: "https://github.com/Allan75489/La-Tavola-Italiana",
      deploy: "https://la-tavola-italiana.vercel.app",
    },


    {
      id: "python-pratictice",
      name: "Python pratictice",
      file: "python_pratictice",
      category: "Python",
      image: pythondevpractice,
      short: "Repositorio criado pra mostrar meus estudos de python .",
      techs: ["Python"],
      challenges: [
        "Ativades de aprendizado de python",
      ],
      github: "https://github.com/Allan75489/python-dev-practice",
    },


    {
      id: "skycast",
      name: "Skycast",
      file: "skycast",
      category: "React",
      image: skycast,
      short: "Aplicativo de previsão do tempo com React.",
      full: "Aplicativo que fornece previsões meteorológicas detalhadas, incluindo temperatura, umidade e condições climáticas, utilizando APIs de clima em tempo real. Desenvolvido com foco em design intuitivo e experiência do usuário.",
      techs: ["React", "Vite", "CSS"],
      challenges: [
        "Integração com API de clima em tempo real",
        "Design responsivo e intuitivo",
        "Gerenciamento de estado eficiente com React Hooks",
      ],
      github: "https://github.com/Allan75489/Skycast",
      deploy: "https://sky-cast-ochre-delta.vercel.app",
    },


    {
  id: "forno-nonna-rosa",
  name: "Forno Nonna Rosa",
  file: "forno-nonna-rosa",
  category: "React",
  image: fornononnarosa,
  short: "Site de pizzaria artesanal com cardápio digital.",
  full: "Projeto desenvolvido em React para uma pizzaria artesanal, apresentando cardápio digital, área de promoções e sistema de pedidos online com foco em responsividade e experiência do usuário.",
  techs: ["React", "Vite", "CSS"],
  challenges: [
    "Criação de layout responsivo",
    "Organização dos componentes React",
    "Otimização de desempenho",
  ],
  github: "https://github.com/Allan75489/Forno-Nonna-Rosa",
  deploy: "https://forno-nonna-rosa.vercel.app",
},

{
  id: "ironcore-fitness",
  name: "IronCore Fitness",
  file: "ironcore-fitness",
  category: "HTML/CSS",
  image: ironcorefitness,
  short: "Landing page para academia moderna.",
  full: "Projeto desenvolvido para uma academia com foco em apresentar planos, modalidades de treino e diferenciais da empresa através de uma interface moderna e responsiva.",
  techs: ["HTML", "CSS", "JavaScript"],
  challenges: [
    "Construção de interface moderna",
    "Experiência do usuário intuitiva",
    "Responsividade completa",
  ],
  github: "https://github.com/Allan75489/IRON-CORE-FITNESS",
  deploy: "https://iron-core-fitness-xi.vercel.app",
},

{
  id: "portfolio-pessoal",
  name: "Portfólio Pessoal",
  file: "portfolio-pessoal",
  category: "HTML/CSS",
  image: portfolio,
  short: "Meu portfólio profissional de desenvolvedor.",
  full: "Portfólio desenvolvido para apresentar meus projetos, habilidades, tecnologias e informações de contato. Construído com React e foco em design moderno, desempenho e responsividade.",
  techs: ["HTML", "JavaScript", "CSS"],
  challenges: [
    "Organização dos projetos",
    "Design responsivo",
    "Integração com GitHub e deploy",
  ],
  github: "https://github.com/Allan75489/Allan-Gustavo-Portifolio",
  deploy: "https://allan-gustavo-portifolio.vercel.app",
},
  ];

  export function getProjectById(id) {
    return PROJECTS.find((p) => p.id === id);
  }
