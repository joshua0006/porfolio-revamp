import {
  cardMatch,
  elementClash,
  jic,
  redHorizon,
  breakawayCycles,
  architectHub,
  athenaCleaning,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
  tailwindcssIcon,
  typescriptIcon,
  framerIcon,
  expoIcon,
  nodejsIcon,
  firebaseIcon,
  restapiIcon,
  cursorIcon,
  claudeIcon,
  v0Icon,
  githubIcon,
  viteIcon,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "Jezweb",
    date: "2023 - Present",
    details: [
      "Designed 25+ responsive interfaces using <span style='color: white;'>Figma</span> with mobile-first approach",
      "Created design systems using <span style='color: white;'>CSS Modules</span> and <span style='color: white;'>Tailwind CSS</span>",
      "Improved conversion rates by 30% through <span style='color: white;'>A/B testing</span> and user flow optimization",
      "Developed <span style='color: white;'>WCAG 2.1</span> compliant accessible components",
      "Collaborated with developers to implement <span style='color: white;'>motion design</span> using Framer Motion",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Exercise For Injuries",
    date: "2024 - 2025",
    details: [
      "Developed responsive web applications using <span style='color: white;'>React, Next.js, and TypeScript</span> with 95+ Lighthouse performance scores",
      "Implemented <span style='color: white;'>Redux Toolkit</span> for state management and <span style='color: white;'>React Query</span> for server-state synchronization",
      "Integrated <span style='color: white;'>RESTful APIs</span> and optimized database queries reducing load times by 40%",
      "Established <span style='color: white;'>CI/CD pipelines</span> using GitHub Actions and Docker containers",
      "Conducted code reviews and mentored junior developers in <span style='color: white;'>clean architecture</span> principles",
    ],
  },
  {
    title: "Freelancer Front-end Developer",
    company_name: "Self Employed",
    date: "2023-2024",
    details: [
      "Built 15+ production applications using <span style='color: white;'>React, Tailwind CSS, and JavaScript</span>",
      "Integrated <span style='color: white;'>Firebase</span> authentication and realtime databases for client projects",
      "Implemented <span style='color: white;'>REST API</span> integrations with Axios and error handling",
      "Optimized web performance achieving <span style='color: white;'>90+ Core Web Vitals</span> scores",
      "Configured <span style='color: white;'>Webpack</span> builds and automated deployments using Netlify CI/CD",
    ],
  },
];

const portfolio = [
  {
    name: "Red Horizon",
    description: `Premium travel booking and tour platform built with Next.js and TypeScript. Features comprehensive vacation packages, destination search functionality, and seamless booking experiences for tropical getaways. Implements server-side rendering for optimal SEO, dynamic route generation, and modern UI/UX design with Tailwind CSS for responsive layouts across all devices.`,
    image: redHorizon,
    href: "https://red-horizon-silk.vercel.app/",
    featured: true,
  },
  {
    name: "Breakaway Cycles",
    description: `Comprehensive e-commerce platform specializing in bicycle parts and components. Features product catalog browsing, advanced filtering systems, shopping cart functionality, and secure checkout processes. Built with modern React architecture, responsive design patterns, and optimized for performance with fast loading times and intuitive user experience.`,
    image: breakawayCycles,
    href: "https://bicycle-parts-ecommerce.vercel.app/",
    featured: true,
  },
  {
    name: "Joshua Hub",
    description: `Advanced task management hub with integrated document handling and organizational structure. Features project tracking, file management systems, collaborative workflows, and structured document organization. Built with modern web technologies focusing on productivity enhancement, user-friendly interfaces, and seamless document processing capabilities.`,
    image: architectHub,
    href: "https://joshua-hub.netlify.app/",
    featured: true,
  },
];

const additionalProjects = [
  {
    name: "Journeys in Communication",
    description: `Interactive learning platform built with React and React Router, featuring educational content about communication strategies. Implements Firebase for user authentication and content storage, with real-time updates through Firestore. Includes interactive quizzes using Redux Toolkit for state management and styled with Tailwind CSS for clean educational layouts.`,
    image: jic,
    href: "https://communicationjourney.netlify.app/",
  },
  {
    name: "Card Matcher",
    description:
      "Memory matching game built with React and Vite, utilizing Context API for tracking card states and game progress. Features dynamic card animations with CSS transforms, score tracking with Local Storage API, and responsive grid layouts using CSS Grid. Includes multiple difficulty levels and automated CI/CD deployment through Netlify.",
    image: cardMatch,
    href: "https://card-matcher-game.netlify.app/",
  },
  {
    name: "Element Clash",
    description: `Elemental strategy game built with React and Vite, featuring real-time battles between different elements. Implements game logic with custom hooks for elemental strengths/weaknesses systems, animated battles using Framer Motion, and persistent player stats via Firebase. Optimized for performance with code splitting and deployed on Netlify Edge Network.`,
    image: elementClash,
    href: "https://element-clasher.netlify.app/",
  },
  {
    name: "Athena Cleaning",
    description: `Professional cleaning service website built with React, featuring service showcases, booking functionality, and responsive design. Implements modern UI components for service displays, contact forms, and company branding. Optimized for mobile-first experience with clean layouts, intuitive navigation, and customer engagement features designed for residential cleaning services.`,
    image: athenaCleaning,
    href: "https://athena-cleaning.netlify.app/",
  },
];

const skills = [
  {
    category: "Frontend Development",
    technologies: [
      {
        name: "JavaScript",
        level: "Expert",
        color: "from-yellow-400 to-yellow-600",
        icon: javascriptIcon,
      },
      {
        name: "React.js",
        level: "Expert",
        color: "from-blue-400 to-blue-600",
        icon: reactIcon,
      },
      {
        name: "Next.js",
        level: "Advanced",
        color: "from-gray-700 to-gray-900",
        icon: nextjsIcon,
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        color: "from-cyan-400 to-cyan-600",
        icon: tailwindcssIcon,
      },
      {
        name: "TypeScript",
        level: "Advanced",
        color: "from-blue-500 to-blue-700",
        icon: typescriptIcon,
      },
      {
        name: "Framer Motion",
        level: "Advanced",
        color: "from-pink-400 to-pink-600",
        icon: framerIcon,
      },
    ],
  },
  {
    category: "Mobile Development",
    technologies: [
      {
        name: "React Native",
        level: "Advanced",
        color: "from-blue-500 to-blue-700",
        icon: reactIcon,
      },
      {
        name: "Expo",
        level: "Advanced",
        color: "from-indigo-500 to-indigo-700",
        icon: expoIcon,
      },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      {
        name: "Node.js",
        level: "Advanced",
        color: "from-green-500 to-green-700",
        icon: nodejsIcon,
      },
      {
        name: "Google Firebase",
        level: "Advanced",
        color: "from-orange-400 to-orange-600",
        icon: firebaseIcon,
      },
      {
        name: "REST APIs",
        level: "Advanced",
        color: "from-purple-400 to-purple-600",
        icon: restapiIcon,
      },
    ],
  },
  {
    category: "AI Tools",
    technologies: [
      {
        name: "Cursor AI",
        level: "Expert",
        color: "from-indigo-400 to-indigo-600",
        icon: cursorIcon,
      },
      {
        name: "Claude AI",
        level: "Advanced",
        color: "from-purple-500 to-purple-700",
        icon: claudeIcon,
      },
      {
        name: "v0 by Vercel",
        level: "Advanced",
        color: "from-gray-600 to-gray-800",
        icon: v0Icon,
      },
    ],
  },

  {
    category: "Development Tools",
    technologies: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        color: "from-gray-800 to-black",
        icon: githubIcon,
      },
      {
        name: "Vite",
        level: "Advanced",
        color: "from-purple-400 to-pink-400",
        icon: viteIcon,
      },
    ],
  },
];

export { experiences, portfolio, additionalProjects, skills };
