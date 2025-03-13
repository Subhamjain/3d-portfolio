import {
  mobile,
  backend,
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
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  reckonsys,
  signedly,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    title: "Senior Software Engineer (Founding Member)",
    company_name: "Signedly",
    icon: signedly,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Led a team of four front-end developers to build Signedly, a SaaS-based digital signature platform, ensuring seamless collaboration and efficient project execution.",
      "Owned PDF rendering and field positioning for signature placement, improving document processing accuracy and usability.",
      "Integrated Generative AI features, enabling users to summarize entire documents or drag and highlight specific text for instant summarization or translation, enhancing document accessibility and efficiency.",
      "Reduced paperwork by 90% through the successful implementation of digital workflows, streamlining operations for clients.",
      "Collaborated closely with stakeholders to prioritize and deliver new features, including multi-party signatures, automated email notifications, and white-labeling, resulting in a 15% increase in customer satisfaction."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Reckonsys Tech Labs",
    icon: reckonsys,
    iconBg: "#383E56",
    date: "Apr 2023 - Present",
    points: [
      "Reduced page load times by 20% through code splitting, lazy loading, and performance optimization techniques.",
      "Integrated RESTful APIs and GraphQL endpoints, enhancing application functionality and data flow across the system.",
      "Designed and developed a 3D simulation engine using Babylon.js, React, and JavaScript.",
      "Mentored a team of 5 junior developers, conducted code reviews, and introduced best practices, resulting in a 30% improvement in code quality.",
      "Built and integrated reusable components and libraries to streamline development processes and reduce project timelines by 25%.",
      "Spearheaded the front-end development team in the design and implementation of responsive web applications with React, JavaScript and TypeScript."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Reckonsys Tech Labs",
    icon: reckonsys,
    iconBg: "#383E56",
    date: "Oct 2019 - March 2023",
    points: [
      "Developed and maintained web applications using React and JavaScript, resulting in increased user engagement by 15%.",
      "Implemented state management with Redux to handle complex data flows efficiently, reducing app errors by 10%.",
      "Enhanced security by implementing OAuth2 and JWT authentication, improving the application’s user authentication system.",
      "Developed and implemented a digital pharmacy platform for Pharmallama, which organizes prescription medicines into pre-sorted sachets based on dosage, date, and time.",
      "Developed an e-commerce platform for interior designers using Angular, enabling designers to create and manage product listings while allowing customers to browse and purchase items.",
      "Awarded ”Reckoner of the Month” twice for outstanding contributions to high-impact projects."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
