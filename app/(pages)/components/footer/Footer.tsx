export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-14 px-6 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="text-black font-bold text-lg tracking-tight">
            felix studio<span className="text-green-400">.</span>
          </span>
          <p className="text-black/30 text-xs mt-1">
            Web Design & Software Development
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {["Services", "About", "Portfolio", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-black/30 hover:text-black/60 text-sm transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="text-black/25 text-xs">
          <p>© 2025 felix studio.</p>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-black/45 transition-colors">
              Imprint
            </a>
            <a href="#" className="hover:text-black/45 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-black/45 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
