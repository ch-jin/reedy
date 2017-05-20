import { spring } from "react-motion";

const config = {
  // noWobble: { stiffness: 170, damping: 26 },
  // gentle: { stiffness: 120, damping: 14 },
  // wobbly: { stiffness: 180, damping: 12 },
  // stiff: { stiffness: 210, damping: 20 },
  fade: { stiffness: 200, damping: 22 },
  pop: { stiffness: 360, damping: 25 },
  slide: { stiffness: 330, damping: 30 },
};

const fade = {
  atEnter: {
    opacity: 0,
  },
  atLeave: {
    opacity: spring(0, config.fade),
  },
  atActive: {
    opacity: spring(1, config.fade),
  },
};

const pop = {
  atEnter: {
    scale: 0.8,
    opacity: 0,
  },
  atLeave: {
    scale: spring(0.8, config.pop),
    opacity: spring(0, config.pop),
  },
  atActive: {
    scale: spring(1, config.pop),
    opacity: 1,
  },
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  },
};

const slideLeft = {
  atEnter: {
    opacity: 0,
    offset: 100,
  },
  atLeave: {
    opacity: spring(0, config.fade),
    offset: spring(-100, config.slide),
  },
  atActive: {
    opacity: spring(1, config.slide),
    offset: spring(0, config.slide),
  },
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `translateX(${styles.offset}%)`,
    };
  },
};

const slideRight = {
  atEnter: {
    opacity: 0,
    offset: -100,
  },
  atLeave: {
    opacity: spring(0, config.fade),
    offset: spring(100, config.slide),
  },
  atActive: {
    opacity: spring(1, config.slide),
    offset: spring(0, config.slide),
  },
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `translateX(${styles.offset}%)`,
    };
  },
};

const articleSlideLeft = {
  atEnter: {
    opacity: 0,
    offset: 100,
  },
  atLeave: {
    opacity: spring(0, config.fade),
    offset: spring(-100, config.slide),
  },
  atActive: {
    opacity: spring(1, config.slide),
    offset: spring(0, config.slide),
  },
  mapStyles(styles) {
    return {
      overflow: "hidden",
      opacity: styles.opacity,
      transform: `translateX(${styles.offset}%)`,
      height: "100vh",
      width: "100vw",
    };
  },
};

export default { fade, pop, slideLeft, slideRight, articleSlideLeft };
