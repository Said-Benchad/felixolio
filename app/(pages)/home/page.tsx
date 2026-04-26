"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Lenis from "@studio-freight/lenis";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  image: string;
  slug: string;
}

interface Skill {
  name: string;
  level: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aura Design System",
    description:
      "A comprehensive component library built for scale — tokens, patterns, and guidelines that power three product teams.",
    tag: "UI / Design System",
    image: "/projects/aura.jpg",
    slug: "aura-design-system",
  },
  {
    id: 2,
    title: "Orbit Dashboard",
    description:
      "Real-time analytics platform with live data visualisation, custom chart primitives, and a dense-yet-breathable layout.",
    tag: "Web App",
    image: "/projects/orbit.jpg",
    slug: "orbit-dashboard",
  },
  {
    id: 3,
    title: "Mémo — Note App",
    description:
      "Minimal note-taking experience inspired by pen and paper. Markdown-first, offline-capable, brutally fast.",
    tag: "Product / Mobile",
    image: "/projects/memo.jpg",
    slug: "memo-app",
  },
];

const TECH: string[] = [
  "Next.js",
  "TypeScript",
  "React",
  "Three.js",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Framer Motion",
];

const DESIGN_SKILLS: Skill[] = [
  { name: "UI Design", level: 95 },
  { name: "Interaction Design", level: 88 },
  { name: "Design Systems", level: 90 },
  { name: "Prototyping", level: 85 },
  { name: "Typography", level: 92 },
];

// ─── Fade-up wrapper ───────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeUp delay={index * 0.12}>
      <div className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-shadow duration-500 dark:bg-neutral-900 dark:border-neutral-800">
        {/* Image placeholder */}
        <div className="relative h-52 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-xl bg-orange-400" />
            </div>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-500" />
        </div>

        <div className="flex flex-col flex-1 p-6 gap-3">
          <span className="text-xs font-medium tracking-widest text-orange-500 uppercase">
            {project.tag}
          </span>
          <h3 className="text-[18px] font-semibold text-neutral-900 dark:text-white leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
            {project.description}
          </p>
          <a
            href={`/project/${project.slug}`}
            className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium px-5 py-2.5 hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white transition-colors duration-300"
          >
            View project
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="translate-x-0 group-hover:translate-x-0.5 transition-transform"
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

// ─── Skill Bar ────────────────────────────────────────────────────────────────
function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {skill.name}
        </span>
        <span className="text-xs text-neutral-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-orange-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

// ─── Nav Item ─────────────────────────────────────────────────────────────────
function NavItem({
  label,
  icon,
  sectionId,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  sectionId: string;
  active: boolean;
  onClick: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
        active
          ? "bg-orange-500 text-white"
          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
      }`}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span className="text-[10px] font-medium tracking-wide">{label}</span>
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDark, setIsDark] = useState(false);

  // Smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intersection observer for active nav
    const sections = ["hero", "projects", "about"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      lenis.destroy();
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] dark:bg-neutral-950 font-sans transition-colors duration-500">
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            Felix
          </a>
        </motion.div>

        {/* Theme toggle */}
        <motion.button
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsDark(!isDark)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-orange-300 transition-colors shadow-sm"
          aria-label="Toggle theme"
        >
          {isDark ? (
            // Sun
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.22 3.22l1.06 1.06M11.72 11.72l1.06 1.06M3.22 12.78l1.06-1.06M11.72 4.28l1.06-1.06"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Moon
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 10.5A6 6 0 015.5 2.5a6 6 0 108 8z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.button>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-40"
      >
        {/* Subtle orange glow bg */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-100/60 dark:bg-orange-900/10 blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-5xl w-full mx-auto">
          {/* Text */}
          <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-orange-500 uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Available for work
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-[1.05] tracking-tight">
                Hi, I'm <span className="text-orange-500">Felix</span>.<br />
                I design &amp; build
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  digital experiences.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Full-stack developer &amp; UI designer crafting clean, purposeful
              products — from design system to deployed feature.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.44,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-7 py-3 transition-colors duration-300 shadow-lg shadow-orange-200 dark:shadow-orange-900/30"
              >
                See my work
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-orange-300 dark:hover:border-orange-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold px-7 py-3 transition-colors duration-300"
              >
                About me
              </button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-[40px] border border-orange-200/60 dark:border-orange-800/30" />
            <div className="absolute -inset-8 rounded-[48px] border border-orange-100/40 dark:border-orange-900/20" />

            {/* Photo container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-[36px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              {/* Placeholder gradient — replace with <Image> */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-neutral-100 to-neutral-200 dark:from-orange-900/30 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="text-neutral-400 dark:text-neutral-500"
                  >
                    <circle
                      cx="20"
                      cy="15"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Replace the div above with:
              <Image src="/photo.jpg" alt="Felix" fill className="object-cover" />
              */}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-2.5 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">
                Open to roles
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] tracking-widest text-neutral-400 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-4 flex items-center justify-center"
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1l5 5 5-5"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Featured Projects ────────────────────────────────────────── */}
      <section id="projects" className="px-6 py-28 max-w-6xl mx-auto">
        <FadeUp>
          <div className="flex flex-col gap-2 mb-14">
            <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
              Selected work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Recent projects
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md mt-1">
              A handful of things I've built recently — each one a different
              problem, the same obsession with craft.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <FadeUp delay={0.4} className="mt-12 flex justify-center">
          <a
            href="/project"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            View all projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeUp>
      </section>

      {/* ── About & Skills ───────────────────────────────────────────── */}
      <section id="about" className="px-6 py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About me */}
          <div className="flex flex-col gap-8">
            <FadeUp>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  About
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  A bit about me
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-[16px] text-neutral-600 dark:text-neutral-400 leading-[1.8]">
                I'm a full-stack developer and product designer with a thing for
                precision. I care deeply about the space between design and
                engineering — where decisions made in Figma ripple all the way
                to production code.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="text-[16px] text-neutral-600 dark:text-neutral-400 leading-[1.8]">
                When I'm not building, I'm sketching interface concepts, reading
                about typography, or convincing myself I don't need another
                mechanical keyboard.
              </p>
            </FadeUp>

            {/* Tech stack */}
            <FadeUp delay={0.26}>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Technologies I use
                </span>
                <div className="flex flex-wrap gap-2">
                  {TECH.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-orange-300 hover:text-orange-500 dark:hover:border-orange-700 dark:hover:text-orange-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Design skills */}
          <div className="flex flex-col gap-8">
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  Expertise
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  Web design skills
                </h3>
              </div>
            </FadeUp>

            <div className="flex flex-col gap-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-[28px] p-8">
              {DESIGN_SKILLS.map((skill, i) => (
                <FadeUp key={skill.name} delay={0.1 + i * 0.08}>
                  <SkillBar skill={skill} delay={0.3 + i * 0.08} />
                </FadeUp>
              ))}
            </div>

            {/* CTA card */}
            <FadeUp delay={0.5}>
              <div className="rounded-[28px] bg-orange-500 p-8 flex flex-col gap-4">
                <p className="text-white/90 text-sm leading-relaxed">
                  Interested in working together? I'm currently open to
                  freelance and full-time opportunities.
                </p>
                <a
                  href="mailto:hello@felix.dev"
                  className="self-start rounded-full bg-white text-orange-500 font-semibold text-sm px-6 py-2.5 hover:bg-orange-50 transition-colors"
                >
                  Get in touch →
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Bottom padding for nav ───────────────────────────────────── */}
      <div className="h-28" />

      {/* ── Floating Bottom Nav ──────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-700/60 rounded-[24px] px-3 py-2 shadow-xl shadow-neutral-900/10 dark:shadow-neutral-900/40">
          <NavItem
            label="Home"
            sectionId="hero"
            active={activeSection === "hero"}
            onClick={scrollTo}
            icon={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 8.5L9 2l7 6.5V16a1 1 0 01-1 1H3a1 1 0 01-1-1V8.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 17V11h5v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <NavItem
            label="Projects"
            sectionId="projects"
            active={activeSection === "projects"}
            onClick={scrollTo}
            icon={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="6"
                  height="6"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="10"
                  y="2"
                  width="6"
                  height="6"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="2"
                  y="10"
                  width="6"
                  height="6"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="10"
                  y="10"
                  width="6"
                  height="6"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            }
          />
          <NavItem
            label="About"
            sectionId="about"
            active={activeSection === "about"}
            onClick={scrollTo}
            icon={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle
                  cx="9"
                  cy="6"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          {/* Divider */}
          <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-1" />

          {/* Contact pill */}
          <a
            href="mailto:hello@felix.dev"
            className="flex items-center gap-1.5 rounded-[18px] bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 transition-colors duration-300"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 3l5 3.5L11 3M1 2h10a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-7A.5.5 0 011 2z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
