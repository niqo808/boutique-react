import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import carneImg from "@/assets/carne.jpg";

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img src={carneImg} alt="" className="w-full h-full object-cover scale-110" />
        <motion.div 
          className="absolute inset-0 bg-primary/85 backdrop-blur-sm"
          style={{ opacity }}
        />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <motion.h2 
          className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Listo para Experimentar la Excelencia?
        </motion.h2>
        
        <motion.p 
          className="font-body text-primary-foreground/80 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contactanos y descubrí por qué somos la elección de los conocedores
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/contacto">
            <motion.button
              className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-10 py-4 rounded-lg text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(197, 165, 90, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 20px rgba(197, 165, 90, 0.2)",
                  "0 15px 30px rgba(197, 165, 90, 0.25)",
                  "0 10px 20px rgba(197, 165, 90, 0.2)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Contactar Ahora
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
