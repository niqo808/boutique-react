import { Quote } from "lucide-react";

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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Nuestros Clientes
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12">
          Empresas que confían en nuestra calidad
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-card rounded-xl p-8 shadow-lg border border-border/30 hover:shadow-xl transition-all"
            >
              <Quote size={28} className="text-secondary mb-4" />
              <p className="font-body text-foreground/80 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-display font-bold text-foreground">{t.author}</p>
                <p className="font-body text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
