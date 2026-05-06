"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Navbar from "../components/navbar/NavBar";
import TechMarquee from "../components/TechMarquee";
import Footer from "../components/footer/Footer";
import SectionLabel from "../components/SectionTitle";
import About from "../components/about/AboutSection";
import { Skiper31 } from "../components/skillsSection";
import ReactLenis from "lenis/react";


// ─── Types ───────────────────────────────────────────────────────────────────
interface PortfolioItem {
  tag: string;
  title: string;
  desc: string;
  bg: string;
  bgImg:string;
  url:string;
}

interface Review {
  name: string;
  initials: string;
  time: string;
  text: string;
}

interface FaqItem {
  q: string;
  a: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────



const PORTFOLIO: PortfolioItem[] = [
  {
    tag: "E-COMMERCE",
    title: "Charme.ma",
    desc: "A highly responsive and aesthetic website for a cosmetique e-commerce store.",
    bg: "from-slate-100 to-slate-200",
    bgImg: "/assets/project-images/charme.png",
    url: "https://www.charme.ma",
  },
  {
    tag: "Saas",
    title: "Ai Saas: Video Summary ai",
    desc: "An Ai Saas for video summary",
    bg: "from-slate-100 to-slate-200",
    bgImg: "/assets/project-images/taskAi.png",
    url: "http://task-ai.arma-dev.ma/",
  },
  // {
  //   tag: "PHOTOGRAPHY",
  //   title: "NanoPictures",
  //   desc: "Professional photography from Kassel. Weddings, couple and family portraits with 100+ documented events.",
  //   bg: "from-stone-100 to-stone-200",
  //   bgImg: "/assets/project-images/charme.png",
  //   url: "https://www.charme.ma",
  // },
  // {
  //   tag: "FINANCE",
  //   title: "Propvex Capital",
  //   desc: "Investment and capital management. Professional financial platform with elegant design.",
  //   bg: "from-zinc-100 to-zinc-200",
  //   bgImg: "/assets/project-images/charme.png",
  //   url: "https://www.charme.ma",
  // },
  // {
  //   tag: "GASTRONOMY",
  //   title: "Steakclub New York",
  //   desc: "Exclusive steakhouse website with modern reservation system and digital menu.",
  //   bg: "from-red-50 to-red-100",
  //   bgImg: "/assets/project-images/charme.png",
  //   url: "https://www.charme.ma",
  // },
  // {
  //   tag: "TRANSPORT",
  //   title: "Chauffeur München",
  //   desc: "Premium chauffeur service platform. Automated booking and elegant design.",
  //   bg: "from-neutral-100 to-neutral-200",
  //   bgImg: "/assets/project-images/charme.png",
  //   url: "https://www.charme.ma",
  // },
  // {
  //   tag: "AUTOMOTIVE",
  //   title: "Car Company",
  //   desc: "Digitization of a used car dealership. Modern inventory display and fast performance.",
  //   bg: "from-gray-100 to-gray-200",
  //   bgImg: "/assets/project-images/charme.png",
  //   url: "https://www.charme.ma",
  // },
];

const REVIEWS: Review[] = [
  { name: "Hussein Moussa", initials: "HM", time: "1 day ago",    text: "I am absolutely thrilled with the collaboration! The homepage was implemented exactly to my wishes and not only looks modern and professional, but also works perfectly technically." },
  { name: "Andrey Angelov", initials: "AA", time: "4 weeks ago",  text: "An extremely reliable service provider who does his work cleanly and professionally. All agreements were kept and the results were top." },
  { name: "Jan B.",         initials: "JB", time: "7 months ago", text: "Our website and booking system were developed by Wibify. We are more than satisfied with the result. The work was of the best quality." },
  { name: "köse kaan",      initials: "KK", time: "3 months ago", text: "The website was implemented exactly to my wishes — modern, clear and professional. The communication was always friendly, reliable and fast." },
];

const FAQ: FaqItem[] = [
  { q: "Why Wibify?",                        a: "I'm 19 years old and work as a solo entrepreneur. That's your biggest advantage: I'm the most motivated partner you'll find. Direct contact, no waiting, maximum dedication." },
  { q: "How long does it take?",             a: "My motto: Faster live, faster growth. Simple projects are often completed in 1–2 weeks. Complex platforms require more time depending on scope." },
  { q: "How much does a website cost?",      a: "All prices are calculated individually on request. Every project is unique and priced based on your specific requirements and scope." },
  { q: "What technologies does Wibify use?", a: "Next.js, React 19, TypeScript, and Tailwind CSS. Backend: Supabase, Stripe for payments. All websites are optimized for PageSpeed 100/100." },
  { q: "Are websites SEO-optimized?",        a: "Yes, basic SEO is always included: Structured data, meta tags, sitemap, performance optimization, and mobile-responsive design." },
  { q: "Why not use Wix or Squarespace?",    a: "Page builders are simple but limited. Custom development offers unlimited customization, better performance, professional SEO, and unique design." },
];

const SERVICES = [
  { title: "Web Design & UI/UX",  desc: "Conversion-optimized designs that don't just look good — they sell." },
  { title: "Web Development",      desc: "Next.js, React, TypeScript — cutting-edge tech for maximum performance." },
  { title: "Web Apps & Software",  desc: "Custom applications, dashboards and automated systems." },
  { title: "AI Integration",       desc: "Intelligent chatbots, automation and AI-powered features." },
];

const INDUSTRIES = [
  { label: "Gastronomy",   count: "8+" },
  { label: "Automotive",   count: "6+" },
  { label: "Finance",      count: "3+" },
  { label: "E-Commerce",   count: "5+" },
  { label: "Healthcare",   count: "4+" },
  { label: "B2B Services", count: "10+" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────


// ─── Navbar ──────────────────────────────────────────────────────────────────


// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20 bg-white">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft ambient blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-black/[0.03] blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-xs text-black/40 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for new projects
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1.0] tracking-tighter mb-6">
          We build what makes
          <br />
          <span className="text-black">your business grow</span>
          <svg
            className="absolute top-[250px] left-0 w-full h-4 text-emerald-400"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M2 8.5C50 2 150 2 198 8.5"
              stroke="currentColor"
              strokeWidth="4"
              stroke-linecap="round"
            ></path>
          </svg>
        </h1>

        <p className="text-black/40 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Websites, web apps and custom software — all from one hand, perfectly
          tailored to your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href="#contact"
            // whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center px-7 py-4 bg-gradient-to-b from-[#2a2a2a] via-[#111] to-black text-white font-semibold rounded-2xl text-sm overflow-hidden w-[250px] group"
            style={{
              boxShadow:
                "0 3px 10px 1px rgba(255,255,255,0.3) inset, 0 1px 2px 1.5px rgba(255,255,255,0.5) inset, 0 1px 0 rgba(255,255,255,0.12) inset, 0 0px 0px 4px rgba(0,0,0,0.2)",
            }}
          >
            {/* Green bottom band */}
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />

            {/* Green inner glow reflection */}
            <span className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            <span className="flex items-center gap-2 absolute transition-all duration-250 group-hover:opacity-0 group-hover:blur-md ">
              <Sparkles size={14} />
              Get Free Mockup
            </span>

            <span className="relative flex items-center justify-center gap-2 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none transition-all duration-250">
              Start Now
            </span>
          </motion.a>
          {/* <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 border border-black/15 text-black font-semibold rounded-full text-sm hover:border-black/30 transition-colors duration-200"
          >
            View Portfolio
          </motion.a> */}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Tech Marquee ─────────────────────────────────────────────────────────────


// ─── Portfolio ───────────────────────────────────────────────────────────────
function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-10 bg-white">
      <SectionLabel>Portfolio</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-2">
        Portfolio<span className="text-green-400">.</span>
      </h2>
      <p className="text-black/35 mb-14 text-sm">
        Selected work. From local businesses to international platforms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PORTFOLIO.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4 }}
            className="group cursor-pointer rounded-[10px] border border-black/8 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* ── Safari chrome ── */}
            <div className="bg-[#f0f0f0] border-b border-black/8 px-3 pt-2.5 pb-2">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              {/* Address bar */}
              <div className="flex items-center gap-1.5 bg-white rounded-md border border-black/10 px-2.5 py-1">
                {/* Lock icon */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-black/30 shrink-0"
                >
                  <rect
                    x="3"
                    y="6"
                    width="8"
                    height="6"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <path
                    d="M5 6V4.5a2 2 0 014 0V6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
                <span className="text-[11px] font-mono text-black/40 truncate">
                  {item.url}
                </span>
              </div>
            </div>

            {/* ── Site preview ── */}
            <div
              className={`w-full h-60 bg-gradient-to-br ${item.bg} flex items-center justify-center`}
            >
              <img src={item.bgImg} className="w-full h-full" alt="" />
              {/* <span className="text-black/15 text-xs uppercase tracking-widest">
                {item.title}
              </span> */}
            </div>

            {/* ── Card meta ── */}
            <div className="px-4 py-4">
              <span className="text-[10px] text-black/30 uppercase tracking-widest font-medium">
                {item.tag}
              </span>
              <h3 className="text-base font-bold text-black mt-0.5 mb-1">
                {item.title}
              </h3>
              <p className="text-black/45 text-xs leading-relaxed">
                {item.desc}
              </p>
              <a href={item.url} className="mt-3 flex items-center gap-1.5 text-black/30 text-xs group-hover:text-black/60 transition-colors">
                View project
                <svg
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        className="mt-10 w-full py-4 border border-black/8 rounded-2xl text-black/35 text-sm hover:border-black/15 hover:text-black/55 transition-all duration-300 bg-gray-50/50"
      >
        Show all 28 projects
      </motion.button>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl border border-black/8 bg-gray-50 overflow-hidden p-12 md:p-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-black/[0.03] blur-3xl rounded-full pointer-events-none" />

        <p className="text-black/25 text-xs uppercase tracking-widest mb-4">Get in touch</p>
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-4">
          Ready for your project?
        </h2>
        <p className="text-black/40 mb-10 max-w-md mx-auto">
          Let's get started together. Send me a request and receive a response within 12 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a href="#" whileHover={{ scale: 1.04 }}
            className="px-8 py-4 bg-black text-white font-bold rounded-full text-sm uppercase tracking-wider hover:bg-black/80 transition-colors">
            Start Project
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.04 }}
            className="px-8 py-4 border border-black/15 text-black font-bold rounded-full text-sm uppercase tracking-wider hover:border-black/30 transition-colors bg-white">
            Get a Quote
          </motion.a>
        </div>

        <div className="mt-14 pt-10 border-t border-black/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <p className="text-black/25 text-xs uppercase tracking-widest mb-1">Agency</p>
            <p className="text-black font-semibold text-sm">Web Design & Software Development</p>
          </div>
          <div>
            <p className="text-black/25 text-xs uppercase tracking-widest mb-1">Status</p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-black text-sm font-semibold">Available for new projects</span>
            </div>
          </div>
          <div>
            <p className="text-black/25 text-xs uppercase tracking-widest mb-1">Location</p>
            <p className="text-black text-sm font-semibold">Rabat, Morocco</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-10 bg-gray-50">
      <SectionLabel>Google Reviews</SectionLabel>
      <div className="flex flex-wrap items-end gap-4 mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
          What Clients Say<span className="text-green-400">.</span>
        </h2>
        <div className="mb-2 flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="text-yellow-400"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-black/35 text-xs">5.0 · 16 reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="p-6 rounded-2xl border border-black/5 bg-white hover:border-black/10 transition-colors duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-black/8 flex items-center justify-center text-xs font-bold text-black/50">
                {r.initials}
              </div>
              <div>
                <p className="text-black text-sm font-semibold">{r.name}</p>
                <p className="text-black/30 text-xs">{r.time}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-black/50 text-sm leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Results ─────────────────────────────────────────────────────────────────
function Results() {
  const stats = [
    { label: "Unique Users",        value: "24,891", sub: "January 2026" },
    { label: "Page Views",          value: "47,234", sub: "January 2026" },
    { label: "PageSpeed Score",     value: "100",    sub: "Google Lighthouse" },
    { label: "Client Satisfaction", value: "100%",   sub: "All projects" },
  ];
  const features = [
    "OnPage SEO", "Tracking & Analytics", "100% Responsive", "ROI-First",
    "Full-Service A to Z", "Lightning-Fast Load Times", "GDPR Compliant", "Easy to Edit", "Built to Scale",
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <SectionLabel>Results</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-14">
        Websites optimized<br />for real results<span className="text-black/15">.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="p-6 rounded-2xl border border-black/5 bg-gray-50">
            <p className="text-3xl md:text-4xl font-black text-black mb-1">{s.value}</p>
            <p className="text-black/50 text-sm">{s.label}</p>
            <p className="text-black/25 text-xs mt-1">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {features.map((f, i) => (
          <motion.span key={f}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="px-4 py-2 rounded-full border border-black/8 text-black/45 text-xs font-medium hover:border-black/20 hover:text-black/65 transition-all duration-200 cursor-default bg-gray-50">
            {f}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-10 bg-gray-50">
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-2">
        FAQ<span className="text-green-400">.</span>
      </h2>
      <p className="text-black/35 mb-14 text-sm">
        Straight answers to your questions.
      </p>

      <div className="max-w-3xl space-y-2">
        {FAQ.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              open === i
                ? "border-black/12 bg-white shadow-sm"
                : "border-black/5 bg-white/60"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-black font-semibold text-sm">{item.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-black/30 text-xl ml-4 shrink-0"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="px-6 pb-6 text-black/45 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Expertise ───────────────────────────────────────────────────────────────
function Expertise() {
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-white">
      <SectionLabel>Expertise</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-14">
        What we do<span className="text-green-400">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { v: "50+", l: "Projects completed" },
              { v: "7.5M+", l: "Users reached" },
              { v: "100%", l: "Client satisfaction" },
              { v: "24h", l: "Avg. response time" },
            ].map((s) => (
              <div
                key={s.l}
                className="p-5 rounded-2xl border border-black/5 bg-gray-50"
              >
                <p className="text-3xl font-black text-black">{s.v}</p>
                <p className="text-black/40 text-xs mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          <h3 className="text-black/25 font-bold mb-4 text-xs uppercase tracking-widest">
            Industry Experience
          </h3>
          <div className="space-y-2">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.label}
                className="flex items-center justify-between py-2 border-b border-black/5"
              >
                <span className="text-black/55 text-sm">{ind.label}</span>
                <span className="text-black/25 text-xs">
                  {ind.count} projects
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-black/5 bg-gray-50 hover:border-black/10 hover:bg-gray-100/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-black font-bold mb-1">{s.title}</h3>
                  <p className="text-black/40 text-sm">{s.desc}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="text-black/20 group-hover:text-black/50 transition-colors mt-1 shrink-0 ml-4"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────


// ─── Footer ──────────────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <ReactLenis root>
      <main className="bg-white min-h-screen text-black antialiased">
        <Navbar />
        <Hero />
        <TechMarquee />
        <Portfolio />
        <div className="w-full relative">
          <Skiper31 />
        </div>
        <CTA />
        <Testimonials />
        <Results />
        <Faq />
        <Expertise />
        <About />
        <Footer />
      </main>
    </ReactLenis>
  );
}