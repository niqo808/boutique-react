import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Init from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors"
      aria-label="Cambiar tema"
      whileTap={{ scale: 0.9 }}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}
