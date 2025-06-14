import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function LoadingScreen({ isVisible, onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => {
        if (!isVisible) {
          onComplete();
        }
      }}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            textShadow: [
              "0 0 5px #FF073A, 0 0 10px #FF073A, 0 0 15px #FF073A",
              "0 0 10px #FF073A, 0 0 20px #FF073A, 0 0 30px #FF073A",
              "0 0 5px #FF073A, 0 0 10px #FF073A, 0 0 15px #FF073A"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart className="w-16 h-16 text-[#FF073A] mx-auto neon-text" fill="currentColor" />
        </motion.div>
        <motion.p 
          className="mt-4 text-xl neon-text font-dancing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Cargando algo especial...
        </motion.p>
      </div>
    </motion.div>
  );
}
