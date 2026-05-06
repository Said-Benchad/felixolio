import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = ["Portfolio", "Services", "FAQ", "About"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoLeft = "<"
  const logoRight = ">"
  const logo = "felix studio"
  return (
    <nav className="fixed w-full top-5 left-0 right-0 flex items-center justify-center z-50">
      <div
        style={{ boxShadow: "0 5px 80px 2px rgba(11,11,11,0.2)" }}
        className="max-w-[1400px] w-full flex items-center justify-between bg-white/80 backdrop-blur-md border-1 border-black/5 px-4 md:px-10 py-4 rounded-[24px]"
      >
        <span className="text-black font-bold text-xl italic tracking-tight">
          {logo}
          <span className="text-green-400">.</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-black/50 hover:text-black transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-black items-center gap-2 px-4 py-3 rounded-[14px] border border-black/15 text-sm text-white hover:bg-black hover:text-white transition-all duration-300"
        >
          Get a Quote
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black/60 hover:text-black"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-black/5 flex flex-col p-6 gap-4 shadow-lg"
            >
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-black/60 hover:text-black text-sm"
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-4 py-2 rounded-full border border-black/15 text-sm text-black text-center hover:bg-black hover:text-white transition-all duration-300"
              >
                Get a Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
