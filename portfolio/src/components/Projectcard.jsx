import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projectcard({ title, text, tech, github, demo, image }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="flex flex-col rounded-2xl border border-neutral-700 bg-neutral-900  hover:shadow-2xl hover:shadow-red-500/10
                 transition-all duration-300 overflow-hidden"
    >
      {/* IMAGE */}
      {image && (
        <div className="w-full h-48 md:h-56 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl text-white font-semibold">{title}</h3>
        <p className="mt-3 text-neutral-300 leading-relaxed">{text}</p>

        {/* TECH LIST */}
        {tech?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <li
                key={index}
                className="text-sm text-neutral-400 bg-neutral-800 px-2 py-1 rounded-md"
              >
                {techItem}
              </li>
            ))}
          </ul>
        )}

        {/* LINKS */}
        <div className="mt-4 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-neutral-400 hover:text-white"
            >
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-neutral-400 hover:text-white"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}