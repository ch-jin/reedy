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
      border: props.followed ? `1px solid ${RED}` : `1px solid ${DARKEST}`,
      color: props.followed ? RED : DARKEST,
    },
  })
);

export const CollectionTitleIcon = glamorous.i({
  fontSize: 22,
  color: SLIGHT_WHITE,
});

export const ListIcon = glamorous(CollectionTitleIcon)({
  width: 10,
  fontSize: 14,
  marginRight: 14,
  marginLeft: 3,
  display: "flex",
  justifyContent: "center",
});

export const ErrorDiv = glamorous.div({
  position: "absolute",
  top: 120,
  right: "30%",
  width: "40%",
  textAlign: "center",
  color: "#454545",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "80%",
  fontSize: 30,
});

export const ErrorDiscoverIcon = glamorous.i({
  display: "block",
  marginTop: 40,
  width: 60,
  fontSize: 60,
  borderRadius: 10,
  border: "1px solid black",
  transition: "all 200ms",
  ":hover": {
    cursor: "pointer",
    transform: "scale(1.05)",
    transition: "all 200ms",
    color: "#F2784B",
    border: "1px solid #F2784B",
  },
});

export const SmallCloseButton = glamorous.i({
  fontSize: 14,
  position: "absolute",
  top: 7,
  right: 7,
  padding: "5px 8px",
  borderRadius: 3,
  color: "#797979",
  border: "1px solid #e7e7e7",
  transition: "all 100ms",
  ":hover": {
    transition: "all 100ms",
    color: RED,
    cursor: "pointer",
    border: `1px solid ${RED}`,
  },
});

export const BigCloseButton = glamorous(SmallCloseButton)({
  fontSize: 18,
  right: 10,
  width: 20,
  textAlign: "center",
});
