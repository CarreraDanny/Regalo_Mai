import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import LoadingScreen from "@/components/loading-screen";
import PhotoCarousel from "@/components/photo-carousel";
import RomanticMessage from "@/components/romantic-message";
import MusicVideo from "@/components/music-video";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [startMessageTyping, setStartMessageTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 1000);

      const messageTimer = setTimeout(() => {
        setStartMessageTyping(true);
      }, 8000);

      return () => {
        clearTimeout(contentTimer);
        clearTimeout(messageTimer);
      };
    }
  }, [isLoading]);

  const heartParticles = [
    { top: "10%", left: "5%", delay: "0s", size: "text-2xl" },
    { top: "20%", right: "10%", delay: "1s", size: "text-lg" },
    { top: "60%", left: "15%", delay: "2s", size: "text-xl" },
    { top: "80%", right: "20%", delay: "3s", size: "text-sm" },
    { top: "40%", left: "80%", delay: "4s", size: "text-lg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <LoadingScreen 
        isVisible={isLoading} 
        onComplete={() => setShowContent(true)} 
      />

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {heartParticles.map((particle, index) => (
          <motion.div
            key={index}
            className={`heart-particle absolute ${particle.size}`}
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              animationDelay: particle.delay,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative gradient-overlay">
          <div className="text-center z-10 px-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-dancing neon-text mb-6 animate-neonPulse"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              8 Meses
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-dancing neon-text mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              de amor infinito
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <Heart 
                className="w-24 h-24 text-[#FF1744] animate-heartbeat" 
                fill="currentColor" 
              />
            </motion.div>
            <motion.p 
              className="mt-8 text-lg font-poppins opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              Para mi pequeña hermosa
            </motion.p>
          </div>
        </section>

        {/* Photo Carousel Section */}
        <PhotoCarousel />

        {/* Romantic Message Section */}
        <RomanticMessage startTyping={startMessageTyping} />

        {/* Music Video Section */}
        <MusicVideo />

        {/* Footer */}
        <footer className="py-12 text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-[#FF1744] animate-heartbeat" fill="currentColor" />
          </motion.div>
          <motion.p 
            className="text-xl font-dancing neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            8 meses... y toda una vida por delante
          </motion.p>
        </footer>
      </motion.div>
    </div>
  );
}
