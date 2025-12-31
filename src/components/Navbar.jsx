import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
          {portfolioData.name}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li><a href="#about" className="hover:text-primary">About</a></li>
          <li><a href="#skills" className="hover:text-primary">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary">Projects</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-6 space-y-4 text-gray-300 bg-dark/90"
          >
            <li><a onClick={() => setOpen(false)} href="#about" className="hover:text-primary">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact" className="hover:text-primary">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
