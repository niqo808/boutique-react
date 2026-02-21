import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import contactoImg from "@/assets/contacto.jpg";
import sucursales from "@/assets/sucursales/sourdeaux.jpeg";
import mostrador from "@/assets/sucursales/mostrador.jpeg";

const slides = [
  {
    title: "Tradición y Calidad",
    text1: "En La Paz, llevamos más de 30 años seleccionando las mejores carnes premium para satisfacer los gustos más refinados.",
    text2: "Cada corte es elegido por maestros carniceros para ofrecer maduración perfecta y sabor excepcional.",
    buttonText: "Conocé Más",
    buttonLink: "/nosotros",
    image: contactoImg,
  },
  {
    title: "Nuestras Sucursales",
    text1: "6 sucursales estratégicas para estar cerca tuyo y brindarte atención de excelencia.",
    text2: "Mantenemos siempre la misma filosofía de calidad suprema en todas nuestras ubicaciones.",
    buttonText: "Ver Sucursales",
    buttonLink: "/sucursales",
    image: sucursales,
  },
  {
    title: "Delivery Refrigerado",
    text1: "Cadena de frío garantizada con camiones refrigerados propios.",
    text2: "Recibí tus productos frescos y en perfecto estado, siempre.",
    buttonText: "Pedir Ahora",
    buttonLink: "/contacto",
    image: mostrador,
  },
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative rounded-2xl overflow-hidden bg-card shadow-2xl">
          <div className="grid md:grid-cols-2 min-h-[400px]">
            {/* Text */}
            <div className="flex flex-col justify-center p-8 md:p-12 order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {slide.title}
              </h2>
              <p className="font-body text-muted-foreground mb-3">{slide.text1}</p>
              <p className="font-body text-muted-foreground mb-6">{slide.text2}</p>
              <Link
                to={slide.buttonLink}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all w-fit"
              >
                {slide.buttonText}
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-auto order-1 md:order-2">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition z-10"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-secondary w-6" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
