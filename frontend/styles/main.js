import glamorous from "glamorous";
import {
  NAV_HEIGHT,
  SHADOW_BORDER,
  SIDE_NAV_WIDTH,
  Button,
  FlexedDivSpaceAround,
  FlexedDivCenter,
  Img,
} from "./theme";

// -- UPPER NAV --
export const FixedNav = glamorous.nav(
  {
    position: "fixed",
    width: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
    left: SIDE_NAV_WIDTH,
  },
  ({ articleModal }) => ({
    zIndex: articleModal ? 1 : 1,
  })
);

export const StyledMainNavWrapper = glamorous.nav({
  height: NAV_HEIGHT,
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  borderBottom: SHADOW_BORDER,
  top: 0,
  backgroundColor: "#fff",
});

export const StyledMainNav = glamorous.nav({
  height: "100%",
  maxWidth: "1280px",
  width: "94%",
  position: "relative",
});
// -----

// -- SIDE NAV --
export const FixedSideNav = glamorous.nav(
  {
    position: "fixed",
    width: SIDE_NAV_WIDTH,
  },
  ({ articleModal }) => ({
    zIndex: articleModal ? -2 : 1,
  })
);

export const SideNavWrapper = glamorous.nav({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 1px 11px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.10)",
  top: 0,
  backgroundColor: "#1e262f",
  color: "#e9e9e9",
  position: "relative",
});

export const SideNavContent = glamorous.nav({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
// -----

// -- SIDE NAV ITEMS --
export const StyledNavBox = glamorous.div({
  width: SIDE_NAV_WIDTH,
  marginTop: "15px",
  height: "150px",
  border: "1px solid white",
});
// -----

// -- ADD CONTENT --
export const StyledAddContentButton = glamorous(Button)({
  width: SIDE_NAV_WIDTH,
  height: 60,
  position: "absolute",
  left: 0,
  bottom: 0,
  fontWeight: 700,
  fontSize: "14px",
  fontFamily: "oxygen",
  backgroundColor: "#00B04D",
  ":hover": {
    backgroundColor: "#019542",
  },
});
//

export const StyledUserSection = glamorous(FlexedDivSpaceAround)({
  position: "absolute",
  right: 0,
});

export const StyledMainNavHeader = glamorous(FlexedDivCenter)({
  fontFamily: "oxygen",
  position: "absolute",
});

export const UserImg = glamorous(Img)({
  height: "70%",
});

export const MainContentWrapper = glamorous.div(
  {
    boxSizing: "border-box",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
    backgroundColor: "#fafafa",
    left: SIDE_NAV_WIDTH,
  },
  props => ({
    overflow: props.modalOpen ? "hidden" : "auto",
    zIndex: props.modalOpen ? 0 : 1,
  })
);

export const MainNavLogo = glamorous.img({
  top: 10,
  left: 0,
  position: "absolute",
  height: 35,
});
