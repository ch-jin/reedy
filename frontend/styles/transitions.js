import { spring } from "react-motion";

export const config = {
  noWobble: { stiffness: 170, damping: 26 },
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 },
  fade: { stiffness: 200, damping: 22 },
  pop: { stiffness: 360, damping: 25 },
  slide: { stiffness: 330, damping: 30 },
};

export const fade = {
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

export const halfFade = {
  atEnter: {
    opacity: 0.5,
  },
  atLeave: {
    opacity: spring(0.5, config.fade),
  },
  atActive: {
    opacity: spring(1, config.fade),
  },
};

export const popNoFade = {
  atEnter: {
    scale: 0.95,
  },
  atLeave: {
    scale: spring(0.95, config.pop),
  },
  atActive: {
    scale: spring(1, config.pop),
  },
  mapStyles(styles) {
    return {
      transform: `scale(${styles.scale})`,
    };
  },
};

export const gentlePop = {
  atEnter: {
    scale: 0.95,
  },
  atLeave: {
    scale: spring(0.95, config.fade),
  },
  atActive: {
    scale: spring(1, config.fade),
  },
  mapStyles(styles) {
    return {
      transform: `scale(${styles.scale})`,
    };
  },
};

export const popFade = {
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

export const slideLeft = {
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

export const slideRight = {
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

export const articleSlideLeft = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: spring(-100, config.slide),
  },
  atActive: {
    offset: spring(0, config.slide),
  },
  mapStyles(styles) {
    return {
      overflow: "hidden",
      transform: `translateX(${styles.offset}%)`,
      height: "100vh",
      width: "100vw",
    };
  },
};
