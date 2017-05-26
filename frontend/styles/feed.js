import glamorous from "glamorous";
import { SOFT_BOX_SHADOW, PageHeader } from "./theme";

export const StyledListHeader = glamorous.div({
  display: "flex",
  alignItems: "center",
  margin: 10,
  position: "relative",
  width: "100%",
});

export const StyledTitle = glamorous.div({
  fontSize: 26,
  fontWeight: "bold",
  fontFamily: "oxygen",
  padding: 30,
  color: "#454545",
  width: 450,
  ":hover": {
    color: "black",
  },
});

export const StyledFeedWrapper = glamorous.div({
  boxSizing: "border-box",
  padding: "85px 30px",
  backgroundColor: "#fff",
  boxShadow: SOFT_BOX_SHADOW,
  maxWidth: 740,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ShortFeed = glamorous.div({
  width: "100%",
});

export const SubscribeWrapper = glamorous.div({
  marginTop: 60,
});

export const ShortFeedWrapper = glamorous(StyledFeedWrapper)({
  padding: "20px 30px",
  margin: "20px 0",
});

export const ShortLine = glamorous.div({
  borderBottom: "1px solid #fafafa",
  marginBottom: 30,
  width: "100%",
});

export const SubscribeHeader = glamorous(PageHeader)({
  paddingTop: 50,
  paddingBottom: 30,
  width: "100%",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
});
