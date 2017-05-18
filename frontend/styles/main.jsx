import glamorous from "glamorous";
import {
  NAV_HEIGHT,
  SIDE_NAV_WIDTH,
  Button,
  FlexedDivSpaceAround,
  FlexedDivCenter,
} from "./theme";

// -- UPPER NAV --
export const FixedNav = glamorous.nav({
  position: "fixed",
  width: `calc(100% - ${SIDE_NAV_WIDTH})`,
  left: SIDE_NAV_WIDTH,
});

export const StyledMainNavWrapper = glamorous.nav({
  height: NAV_HEIGHT,
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 1px 11px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.10)",
  top: 0,
  backgroundColor: "#fff",
  zIndex: -1,
});

export const StyledMainNav = glamorous.nav({
  height: "100%",
  maxWidth: "1280px",
  width: "94%",
  position: "relative",
});
// -----

// -- SIDE NAV --
export const FixedSideNav = glamorous.nav({
  position: "fixed",
  width: SIDE_NAV_WIDTH,
});

export const SideNavWrapper = glamorous.nav({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 1px 11px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.10)",
  top: 0,
  backgroundColor: "#1e262f",
  zIndex: -1,
  color: "#e9e9e9",
});

export const SideNavContent = glamorous.nav({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});
// -----

// -- SIDE NAV ITEMS --
export const StyledNavBox = glamorous.div({
  width: `calc(${SIDE_NAV_WIDTH} - 30px)`,
  marginTop: "15px",
  height: "150px",
  border: "1px solid white",
});
// -----

// -- ADD CONTENT --
export const StyledAddContentButton = glamorous(Button)({
  width: SIDE_NAV_WIDTH,
  height: "60px",
  alignSelf: "flex-end",
  fontWeight: 700,
  fontSize: "14px",
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
  position: "absolute",
});
