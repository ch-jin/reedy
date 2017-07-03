import glamorous from "glamorous";
import { RED, BASE, DARKER, Button, NAV_HEIGHT } from "./theme";

const DROPDOWN_HEIGHT = 100;
const PADDING = 5;

export const StyledDropdown = glamorous.div(
  {
    position: "absolute",
    width: "140px",
    height: DROPDOWN_HEIGHT,
    top: `calc(${NAV_HEIGHT}px + 3px)`,
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
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
});

export const DropdownButton = glamorous(Button)({
  height: 45,
  width: "100%",
  color: "#111",
  textAlign: "left",
  fontSize: "14px",
  paddingLeft: "10px",
  fontWeight: 500,
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
});

export const Bold = glamorous.p({
  fontWeight: 500,
});

export const StyledFeedDropdown = glamorous(StyledDropdown)({
  height: "auto",
  zIndex: 2,
  top: 70,
  right: 10,
  width: 200,
});

export const StyledFeedButtons = glamorous(DropdownButton)(
  {
    backgroundColor: "#fff",
    fontWeight: 300,
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    ":hover": {
      backgroundColor: "#f3f3f3",
      color: "#454545",
    },
  },
  props => ({
    color: props.followed ? DARKER : "#454545",
    ":hover": {
      color: props.followed ? DARKER : "#454545",
    },
  })
);

export const RSSSquare = glamorous.i({
  fontSize: 16,
  marginRight: 5,
});

export const IndicatorIcons = glamorous(RSSSquare)(
  {
    position: "absolute",
    right: 10,
    top: "30%",
  },
  props => ({
    color: props.delete ? RED : "auto",
  })
);

export const StyledCreateCollectionButton = glamorous(Button)({
  fontWeight: 300,
  fontFamily: "Roboto",
  width: "100%",
  height: 45,
  position: "relative",
  fontSize: 12,
  padding: 0,
  backgroundColor: BASE,
  textAlign: "center",
  color: "#f3f3f3",
});

export const StyledCreateInput = glamorous.input({
  boxSizing: "border-box",
  width: "100%",
  height: 40,
  marginTop: 10,
  borderRadius: 5,
  paddingLeft: 10,
  outline: "none",
  border: `1px solid ${BASE}`,
  fontSize: 14,
});

export const DropdownActionButton = glamorous(StyledCreateCollectionButton)({
  height: 40,
  width: "48%",
  borderRadius: 5,
  padding: 0,
  backgroundColor: "#fff",
  textAlign: "center",
});

export const StyledDropdownSubmitButton = glamorous(DropdownActionButton)({
  border: `1px solid ${BASE}`,
  color: BASE,
  ":hover": {
    backgroundColor: BASE,
    color: "#f3f3f3",
  },
});

export const StyledDropdownCancelButton = glamorous(DropdownActionButton)({
  border: `1px solid ${RED}`,
  color: RED,
  ":hover": {
    backgroundColor: RED,
    color: "#f3f3f3",
  },
});

export const ButtonContainer = glamorous.div({
  width: "100%",
  marginTop: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const StyledCreateForm = glamorous.form({
  paddingBottom: 10,
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "center",
});
