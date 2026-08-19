import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Home, Shield, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const FamilySection: React.FC = () => {
  const immediateFamily = [
    {
      role: 'Father',
      name: 'Mr. Amarshibhai Parsottambhai Chhatrola',
      occupation: 'Retired Govt. Employee',
      icon: Shield,
    },
    {
      role: 'Mother',
      name: 'Mrs. Madhuben Amarshibhai Chhatrola',
      occupation: 'Homemaker',
      icon: Heart,
    },
    {
      role: 'Elder Sister',
      name: 'Mrs. Dharaben Divyeshbhai Bhimani',
      occupation: 'Married',
      icon: Users,
    },
    {
      role: 'Native Place',
      name: 'Keshiya, Ta. Jodiya',
      occupation: 'Ancestral Roots (Jamnagar District)',
      icon: Home,
    },
  ];

  const maternalFamily = [
    {
      title: 'Uncle (Mama 1)',
      name: 'Mr. Prafulbhai Arjanbhai Bhalodiya',
      location: 'Vankiya',
    },
    {
      title: 'Uncle (Mama 2)',
      name: 'Mr. Hasmukhbhai Arjanbhai Bhalodiya',
      location: 'Vankiya / Native',
    },
    {
      title: 'Father Maternal (Nana)',
      name: 'Mr. Bhagvanjibhai Bhensdadiya',
      location: 'Moti Banugar',
    },
    {
      title: 'Mother Maternal (Nani Family)',
      name: 'Mr. Narshibhai Ratabhai Ranipa',
      location: 'Jambuda',
    },
  ];

  return (
    <section id="family" className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
            Family Background
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Family &amp; Maternal Family
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Respected and well-settled Patidar family background in Gujarat.
          </p>
        </motion.div>

        {/* 1. Family Background */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            Family Background
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {immediateFamily.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-card p-6 rounded-3xl relative overflow-hidden border border-slate-200 shadow-md hover:shadow-xl"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    {item.role}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    {item.occupation}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 2. Maternal Family Background */}
        <div id="maternal">
          <h3 className="text-lg sm:text-xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            Maternal Family Background
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {maternalFamily.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card p-6 rounded-3xl border-l-4 border-l-indigo-600 border border-slate-200 shadow-md hover:shadow-xl"
              >
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block">
                  {item.title}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  {item.name}
                </h4>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                  <span>Village: {item.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
