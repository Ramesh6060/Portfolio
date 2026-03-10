"use client";

import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export const Hero = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center pt-40 pb-20">
      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-10 h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid BG */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start text-left"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <p className="uppercase tracking-[0.2em] text-xs text-purple-300/80 font-medium">
              Frontend Dev · Pokhara, Nepal
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white">
            I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              things
            </span>
            <br />
            that ship.
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Ramesh — 21, BCIS student &amp; frontend dev from Pokhara, Nepal.
            I&apos;ve shipped features on a live government-backed platform,
            built full-stack systems, and I&apos;m just getting started.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="See my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="#contact"
              className="text-sm text-white/40 hover:text-purple-300 transition-colors duration-200 underline underline-offset-4"
            >
              or say hello →
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-shrink-0 order-first lg:order-last"
        >
          <div className="relative w-60 md:w-72 lg:w-[290px]">
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent blur-2xl scale-110 pointer-events-none" />

            {/* Photo frame */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d0d2b] to-[#070714] shadow-[0_0_50px_rgba(139,92,246,0.10)]">

              {/* Placeholder — only shown if photo fails to load */}
              {photoFailed && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-purple-300">R</span>
                  </div>
                  <p className="text-white/20 text-xs font-mono text-center px-6 leading-relaxed">
                    /public/profile.jpg
                  </p>
                </div>
              )}

              {/* Photo — always rendered, placeholder only appears if this errors */}
              <img
                src="/profile.jpg"
                alt="Ramesh"
                className="w-full h-full object-cover object-top"
                onError={() => setPhotoFailed(true)}
              />

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#070714]/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
