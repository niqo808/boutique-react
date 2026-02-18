import Header from "@/components/Header";
import HeroSection from "@/components/landing/HeroSection";
import CarouselSection from "@/components/landing/CarouselSection";
import ProductsSection from "@/components/landing/ProductsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import PageTransition from "@/components/PageTransition";

export default function LandingPage() {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CarouselSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </PageTransition>
  );
}
