import { Link } from "react-router-dom";
import bifeImg from "@/assets/bife_chorizo.jpg";
import carne7Img from "@/assets/carne7.jpg";
import carne3Img from "@/assets/carne3.jpg";

const products = [
  {
    name: "Bife Ancho",
    description: "Corte jugoso con excelente marmoleado, ideal para parrilla y plancha.",
    image: bifeImg,
  },
  {
    name: "Lomo",
    description: "El corte más tierno y magro, perfecto para ocasiones especiales.",
    image: carne7Img,
  },
  {
    name: "Bife Angosto",
    description: "Corte sabroso y firme, excelente para parrilla y horno.",
    image: carne3Img,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Nuestras Especialidades
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12">
          Cortes premium de la más alta calidad
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/productos"
            className="inline-block border-2 border-primary text-primary font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
}
