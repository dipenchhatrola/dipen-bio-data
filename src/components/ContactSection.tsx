import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold text-rose-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Contact Information
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Please reach out for further matrimonial communication.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >

          {/* Card 1: Father Contact */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="glass-card p-5 sm:p-6 rounded-3xl relative overflow-hidden border border-blue-200 shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Father
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
                  Amarshibhai P. Chhatrola
                </h3>
                <p className="text-xs text-slate-600 font-medium truncate">
                  Retired Govt. Employee
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+919925653609"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-blue-600/20 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 99256 53609</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919925653609?text=Hello%20Amarshibhai,%20I%20am%20interested%20in%20Dipen's%20Bio%20Data"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-emerald-600/20 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Card 2: Kumar Contact */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="glass-card p-5 sm:p-6 rounded-3xl relative overflow-hidden border border-blue-200 shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Jijaji
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
                  Divyesh A. Bhimani
                </h3>
                <p className="text-xs text-slate-600 font-medium truncate">
                  IT Engineer
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+919974499774"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-blue-600/20 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 99744 99774</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919974499774?text=Hello%20Divyesh,%20I%20am%20interested%20in%20Dipen's%20Bio%20Data"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-emerald-600/20 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Card 3: Uncle (Mama) Contact */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="glass-card p-5 sm:p-6 rounded-3xl relative overflow-hidden border border-amber-200 shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Maternal
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
                  Prafullbhai A. Bhalodiya
                </h3>
                <p className="text-xs text-slate-600 font-medium truncate">
                  Maternal Family Contact
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+919879339682"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-amber-600/20 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 98793 39682</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919879339682?text=Hello%20Prafulbhai,%20I%20am%20interested%20in%20Dipen's%20Bio%20Data"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-emerald-600/20 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
