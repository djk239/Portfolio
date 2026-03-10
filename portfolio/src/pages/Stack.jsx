import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";

function TechCard({ name, level }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 
                 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5
                 transition duration-300"
    >
      <h3 className="text-lg font-semibold text-neutral-100">
        {name}
      </h3>

      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < level
                ? "fill-red-500 text-red-500"
                : "text-neutral-700"
            }
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Stack() {
  const technologies = [
      { name: "React", level: 5 },
      { name: "Django", level: 4 },
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 2 },
    { name: "Python", level: 5 },
    { name: "Node.js", level: 4 },
    { name: "TailwindCSS", level: 5 },
    { name: "PostgreSQL", level: 4 },
    { name: "Git", level: 5 },
    { name: "C++", level: 3 },
    { name: "Unity", level: 3 },
    { name: "Machine Learning", level: 4 },
    { name: "Java", level: 4 },
    { name: "Spring", level: 2 },
    { name: "C", level: 4 },
    { name: "Go", level: 2 },
    { name: "Docker", level: 4 },
    { name: "x86-64", level: 3 },
    { name: "PHP", level: 4 },
    { name: "ASP.NET", level: 3 },






  ];

  return (
    <div className="max-w-4xl mx-auto pt-16 pb-24 px-6 md:px-0 space-y-16">

      {/* HEADER */}
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