'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DecorativeSymbols } from './DecorativeSymbols';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth, medium-fast progress counter (1.6 seconds total)
    const startTime = Date.now();
    const totalDuration = 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
        }, 250);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader-slider"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            opacity: 0.95,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-slate-50 overflow-hidden font-sans select-none pointer-events-auto flex flex-col items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 bg-gradient-to-tr from-amber-400/20 via-blue-500/10 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Center Orbital Container */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Orbital Rings Graphics */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-5">

              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-amber-400/15 blur-xl animate-pulse" />

              {/* Outer Rotating Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-blue-400/40 border-dashed pointer-events-none"
              >
                <div className="w-3 h-3 rounded-full bg-blue-600 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-md shadow-blue-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 absolute top-1/2 -right-1.5 -translate-y-1/2 shadow-md shadow-amber-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-md" />
              </motion.div>

              {/* Inner Counter-Rotating Orbital Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                className="absolute inset-4 sm:inset-5 rounded-full border border-amber-400/60 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-amber-600 absolute top-2 left-2" />
                <div className="w-2 h-2 rounded-full bg-blue-500 absolute bottom-2 right-2" />
              </motion.div>

              {/* Central White Ganesha Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-white border-2 border-amber-400/90 shadow-xl shadow-amber-500/20 flex items-center justify-center p-3"
              >
                <DecorativeSymbols type="ganesha" className="w-12 h-12 sm:w-14 sm:h-14 text-amber-600" />
              </motion.div>

            </div>

            {/* Sacred Mantra Title - Perfect Gujarati Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center space-y-2"
            >
              <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-amber-900 tracking-normal whitespace-nowrap">
                ॥ શ્રી ગણેશાય નમઃ ॥
              </h1>

              {/* Underline Accent Line */}
              <div className="w-40 sm:w-56 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent shadow-sm" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-bold text-slate-600 tracking-wider uppercase pt-1">
                Dipen Chhatrola • Bio Data
              </p>
            </motion.div>

            {/* Stylish Medium-Fast Progress Bar */}
            <div className="mt-6 w-56 sm:w-72 space-y-2.5">
              {/* Header Label + Percentage Counter */}
              <div className="flex items-center justify-between text-[11px] font-extrabold tracking-wider">
                <span className="flex items-center gap-2 text-slate-600">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span>Loading</span>
                </span>
                <span className="text-amber-800 font-mono text-xs font-bold bg-amber-100/70 px-2.5 py-0.5 rounded-full border border-amber-200 shadow-sm">
                  {progress}%
                </span>
              </div>

              {/* Smooth Animated Progress Bar */}
              <div className="relative h-2.5 w-full bg-slate-200/90 rounded-full p-0.5 border border-slate-300/80 shadow-inner overflow-hidden">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 shadow-md shadow-amber-500/40 relative overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                  />
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};