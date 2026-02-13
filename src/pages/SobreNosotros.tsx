import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Store, CalendarDays, Handshake, Truck, Gem, Snowflake, Users, Star, Target, Heart } from "lucide-react";
import carne4Img from "@/assets/carne4.jpg";
import carne6Img from "@/assets/carne6.jpg";
import carne7Img from "@/assets/carne7.jpg";
import contactoImg from "@/assets/contacto.jpg";

const timeline = [
  { year: "1994", title: "Los Comienzos", desc: "Apertura de nuestra primera boutique en Villa Rosa. Un sueño familiar se hace realidad.", image: carne4Img },
  { year: "2005", title: "Expansión Regional", desc: "Abrimos 3 sucursales más en zona norte. Nuestro compromiso con la calidad nos hace crecer.", image: carne6Img },
  { year: "2012", title: "Tecnología y Tradición", desc: "Incorporamos cámaras frigoríficas de última generación manteniendo nuestros métodos artesanales.", image: carne7Img },
  { year: "2018", title: "Cadena de Frío Propia", desc: "Lanzamos nuestro servicio de delivery con flota refrigerada, garantizando calidad hasta tu puerta.", image: contactoImg },
  { year: "2024", title: "Líder del Mercado", desc: "6 sucursales, más de 500 clientes corporativos y el reconocimiento como la mejor boutique de carnes de Buenos Aires.", image: carne4Img },
];

const stats = [
  { icon: <Store className="w-8 h-8" />, value: "6", label: "Sucursales" },
  { icon: <CalendarDays className="w-8 h-8" />, value: "+25", label: "Años de Experiencia" },
  { icon: <Handshake className="w-8 h-8" />, value: "+500", label: "Clientes Corporativos" },
  { icon: <Truck className="w-8 h-8" />, value: "+1000", label: "Entregas Mensuales" },
];

const values = [
  { icon: <Gem className="w-7 h-7" />, title: "Calidad Premium", desc: "Seleccionamos únicamente cortes de la más alta calidad, elegidos por maestros carniceros con más de 30 años de experiencia." },
  { icon: <Snowflake className="w-7 h-7" />, title: "Cadena de Frío", desc: "Tecnología de vanguardia en refrigeración para garantizar frescura y calidad desde el origen hasta la entrega." },
  { icon: <Users className="w-7 h-7" />, title: "Servicio Personalizado", desc: "Nuestros expertos te guían en la selección de cortes según tus necesidades culinarias." },
  { icon: <Star className="w-7 h-7" />, title: "Innovación Constante", desc: "Combinamos técnicas artesanales con las últimas tecnologías para mejorar la experiencia del cliente." },
  { icon: <Heart className="w-7 h-7" />, title: "Tradición Familiar", desc: "Empresa familiar fundada en 1994, preservamos los valores que nos convirtieron en líderes del mercado." },
  { icon: <Target className="w-7 h-7" />, title: "Excelencia Operativa", desc: "Estándares de excelencia en todas nuestras operaciones, desde la selección hasta la entrega." },
];

const process = [
  { step: "01", title: "Selección Rigurosa", desc: "Nuestros expertos visitan frigoríficos seleccionados, eligiendo solo animales de primera calidad con certificación de origen.", image: carne4Img },
  { step: "02", title: "Maduración Controlada", desc: "Cada corte pasa por un proceso de maduración en cámaras especiales con temperatura y humedad precisas.", image: carne6Img },
  { step: "03", title: "Corte Artesanal", desc: "Maestros carniceros con más de 20 años de experiencia preparan cada pieza con precisión milimétrica.", image: carne7Img },
  { step: "04", title: "Entrega Refrigerada", desc: "Nuestra flota propia con sistema de frío garantiza que llegue en perfectas condiciones a tu puerta.", image: contactoImg },
];

const gallery = [
  { image: carne4Img, label: "Cortes Premium" },
  { image: carne6Img, label: "Maestros Carniceros" },
  { image: carne7Img, label: "Tecnología de Frío" },
  { image: contactoImg, label: "Nuestras Sucursales" },
];

export default function SobreNosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img src={carne4Img} alt="Sobre nosotros" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Descubrí Nuestra Historia
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80">
              Más de 25 años de pasión por la excelencia
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Una Tradición de Excelencia
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Con sucursales en <strong className="text-foreground">Villa Rosa, Villa de Mayo y Adolfo Sourdeaux</strong>, contamos con más de <strong className="text-foreground">25 años de experiencia</strong> en el rubro, consolidados como <strong className="text-foreground">referentes de calidad y excelencia</strong> en el mercado.
              </p>
              <h3 className="font-display text-xl font-bold text-primary pt-4">¿Qué nos distingue?</h3>
              <p>
                <strong className="text-foreground">Productos PREMIUM y atención personalizada.</strong> Realizamos una selección rigurosa de carnes, garantizando frescura y sabor inigualable. Contamos con un equipo calificado de profesionales dedicado a satisfacer las necesidades de cada cliente.
              </p>
              <p>
                <strong className="text-foreground">Somos proveedores de confianza.</strong> Suministramos carne a restaurantes y establecimientos que buscan lo mejor, adaptándonos a los más altos estándares del sector.
              </p>
              <p className="text-center text-lg text-primary font-semibold italic pt-4">
                Unite a nuestra familia para descubrir cómo podemos contribuir al éxito de tu negocio y disfrutar de productos cárnicos excepcionales en tu hogar.
              </p>
              <p className="text-center text-xl text-secondary font-bold tracking-wider pt-2">
                La Paz, ¡buena carne, buenos momentos!
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Nuestro Recorrido</h2>
            <p className="font-body text-muted-foreground text-center mb-14">Tres décadas de crecimiento y excelencia</p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={item.year} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="flex-1">
                      <div className="glass rounded-xl p-6">
                        <span className="font-display text-2xl font-bold text-primary">{item.year}</span>
                        <h3 className="font-display text-lg font-bold text-foreground mt-2">{item.title}</h3>
                        <p className="font-body text-muted-foreground text-sm mt-2">{item.desc}</p>
                        <div className="mt-4 rounded-lg overflow-hidden h-40">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shrink-0 z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative py-20 overflow-hidden">
          <img src={carne6Img} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
          <div className="relative z-10 container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">La Paz en Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="glass-dark rounded-xl p-6 text-center">
                  <div className="text-secondary mb-3 flex justify-center">{s.icon}</div>
                  <div className="font-display text-3xl font-bold text-primary-foreground">{s.value}</div>
                  <div className="font-body text-sm text-primary-foreground/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Nuestros Pilares</h2>
            <p className="font-body text-muted-foreground text-center mb-12">Los valores que nos definen</p>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-primary mb-4">{v.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Nuestro Proceso</h2>
            <p className="font-body text-muted-foreground text-center mb-14">De la selección a tu mesa</p>
            <div className="space-y-8">
              {process.map((p, i) => (
                <div key={p.step} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2 rounded-xl overflow-hidden h-64">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-1/2">
                    <span className="font-display text-5xl font-bold text-primary/20">{p.step}</span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-2">{p.title}</h3>
                    <p className="font-body text-muted-foreground mt-3">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Nuestra Esencia</h2>
            <p className="font-body text-muted-foreground text-center mb-12">Imágenes que cuentan nuestra historia</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((g) => (
                <div key={g.label} className="group relative rounded-xl overflow-hidden h-56 cursor-pointer">
                  <img src={g.image} alt={g.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                    <span className="font-body text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{g.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <img src={contactoImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
          <div className="relative z-10 text-center px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ¿Querés Experimentar la Diferencia?
            </h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Visitá cualquiera de nuestras sucursales y descubrí por qué somos la elección de los conocedores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sucursales" className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Ver Sucursales
              </Link>
              <Link to="/contacto" className="inline-block border-2 border-primary-foreground text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                Contactanos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
