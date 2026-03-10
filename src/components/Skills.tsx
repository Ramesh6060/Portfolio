"use client";

import { skills } from "@/data";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  Frontend: "border-purple-500/40 bg-purple-500/10 text-purple-300",
  Backend: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  Tools: "border-cyan-500/30 bg-cyan-500/8 text-cyan-300/80",
};

const categories = ["Frontend", "Backend", "Tools"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <h1 className="heading mb-4">
        What I <span className="text-purple">work with</span>
      </h1>
      <p className="text-center text-white/40 text-sm mb-14 max-w-md mx-auto">
        The tools I reach for on real projects — not just buzzwords on a resume.
      </p>

      <div className="max-w-3xl mx-auto space-y-10">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
                {category}
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((s) => s.category === category)
                .map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full border text-sm font-medium cursor-default transition-all duration-200 ${categoryColors[category]}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-white/20 text-xs mt-14 max-w-xs mx-auto">
        SQL, Git & clean architecture are daily drivers — not afterthoughts.
      </p>
    </section>
  );
};

export default Skills;
