import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/contacto.jpg";
import { heroTitle, heroSubtitle, heroCTA } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect - imagen se mueve más lento que el scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={heroImg}
          alt="Boutique de Carne La Paz"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center md:text-left max-w-5xl"
        style={{ opacity }}
      >
        <motion.h1 
          className="font-display text-5xl md:text-7xl font-bold text-white leading-tight"
          variants={heroTitle}
          initial="initial"
          animate="animate"
        >
          Boutique De Carne
          <br />
          <motion.span 
            className="text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            La Paz
          </motion.span>
        </motion.h1>

        <motion.p 
          className="mt-4 text-xl md:text-2xl text-white/80 font-body tracking-widest uppercase"
          variants={heroSubtitle}
          initial="initial"
          animate="animate"
        >
          Excelencia en Cada Corte
        </motion.p>

        <motion.p 
          className="mt-6 text-base md:text-lg text-white/70 font-body max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Descubrí la más alta calidad en carnes premium, seleccionadas con
          dedicación para los paladares más exigentes.
        </motion.p>

        <motion.div 
          className="mt-8"
          variants={heroCTA}
          initial="initial"
          animate="animate"
        >
          <Link to="/contacto">
            <motion.button
              className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(197, 165, 90, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contactanos
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
