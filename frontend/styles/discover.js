import glamorous from "glamorous";
import { StyledSessionInput } from "./session_form";
import { DARKER, SOFT_BOX_SHADOW, SHADOW_BORDER } from "./theme";

export const StyledDiscoverItem = glamorous.div({
  height: 200,
  width: 200,
  fontSize: 18,
  boxShadow: SOFT_BOX_SHADOW,
  border: SHADOW_BORDER,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  margin: 10,
  transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  backgroundColor: "#fff",
  ":hover": {
    boxShadow: "0 10px 28px rgba(0,0,0,0.25), 0 6px 10px rgba(0,0,0,0.22)",
    transform: "translatey(-5px)",
  },
});

export const FeedTitle = glamorous.div({
  width: "100%",
  textAlign: "center",
});

export const FeedImg = glamorous.img({
  maxHeight: "100%",
  maxWidth: "100%",
});

export const FeedImgContainer = glamorous.div({
  width: 60,
  height: 60,
  boxShadow: SOFT_BOX_SHADOW,
  border: SHADOW_BORDER,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledDiscoverWrapper = glamorous.div({
  padding: "105px 0",
  color: "#454545",
  width: 960,
  display: "flex",
  fontSize: 30,
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "flex-start",
  position: "relative",
});

export const DiscoverItemWrapper = glamorous.div({
  width: 180,
  height: 140,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
});

export const StyledSearchBar = glamorous(StyledSessionInput)({
  fontSize: 20,
});

export const SearchBarContainer = glamorous.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "30px 0",
});

export const DiscoverHeader = glamorous.div({
  color: "#454545",
  display: "flex",
  alignItems: "center",
  fontSize: 50,
});

export const DiscoverIcon = glamorous.i({
  color: DARKER,
  marginRight: 10,
});
