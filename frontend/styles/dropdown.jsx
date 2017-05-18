import glamorous from "glamorous";
import { Button, NAV_HEIGHT } from "./theme";

export const StyledDropdown = glamorous.div(
  {
    position: "absolute",
    width: "200px",
    height: "230px",
    top: `calc(${NAV_HEIGHT} + 3px)`,
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #dddede",
    borderRadius: "4px",
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

export const DropdownList = glamorous.ul({
  width: "100%",
  height: "100%",
  display: "grid",
  listStyle: "none",
});

export const DropdownButton = glamorous(Button)({
  width: "100%",
  height: "100%",
  fontSize: "16px",
});
