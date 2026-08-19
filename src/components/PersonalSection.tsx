import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Ruler, Weight, GraduationCap, Briefcase } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const PersonalSection: React.FC = () => {
  const details = [
    {
      icon: User,
      label: 'Full Name',
      value: 'Dipen Amarshibhai Chhatrola',
      subText: 'Hindu, Patel / Kadva Patidar',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
    },
    {
      icon: Calendar,
      label: 'Date of Birth',
      value: '21st April, 2001',
      subText: 'Age: 25 Years',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
    },
    {
      icon: Ruler,
      label: 'Height',
      value: `5'6" (167 cm)`,
      subText: 'Slim & Fit Build',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200',
    },
    {
      icon: Weight,
      label: 'Weight',
      value: '55 kg',
      subText: 'Healthy Lifestyle',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
    },
    {
      icon: GraduationCap,
      label: 'Higher Education',
      value: 'BCA, M.Sc.IT',
      subText: 'Atmiya University, Rajkot',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
    },
    {
      icon: Briefcase,
      label: 'Occupation & Startup',
      value: 'Web Developer',
      subText: 'Co-Founder @ Ashtrixcode (50% Partnership)',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 border-rose-200',
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
            Comprehensive overview of background, education, and profession.
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
                className="glass-card p-6 rounded-3xl transition border border-slate-200 shadow-md hover:shadow-xl relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-2xl border ${item.bgColor} shrink-0 shadow-sm transition group-hover:scale-105`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
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
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
