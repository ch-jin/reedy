import glamorous from "glamorous";
import { Button } from "./theme";
import { NAV_HEIGHT, SHADOW_BORDER } from "./theme";
import { StyledSessionButton } from "./session_form";

// ---- Nav

export const FixedNav = glamorous.nav({
  position: "fixed",
  width: "100%",
  zIndex: 2,
});

export const HomeNavWrapper = glamorous.nav({
  height: NAV_HEIGHT,
  display: "flex",
  justifyContent: "center",
  borderBottom: SHADOW_BORDER,
  top: 0,
  backgroundColor: "#fff",
});

export const HomeNav = glamorous.nav({
  height: "100%",
  maxWidth: 930,
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// -----

export const StyledNavBrand = glamorous.div({
  fontFamily: "Oxygen",
  fontSize: "36px",
  letterSpacing: "0.5px",
  height: "100%",
  display: "flex",
  width: "175px",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledNavButtonContainer = glamorous.div({
  width: "200px",
  display: "flex",
  justifyContent: "space-around",
});

export const StyledNavButton = glamorous(Button)({
  height: "40px",
  fontSize: "18px",
  fontFamily: "Oxygen",
  boxShadow: "none",
  padding: "0 10px",
});

export const HomePageContent = glamorous.div({
  position: "absolute",
  top: NAV_HEIGHT,
  zIndex: 1,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
});

export const HeaderWrapper = glamorous.div({
  height: 100,
  width: 800,
  fontSize: 18,
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
});

export const Header = glamorous.h1({
  fontFamily: "Oxygen",
  marginTop: 30,
  marginBottom: 20,
  fontSize: 40,
  letterSpacing: 1,
});

export const Screenshot = glamorous.div({
  maxWidth: 930,
  width: "90%",
  margin: "50px auto",
});

export const ScreenshotImg = glamorous.img({
  boxSizing: "border-box",
  width: "100%",
  border: "1px solid #e0dce0",
});

export const MacWindow = glamorous.div({
  background: "-webkit-linear-gradient(#eae6ea, #d2d0d2)",
  borderRadius: "4px 4px 0 0",
  padding: ".25rem .5rem",
  ":before": {
    background: "#ffc12e",
    borderRadius: "50%",
    content: "close-quote",
    display: "inline-block",
    height: 10,
    left: "1.5rem",
    position: "relative",
    width: 10,
    boxShadow: "-1rem 0 0 #ff6159, 1rem 0 0 #29ce42",
  },
});

export const Features = glamorous.div({
  height: "400px",
  width: "800px",
  border: "1px solid black",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
});

export const GetStartedButton = glamorous(StyledSessionButton)({
  width: 200,
  height: 60,
  fontSize: 20,
  paddingRight: 20,
  padding: 20,
  fontFamily: "oxygen",
  verticalAlign: "middle",
});

export const GetStartedImg = glamorous.img({
  width: 40,
  height: 40,
  position: "relative",
  bottom: 10,
});
