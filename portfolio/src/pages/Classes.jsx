import { motion } from "framer-motion";
import { ArrowLeft, Atom, Terminal, Variable, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom"; 
export default function Classes() {

  const courseCategories =[
    {
      title: "Computer Science",
      icon: Terminal,
      classes:[
        "Data Structures & Algorithms",
        "Operating Systems",
        "Java Applications",
        "Distributed Systems & Cloud Computing",
        "Computer Organization & Architecture",
        "Design and Analysis of Algorithms",
        "C & Unix Programming",
        "Mathmatical Foundation of Computer Science",
        "Object Oriented Programming",
        "Structured Programming",
        "Machine Learning",
        "Optimization Methods",
        "Video Game Development",
        "Software Engineering",

      ],
    },
    {
      title: "Mathematics",
      icon: Variable,
      classes:[
        "Linear Algebra",
        "Calculus I",
        "Calculus II",
        "Calculus III",
        "Applied Probability",
        "Applied Statistics",
        "Mathmatical Foundations of Computer Science",
      ],
    },
    {
      title: "Science",
      icon: Atom,
      classes:[
        "Physics I & Lab",
        "Physics II & Lab",
        "Biology I & Lab",
        "Biology II & Lab",
      ],
    },
    {
      title: "More",
      icon: BookOpenText,
      classes:[
        "Psychology I",
        "US History I",
        "English Composition I-II",
        "Freelance Article Writing",
        "African American Theater",
        "Intermediate Spanish I-II",
        "History of Philosophy",
        "Intro to Music History",
        "Religion & Human RIghts",
        "American Federalism",
        "MacroEconomics Priniples",

      ],
    },

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-3xl mx-auto pt-16 pb-24 space-y-16 px-6 md:px-0">
      
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
            Coursework
          </h1>
          <p className="mt-4 text-lg text-neutral-300 leading-relaxed max-w-2xl">
            A comprehensive list of the classes I completed during my university studies, 
            focusing heavily on software engineering, and core mathematics.
          </p>
        </div>
      </motion.section>

      {/* CLASS LIST */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {courseCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div key={idx} variants={itemVariants} className="space-y-6">
              
              {/* Category Title */}
              <div className="flex items-center gap-3 border-b border-neutral-800 pb-2">
                <Icon className="text-red-500" size={24} />
                <h2 className="text-2xl font-semibold text-neutral-100 tracking-tight">
                  {category.title}
                </h2>
              </div>

              {/* Class Items */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.classes.map((className, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-3 text-neutral-300 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-red-500 transition-colors" />
                    <span>{className}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          );
        })}
      </motion.section>

    </div>
  );
}