import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from './MotionWrapper';

export const PhotosSection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const photos = [
    {
      src: '/IMG_6460.JPG',
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
      src: '/IMG_9131.JPG',
      subtitle: 'Portrait Photo 4',
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % photos.length);
    }
  };

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
              onClick={() => setSelectedImageIndex(index)}
              className="glass-card p-3 rounded-3xl cursor-pointer group relative overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-200">
                {/* eslint-disable-next-html-link */}
                <img
                  src={photo.src}
                  //alt={photo.title}
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-108"
                />

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="p-3 rounded-full bg-white/90 text-slate-900 shadow-xl transform scale-75 group-hover:scale-100 transition duration-300">
                    <Maximize2 className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Photo Bottom Label */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs">
                <div>
                  {/* <span className="font-bold text-slate-900 block">{photo.title}</span> */}
                  <span className="text-[11px] text-slate-500 font-medium">{photo.subtitle}</span>
                </div>
                <span className="text-[10px] font-bold text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 p-2 shadow-2xl flex flex-col items-center"
            >
              <img
                src={photos[selectedImageIndex].src}
                //alt={photos[selectedImageIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
              />
              <div className="py-3 px-4 text-center">
                {/* <span className="text-sm font-bold text-white block">
                  {photos[selectedImageIndex].title}</span> 
                </span>*/}
                <span className="text-xs text-amber-400 font-semibold">
                  Photo {selectedImageIndex + 1} of {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
