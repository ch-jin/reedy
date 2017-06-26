import glamorous from "glamorous";
import { BASE } from "./theme";
import { spinAnimation } from "./animations";

export const Spinner = glamorous.div({
  animation: `${spinAnimation} 800ms linear infinite`,
  position: "absolute",
  zIndex: 2,
  top: 25,
  right: 15,
  height: 20,
  width: 20,
  borderRadius: "50%",
  border: `3px solid ${BASE}`,
  borderRightColor: "transparent",
});
