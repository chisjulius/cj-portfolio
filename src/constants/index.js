import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    stopwatch,
    hope,
    mern,
    movies,
    city,
    todo,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "blogs",
      title: "Blogs",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Node.js Developer",
      icon: backend,
    },
    {
      title: "Javascript Developer",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      title: "React.js Developer",
      company_name: "3reen",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Oct 2020 - Nov 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies like Git.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "3reen",
      icon: tesla,
      iconBg: "#383E56",
      date: "Oct 2020 - Nov 2021",
      points: [
        "Developing and maintaining web applications using React.js, React storybook, HTML, CSS",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "3reen",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Nov 2021",
      points: [
        "Developing and maintaining web applications using React.js and Node.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Timer App",
      description:
        "An app that counts your time like never before. It is simple, reliable, and perfect cos you can add every timing situation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialize",
          color: "pink-text-gradient",
        },
      ],
      image: stopwatch,
      source_code_link: "https://fluffy-mousse-230b9f.netlify.app",
    },
    {
      name: "Quote Machine",
      description:
        "A machine which has over hundreds of quote content in it and was built to get my hands dirty. feel free to check it out and hope you d' like it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "materialize",
          color: "pink-text-gradient",
        },
      ],
      image: hope,
      source_code_link: "https://chisjulquote.netlify.app",
    },
    {
      name: "Mern Stack",
      description:
        "A special site that allows users to post interesting events that happened in their life. This site helped me master node js and i trust you gonna like it",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
  
      ],
      image: mern,
      source_code_link: "https://github.com/",
    },
    {
      name: "Movie Gallery",
      description:
        "A special site that allows users to post interesting events that happened in their life. This site helped me master node js and i trust you gonna like it",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "materialize",
          color: "pink-text-gradient",
        },
  
      ],
      image: movies,
      source_code_link: "https://chisjulmovies.netlify.app",
    },
    {
      name: "City Tours",
      description:
        "A site that displays cities i would like to visit in the nearby future. I stored them in an array, mapped through them and displayed them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "materialize",
          color: "pink-text-gradient",
        },
  
      ],
      image: city,
      source_code_link: "https://chisjultour.netlify.app",
    },
    {
      name: "Todo App",
      description:
        "A todo app i built to solidify the knowledge i gained from my first react app. It helped me in learning how to convert class based components to function based.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialize",
          color: "pink-text-gradient",
        },
  
      ],
      image: todo,
      source_code_link: "https://chisjultodos.netlify.app",
    },
  ];

  

  
  export { services, technologies, experiences, projects };