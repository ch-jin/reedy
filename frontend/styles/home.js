import glamorous from "glamorous";
import { Button } from "./theme";
import { DARKER, NAV_HEIGHT, SHADOW_BORDER, SOFT_BOX_SHADOW } from "./theme";
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
  height: 150,
  maxWidth: 930,
  width: "90%",
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
  backgroundColor: "#fff",
});

export const ScreenshotImg = glamorous.img({
  boxSizing: "border-box",
  width: "100%",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  borderRight: "1px solid #eee",
  borderBottom: "1px solid #eee",
  borderLeft: "1px solid #eee",
});

export const MacWindow = glamorous.div({
  backgroundColor: "#d2d0d2",
  borderRadius: "4px 4px 0 0",
  padding: ".25rem .5rem",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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

export const GetStartedButton = glamorous(StyledSessionButton)({
  marginTop: 15,
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

export const Features = glamorous.div({
  height: 500,
  width: "90%",
  maxWidth: 930,
  margin: "50px auto",
  display: "flex",
  paddingLeft: 15,
  // alignItems: "space-around",
  // justifyContent: "space-around",
  fontSize: "30px",
});

export const StyledFeature = glamorous.div({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  padding: 30,
  position: "relative",
  marginTop: 70,
  boxSizing: "border-box",
  // border: "1px solid rgba(255, 0, 0, 0.1)",
});

export const FeatureIcon = glamorous.i({
  fontSize: 60,
  fontWeight: 100,
  color: DARKER,
  marginBottom: 30,
  // border: "1px solid rgba(255, 0, 0, 0.1)",
});

export const FeatureText = glamorous.div({
  color: "#454545",
  fontSize: 18,
  height: 100,
  // border: "1px solid rgba(255, 0, 0, 0.1)",
});

export const Tagline = glamorous.div({
  fontSize: 22,
  fontWeight: 700,
  marginBottom: 10,
  // border: "1px solid rgba(255, 0, 0, 0.1)",
  // margin: "20px 0",
  alignSelf: "flex-start",
});

export const GreyWrapper = glamorous.div({
  margin: "20px 0 70px 0",
  width: "100%",
  backgroundColor: "#fafafa",
});

export const FeaturesTitle = glamorous.div({
  position: "absolute",
  fontSize: 40,
  top: 0,
});

export const StyledFooterWrapper = glamorous.div({
  width: "100%",
  marginTop: 65,
  height: 50,
  backgroundColor: DARKER,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255, 255, 255, 0.8)",
});

export const FooterIcon = glamorous.i({
  fontSize: 30,
  margin: "2px 10px",
  color: "rgba(255, 255, 255, 0.9)",
  transition: "all 100ms",
  ":visited": {
    color: "rgba(255, 255, 255, 0.9)",
  },
  ":hover": {
    transition: "all 100ms",
    color: "rgba(255, 255, 255, 0.7)",
  },
});

export const SmallGreaterThan = glamorous.i({
  // marginTop: 4,
  fontSize: 20,
  color: "rgba(255, 255, 255, 0.3)",
});
