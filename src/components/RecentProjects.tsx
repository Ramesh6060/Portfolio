"use client";

import { useState } from "react";
import { projects } from "@/data";
import { FaLocationArrow, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RecentProjects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="py-20 px-4" id="projects">
      <h1 className="heading mb-4">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <p className="text-center text-white/40 text-sm mb-14 max-w-lg mx-auto">
        Real things I built — some during my internship, some on my own time.
        Click any card to see what I actually contributed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => {
          const isOpen = expanded === project.id;
          return (
            <motion.div
              key={project.id}
              layout
              onClick={() => setExpanded(isOpen ? null : project.id)}
              className="relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              whileHover={{ borderColor: "rgba(139,92,246,0.35)" }}
              transition={{ duration: 0.2 }}
            >
              {/* Top section: image preview */}
              <div className="relative w-full h-44 overflow-hidden bg-[#0c0e22]">
                <img
                  src="/bg.png"
                  alt="bg"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-36 object-contain z-10 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Live / WIP badge */}
                <div className="absolute top-3 left-3 z-20">
                  {project.isLive ? (
                    <span className="flex items-center gap-1.5 text-xs bg-green-500/15 border border-green-500/30 text-green-400 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-400/70 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
                      {project.type.includes("Pending") ? "Pending Deploy" : "Personal"}
                    </span>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Type label */}
                <p className="text-xs text-purple/70 uppercase tracking-widest mb-2 font-medium">
                  {project.type}
                </p>

                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-snug mb-2">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.shortDes}
                </p>

                {/* Expand toggle */}
                <button className="text-xs text-purple/80 hover:text-purple transition-colors mb-3 flex items-center gap-1">
                  {isOpen ? "Hide contributions ↑" : "What I built ↓"}
                </button>

                {/* Expandable contributions */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="contributions"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4 pt-1">
                        {project.contributions.map((point, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm text-white/60">
                            <FaCheckCircle className="text-purple/60 mt-0.5 shrink-0 text-xs" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer: icons + link */}
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                  {/* Tech icons */}
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={icon + index}
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                        className="border border-white/15 rounded-full bg-[#0a0c1e] w-8 h-8 flex justify-center items-center"
                      >
                        <img src={icon} alt="" className="p-1.5" />
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  {project.isLive ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm text-purple hover:text-purple/80 transition-colors"
                    >
                      Check Live Site
                      <FaLocationArrow size={11} color="#CBACF9" />
                    </a>
                  ) : (
                    <span className="text-sm text-white/25 flex items-center gap-1.5">
                      Not deployed yet
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
