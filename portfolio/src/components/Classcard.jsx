import { motion } from "framer-motion";

export default function Classcard({ title, text, Icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-6 rounded-2xl border border-neutral-700/60 
                 bg-neutral-900/60 backdrop-blur-md
                 hover:border-neutral-500/70 
                 hover:shadow-2xl hover:shadow-red-500/10
                 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="p-2 rounded-xl bg-neutral-800 border border-neutral-700">
            <Icon className="w-5 h-5 text-red-400" />
          </div>
        )}
        <h3 className="text-xl text-white font-semibold">
          {title}
        </h3>
      </div>

      {/* Text */}
      <p className="mt-4 text-neutral-300 leading-relaxed text-sm">
        {text}
      </p>
    </motion.div>
  );
}