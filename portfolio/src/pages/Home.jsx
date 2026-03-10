import { motion } from "framer-motion";
import portrait from "../assets/port.jpeg";
import Classcard from "../components/Classcard";
import { Computer, Brain, Bot } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="space-y-32 pb-24">
      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT: COL */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-100"
            >
              Hey, I'm Dale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed"
            >
              I'm a software developer, and I built this site using React and Tailwind.
              Right now my main interests are web and video game development, along with some machine learning.
              I'm always spinning up and learning something new — this portfolio is part of that process.
              Thanks for visiting and taking the time to learn a bit about me.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="/projects"
                className="px-6 py-3 rounded-xl bg-red-700/20 backdrop-blur-md text-white font-bold hover:bg-red-600/30 transition"
              >
                View Projects
              </a>

              <button
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-3 rounded-xl bg-red-500/20 backdrop-blur-md text-white font-bold hover:bg-red-400/25 transition"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* RIGHT: COL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img
                src={portrait}
                alt="Dale portrait"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />

              <div className="absolute -z-10 inset-0 blur-3xl opacity-10 bg-gradient-to-tr from-blue-400 to-red-700 rounded-full scale-110" />
            </div>
          </motion.div>

        </div>
      </section>


      {/* Skill Cards */}
      <section>
        <div className="grid md:grid-cols-3 gap-10">
          <Classcard
            title="Full-Stack Engineering"
            text="React frontends, Django/Python backends, databases, and real deployed applications. I like building products end-to-end rather than isolated features."
            Icon={Computer}
          />

          <Classcard
            title="AI & LLM Systems"
            text="I worked on improving model-generated code and designing prompts and evaluation scenarios to push model reasoning and correctness."
            Icon={Brain}
          />

          <Classcard
            title="Automation & Agents"
            text="I enjoy software that navigates, analyzes, and makes decisions — such as crawlers that interpret websites and extract structured data."
            Icon={Bot}
          />
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/stack"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition underline underline-offset-4"
          >
            View all languages & tools I've worked with →
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-3xl space-y-6">
        <h2 className="text-3xl text-neutral-100 font-semibold tracking-tight">
          How I approach building software
        </h2>

        <p className="text-neutral-300 leading-relaxed">
          I prefer projects that require thought, not just implementation.
          A lot of my work revolves around edge cases — fixing model mistakes,
          handling unpredictable web pages, or turning messy information into
          something structured and useful.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          I'm especially interested in systems where logic matters more than UI. Every project starts on paper, 
          where I map constraints, edge cases, and data flow before writing a single line of code. 
          Clear thinking will save more time than debugging ever will.
        </p>
      </section>

      {/* Contact*/}
      <section className="text-center py-20 border-t border-neutral-200">
        <h2 className="text-3xl text-neutral-100 font-semibold">Let's build something interesting.</h2>
        <p className="text-neutral-400 mt-4">
          I'm currently looking for software engineering opportunities.
        </p>

          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-stone-900 border-white border text-white font-medium hover:bg-neutral-700 transition"
          >
            Get in touch
          </button>
      </section>

    <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
    
  );
}