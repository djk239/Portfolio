import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TechCard({ name, level }) {
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