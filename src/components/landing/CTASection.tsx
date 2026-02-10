import { Link } from "react-router-dom";
import carneImg from "@/assets/carne.jpg";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={carneImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          ¿Listo para Experimentar la Excelencia?
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg mb-8">
          Contactanos y descubrí por qué somos la elección de los conocedores
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-10 py-4 rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 text-lg"
        >
          Contactar Ahora
        </Link>
      </div>
    </section>
  );
}
