import { Star } from "lucide-react";

export default function TechCard({ name, level }) {
  // level = 1–5
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition">
      <h3 className="text-lg font-semibold text-neutral-100">{name}</h3>

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
    </div>
  );
}