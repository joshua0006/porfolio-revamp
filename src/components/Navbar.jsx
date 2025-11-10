import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      // Show navbar when scrolling up or at top, hide when scrolling down
      if (scrollTop < lastScrollY || scrollTop < 10) {
        setShowNavbar(true);
      } else if (scrollTop > lastScrollY && scrollTop > 100) {
        setShowNavbar(false);
      }

      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`max-w-fit mx-auto mt-2 xs:mt-4 sm:mt-6 md:mt-8 flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/40 ring-1 ring-white/5 rounded-full fixed top-0 left-0 right-0 z-40 pointer-events-none transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2 xs:gap-4 sm:gap-10 md:gap-12 px-3 xs:px-4 sm:px-8 md:px-12 py-2 xs:py-3 sm:py-4 md:py-5">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              setActive("hero");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[18px] xs:text-[22px] sm:text-[28px] md:text-[36px] font-bold pointer-events-auto cursor-pointer flex">
              JM
            </p>
          </Link>
        </motion.div>

        <ul className="list-none flex flex-row gap-2 xs:gap-4 sm:gap-6 md:gap-10 items-center">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              custom={index}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              className={`relative ${
                active === nav.id ? "text-white" : "text-gray-400"
              } hover:text-white text-[11px] xs:text-[13px] sm:text-[16px] md:text-[18px] font-bold pointer-events-auto cursor-pointer transition-all duration-300`}
              onClick={() => {
                setActive(nav.id);
                const section = document.getElementById(nav.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <a
                href={`#${nav.id}`}
                className={`pb-1 ${
                  active === nav.id ? "border-b-2 border-quaternary" : ""
                }`}
              >
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
