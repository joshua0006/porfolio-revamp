import { motion } from "framer-motion";
import { skills } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative bg-[#0a0a0a] px-5 py-4 rounded-xl border border-gray-800/50 hover:border-violet-500/40 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        {skill.icon && (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-7 h-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
        )}
        <span className="text-white/90 font-medium text-[15px] tracking-wide">{skill.name}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="text-left">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-left`}>Skills</h2>
      </motion.div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {skills.map((category) => (
          <div key={category.category} className="space-y-4">
            <h3 className="text-white/60 font-medium text-[13px] uppercase tracking-widest mb-5">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.technologies.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
