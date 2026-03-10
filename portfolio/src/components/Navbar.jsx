import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Rutgers", path: "/rutgers" },
  { name: "Hobbies", path: "/hobbies" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-700"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / title*/}
        <NavLink to="/" className="text-2xl font-bold tracking-tight text-white">
          Dale.dev
        </NavLink>

        {/* Links (big screen) */}
        <div className="hidden lg:flex gap-10 relative">
          {navLinks.map((link) => (
            <NavItem key={link.path} link={link} />
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Links (mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-neutral-900 border-t border-neutral-700"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-white font-medium transition-colors duration-200"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavItem({ link }) {
  return (
    <NavLink
      to={link.path}
      className="relative text-neutral-300 font-medium hover:text-white transition-colors duration-200"
    >
      {({ isActive }) => (
        <>
          {link.name}

          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500/60 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}
