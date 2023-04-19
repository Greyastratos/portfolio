import {
  front,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  freelance,
  threejs,
  backend,
  oso,
  osoicon,
  soft,
  estudios,
  agil,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Intro",
  },
  {
    id: "exp",
    title: "Experiencia",
  },
  {
    id: "proyects",
    title: "Proyects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Soft Skills",
    icon: soft,
  },
  {
    title: "Diseño",
    icon: front,
  },
  {
    title: "Desarrollo",
    icon: backend,
  },
  {
    title: "Agile Methodology",
    icon: agil,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: " 2022 - Present",
    points: [
      "Desarrollar páginas web para diferentes compañías de Argentina y España utilizando HTML5, CSS3, JavaScript, SASS, Tailwind, React.js.",
      "Atender los requerimientos de los diferentes clientes.",
      "Trabajar en conjunto con el equipo de desarrollo y el equipo de diseño.",
    ],
  },
  {
    title: "Estudiante Full-Stack",
    company_name: "CoderHouse",
    icon: estudios,
    iconBg: "#383E56",
    date: " 2021 - 2022",
    points: [
      "Curso diseño WEB",
      "Curso Javascript",
      "Curso React.js",
      "Curso BackEnd"
    ],
  },
  {
    title: "Fundamentos de la Programacion",
    company_name: "Centro e-Learning UTN FRBA",
    icon: estudios,
    iconBg: "#383E56",
    date: " 2021",
    points: [
      "Curso diseño WEB",
      "Curso Javascript",
      "Curso React.js",
      "Curso BackEnd"
    ],
  },

 
];



const projects = [
  {
    name: "Oso producciones",
    description:
      "Landing page de Oso Comunicaciones, Oso Comunicación es una agencia de comunicación integral, especializada en social media y marketing digital",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: oso,
    proyect_icon:osoicon,
//    source_code_link: "/",
    source_page_link: "https://oso-comunicacion.web.app"

  },
  
];

export { services, technologies, experiences, projects };
