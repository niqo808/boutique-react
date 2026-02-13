import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

const testimonials = [
  {
    text: "La calidad de La Paz es excepcional. 5 años con ellos y siempre impecables.",
    author: "Restaurant Don Julio",
    location: "Palermo, Buenos Aires",
  },
  {
    text: "Entrega puntual y producto siempre fresco. Excelente proveedor.",
    author: "Parrilla La Cabrera",
    location: "Recoleta, Buenos Aires",
  },
  {
    text: "Los mejores cortes premium. Atención de calidad.",
    author: "Steakhouse El Preferido",
    location: "San Telmo, Buenos Aires",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Nuestros Clientes
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12">
            Empresas que confían en nuestra calidad
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              variants={staggerItem}
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className="bg-card rounded-xl p-8 shadow-lg border border-border/30 h-full"
                variants={{
                  hover: cardHover
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <Quote size={28} className="text-secondary mb-4" />
                </motion.div>
                
                <motion.p 
                  className="font-body text-foreground/80 italic mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  "{t.text}"
                </motion.p>
                
                <motion.div 
                  className="border-t border-border/30 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <p className="font-display font-bold text-foreground">{t.author}</p>
                  <p className="font-body text-muted-foreground text-sm">{t.location}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
