import { dylanShop, eShopper, particleCatcher } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
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
      "I specialize in transforming ideas into <span style='color: white;'>Seamless</span> , <span style='color: white;'>User-Friendly Digital Experiences</span>, all while maintaining a high standard of privacy and security. Take a look at my work to see how I blend creativity with technical expertise to build bespoke web solutions tailored to your needs.",
    ],
  },
  {
    title: "Freelancer Front-end Developer",
    company_name: "Self Employed",
    date: "2023-2024",
    details: [
      "I gained expertise in <span style='color: white;'>HTML, CSS</span> and <span style='color: white;'>Javascript</span>  by creating different kind of small projects.",
      "I honed skills in working with APIs to dynamically display data, collaborated with analysts to meet their needs, and developed<span style='color: white;'> Problem-Solving Abilities</span> to address data-related challenges and optimize performance.",
    ],
  },
];

const portfolio = [
  {
    name: "Dylan Goods Shop",
    description:
      "Built a responsive eCommerce site with HTML, CSS, and JavaScript. Created dynamic product listings and a smooth checkout process using React. Focused on enhancing user experience and performance across all devices.",
    image: dylanShop,
    href: "https://dylan-shop.netlify.app/",
  },
  {
    name: "Particle Catcher Game",
    description: `A particle catcher game built with HTML, CSS, and JavaScript. The game features a dynamic canvas that displays particles and a catcher that the player can move to catch the particles. The game also features a score counter and a game over screen.`,
    image: particleCatcher,
    href: "https://particle-catcher-game.netlify.app/",
  },
  {
    name: "E shopper",
    description: `A modern e-commerce platform built with React and styled using Tailwind CSS. Features a responsive design, product catalog, and seamless shopping experience. Demonstrates proficiency in creating user-friendly interfaces for online retail.`,
    image: eShopper,
    href: "https://e-shopperist.netlify.app/",
  },
];

export { experiences, portfolio };
