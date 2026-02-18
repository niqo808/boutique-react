import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import ContactoForm from "@/components/Contacto";
import PageTransition from "@/components/PageTransition";

export default function Contacto() {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <Header />
      <ContactoForm />
      <Footer />
    </PageTransition>
  );
}
