import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import rutgers from "../assets/rutgers.png";
import degree from "../assets/degree.jpeg";
import Classcard from "../components/Classcard";
import { courses } from "../data/courses";

/* Animation presets */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Rutgers() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT COL */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold">
            Rutgers University
          </motion.h1>

          <motion.p variants={fadeUp} className="text-neutral-300 leading-relaxed">
            In May of 2024, I graduated from Rutgers University with a Bachelor's degree in Computer Science.
          </motion.p>
          <motion.p variants={fadeUp} className="text-neutral-300 leading-relaxed">
            My coursework covered core areas such as data structures, algorithms, computer architecture,
            operating systems, and software engineering. These classes built a strong foundation in how
            software works beyond just writing code.
          </motion.p>

          {/* Projects / Coursework */}
          <motion.div variants={container} className="grid gap-6">
            <motion.h1 variants={fadeUp} className="text-2xl font-bold">
              Relevant Course Work
            </motion.h1>

              {courses.map((c) => (
                <motion.div key={c.id} variants={fadeUp}>
                  <Classcard
                    title={c.title}
                    text={c.text}
                    Icon={c.icon}
                  />
                </motion.div>
              ))}

              {/* Link to all classes */}
              <motion.div variants={fadeUp} className="pt-2">
                <div className="mt-6 text-center">
                  <Link
                    to="/stack"
                    className="text-sm text-neutral-400 hover:text-neutral-200 transition underline underline-offset-4"
                  >
                    View all languages & tools I've worked with →
                  </Link>
                </div>
              </motion.div>

          </motion.div>
        </motion.div>

        {/* RIGHT COL */}
        <div className="flex flex-col gap-10 items-center lg:items-start">

          <motion.img
            variants={slideRight}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.04, rotate: -0.5 }}
            src={rutgers}
            alt="Rutgers University Logo"
            className="w-full max-w-xs rounded-2xl object-cover shadow-xl"
          />

          <motion.img
            variants={slideLeft}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.04, rotate: 0.5 }}
            src={degree}
            alt="Dale King degree"
            className="w-full max-w-sm rounded-2xl object-cover shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Rutgers;