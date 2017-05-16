import React from "react";
import glamorous from "glamorous";

export const StyledSessionForm = glamorous.form({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "white",
  width: "500px",
  height: "500px",
  boxShadow: "0 4px 38px rgba(0,0,0,0.25), 0 6px 20px rgba(0,0,0,0.22)",
  cursor: "auto",
});

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
    color: "#d7d7d7",
  },
  ":focus": {
    paddingLeft: "16px",
    outline: "none",
    border: "1px solid #0AC25A",
  },
});

export const StyledSessionButton = glamorous.button({
  height: "45px",
  width: "150px",
  fontSize: "16px",
  fontWeight: 500,
  color: "#fff",
  backgroundColor: "#2ecc71",
  border: "none",
  letterSpacing: "0.5px",
  margin: "15px 0",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  ":hover": {
    backgroundColor: "#27ae60",
    cursor: "pointer",
    boxShadow: "0 2px 14px rgba(0,0,0,0.20), 0 2px 11px rgba(0,0,0,0.40)",
  },
});

export const StyledLettering = glamorous.div({
  fontSize: "36px",
  fontFamily: "Nunito",
  margin: "40px auto",
});
