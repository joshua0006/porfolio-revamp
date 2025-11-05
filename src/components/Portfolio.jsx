import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { portfolio, additionalProjects } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="text-left">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-left`}>Portfolio</h2>
      </motion.div>

      {/* Featured Projects */}
      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {portfolio.map((project, index) => (
          <ProjectCard key={`featured-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-10 md:mt-20 text-center"
      >
        <button
          onClick={handleViewAllProjects}
          className="bg-tertiary px-8 py-3 rounded-xl text-white font-bold hover:bg-tertiary/80 transition-all duration-300 transform hover:scale-105"
        >
          View All Projects
        </button>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
