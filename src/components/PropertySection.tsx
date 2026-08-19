import React from 'react';
import { motion } from 'framer-motion';
import { Home, Landmark, TreePine, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const PropertySection: React.FC = () => {
  return (
    <section id="property" className="py-20 bg-slate-100/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Residence & Assets
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Residential Address & Real Estate
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Details of owned properties, agricultural land, and primary city residence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >

          {/* Left Column: Residential Address */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-blue-200 shadow-md hover:shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Primary Residence
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                Rajkot City Address
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner font-medium">
                Balaji Park, Street No. 2, Opp. Bahucharaji Pan, Near Patidar Chowk, Sadhuvasvani Road, Yogi Nagar, Rajkot, Gujarat
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>District: Rajkot</span>
              <span className="text-emerald-700">• Prime Residential Zone</span>
            </div>
          </motion.div>

          {/* Right Column: Owned Properties Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* Property 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-slate-200 shadow-md hover:shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-3 text-amber-600 shadow-sm">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  City Property
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  3BHK House
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Located in Rajkot
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-amber-700 mt-4 block">100% Owned</span>
            </motion.div>

            {/* Property 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-slate-200 shadow-md hover:shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center mb-3 text-indigo-600 shadow-sm">
                  <Landmark className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Native Asset
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  House in Keshiya
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Ancestral Home
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-indigo-700 mt-4 block">Keshiya Village</span>
            </motion.div>

            {/* Property 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-slate-200 shadow-md hover:shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3 text-emerald-600 shadow-sm">
                  <TreePine className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Agricultural Asset
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  8 Vigha Land
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Agricultural Land, Keshiya
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-emerald-700 mt-4 block">Fertile Farm Land</span>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
