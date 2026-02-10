import { Link } from "react-router-dom";
import heroImg from "@/assets/contacto.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Boutique de Carne La Paz"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left max-w-5xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
          Boutique De Carne
          <br />
          <span className="text-secondary">La Paz</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/80 font-body tracking-widest uppercase animate-fade-in">
          Excelencia en Cada Corte
        </p>
        <p className="mt-6 text-base md:text-lg text-white/70 font-body max-w-xl animate-fade-in">
          Descubrí la más alta calidad en carnes premium, seleccionadas con
          dedicación para los paladares más exigentes.
        </p>
        <div className="mt-8 animate-fade-in">
          <Link
            to="/contacto"
            className="inline-block bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
