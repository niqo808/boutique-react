import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid, { staggerChild } from "@/components/StaggerGrid";
import ParallaxHero from "@/components/ParallaxHero";
import contactoImg from "@/assets/contacto.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  message: z.string().trim().min(1, "El mensaje es requerido").max(1000, "Máximo 1000 caracteres"),
});

type FormData = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "loading" | "success" | "error";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+54 9 11 6161-4015", href: "tel:+5491161614015" },
  { icon: Mail, label: "Email", value: "info@boutiquelapaz.com", href: "mailto:info@boutiquelapaz.com" },
  { icon: MapPin, label: "Dirección", value: "Villa Rosa, Buenos Aires, Argentina" },
];

export default function ContactView() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <ParallaxHero image={contactoImg} alt="Contacto" height="h-[45vh]" minHeight="min-h-[300px]">
        <AnimatedSection variant="fadeUp" className="text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3">
            Contactanos
          </h1>
          <p className="font-body text-lg text-primary-foreground/80">
            Estamos para ayudarte
          </p>
        </AnimatedSection>
      </ParallaxHero>

      {/* Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Envianos tu Consulta
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Nombre
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-all outline-none focus:ring-2 focus:ring-primary/40 ${
                        errors.name ? "border-destructive" : "border-input"
                      }`}
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.15 }}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-destructive text-xs font-body mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@ejemplo.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-all outline-none focus:ring-2 focus:ring-primary/40 ${
                        errors.email ? "border-destructive" : "border-input"
                      }`}
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.15 }}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-destructive text-xs font-body mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Mensaje
                    </label>
                    <motion.textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Escribí tu mensaje aquí..."
                      className={`w-full px-4 py-3 rounded-lg border bg-background font-body text-foreground placeholder:text-muted-foreground transition-all outline-none focus:ring-2 focus:ring-primary/40 resize-none ${
                        errors.message ? "border-destructive" : "border-input"
                      }`}
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.15 }}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-destructive text-xs font-body mt-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-body font-bold flex items-center justify-center gap-2 disabled:opacity-60 transition-colors hover:bg-primary/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {status === "loading" && (
                        <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                        </motion.span>
                      )}
                      {status === "success" && (
                        <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-200">
                          <CheckCircle className="w-5 h-5" /> ¡Mensaje enviado!
                        </motion.span>
                      )}
                      {status === "error" && (
                        <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" /> Error al enviar
                        </motion.span>
                      )}
                      {status === "idle" && (
                        <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <Send className="w-5 h-5" /> Enviar Mensaje
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection variant="fadeRight" delay={0.2} className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h2>

                <StaggerGrid className="space-y-6">
                  {contactInfo.map((item) => (
                    <motion.div key={item.label} variants={staggerChild} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-sm">{item.label}</h3>
                        {item.href ? (
                          <a href={item.href} className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-muted-foreground text-sm">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </StaggerGrid>

                {/* Horarios */}
                <AnimatedSection variant="fadeUp" delay={0.4} className="mt-8 pt-6 border-t border-border/50">
                  <h3 className="font-display font-bold text-foreground text-sm mb-3">Horarios de Atención</h3>
                  <div className="space-y-1.5 font-body text-sm text-muted-foreground">
                    <p>Lun–Sáb: 8:00–13:00 / 17:00–21:00</p>
                    <p>Dom y Feriados: 8:00–13:00</p>
                  </div>
                </AnimatedSection>

                {/* WhatsApp CTA */}
                <AnimatedSection variant="scaleIn" delay={0.5} className="mt-6">
                  <motion.a
                    href="https://wa.me/5491161614015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[hsl(142,70%,35%)] text-white py-3 rounded-lg font-body font-bold"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    💬 Escribinos por WhatsApp
                  </motion.a>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
