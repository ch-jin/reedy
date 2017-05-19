import glamorous from "glamorous";
import { spin } from "./animations";

export const SpinnerContainer = glamorous.div({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255,255,255,0.6)",
  zIndex: 1,
});

export const SessionSpinner = glamorous.div(
  {
    position: "absolute",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    border: "3px solid #e7e7e7",
    borderLeft: "3px solid #2ecc71",
  },
  spin
);
