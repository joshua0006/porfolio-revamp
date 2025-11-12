import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, href }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5`}
    >
      <div className="relative w-full md:w-3/5">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {name === "Money Bee" ? (
            <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 md:rounded-3xl">
              <img
                src={image}
                alt="project_image"
                className="add-effect max-w-[60%] h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity duration-300 rounded-2xl shadow-lg"
              />
            </div>
          ) : (
            <img
              src={image}
              alt="project_image"
              className="add-effect w-full h-auto max-h-[400px] md:max-h-[500px] object-cover object-top md:rounded-3xl cursor-pointer hover:opacity-90 transition-opacity duration-300"
            />
          )}
        </a>
      </div>

      <div
        className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${
          isEven ? "text-left md:text-left" : "text-left md:text-right"
        }`}
      >
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight xl:whitespace-nowrap">
          {name}
        </h3>
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
