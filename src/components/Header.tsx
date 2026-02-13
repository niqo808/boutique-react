import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";
import { 
  navbarSlide, 
  staggerContainer, 
  staggerItem,
  scaleOnHover,
  scaleOnTap,
} from "@/lib/animations";

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
    <motion.header 
      className="sticky top-0 z-[1000] glass border-b border-border/30"
      initial="initial"
      animate="animate"
      variants={navbarSlide}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img 
            src={logoImg} 
            alt="La Paz" 
            className="h-12 w-auto"
            whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
          />
          <motion.div 
            className="hidden sm:flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-xl font-display font-bold text-primary tracking-wide leading-tight">
              La Paz
            </span>
            <span className="text-[10px] font-body text-secondary uppercase tracking-widest">
              Boutique de Carnes
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <motion.nav 
          className="hidden md:flex items-center gap-6"
          variants={staggerContainer}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              custom={index}
            >
              <Link
                to={item.href}
                className={`font-body text-sm transition-colors duration-200 relative ${
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
                {/* Underline animation for active link */}
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-primary"
          aria-label="Toggle menu"
          whileHover={scaleOnHover}
          whileTap={scaleOnTap}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            className="md:hidden glass border-t border-border/30 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div 
              className="flex flex-col p-4 gap-3"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  custom={index}
                >
                  <Link
                    to={item.href}
                    className={`font-body text-sm py-2 block transition-colors ${
                      location.pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
