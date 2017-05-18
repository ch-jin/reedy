import glamorous from "glamorous";
import { Link } from "react-router-dom";

export const BASE = "#14c862";
export const DARKER = "#00B04D";
export const NAV_HEIGHT = "65px";
export const SIDE_NAV_WIDTH = "265px";

export const Button = glamorous.button({
  fontFamily: "Nunito",
  color: "#eee",
  backgroundColor: BASE,
  border: "none",
  letterSpacing: "0.5px",
  transition: "all 100ms",
  outline: "none",
  ":hover": {
    backgroundColor: DARKER,
    cursor: "pointer",
    transition: "all 100ms",
  },
});

export const FullHeightLink = glamorous.a({
  height: "100%",
  textDecoration: "none",
  color: "black",
});

export const Img = glamorous.img({
  height: "80%",
  ":hover": {
    cursor: "pointer",
  },
});

export const FlexedDivSpaceAround = glamorous.div({
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

export const FlexedDivCenter = glamorous.div({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
