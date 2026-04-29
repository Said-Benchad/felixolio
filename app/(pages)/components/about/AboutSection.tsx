import { motion } from "motion/react";
import SectionLabel from "../SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-gray-50">
      <SectionLabel>About</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-14">
        The mind behind<span className="text-green-400">.</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 border border-black/8 flex items-center justify-center text-5xl font-black text-black/10">
            KB
          </div>
          <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl bg-white border border-black/8 shadow-sm">
            <p className="text-black font-bold text-sm">Kerim Bilin</p>
            <p className="text-black/35 text-xs">Founder & Developer · 19</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-black mb-4">
            One mind, clear vision.
          </h3>
          <p className="text-black/45 leading-relaxed mb-6">
            I'm Kerim Bilin — the sole mind behind Wibify. No big team, no
            unnecessary meetings, no wasted hours. As a young developer with
            innovative thinking, I work efficiently, with quality, and fast.
          </p>
          <p className="text-black/45 leading-relaxed mb-8">
            I manage and execute everything myself to deliver the best result.
            I'm the best partner you'll find when it comes to excellence.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { v: "7.5M+", l: "Unique Users" },
              { v: "3.4M+", l: "Page Views" },
              { v: "100%", l: "Satisfied Clients" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-black text-black">{s.v}</p>
                <p className="text-black/30 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
