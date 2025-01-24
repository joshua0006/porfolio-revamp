import { dylanShop, elementClash, shopHub } from "../assets";

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
      "I transform complex ideas into <span style='color: white;'>intuitive</span> and <span style='color: white;'>highly responsive</span> digital solutions. I’m committed to crafting secure, seamless user experiences that are both functional and visually compelling. My work blends innovative design with technical precision, ensuring every project is tailored to meet the unique needs of clients while prioritizing privacy and security. Explore my projects to see how I deliver cutting-edge web solutions that elevate user engagement.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Jezweb",
    date: "2023 - Present",
    details: [
      "At Jezweb, I focus on creating <span style='color: white;'>stunning</span>, <span style='color: white;'>user-centered designs</span> that leave a lasting impact. I believe in turning ideas into designs that are not only beautiful but also optimized for performance and accessibility. My approach combines creativity with functionality, ensuring that each website provides an exceptional experience for every user, while maintaining a strong emphasis on security and privacy. Let my work showcase how design can be a perfect blend of form and function.",
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
    name: "Shop Hub",
    description: `ShopHube is an online shopping platform offering a wide range of products, from electronics to fashion, designed to provide a seamless and user-friendly shopping experience. With intuitive navigation and secure payment options, it’s your go-to destination for convenient and reliable e-commerce.`,
    image: shopHub,
    href: "https://shophube.netlify.app/",
  },
  {
    name: "Dylan Goods Shop",
    description:
      "Built a responsive eCommerce site with HTML, CSS, and JavaScript. Created dynamic product listings and a smooth checkout process using React. Focused on enhancing user experience and performance across all devices.",
    image: dylanShop,
    href: "https://dylan-shop.netlify.app/",
  },
  {
    name: "Element Clash",
    description: `a fast-paced browser strategy game where players merge elemental forces to outsmart opponents. Built with Vite, React, and Tailwind CSS, it delivers a sleek, responsive experience with smooth animations and real-time interactions. The tech stack ensures lightning-fast performance and a clean, modern interface, while React powers dynamic gameplay mechanics and Tailwind CSS enables crisp, mobile-friendly design.`,
    image: elementClash,
    href: "https://element-clasher.netlify.app/",
  },
];

export { experiences, portfolio };
