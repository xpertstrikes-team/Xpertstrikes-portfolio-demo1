import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-dark/60 border border-white/10 rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-5">
                  <a
                    href={project.live}
                    className="text-primary hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
