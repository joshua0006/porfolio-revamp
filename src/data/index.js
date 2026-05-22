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
  metaflow,
  analyticsDashboard,
  easyhiresg,
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
      "Design systems and UI kits in <span style='color: white;'>HTML</span>, <span style='color: white;'>CSS</span>, and <span style='color: white;'>JavaScript</span>, built with <span style='color: white;'>CSS Modules</span> and <span style='color: white;'>Tailwind CSS</span> for consistent, maintainable styling",
      "Shipped <span style='color: white;'>WCAG 2.1</span> accessible components; worked with developers on <span style='color: white;'>React</span> / <span style='color: white;'>JSX</span> implementations and design handoff",
      "Ran <span style='color: white;'>A/B tests</span>, tightened user flows, and improved conversion rates by ~30%",
      "Motion and micro-interactions in <span style='color: white;'>Framer Motion</span>; used <span style='color: white;'>Cursor AI</span> and <span style='color: white;'>Claude AI</span> to speed up layout, refactors, and component work",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Exercise For Injuries",
    date: "2024 - 2025",
    details: [
      "Built responsive apps with <span style='color: white;'>React</span>, <span style='color: white;'>Next.js</span>, <span style='color: white;'>TypeScript</span>, and modern <span style='color: white;'>JavaScript</span> (<span style='color: white;'>ES6+</span>); 95+ Lighthouse scores on shipped pages",
      "State and data layer: <span style='color: white;'>Redux Toolkit</span>, <span style='color: white;'>React Query</span>, and <span style='color: white;'>REST</span> APIs; optimized queries and payloads to cut load times ~40%",
      "Tooling and delivery: <span style='color: white;'>Git</span>, <span style='color: white;'>Node.js</span> ecosystem, <span style='color: white;'>CI/CD</span> with GitHub Actions and <span style='color: white;'>Docker</span> for repeatable builds",
      "Code reviews and mentoring on <span style='color: white;'>clean architecture</span>, patterns, and performance for the rest of the team",
    ],
  },
  {
    title: "Freelancer Front-end Developer",
    company_name: "Self Employed",
    date: "2023-2024",
    details: [
      "Delivered 15+ production sites and apps using <span style='color: white;'>React</span>, <span style='color: white;'>JavaScript</span> (<span style='color: white;'>ES6+</span>), <span style='color: white;'>HTML</span>, <span style='color: white;'>CSS</span>, and <span style='color: white;'>Tailwind CSS</span> for fast, responsive UIs",
      "Backend-as-a-service with <span style='color: white;'>Firebase</span> (auth, Firestore / realtime listeners); <span style='color: white;'>REST</span> integrations using <span style='color: white;'>Axios</span> and solid error handling",
      "Performance work for 90+ Core Web Vitals; bundling with <span style='color: white;'>Webpack</span> and <span style='color: white;'>Vite</span> depending on project",
      "Workflow: <span style='color: white;'>npm</span>, <span style='color: white;'>Git</span>, and automated deploys on <span style='color: white;'>Netlify</span> with CI/CD hooks",
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
    name: "EasyHireSG",
    description: `Maid agency platform for Singapore—helper search by experience and nationality, package cost breakdown, and transparent no-service-fee booking flow.`,
    image: easyhiresg,
    href: "https://www.easyhiresg.com/",
  },
  {
    name: "Analytics Dashboard",
    description: `Unified YouTube + Web Store analytics—combined revenue, views, and store units across multiple channels and stores with 7D/30D/90D range switching.`,
    image: analyticsDashboard,
    href: "https://analytics-dashboard-youtube.vercel.app",
  },
  {
    name: "MetaFlow",
    description: `AI advertising intelligence dashboard—live campaign health, agent-driven budget approvals, ROAS tracking, and multi-agent automation across Meta ad accounts.`,
    image: metaflow,
    href: "https://marketing-scaffold.vercel.app/",
  },
  {
    name: "Adventures in Speech Pathology",
    description: `Educational resources by SLPs for SLPs—worksheets, activities, assessments. Catalogs, resource finder, membership, bookmarks for therapy-ready materials.`,
    image: adventuresInSpeechPathology,
    href: "https://therapytools.netlify.app/",
  },
  {
    name: "Rave Remedy",
    description: `E-commerce landing for recovery supplements—bold branding, hero imagery, shop navigation, cart. Desktop and mobile.`,
    image: raveRemedy,
    href: "https://raveremedy.com/",
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
