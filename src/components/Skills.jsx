import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-dark px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-12"
        >
          Skills
        </motion.h2>

        {/* Container Card */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-dark/60 border border-white/10"
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-primary font-semibold"
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  className="h-3 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
