import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messageText = `Mi pequeña hermosa,

Hoy celebramos 8 meses juntos y mi corazón se llena de gratitud al pensar en todo lo que has traído a mi vida.

Gracias por ser esa luz que ilumina mis días más grises, por tu sonrisa que puede cambiar cualquier momento difícil en algo hermoso.

Gracias por tu paciencia cuando soy testarudo, por tu comprensión cuando las palabras no me salen como quisiera.

En estos 8 meses has logrado que me enamore no solo de ti, sino también de la versión de mí mismo que soy cuando estoy contigo.

Me has enseñado que el amor puede ser tierno y fuerte a la vez, que puede ser aventura y paz al mismo tiempo.

Gracias por cada abrazo que sana, por cada risa compartida, por cada plan que hacemos juntos y por cada momento de silencio cómodo a tu lado.

Gracias por elegirme cada día y permitirme elegirte a ti.

Mi pequeña, eres mi lugar favorito en este mundo, y estos 8 meses han sido solo el comienzo de todo lo hermoso que construiremos juntos.

Te amo más de lo que las palabras pueden expresar.`;

interface RomanticMessageProps {
  startTyping: boolean;
}

export default function RomanticMessage({ startTyping }: RomanticMessageProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < messageText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(messageText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);

      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, startTyping]);

  const formatText = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className={`mb-4 ${paragraph.includes('Te amo más') ? 'text-[#FF073A] font-semibold neon-text' : ''}`}>
        {paragraph}
      </p>
    ));
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-center neon-text mb-12">
            Para Ti, Mi Amor
          </h2>
          
          <div className="bg-black bg-opacity-50 p-8 md:p-12 rounded-3xl neon-border backdrop-blur-sm">
            <div className="text-lg md:text-xl leading-relaxed font-poppins text-left space-y-4 min-h-[400px]">
              {formatText(displayedText)}
              {!isTypingComplete && (
                <span className="inline-block w-0.5 h-6 bg-[#FF073A] animate-pulse ml-1" />
              )}
            </div>
            
            <motion.div 
              className="mt-12 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingComplete ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-2xl font-dancing neon-text">
                Con todo mi amor,
              </p>
              <p className="text-3xl font-dancing neon-text mt-2">
                Danny 💕
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
