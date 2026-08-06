import fireBurger from "../assets/fire-burger-house.png";
import Latavolaitaliana from "../assets/la-tavola-italiana.png";
import pythondevpractice from "../assets/python-dev-practice.png";
import PortfolioPessoal from "../assets/portfolio-pessoal.png";

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
    id: "portfolio-pessoal",
    name: "Portfólio Pessoal",
    file: "portfolio-pessoal",
    category: "JavaScript",
    image: Portfoliopessoal,
    short: "Versão anterior do portfólio pessoal, 100% vanilla JS.",
    full: "Primeira versão do meu portfólio pessoal, construída sem frameworks para aprofundar o domínio de HTML, CSS e JavaScript puro. Serviu de base para os conceitos de performance e organização aplicados nos projetos seguintes.",
    techs: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Organizar JavaScript puro em módulos reutilizáveis",
      "Criar animações de scroll sem bibliotecas externas",
      "Garantir acessibilidade básica sem um framework de apoio",
    ],
    github: "",
    deploy: "",
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
