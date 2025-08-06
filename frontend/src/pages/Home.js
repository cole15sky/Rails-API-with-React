import React, { useState } from "react";
import TechIcon from "tech-stack-icons";
import { motion } from "framer-motion";
import coverImg from "../assets/cover.jpg";

const projects = [
  {
    title: "Project One",
    description: "A cool app that does amazing things.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "An innovative platform built with React and Rails.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Dockerized microservices architecture project.",
    link: "#",
  },
  {
    title: "Project Four",
    description: "Full-stack web app with Django and PostgreSQL.",
    link: "#",
  },
  {
    title: "Project Five",
    description: "TypeScript and Node.js powered API service.",
    link: "#",
  },
];

const techStack = [
  "ruby", "js", "rails", "react", "python", "nodejs", "typescript",
  "vuejs", "nuxtjs", "django", "postgresql", "mysql", "docker",
  "postman", "tailwindcss", "framer", "git", "linux",
];

export default function Home() {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedTech = showAllTech ? techStack : techStack.slice(0, 12);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0b132b] via-[#1c2541] to-[#3a5068] text-gray-100 px-6 sm:px-10 md:px-24 py-20 font-sans">
      
      {/* HERO */}
      <section className="max-w-4xl mx-auto mb-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Hey, This is <span className="text-white">Aakash</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl mt-8 max-w-xl mx-auto text-gray-300 leading-relaxed"
        >
Fueled by curiosity and caffeine, I craft full-stack applications that solve real-world problems.

        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="inline-block mt-12 px-12 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-500 transition"
        >
          View Projects
        </motion.a>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto mb-32 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-7">
A Curious Mind
          </h2>
          <p>
In the heart of Nepal, under the looming presence of the Himalayas, a boy constantly questioned everything. His inquiries evolved into profound musings—about life, death, coffee, and even semicolons.          </p>
          <p className="mt-5">
Outside the Dev, I’m a bit of a wild soul — always chasing the next thrill. Whether it’s solo travel, high-altitude hikes, cycling through remote trails, or spontaneous treks into the unknown, I live for the journey. It’s in those raw, offbeat moments that I find clarity — the same clarity I bring to crafting meaningful, user-focused software.          </p>
        </motion.div>
        <motion.img
          src={coverImg}
          alt="Aakash Dawadi"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-right shadow-2xl object-cover  border-4 border-blue-400"
        />
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-10">Tech Stack</h2>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-2 sm:px-6"
        >
          {displayedTech.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{
                scale: 1.25,
                boxShadow: "0 0 20px 6px rgba(59, 130, 246, 0.8)",
                borderColor: "#3b82f6",
                transition: { duration: 0.3 },
              }}
              className="flex flex-col items-center justify-center p-5 rounded-xl border-2 border-transparent cursor-pointer bg-[#142d4c] text-blue-300"
            >
              <TechIcon name={tech} className="text-3xl w-12 h-12 sm:w-14 sm:h-14" />
              <span className="mt-3 text-sm font-semibold select-text text-blue-200">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAllTech(!showAllTech)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 font-semibold transition"
          >
            {showAllTech ? "Show Less" : "Show More"}
            <motion.span
              animate={{ rotate: showAllTech ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ▼
            </motion.span>
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto mb-32 px-4 sm:px-6" id="projects">
        <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center text-blue-400">Projects</h2>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14"
        >
          {displayedProjects.map(({ title, description, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.07,
                boxShadow: "0 10px 40px rgb(59 130 246 / 0.6)",
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="block bg-[#142d4c] rounded-3xl p-7 shadow-md hover:shadow-blue-500/70 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
              <span className="mt-6 inline-block text-blue-300 font-medium underline">
                View More →
              </span>
            </motion.a>
          ))}
        </motion.div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 font-semibold transition"
          >
            {showAllProjects ? "Show Less" : "Show More"}
            <motion.span
              animate={{ rotate: showAllProjects ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ▼
            </motion.span>
          </button>
        </div>
      </section>
    </div>
  );
}
