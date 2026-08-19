import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Copy, Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Please reach out to father or uncle for further matrimonial communication.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >

          {/* Card 1: Father Contact */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-blue-200 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Father
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Amarshibhai P. Chhatrola
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Retired Govt. Employee
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+919925653609"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition"
              >
                <Phone className="w-4 h-4" />
                <span>+91 99256 53609</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919925653609?text=Hello%20Amarshibhai,%20I%20am%20interested%20in%20Dipen's%20Bio%20Data"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Card 2: Uncle (Mama) Contact */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-amber-200 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Uncle (Mama)
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Prafullbhai A. Bhalodiya
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Maternal Family Contact
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+919879339682"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-600/20 transition"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98793 39682</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919879339682?text=Hello%20Prafulbhai,%20I%20am%20interested%20in%20Dipen's%20Bio%20Data"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
