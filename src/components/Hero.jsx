import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I’m <span className="text-primary">{portfolioData.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300"
          >
            {portfolioData.tagline}
          </motion.p>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={portfolioData.image}
            alt="Profile"
            className="w-56 h-56 rounded-full border-4 border-primary object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
