
import { Variants, Transition } from "framer-motion";

// ============================================
// TIMING CONFIG
// ============================================

export const timing = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const;

export const easing = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  snappy: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elegant: [0.645, 0.045, 0.355, 1.000],
} as const;

// ============================================
// TRANSICIONES
// ============================================

export const transitions = {
  smooth: {
    duration: timing.normal,
    ease: easing.elegant,
  } as Transition,
  
  snappy: {
    duration: timing.fast,
    ease: easing.snappy,
  } as Transition,
  
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  } as Transition,
  
  springSnappy: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  } as Transition,
} as const;

// ============================================
// ANIMACIONES FADE
// ============================================

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0,
    transition: transitions.snappy,
  },
};

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: transitions.snappy,
  },
};

export const fadeInDown: Variants = {
  initial: { 
    opacity: 0, 
    y: -30,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
};

// ============================================
// ANIMACIONES SCALE
// ============================================

export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.9,
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: transitions.snappy,
  },
};

export const scaleOnHover = {
  scale: 1.02,
  transition: transitions.springSnappy,
};

export const scaleOnTap = {
  scale: 0.98,
  transition: transitions.snappy,
};

// ============================================
// ANIMACIONES SLIDE
// ============================================

export const slideInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -50,
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.smooth,
  },
};

export const slideInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 50,
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.smooth,
  },
};

// ============================================
// ANIMACIONES STAGGER
// ============================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: { 
    opacity: 0, 
    y: 20,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
};

// ============================================
// ANIMACIONES DE TARJETAS
// ============================================

export const cardHover = {
  y: -8,
  boxShadow: "0 20px 40px rgba(114, 47, 55, 0.15)",
  transition: transitions.spring,
};

export const cardTap = {
  scale: 0.98,
  transition: transitions.snappy,
};

// ============================================
// ANIMACIONES DE NAVBAR
// ============================================

export const navbarSlide: Variants = {
  initial: { 
    y: -100,
    opacity: 0,
  },
  animate: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: timing.normal,
      ease: easing.elegant,
    },
  },
};

// ============================================
// ANIMACIONES HERO
// ============================================

export const heroTitle: Variants = {
  initial: { 
    opacity: 0, 
    y: 40,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: timing.slow,
      ease: easing.elegant,
    },
  },
};

export const heroSubtitle: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: timing.slow,
      ease: easing.elegant,
      delay: 0.2,
    },
  },
};

export const heroCTA: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.9,
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: timing.normal,
      ease: easing.elegant,
      delay: 0.4,
    },
  },
};

// ============================================
// ANIMACIONES DE VIEWPORT
// ============================================

export const viewportAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: transitions.smooth,
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const createStaggerDelay = (index: number, baseDelay: number = 0.1) => ({
  ...transitions.smooth,
  delay: index * baseDelay,
});
