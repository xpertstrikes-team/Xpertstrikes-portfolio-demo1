import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-dark px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>

          <h3 className="text-lg text-gray-400 mb-4">
            {portfolioData.role}
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {portfolioData.about}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-xl bg-dark/60 border border-white/10">
            <h4 className="text-2xl font-bold text-primary">Experience</h4>
            <p className="text-gray-400 mt-2">
              {portfolioData.experience}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-dark/60 border border-white/10">
            <h4 className="text-2xl font-bold text-primary">Focus</h4>
            <p className="text-gray-400 mt-2">
              {portfolioData.focus}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-dark/60 border border-white/10 col-span-2">
            <h4 className="text-2xl font-bold text-primary">Availability</h4>
            <p className="text-gray-400 mt-2">
              {portfolioData.availability}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
