import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { technologies } from "../data/skills";
import TechCard from "../components/TechCard";

export default function Stack() {


  return (
    <div className="max-w-4xl mx-auto pt-16 pb-24 px-6 md:px-0 space-y-16">

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-100">
            Technical Stack
          </h1>

          <p className="mt-4 text-lg text-neutral-300 leading-relaxed max-w-2xl">
            This is the quiet part of the portfolio — a more complete list of
            the languages and technologies I’ve worked with. 
            The stars reflect confidence built through real projects.
            Always expanding.
          </p>

          <p className="mt-3 text-sm text-neutral-500">
            ★★★★★ = I’d happily build production systems with it.
          </p>
        </div>
      </motion.section>

      {/* CARD GRID */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {technologies.map((tech, index) => (
          <TechCard
            key={index}
            name={tech.name}
            level={tech.level}
          />
        ))}
      </motion.section>

    </div>
  );
}