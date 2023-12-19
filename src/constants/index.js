import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  Resume,
  DC,
  imagerecognition,
  C,
  Techno,
  Shaarp,
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
  {
    title: "A.I Developer",
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
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python Toolkit",
    icon: python,
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
    icon: C,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Kabadi Techno",
    icon: Techno,
    iconBg: "#383E56",
    date: "May 2022 - November 2023",
    points: [
      "Spearheading Flutter app development, utilizing the framework's capabilities to craft robust and engaging mobile applications.",
      "Engaging in seamless collaboration with cross-functional teams, including designers and product managers, to ensure the delivery of high-quality Flutter-based products.",
      "Implementing responsive design principles in Flutter, guaranteeing a consistent and user-friendly experience across various mobile devices",
      "Actively participating in code reviews for Flutter projects, offering constructive feedback to enhance the overall codebase and maintain development standards.",
    ],
  },


  {
    title: "Full stack Developer",
    company_name: "Shaarp Meta-Verse",
    icon: Shaarp,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Spearheading React.js web application development , blockchain and Api integration, leveraging related technologies to create and maintain robust, high-quality products.",
      "Collaborating seamlessly with cross-functional teams, including designers, product managers, and developers, for both web and app development projects, fostering a collaborative environment",
      "Implementing responsive design principles in React.js and Flutter, ensuring a seamless user experience across various devices, while also managing database systems for optimal performance.",
      "Actively participating in code reviews for both web and app development, providing constructive feedback and maintaining code quality standards, especially in the context of blockchain integration and database management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I believed creating a website as stunning as our product was an impossible task, but Shubham proved me wrong..",
    name: "Rajeev Singh",
    designation: "Tech-head",
    company: "TFS",
    image: "/rajiv.jpg",
  },
  {
    testimonial:
      "In the realm of web development, Shubham stands out as a rare gem, embodying a genuine commitment to the success of his clients that I've seldom encountered.",
    name: "Aman bhadelwal",
    designation: "CTO",
    company: "Kabadi Techno",
    image: "/Aman.jpg",
  },
  {
    testimonial:
      "In the aftermath of Shubham's optimization magic on our website, our traffic soared by an impressive 50%! Gratitude knows no bounds for the transformative touch he brought to our digital presence.",
    name: "Rahul Sharma",
    designation: "Team-Head",
    company: "ISP",
    image: "/Rahul.jpg",
  },
];

const projects = [
  {
    name: "Resume maker",
    description:
      "Designed and implemented a web-based platform enabling users to create, customize, and manage professional resumes with ease, offering a streamlined solution for effective career development",
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
    image: Resume,
    source_code_link: "https://github.com/eklotaravan/resume_maker_free",
  },
  {
    name: "Deewan Cars",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo Db",
        color: "green-text-gradient",
      },
      {
        name: "Talwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: DC,
    source_code_link: "https://github.com/",
  },
  {
    name: "Image Recognition",
    description:
      "Implemented image recognition capabilities leveraging deep learning techniques, enhancing system intelligence for accurate and efficient image analysis in diverse applications.",
    tags: [
      {
        name: "ANN",
        color: "blue-text-gradient",
      },
      {
        name: "Colab",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: imagerecognition,
    source_code_link: "https://github.com/eklotaravan/imagerecognitionusingdeeplearning",
  },
];

export { services, technologies, experiences, testimonials, projects };
