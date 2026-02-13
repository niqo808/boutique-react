import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Award, Snowflake, Truck, Flame, Clock, MessageCircle } from "lucide-react";
import bifeChorizoImg from "@/assets/bife_chorizo.jpg";
import carne2Img from "@/assets/carne2.jpg";
import carne3Img from "@/assets/carne3.jpg";
import carne4Img from "@/assets/carne4.jpg";
import carne6Img from "@/assets/carne6.jpg";
import carne7Img from "@/assets/carne7.jpg";
import carneImg from "@/assets/carne.jpg";

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
  { name: "Bife de Chorizo", category: "vacuna", premium: true, image: bifeChorizoImg, description: "Corte estrella argentino con marmoleado excepcional. Jugoso, tierno y con sabor intenso.", cooking: "Parrilla", time: "15-20min" },
  { name: "Lomo", category: "vacuna", premium: true, image: carne2Img, description: "El corte más tierno y magro. Ideal para ocasiones especiales y preparaciones gourmet.", cooking: "Plancha", time: "10-15min" },
  { name: "Bife Ancho", category: "vacuna", premium: true, image: carne3Img, description: "Corte generoso con hueso. Sabor intenso y textura perfecta para parrilla.", cooking: "Parrilla", time: "15-20min" },
  { name: "Bife Angosto", category: "vacuna", image: carne4Img, description: "Corte magro y sabroso. Ideal para quienes buscan menos grasa sin sacrificar sabor.", cooking: "Parrilla/Plancha", time: "12-18min" },
  { name: "Asado de Tira", category: "vacuna", image: carne6Img, description: "Clásico argentino para parrilladas. Jugoso y con hueso que aporta sabor único.", cooking: "Parrilla", time: "20-25min" },
  { name: "Vacío", category: "vacuna", image: carne7Img, description: "Corte versátil y jugoso. Perfecto para parrilla o al horno con su capa de grasa característica.", cooking: "Parrilla/Horno", time: "25-30min" },
  { name: "Bondiola de Cerdo", category: "cerdo", image: carneImg, description: "Corte tierno y jugoso del cerdo, ideal para horno lento o parrilla.", cooking: "Horno/Parrilla", time: "60-90min" },
  { name: "Pechuga de Pollo", category: "pollo", image: carne2Img, description: "Pechuga fresca y magra de pollo de campo, perfecta para plancha o al horno.", cooking: "Plancha/Horno", time: "15-20min" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "vacuna", label: "Vacuna" },
  { value: "cerdo", label: "Cerdo" },
  { value: "pollo", label: "Pollo" },
];

export default function Productos() {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <img src={carne4Img} alt="Productos" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 text-center px-6">
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
                { icon: <Truck className="w-5 h-5" />, label: "Entrega en 24hs" },
              ].map((b) => (
                <div key={b.label} className="glass-dark rounded-full px-4 py-2 flex items-center gap-2 text-primary-foreground font-body text-sm">
                  {b.icon}
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 text-center">Tipos de Carne</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  className={`font-body text-sm px-6 py-2.5 rounded-full transition-all duration-300 font-semibold ${
                    filter === c.value
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <div
                  key={product.name}
                  className="group rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
                >
                  {product.premium && (
                    <div className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground font-body text-xs font-bold px-3 py-1 rounded-full">
                      Premium
                    </div>
                  )}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
                        className="flex-1 text-center bg-primary text-primary-foreground font-body text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Consultar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">¿No encontrás lo que buscás?</h2>
            <p className="font-body text-muted-foreground mb-8">
              Tenemos muchos más cortes disponibles en nuestras sucursales. Contactanos y te asesoramos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Contactanos
              </Link>
              <Link to="/sucursales" className="inline-block border-2 border-primary text-primary font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                Ver Sucursales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
