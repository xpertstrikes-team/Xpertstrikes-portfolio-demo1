import myPhoto from "../assets/photo.jpg"; // 👈 NEW
export const portfolioData = {
  name: "Your Name",
  role: "Frontend Developer",
  experience: "Fresher / 1+ Years",
  focus: "React, UI Design, Responsive Websites",
  availability: "Open for internships, freelance & full-time roles",
  tagline: "Building modern, responsive web experiences.",
  about:
    "I am a passionate student focused on creating clean, user-friendly and scalable web applications.",
  image: myPhoto, // 👈 NEW
  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ],
  projects: [
    {
      title: "Portfolio Website",
      description: "Modern responsive personal portfolio website.",
      image: "/project1.jpg",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "#",
      github: "#",
    },
    {
      title: "Student Management System",
      description: "Web app to manage students and records.",
      image: "/project2.jpg",
      tech: ["React", "Node", "MongoDB"],
      live: "#",
      github: "#",
    },
  ],
  contact: {
    email: "example@gmail.com",
    whatsapp: "91XXXXXXXXXX",
    phone: "91XXXXXXXXXX",
  },
  socials: {
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username",
    instagram: "https://instagram.com/username",
  },
};
