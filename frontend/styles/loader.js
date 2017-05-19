import glamorous from "glamorous";
import { spin, opacityChange } from "./animations";

export const LoaderContainer = glamorous.div({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255,255,255,0.6)",
  zIndex: 3,
});

export const Dot = glamorous.div({
  width: 10,
  height: 10,
  borderRadius: "100%",
  backgroundColor: "#2ecc71",
  margin: "35px 5px",
  opacity: 0,
});

export const FirstDot = glamorous(Dot)({
  animation: `${opacityChange} 600ms ease-in-out infinite`,
});

export const SecondDot = glamorous(Dot)({
  animation: `${opacityChange} 600ms ease-in-out 200ms infinite`,
});

export const ThirdDot = glamorous(Dot)({
  marginRight: 15,
  animation: `${opacityChange} 600ms ease-in-out 400ms infinite`,
});
