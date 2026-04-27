import {
  cardMatch,
  elementClash,
  adventuresInSpeechPathology,
  pineappleTours,
  breakawayCycles,
  architectHub,
  athenaCleaning,
  moneyBee,
  raveRemedy,
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
    date: "2023 - 2026",
    details: [
      "Created design systems using <span style='color: white;'>CSS Modules</span> and <span style='color: white;'>Tailwind CSS</span>",
      "Improved conversion rates by 30% through <span style='color: white;'>A/B testing</span> and user flow optimization",
      "Developed <span style='color: white;'>WCAG 2.1</span> compliant accessible components",
      "Collaborated with developers to implement <span style='color: white;'>motion design</span> using Framer Motion",
      "Integrated <span style='color: white;'>Cursor AI</span> and <span style='color: white;'>Claude AI</span> for intelligent code generation, refactoring, and automated component development",
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
    name: "Pineapple Tours",
    description: `Tour booking for South East Queensland—wine tours, hop-on-hop-off, private charters. Updated booking flow and logic; React components run inside WordPress so editors keep the CMS and guests get a modern checkout.`,
    image: pineappleTours,
    href: "https://pineappletours.com.au/",
    featured: true,
  },
  {
    name: "Breakaway Cycles",
    description: `Bicycle parts e-commerce: catalog, filters, cart, secure checkout. React, responsive layout, optimized for fast loads.`,
    image: breakawayCycles,
    href: "https://bicycle-parts-ecommerce.vercel.app/",
    featured: true,
  },
  {
    name: "Joshua Hub",
    description: `Task and document hub: projects, files, workflows. The live Netlify demo uses mock data only—production handles sensitive data that cannot be shared.`,
    image: architectHub,
    href: "https://joshua-hub.netlify.app/",
    featured: true,
  },
];

const additionalProjects = [
  {
    name: "Adventures in Speech Pathology",
    description: `Educational resources by SLPs for SLPs—worksheets, activities, assessments. Catalogs, resource finder, membership, bookmarks for therapy-ready materials.`,
    image: adventuresInSpeechPathology,
    href: "https://adventuresinspeechpathology.com/",
  },
  {
    name: "Card Matcher",
    description:
      "Memory matching game—React, Vite, Context API, CSS transforms, Local Storage scores, CSS Grid. Difficulty levels; deployed on Netlify.",
    image: cardMatch,
    href: "https://card-matcher-game.netlify.app/",
  },
  {
    name: "Element Clash",
    description: `Element battle game—React, Vite, custom hooks, Framer Motion battles, Firebase stats. Netlify deployment.`,
    image: elementClash,
    href: "https://element-clasher.netlify.app/",
  },
  {
    name: "Athena Cleaning",
    description: `React marketing site for a cleaning company—services, booking, contact, branding. Responsive, mobile-first.`,
    image: athenaCleaning,
    href: "https://athena-cleaning.netlify.app/",
  },
  {
    name: "Money Bee",
    description: `Personal finance dashboard—income and expenses, categories, history, balance summaries, and clear transaction views.`,
    image: moneyBee,
    href: "https://money-bee.netlify.app/",
  },
  {
    name: "Rave Remedy",
    description: `E-commerce landing for recovery supplements—bold branding, hero imagery, shop navigation, cart. Desktop and mobile.`,
    image: raveRemedy,
    href: "https://raveremedy.com/",
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
