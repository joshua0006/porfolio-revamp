import { dylanShop, elementClash, shopHub } from "../assets";

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
    title: "Web Developer",
    company_name: "Exercise For Injuries",
    date: "2024 - Present",
    details: [
      "Developed responsive web applications using <span style='color: white;'>React, Next.js, and TypeScript</span> with 95+ Lighthouse performance scores",
      "Implemented <span style='color: white;'>Redux Toolkit</span> for state management and <span style='color: white;'>React Query</span> for server-state synchronization",
      "Integrated <span style='color: white;'>RESTful APIs</span> and optimized database queries reducing load times by 40%",
      "Established <span style='color: white;'>CI/CD pipelines</span> using GitHub Actions and Docker containers",
      "Conducted code reviews and mentored junior developers in <span style='color: white;'>clean architecture</span> principles",
    ],
  },
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
    name: "Shop Hub",
    description: `Built with React and React Router for seamless navigation, integrated with Redux Toolkit for state management. Features Firebase backend for product data and user authentication, Stripe API for payment processing, and styled with Tailwind CSS. Deployed on Netlify with continuous integration.`,
    image: shopHub,
    href: "https://shophube.netlify.app/",
  },
  {
    name: "Dylan Goods Shop",
    description:
      "React-powered eCommerce platform using Context API for state management. Built with Vite for tooling, implements responsive design through CSS Grid/Flexbox, and features dynamic product filtering. Deployed via Netlify with automated CI/CD pipelines.",
    image: dylanShop,
    href: "https://dylan-shop.netlify.app/",
  },
  {
    name: "Element Clash",
    description: `React game built with Vite and optimized with Tailwind CSS. Features real-time interactions using WebSocket, complex game logic through custom hooks, and animations powered by Framer Motion. Includes PWA capabilities and deployed on Netlify Edge Network.`,
    image: elementClash,
    href: "https://element-clasher.netlify.app/",
  },
];

export { experiences, portfolio };
