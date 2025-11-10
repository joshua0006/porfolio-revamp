import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
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

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
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
      className={`max-w-fit mx-auto mt-6 md:mt-8 flex items-center justify-center bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/20 rounded-full fixed top-0 left-0 right-0 z-40 pointer-events-none transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-6 md:gap-8 px-6 md:px-8 py-3 md:py-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              setActive("hero");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[22px] md:text-[28px] font-bold pointer-events-auto cursor-pointer flex">
              JM
            </p>
          </Link>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-6 md:gap-8 items-center">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              custom={index}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              className={`relative ${
                active === nav.id ? "text-white" : "text-gray-400"
              } hover:text-white text-[14px] md:text-[16px] font-bold pointer-events-auto cursor-pointer transition-all duration-300`}
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

        <div className="sm:hidden flex items-center relative">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-6 absolute top-14 right-0 min-w-[140px] z-30 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10 shadow-xl"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.1, x: 10 }}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.id ? "text-quaternary" : "text-gray-300"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.id);
                        const section = document.getElementById(nav.id);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
