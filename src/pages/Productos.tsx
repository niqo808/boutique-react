import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxHero from "@/components/ParallaxHero";
import { staggerChild } from "@/components/StaggerGrid";
import { Award, Snowflake, Truck, Flame, Clock, MessageCircle } from "lucide-react";

// Beef / Vacuna
import asadoImg from "@/assets/asado.jpeg";
import colitaCuadrilImg from "@/assets/colitacuadril.jpeg";
import colitaCuadril2Img from "@/assets/colitacuadril2.jpeg";
import matambritoImg from "@/assets/matambrito.jpeg";
import vacioImg from "@/assets/vacio.jpeg";
import vacio2Img from "@/assets/vacio2.jpeg";
import vacio3Img from "@/assets/vacio3.jpeg";

// Pork / Cerdo
import bifeCerdoImg from "@/assets/bifedecerdo.jpeg";
import bondiolaImg from "@/assets/bondiola.jpeg";
import pechitoCerdoImg from "@/assets/pechitodecerdo.jpeg";
import chorizosImg from "@/assets/chorizos.jpeg";
import morcillaImg from "@/assets/morcilla.jpeg";
import morcilla2Img from "@/assets/morcilla2.jpeg";

// Chicken / Pollo
import patayMusloImg from "@/assets/PatayMuslo.jpeg";
import supremasImg from "@/assets/supremas.jpeg";

// Other
import milanesasImg from "@/assets/Milanesas.jpeg";
import productosImg from "@/assets/sucursales/carne2.jpeg";

type Category = "all" | "vacuna" | "cerdo" | "pollo";

interface Product {
  name: string;
  category: Category;
  premium?: boolean;
  image: string;
  description: string;
  cooking: string;
  time: string;
}

const products: Product[] = [
// BEEF / VACUNA
{ name: "Asado de Tira", category: "vacuna", image: asadoImg, description: "Clásico argentino por excelencia. Jugoso, con hueso que aporta sabor único y textura perfecta para parrillas.", cooking: "Parrilla", time: "20-25min" },
{ name: "Colita de Cuadril", category: "vacuna", image: colitaCuadrilImg, description: "Corte magro y versátil. Ideal para personas que buscan sabor sin demasiada grasa, perfecto para plancha o parrilla.", cooking: "Parrilla/Plancha", time: "15-18min" },
{ name: "Matambrito", category: "vacuna", image: matambritoImg, description: "Corte tierno y jugoso con sabor característico. Excellent choice para asados y parrilladas tradicionales.", cooking: "Parrilla", time: "18-22min" },
{ name: "Vacío", category: "vacuna", premium: true, image: vacioImg, description: "Corte versátil y aromático. Con su capa de grasa característica que lo hace perfectamente jugoso en la parrilla.", cooking: "Parrilla/Horno", time: "25-30min" },

// PORK / CERDO
{ name: "Bife de Cerdo", category: "cerdo", image: bifeCerdoImg, description: "Bife tierno y sabroso de cerdo fresco. Ideal para plancha, parrilla o preparaciones rápidas con excelente sabor.", cooking: "Plancha/Parrilla", time: "12-15min" },
{ name: "Bondiola", category: "cerdo", premium: true, image: bondiolaImg, description: "Corte clásico del cerdo, tierno y jugoso. Perfecto para horno lento o asados con resultados excepcionales.", cooking: "Horno/Parrilla", time: "60-90min" },
{ name: "Pechito de Cerdo", category: "cerdo", image: pechitoCerdoImg, description: "Pieza tierna y sabrosa del cerdo. Ideal para cocciones largas en horno o brasero manteniendo su jugosidad.", cooking: "Horno/Brasero", time: "45-60min" },
{ name: "Chorizos", category: "cerdo", image: chorizosImg, description: "Chorizo de cerdo (hilo amarillo): clásico, sabroso y jugoso, ideal para la parrilla. Chorizo mezcla (hilo verde): equilibrado y rendidor, perfecto para asar.", cooking: "Parrilla", time: "8-12min" },
{ name: "Morcilla", category: "cerdo", image: morcillaImg, description: "Embutido tradicional de cerdo y sangre. Parte esencial de una buena parrillada, con sabor profundo y único.", cooking: "Parrilla", time: "5-8min" },

// CHICKEN / POLLO
{ name: "Supremas", category: "pollo", image: supremasImg, description: "Pechuga de pollo de primera calidad con ala. Versátil y magra, perfecta para plancha, parrilla u horno.", cooking: "Plancha/Parrilla", time: "12-15min" },
{ name: "Pata y Muslo", category: "pollo", image: patayMusloImg, description: "Corte jugoso y lleno de sabor, más intenso que la pechuga. Ideal para parrilla, horno, guisos y cocciones lentas. Queda tierno por dentro y bien dorado por fuera.", cooking: "Horno/Guiso/Parrilla", time: "35-45min" },

// OTHER / OTROS
{ name: "Milanesas", category: "vacuna", image: milanesasImg, description: "Milanesas listas para cocinar, bien rebozadas y parejas. Disponibles de pollo, cerdo y carne vacuna. Ideales para freír u hornear, simples o para hacer napolitanas.", cooking: "Sartén/Horno", time: "8-12min" }];


const categories: {value: Category;label: string;}[] = [
{ value: "all", label: "Todos" },
{ value: "vacuna", label: "Vacuna" },
{ value: "cerdo", label: "Cerdo" },
{ value: "pollo", label: "Pollo" }];


export default function Productos() {
  const [filter, setFilter] = useState<Category>("all");
  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <PageTransition className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <ParallaxHero image={productosImg} alt="Productos">
          <AnimatedSection variant="fadeUp" className="text-center px-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Nuestros Cortes Premium
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 mb-6">
              Calidad excepcional en cada pieza
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
              { icon: <Award className="w-5 h-5" />, label: "Certificados" },
              { icon: <Snowflake className="w-5 h-5" />, label: "Maduración Controlada" },
              { icon: <Truck className="w-5 h-5" />, label: "Entrega en 24hs" }].
              map((b) =>
              <motion.div
                key={b.label}
                className="glass-dark rounded-full px-4 py-2 flex items-center gap-2 text-primary-foreground font-body text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}>

                  {b.icon}
                  <span>{b.label}</span>
                </motion.div>
              )}
            </div>
          </AnimatedSection>
        </ParallaxHero>

        {/* FILTERS */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 text-center">Tipos de Carne</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((c) =>
              <motion.button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`font-body text-sm px-6 py-2.5 rounded-full transition-all duration-300 font-semibold ${
                filter === c.value ?
                "bg-primary text-primary-foreground shadow-lg" :
                "bg-card text-foreground border border-border hover:border-primary hover:text-primary"}`
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout>

                  {c.label}
                </motion.button>
              )}
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((product) =>
                <motion.div
                  key={product.name}
                  variants={staggerChild}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(114, 47, 55, 0.12)" }}
                  className="group rounded-xl overflow-hidden bg-card shadow-lg relative">

                    {product.premium &&
                  <div className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground font-body text-xs font-bold px-3 py-1 rounded-full">
                        Premium
                      </div>
                  }
                    <div className="h-56 overflow-hidden relative">
                      <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">{product.name}</h3>
                      <p className="font-body text-muted-foreground text-sm mt-3">{product.description}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <span className="flex items-center gap-1 text-xs font-body text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                          <Flame className="w-3 h-3" /> {product.cooking}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-body text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3" /> {product.time}
                        </span>
                      </div>
                      <div className="flex gap-3 mt-5">
                        <Link
                        to="/contacto"
                        className="flex-1 text-center bg-primary text-primary-foreground font-body text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">

                          <MessageCircle className="w-4 h-4" /> Consultar
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#392224]">
          <AnimatedSection variant="fadeUp" className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">¿No encontrás lo que buscás?</h2>
            <p className="font-body text-muted-foreground mb-8">
              Tenemos muchos más cortes disponibles en nuestras sucursales. Contactanos y te asesoramos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <motion.span className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Contactanos
                </motion.span>
              </Link>
              <Link to="/sucursales">
                <motion.span className="inline-block border-2 border-primary text-primary font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Ver Sucursales
                </motion.span>
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </PageTransition>);

}