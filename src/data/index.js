import {
  dylanShop,
} from "../assets";

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
    title: "Front-end Developer",
    company_name: "Self Employed",
    date: "2023 - Present",
    details: [
      "I specialize in transforming ideas into <span style='color: white;'>Seamless</span> , <span style='color: white;'>User-Friendly Digital Experiences</span>, all while maintaining a high standard of privacy and security. Take a look at my work to see how I blend creativity with technical expertise to build bespoke web solutions tailored to your needs.",
    ],
  },
  {
    title: "Data Analytics",
    company_name: "Local Government",
    date: "2023",
    details: [
      "I gained expertise in <span style='color: white;'>Data Visualization</span> by creating interactive charts.",
      "I honed skills in working with APIs to dynamically display data, collaborated with analysts to meet their needs, and developed<span style='color: white;'> Problem-Solving Abilities</span> to address data-related challenges and optimize performance."
    ],
  },
];

const portfolio = [
  {
    name: "Ecommerce Site",
    description:
      "Built a responsive eCommerce site with HTML, CSS, and JavaScript. Created dynamic product listings and a smooth checkout process using React. Focused on enhancing user experience and performance across all devices.",
    image: dylanShop,
  }
];

export { experiences, portfolio };

