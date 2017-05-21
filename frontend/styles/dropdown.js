import glamorous from "glamorous";
import { Button, NAV_HEIGHT } from "./theme";

const DROPDOWN_HEIGHT = 241;
const PADDING = 5;

export const StyledDropdown = glamorous.div(
  {
    position: "absolute",
    width: "140px",
    height: DROPDOWN_HEIGHT,
    top: 38,
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #dddede",
    borderRadius: "4px",
    fontFamily: "Oxygen",
    boxShadow: "0 3px 12px rgba(27,31,35,0.15)",
    "&::before": {
      content: "close-quote",
      position: "absolute",
      display: "inline-block",
      top: "-16px",
      right: "9px",
      left: "auto",
      border: "8px solid transparent",
      borderBottomColor: "#dddede",
    },
    "&::after": {
      content: "close-quote",
      border: "7px solid transparent",
      borderBottomColor: "#fff",
      position: "absolute",
      display: "inline-block",
      top: "-14px",
      right: "10px",
      left: "auto",
    },
  },
  props => ({
    display: props.active ? "flex" : "none",
  })
);

export const DropdownContent = glamorous.div({
  width: "100%",
  height: "100%",
});

export const DropdownButton = glamorous(Button)({
  height: 45,
  width: "100%",
  color: "#111",
  textAlign: "left",
  fontSize: "14px",
  paddingLeft: "10px",
  fontWeight: 700,
  backgroundColor: "#fff",
  ":hover": {
    color: "#eee",
  },
});

export const DropdownEmptyItem = glamorous.div({
  lineHeight: 1.4,
  boxSizing: "border-box",
  display: "flex",
  paddingTop: PADDING,
  paddingLeft: "10px",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "14px",
  height: 50,
});

export const Line = glamorous.div({
  height: PADDING,
  borderBottom: "1px solid #e7e7e7",
  marginBottom: PADDING,
});

export const Bold = glamorous.p({
  fontWeight: 700,
});
