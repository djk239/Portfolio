import React from "react";
import { motion } from "framer-motion";
import Projectcard from "../components/Projectcard";
import { projects } from "../data/projects";

/* animation presets */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white px-6 py-16">
      
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-6xl mx-auto mb-14"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Projects
        </h1>

        <p className="text-neutral-400 max-w-2xl">
          A collection of things I’ve built — ranging from full-stack apps to experiments
          and systems designed to solve interesting problems.
        </p>

        <div className="mt-6 h-1 w-24 bg-red-500/60 rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="h-full"
          >
            <Projectcard
              title={project.title}
              text={project.text}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
