import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import colitaCuadril2Img from "@/assets/colitacuadril2.jpeg";
import bondiolaImg from "@/assets/bondiola.jpeg";
import supremasImg from "@/assets/supremas.jpeg";
import { 
  staggerContainer, 
  staggerItem, 
  viewportAnimation,
  cardHover,
} from "@/lib/animations";

const products = [
  {
    name: "Colita de Cuadril",
    description: "Corte magro y versátil con excelente sabor. Ideal para personas que buscan una carne de calidad sin exceso de grasa.",
    image: colitaCuadril2Img,
  },
  {
    name: "Bondiola",
    description: "Corte clásico del cerdo, tierno y jugoso. Perfecto para horno lento o asados con resultados excepcionales.",
    image: bondiolaImg,
  },
  {
    name: "Supremas",
    description: "Pechuga de pollo de primera calidad con ala. Versátil y magra, perfecta para plancha, parrilla u horno.",
    image: supremasImg,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Nuestras Especialidades
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12">
            Cortes premium de la más alta calidad
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={staggerItem}
              custom={index}
              whileHover="hover"
              className="group"
            >
              <motion.div
                className="rounded-xl overflow-hidden bg-card shadow-lg transition-all duration-300"
                variants={{
                  hover: cardHover
                }}
              >
                {/* Image container */}
                <div className="h-56 overflow-hidden relative">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="font-display text-xl font-bold text-foreground mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p 
                    className="font-body text-muted-foreground text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {product.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          {...viewportAnimation}
          transition={{ delay: 0.4 }}
        >
          <Link to="/productos">
            <motion.button
              className="inline-block border-2 border-primary text-primary font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todos los Productos
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
