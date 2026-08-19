import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const PhotosSection: React.FC = () => {
  const photos = [
    {
      src: '/IMG_9131.JPG',
      subtitle: 'Portrait Photo 1',
    },
    {
      src: '/IMG_6698.JPG',
      subtitle: 'Portrait Photo 2',
    },
    {
      src: '/IMG_7582.JPG',
      subtitle: 'Portrait Photo 3',
    },
    {
      src: '/IMG_6460.JPG',
      subtitle: 'Portrait Photo 4',
    },
  ];

  return (
    <section id="photos" className="py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            Photo Gallery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Personal Portfolio Photos
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Recent photographs of Dipen Amarshibhai Chhatrola.
          </p>
        </motion.div>

        {/* 4 Photos Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-3 rounded-3xl group relative overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-200">
                <img
                  src={photo.src}
                  alt={photo.subtitle}
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Photo Bottom Label */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">{photo.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
