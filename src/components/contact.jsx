import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "Send a mail",
    link: (email) => `mailto:${email}`,
  },
  {
    icon: <FaPhoneAlt />,
    label: "Call",
    value: "Direct call",
    link: (phone) => `tel:${phone}`,
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "Quick chat",
    link: (phone) => `https://wa.me/${phone}`,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Professional profile",
    link: (url) => url,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "Code & projects",
    link: (url) => url,
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    value: "Creative updates",
    link: (url) => url,
  },
];

const Contact = () => {
  const { email, phone, whatsapp, socials } = portfolioData;

  const values = [
    email,
    phone,
    whatsapp,
    socials.linkedin,
    socials.github,
    socials.instagram,
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-primary"
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Open to opportunities, collaborations, and conversations.
        </p>

        {/* Unified Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link(values[index])}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-dark/60 border border-white/10 hover:border-primary transition text-left"
            >
              <div className="text-3xl text-primary mb-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {item.label}
              </h3>
              <p className="text-gray-400 mt-1 text-sm">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
