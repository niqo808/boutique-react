import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Productos", href: "/productos" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-[1000] glass border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="La Paz" className="h-12 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-display font-bold text-primary tracking-wide leading-tight">
              La Paz
            </span>
            <span className="text-[10px] font-body text-secondary uppercase tracking-widest">
              Boutique de Carnes
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`font-body text-sm transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-primary"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden glass border-t border-border/30 animate-fade-in">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-sm py-2 transition-colors ${
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
