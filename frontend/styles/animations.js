import { css } from "glamor";

export const spin = props => {
  const spinAnimation = css.keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  });

  return { animation: `${spinAnimation} 0.4s infinite linear` };
};
