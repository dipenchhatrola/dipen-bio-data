'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DecorativeSymbols } from './DecorativeSymbols';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Live progress counter from 0% to 100% - MEDIUM SPEED
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Hide preloader after 3.2s (medium speed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader-slider"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-slate-50 overflow-hidden font-sans select-none pointer-events-auto flex flex-col items-center justify-center"
        >
          {/* Background dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

          {/* Soft Glow Orbs */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/15 via-blue-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

          {/* Center Orbital Container */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Orbital Rings Graphics */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-6">

              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-xl animate-pulse" />

              {/* Outer Rotating Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-blue-400/40 border-dashed pointer-events-none"
              >
                <div className="w-3 h-3 rounded-full bg-blue-600 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-md shadow-blue-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 absolute top-1/2 -right-1.5 -translate-y-1/2 shadow-md shadow-amber-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-md" />
              </motion.div>

              {/* Inner Counter-Rotating Orbital Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                className="absolute inset-4 sm:inset-5 rounded-full border border-amber-400/60 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-amber-600 absolute top-2 left-2" />
                <div className="w-2 h-2 rounded-full bg-blue-500 absolute bottom-2 right-2" />
              </motion.div>

              {/* Central White Ganesha Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-amber-400/90 shadow-2xl shadow-amber-500/25 flex items-center justify-center p-3"
              >
                <DecorativeSymbols type="ganesha" className="w-14 h-14 sm:w-16 sm:h-16 text-amber-600" />
              </motion.div>

            </div>

            {/* Ashtrixcode Style Banner Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <h1 className="text-sm sm:text-xl md:text-2xl font-extrabold tracking-wider sm:tracking-[0.25em] text-amber-800 uppercase font-sans whitespace-nowrap">
                || Shree Ganeshay Namah ||
              </h1>

              {/* Underline Accent Line */}
              <div className="w-44 sm:w-64 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent shadow-sm" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-widest uppercase pt-2">
                Dipen Bio Data
              </p>
            </motion.div>

            {/* ===== NEW STYLISH PROGRESS BAR ===== */}
            <div className="mt-7 w-52 sm:w-72 space-y-3">
              {/* Header Label + Percentage Counter with Glow */}
              <div className="flex items-center justify-between text-[11px] font-extrabold tracking-widest uppercase">
                <span className="flex items-center gap-2 text-slate-500">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                  <span>Loading</span>
                </span>
                <span className="text-amber-700 font-mono text-sm bg-amber-100/50 px-2.5 py-0.5 rounded-full border border-amber-200/50 shadow-sm">
                  {progress}%
                </span>
              </div>

              {/* Modern Progress Bar with Segments Effect */}
              <div className="relative h-3 w-full bg-gradient-to-r from-slate-100 to-slate-200 rounded-full p-0.5 border border-slate-200/80 shadow-inner overflow-hidden">
                {/* Animated Fill with Gradient & Shimmer */}
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-lg shadow-amber-500/40 relative overflow-hidden"
                >
                  {/* Shimmer Effect Overlay */}
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                  />
                  
                  {/* Glowing Pulse at Leading Edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/60 rounded-full blur-sm animate-pulse" />
                  
                  {/* Progress Segments (Dots) */}
                  <div className="absolute inset-0 flex items-center justify-around px-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-white/30"
                        style={{ opacity: progress > (i + 1) * 12.5 ? 0.6 : 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Decorative Dots Below Progress Bar */}
              <div className="flex justify-center gap-1.5 opacity-40">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      i < Math.floor(progress / 8.34)
                        ? 'w-3 bg-amber-500'
                        : 'w-1.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};