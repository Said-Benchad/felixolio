import { motion } from "motion/react";

const TECH_LOGOS: string[] = [
  "OpenAI",
  "Claude",
  "xAI",
  "Supabase",
  "Vercel",
  "Cloudflare",
  "Next.js",
  "Tailwind CSS",
  "Prisma",
  "TypeScript",
];
export default function TechMarquee() {
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div className="py-12 border-y border-black/5 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {doubled.map((logo, i) => (
          <span
            key={i}
            className="text-black/20 text-sm font-medium tracking-widest uppercase shrink-0"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
