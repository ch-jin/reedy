import glamorous from "glamorous";

export const BASE = "#14c862";
export const DARKER = "#00B04D";
export const DARKEST = "#00873B";
export const NAV_HEIGHT = 55;
export const SHADOW_BORDER = "1px solid #e9e9e9";
export const SOFT_BOX_SHADOW = "0 1px 2px rgba(0,0,0,.1)";
export const RED = "#c0392b";
export const SLIGHT_WHITE = "rgb(210, 212, 213)";
export const SLIGHT_TRANSPARENT = "rgba(105, 106, 109, 0.85)";
export const HALF_TRANSPARENT = "rgba( 255, 255, 255, 0.6 )";
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

export const StyledFollowButton = glamorous(Button)(
  {
    fontFamily: "Oxygen",
    color: BASE,
    position: "absolute",
    right: 10,
    backgroundColor: "#fff",
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
      cursor: "pointer",
      transition: "all 100ms",
    },
  },
  props => ({
    border: props.followed ? "1px solid #454545" : `1px solid ${BASE}`,
    color: props.followed ? "#454545" : BASE,
    transition: "all 100ms",
    ":hover": {
      transition: "all 100ms",
      content: "edit",
      border: props.followed ? `1px solid ${RED}` : `1px solid ${DARKER}`,
      color: props.followed ? RED : BASE,
    },
  })
);

export const CollectionTitleIcon = glamorous.i({
  fontSize: 22,
  color: SLIGHT_WHITE,
});

export const ListIcon = glamorous(CollectionTitleIcon)({
  fontSize: 14,
  marginRight: 10,
});
