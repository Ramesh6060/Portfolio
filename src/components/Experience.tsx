"use client";

import { workExperience } from "@/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-24 w-full relative" id="experience">
      <div className="text-center mb-16">
        <p className="text-purple-400/60 uppercase tracking-[0.25em] text-xs font-mono mb-3">
          Where I&apos;ve been
        </p>
        <h1 className="heading">
          My <span className="text-purple">experience</span>
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-6 space-y-4">
        {workExperience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="flex gap-4 bg-gradient-to-br from-[#04071d] to-[#0c0e23] rounded-2xl border border-white/8 p-5 hover:border-white/14 transition-all duration-300"
          >
            {/* Left: Company logo / thumbnail */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-[#0d0d2b] border border-white/10 overflow-hidden flex items-center justify-center">
                <img
                  src={exp.thumbnail}
                  alt={exp.company}
                  className="w-9 h-9 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 min-w-0">
              {/* Row 1: Title + period */}
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h2 className="text-white font-semibold text-base leading-tight">{exp.title}</h2>
                <span className="text-xs font-mono text-white/25 whitespace-nowrap flex-shrink-0 mt-0.5">
                  {exp.period}
                </span>
              </div>

              {/* Row 2: Company + location */}
              <p className="text-purple-300/70 text-sm font-medium mt-0.5">
                {exp.company}
              </p>
              <p className="text-white/25 text-xs mt-0.5 flex items-center gap-1">
                <span>📍</span> {exp.location}
              </p>

              {/* Divider */}
              <div className="border-t border-white/5 my-3" />

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed mb-3">{exp.desc}</p>

              {/* Highlights — LinkedIn-style bullet list */}
              <ul className="space-y-1.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-white/35 leading-relaxed">
                    <span className="text-purple-400/50 mt-0.5 flex-shrink-0">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Open to opportunities card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex gap-4 rounded-2xl border border-dashed border-white/8 p-5 items-center"
        >
          <div className="w-14 h-14 rounded-xl bg-white/3 border border-dashed border-white/8 flex items-center justify-center flex-shrink-0">
            <span className="text-white/15 text-lg">+</span>
          </div>
          <div>
            <p className="text-white/20 text-sm font-medium">Open to new roles</p>
            <p className="text-white/12 text-xs mt-0.5">Next chapter loading...</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
            <span className="text-xs text-green-400/50 font-mono">Available</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
