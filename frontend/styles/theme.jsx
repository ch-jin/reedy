import glamorous from "glamorous";
import { Link } from "react-router-dom";

export const BASE = "#13C962";
export const DARKER = "#00B04D";
export const HOME_PAGE_NAV_HEIGHT = "75px";

export const Button = glamorous.button({
  fontFamily: "Nunito",
  color: "#eee",
  backgroundColor: BASE,
  border: "none",
  letterSpacing: "0.5px",
  transition: "all 125ms",
  ":hover": {
    backgroundColor: DARKER,
    cursor: "pointer",
    transition: "all 125ms",
  },
});

export const FullHeightLink = glamorous.a({
  height: "100%",
  textDecoration: "none",
  color: "black",
});
