import glamorous from "glamorous";

export const BASE = "#14c862";
export const DARKER = "#00B04D";
export const NAV_HEIGHT = 65;
export const SHADOW_BORDER = "1px solid #e9e9e9";
export const NAV_BOX_SHADOW =
  "0 1px 3px 0 rgba(0,0,0,0.03), 0 1px 2px 0 rgba(0,0,0,0.06)";
export const SIDE_NAV_WIDTH = 265;

export const Button = glamorous.button({
  fontFamily: "Oxygen",
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
  filter: "drop-shadow(0px 2px 4px #e7e7e7)",
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
