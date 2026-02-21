import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxHeroProps {
  image: string;
  alt: string;
  height?: string;
  minHeight?: string;
  children: React.ReactNode;
}

export default function ParallaxHero({
  image,
  alt,
  height = "h-[50vh]",
  minHeight = "min-h-[350px]",
  children,
}: ParallaxHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      className={`relative ${height} ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </motion.div>
      <motion.div className="relative z-10 w-full" style={{ opacity }}>
        {children}
      </motion.div>
    </section>
  );
}
