import React from "react";
import glamorous from "glamorous";
import { Button } from "./theme";
import { NAV_HEIGHT } from "./theme";
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
  boxShadow: "0 1px 11px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.10)",
  top: 0,
  backgroundColor: "#fff",
});

export const HomeNav = glamorous.nav({
  height: "100%",
  maxWidth: "1280px",
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// -----

export const StyledNavBrand = glamorous.div({
  fontFamily: "Nunito",
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

export const Header = glamorous.div({
  height: "200px",
  width: "800px",
  border: "1px solid black",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
});

export const Screenshot = glamorous.div({
  height: "800px",
  width: "800px",
  border: "1px solid black",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
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

export const DemoLoginButton = glamorous(StyledSessionButton)({
  width: "200px",
  height: "60px",
  fontSize: "20px",
});