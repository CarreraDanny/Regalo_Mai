import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Pareja caminando en la playa al atardecer"
  },
  {
    src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Manos entrelazadas con corazones de luz"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Cena romántica con velas"
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Siluetas de pareja con luces de ciudad"
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Ramo de rosas rojas románticas"
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-dancing text-center neon-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestros Momentos
        </motion.h2>
        
        <motion.div 
          className="relative neon-border rounded-3xl overflow-hidden bg-black"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" style={{ filter: 'drop-shadow(0 0 10px #FF073A)' }} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" style={{ filter: 'drop-shadow(0 0 10px #FF073A)' }} />
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#FF073A] shadow-[0_0_10px_#FF073A]' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
