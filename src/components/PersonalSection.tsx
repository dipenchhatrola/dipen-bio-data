import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, Ruler, Weight, GraduationCap, Briefcase, IndianRupee, X, Maximize2, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const PersonalSection: React.FC = () => {
  const [selectedDetail, setSelectedDetail] = useState<{
    icon: React.ElementType;
    label: string;
    value: string;
    subText: string;
    color: string;
    bgColor: string;
    description?: string;
  } | null>(null);

  const details = [
    {
      icon: User,
      label: 'Full Name',
      value: 'Dipen Amarshibhai Chhatrola',
      subText: 'Hindu, Patel / Kadva Patidar',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
      description: 'Belongs to a traditional and well-respected Kadva Patidar family with rooted values and modern outlook.',
    },
    {
      icon: Calendar,
      label: 'Date of Birth',
      value: '21st April, 2001',
      subText: 'Age: 25 Years',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
      description: 'Born on 21st April, 2001 in Gujarat. Energetic, focused, and ambitious professional.',
    },
    {
      icon: Ruler,
      label: 'Height',
      value: `5'6" (167 cm)`,
      subText: 'Slim & Fit Build',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200',
      description: 'Maintains an active physical lifestyle with a healthy, well-balanced routine.',
    },
    {
      icon: Weight,
      label: 'Weight',
      value: '55 kg',
      subText: 'Healthy Lifestyle',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
      description: 'Physically fit and conscious about nutrition, fitness, and overall wellbeing.',
    },
    {
      icon: GraduationCap,
      label: 'Higher Education',
      value: 'BCA, M.Sc.IT',
      subText: 'Atmiya University, Rajkot',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
      description: 'Completed Bachelor of Computer Applications (BCA) and Master of Science in Information Technology (M.Sc. IT) from Atmiya University.',
    },
    {
      icon: Briefcase,
      label: 'Occupation & Startup',
      value: 'Web Developer',
      subText: 'Co-Founder @ Ashtrixcode (50% Partnership)',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 border-rose-200',
      description: 'Co-Founder and lead technology officer at Ashtrixcode (Software & Web Development Agency) with equal 50% partnership.',
    },
    {
      icon: IndianRupee,
      label: 'Monthly Income',
      value: '₹20,000 per month',
      subText: 'Growing Tech Business',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50 border-yellow-200',
      description: 'Steady monthly revenue from active technology clients and ongoing software development projects.',
    },
  ];

  return (
    <section id="personal" className="py-20 bg-slate-100/70 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200">
            Personal Details
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Qualifications & Career
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Comprehensive overview of background, education, and profession. Click any card to expand details.
          </p>
        </motion.div>

        {/* Staggered Motion Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setSelectedDetail(item)}
                className="glass-card p-6 rounded-3xl transition border border-slate-200 shadow-md hover:shadow-xl cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-2xl border ${item.bgColor} shrink-0 shadow-sm transition group-hover:scale-105`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1 pr-6">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      {item.value}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 font-medium">
                      {item.subText}
                    </p>
                  </div>
                </div>

                {/* Expand indicator icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-200">
                  <span className="p-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 inline-flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* POPUP OPEN EFFECT MODAL */}
      <AnimatePresence>
        {selectedDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDetail(null)}
            className="fixed inset-0 z-[99999] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Decorative Header Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedDetail(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl border ${selectedDetail.bgColor} shadow-md`}>
                  {React.createElement(selectedDetail.icon, {
                    className: `w-8 h-8 ${selectedDetail.color}`,
                  })}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                    {selectedDetail.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                    {selectedDetail.value}
                  </h3>
                </div>
              </div>

              {/* Subtext pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 mb-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedDetail.subText}</span>
              </div>

              {/* Description */}
              {selectedDetail.description && (
                <div className="mt-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed font-medium">
                  {selectedDetail.description}
                </div>
              )}

              {/* Modal Footer */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedDetail(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition shadow-md"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
