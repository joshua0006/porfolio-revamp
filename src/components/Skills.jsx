import { motion } from "framer-motion";
import { skills } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.5)}
      className="bg-tertiary/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200 hover:bg-tertiary/70"
    >
      <div className="flex items-center justify-between">
        <span className="text-white font-medium text-[16px]">{skill.name}</span>
        <span className="text-gray-400 text-[12px] uppercase tracking-wide">
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Skills</h2>
      </motion.div>

      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={fadeIn("up", "spring", categoryIndex * 0.1, 0.6)}
            className="space-y-3"
          >
            <h3 className="text-white font-semibold text-[18px] mb-4 border-b border-gray-600/30 pb-2">
              {category.category}
            </h3>
            <div className="space-y-2">
              {category.technologies.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={categoryIndex * 3 + skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
