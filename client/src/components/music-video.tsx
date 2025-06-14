import { motion } from "framer-motion";

export default function MusicVideo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-dancing neon-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestra Canción
        </motion.h2>
        
        <motion.div 
          className="relative neon-border rounded-3xl overflow-hidden bg-black"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <iframe 
            className="w-full h-64 md:h-96" 
            src="https://www.youtube.com/embed/kJQP7kiw5Fk" 
            title="Canción Romántica - Despacito (Romantic Version)"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </motion.div>
        
        <motion.p 
          className="mt-6 text-lg font-dancing opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Esta canción me recuerda a nosotros 💖
        </motion.p>
      </div>
    </section>
  );
}
