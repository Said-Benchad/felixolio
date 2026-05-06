import { GroundFooter } from "./groundFooter";

export default function Footer() {
  return (
    <footer className="relative w-full h-full bg-white">
      <GroundFooter/>
      <div className="flex w-full absolute top-[20%] flex-col md:flex-col items-start md:items-center px-5 justify-center gap-8">
        <div className="items-center flex flex-col">
          <span className="text-black font-bold text-lg md:text-5xl tracking-tight">
            felix studio<span className="text-green-400">.</span>
          </span>
          <p className="text-black/30 text-xs md:text-3xl mt-1">
            Web Design & Software Development
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {["Services", "About", "Portfolio", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-black/30 hover:text-black/60 text-sm md:text-lg transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="text-black/25 items-center flex flex-col text-xs md:text-lg">
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
