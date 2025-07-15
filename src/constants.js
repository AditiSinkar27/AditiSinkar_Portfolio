// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
//import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
//import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import imgLogo from './assets/education_logo/images.jpg'
// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
//import taskremLogo from './assets/work_logo/task_rem.png';
//import npmLogo from './assets/work_logo/npm.png';
//import webverLogo from './assets/work_logo/web_dig.png';
//import cmLogo from './assets/work_logo/cm.png';
//import imagesearchLogo from './assets/work_logo/image_search.png';
//import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Java Developer Intern",
      company: "Let’s Grow More",
      date: "July 2023 – Aug 2023",
      desc: "Developed interactive Java-based applications including a Tic-Tac-Toe game, Currency Converter, and Scientific Calculator enhancing logic building and programming fundamentals.Applied object-oriented programming principles to design modular and maintainable code structures for efficient application development.Focused on improving user experience through intuitive interfaces and smooth functionality across all projects.",
      skills: [
        "HTML",
        "CSS",
        "Java",
        "TypeScript",
        
        "Tailwind CSS",
        ,
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Web Developer Intern ",
      company: "Prodigy Info Tech",
      date: "Dec 2023 – Jan 2024",
      desc: "Developed a Stopwatch web application with advanced features like lap timing and clear display functionality, resulting in a 30 percent increase in user engagement. Utilized HTML, CSS, and JavaScript to ensure optimal performance across devices.Built a Weather App that provided real-time weather information for any location, successfully integrating a weather API to dynamically fetch and display accurate data. Contributed to front-end development, enhancing responsiveness and user experience, which led to a 20 percent improvement in client satisfaction and project completion efficiency.",
      skills: [
        "ReactJS",
        "API",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Progressive Education Society's Modern College of Engineering, Pune",
      date: "Dec 2021 - June 2025",
      grade: "8.63 CGPA",
      desc: "I completed my Bachelor's degree in Electronics and Telecommunication from Savitribai Phule Pune University, Pune. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Electronics and Telecommunication Engineering",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "SSMM Junior College, Pachora, Dist- Jalgaon",
      date: "June 2020 - May 2021",
      grade: "96%",
      desc: "I completed my class 12 education fromSSMM Junior College, Pachora, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Electronics.",
      degree: "State Board(XII) - PCM with Electronics",
    },
    {
      id: 3,
      img: imgLogo,
      school: "Burhani English Medium School, Pachora, Dist- Jalgaon",
      date: "June 2018 - May 2019",
      grade: "94%",
      desc: "I completed my class 10 education from Burhani English Medium School, Pachora, under the state board .",
      degree: "State Board (xth)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Study Verse  – Classroom Collaboration Platform",
      description:
        "A virtual classroom and learning management platform that allows students and teachers to securely sign up, create, join, and manage study groups. The platform features material sharing, role-based access, and an intuitive dashboard for seamless academic collaboration.",
      image: githubdetLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AditiSinkar27/Study_Verse",
      //webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Zippy Mart - Full-Stack E-commerce Platform",
      description:
        "An e-commerce platform inspired by Blinkit, enabling users to browse products, manage carts, and make purchases. Includes an admin panel for product and category management, with secure authentication, OTP-based email verification, and password recovery.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript", "JWT", "OTP"],
      github: "https://github.com/AditiSinkar27/zippyMart",
      //webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Full Stack Stock Trading Platform (Zerodha Clone)",
      description:
        "A full-stack stock trading simulator inspired by Zerodha, capable of displaying real-time market trends and price updates using dynamic JSON feeds. It features a modular frontend, API-driven backend, and enhanced user experience through responsive UI design.",
      image: movierecLogo,
      tags: ["React JS", "Node.js", "Express", "HTML", "CSS", "JavaScript", "JSON"],
      github: "https://github.com/AditiSinkar27/Zerodha",
      //webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },

  ];  