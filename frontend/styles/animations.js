import { css } from "glamor";

export const spinAnimation = css.keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spin = () => {
  return { animation: `${spinAnimation} 0.4s infinite linear` };
};

export const opacityChange = css.keyframes({
  "0%": { opacity: "0" },
  "60%": { opacity: "1" },
  "100%": { opacity: "0" },
});

export const opacity = () => (window.opacityChange = opacityChange);
