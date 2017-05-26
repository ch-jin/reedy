import glamorous from "glamorous";
import { RED, Button } from "./theme";

export const StyledSessionForm = glamorous.form(
  {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    width: 500,
    boxShadow: "0 4px 38px rgba(0,0,0,0.25), 0 6px 20px rgba(0,0,0,0.22)",
    cursor: "auto",
    position: "relative",
  },
  props => ({
    height: props.signup ? 575 : 500,
  })
);

export const StyledSessionInput = glamorous.input({
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  height: "55px",
  width: "80%",
  fontSize: "16px",
  letterSpacing: "0.5px",
  margin: "10px 0",
  border: "2px solid #e7e7e7",
  paddingLeft: "15px",
  "::placeholder": {
    color: "#c7c7c7",
  },
  ":focus": {
    paddingLeft: "16px",
    outline: "none",
    border: "1px solid #0AC25A",
  },
});

export const StyledSessionButton = glamorous(Button)({
  height: "45px",
  width: "150px",
  fontSize: "16px",
  fontWeight: 500,
  margin: "20px 0",
});

export const StyledLettering = glamorous.div({
  fontSize: "36px",
  fontFamily: "Oxygen",
  margin: "40px auto",
});

export const StyledErrorUl = glamorous.ul({
  marginTop: "-10px",
  listStyle: "none",
  color: RED,
  marginBottom: 10,
});

export const LinkWrapper = glamorous.div({
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: 75,
});

export const DemoLink = glamorous.a({
  display: "block",
  textDecoration: "underline",
  ":hover": {
    cursor: "pointer",
  },
});
