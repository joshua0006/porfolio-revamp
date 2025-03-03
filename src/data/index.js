import { cardMatch, elementClash, jic } from "../assets";

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
    name: "Journeys in Communication",
    description: `Interactive learning platform built with React and React Router, featuring educational content about communication strategies. Implements Firebase for user authentication and content storage, with real-time updates through Firestore. Includes interactive quizzes using Redux Toolkit for state management and styled with Tailwind CSS for clean educational layouts.`,
    image: jic,
    href: "https://communicationjourney.netlify.app/",
  },
  {
    name: "Card Matcher",
    description: "Memory matching game built with React and Vite, utilizing Context API for tracking card states and game progress. Features dynamic card animations with CSS transforms, score tracking with Local Storage API, and responsive grid layouts using CSS Grid. Includes multiple difficulty levels and automated CI/CD deployment through Netlify.",
    image: cardMatch,
    href: "https://card-matcher-game.netlify.app/",
  },
  {
    name: "Element Clash",
    description: `Elemental strategy game built with React and Vite, featuring real-time battles between different elements. Implements game logic with custom hooks for elemental strengths/weaknesses systems, animated battles using Framer Motion, and persistent player stats via Firebase. Optimized for performance with code splitting and deployed on Netlify Edge Network.`,
    image: elementClash,
    href: "https://element-clasher.netlify.app/",
  },
];

export { experiences, portfolio };
