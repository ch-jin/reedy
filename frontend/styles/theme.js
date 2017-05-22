import glamorous from "glamorous";

export const BASE = "#14c862";
export const DARKER = "#00B04D";
export const DARKEST = "#00873B";
export const NAV_HEIGHT = 55;
export const SHADOW_BORDER = "1px solid #e9e9e9";
export const SOFT_BOX_SHADOW = "0 1px 2px rgba(0,0,0,.1)";
// "0 1px 3px 0 rgba(0,0,0,0.03), 0 1px 2px 0 rgba(0,0,0,0.06)";
export const SIDE_NAV_WIDTH = 265;

export const Button = glamorous.button({
  fontFamily: "Roboto",
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

export const StyledFollowButton = glamorous(Button)({
  fontFamily: "Oxygen",
  color: BASE,
  position: "absolute",
  right: 10,
  backgroundColor: "#fff",
  border: `1px solid ${BASE}`,
  letterSpacing: "0.5px",
  transition: "all 100ms",
  outline: "none",
  textTransform: "uppercase",
  height: 40,
  width: 112,
  borderRadius: 5,
  fontSize: 14,
  fontWeight: "bold",
  ":hover": {
    backgroundColor: "#fff",
    color: DARKEST,
    border: `1px solid ${DARKEST}`,
    cursor: "pointer",
    transition: "all 100ms",
  },
});
