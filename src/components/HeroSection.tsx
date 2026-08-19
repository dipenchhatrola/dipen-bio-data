import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Briefcase, GraduationCap, Calendar, Ruler, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >

          {/* Text Column (Mobile Order Second, Desktop Order First) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6 text-center lg:text-left order-last lg:order-first"
          >
            {/* Desktop Status Pill */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Matrimonial Bio Data
            </div>

            {/* Title Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
                <span className="gradient-text">Dipen Amarshibhai Chhatrola</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-700 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-amber-700 font-bold">Web Developer</span>
                <span className="text-slate-400">•</span>
                <span>Co-Founder @ Ashtrixcode</span>
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                BCA, M.Sc.IT (Atmiya University)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-rose-600" />
                Rajkot, Gujarat
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Award className="w-4 h-4 text-amber-600" />
                50% Ashtrixcode Partner
              </span>
            </div>

            {/* Key Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <motion.div whileHover={{ y: -4 }} className="glass-card p-3 rounded-2xl text-center">
                <Calendar className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span className="block text-[10px] text-slate-500 uppercase font-semibold">DOB</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">21st April, 2001</span>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="glass-card p-3 rounded-2xl text-center">
                <Ruler className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                <span className="block text-[10px] text-slate-500 uppercase font-semibold">Height</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">5&apos;6&quot; (167 cm)</span>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="glass-card p-3 rounded-2xl text-center">
                <Briefcase className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                <span className="block text-[10px] text-slate-500 uppercase font-semibold">Profession</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Web Developer</span>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="glass-card p-3 rounded-2xl text-center">
                <MapPin className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="block text-[10px] text-slate-500 uppercase font-semibold">Native</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Keshiya, Jodiya</span>
              </motion.div>
            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="tel:+919925653609"
                className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-600/25 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Father (+91 99256 53609)</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Picture Column (Mobile Order FIRST, Desktop Order Last) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col items-center justify-center order-first lg:order-last"
          >
            {/* Mobile Status Pill: ABOVE PHOTO ON MOBILE */}
            <div className="lg:hidden mb-4 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Bio Data
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group max-w-sm w-full"
            >


              <div className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xl p-3">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 relative border border-slate-200">
                  {/* eslint-disable-next-html-link */}
                  <img
                    src="/dipen_photo.jpg"
                    alt="Dipen Amarshibhai Chhatrola"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 p-6 text-center">
                            <div class="w-24 h-24 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center mb-4 text-amber-600 shadow-md">
                              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <span class="text-base font-bold text-slate-900">Dipen Chhatrola</span>
                            <span class="text-xs text-amber-600 font-semibold mt-1">Profile Photo</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Bottom Overlay Info */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Location</span>
                    <span className="font-bold text-slate-900">Rajkot, Gujarat</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Age</span>
                    <span className="font-bold text-amber-600">25 Years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
