import glamorous from "glamorous";
import { SOFT_BOX_SHADOW } from "./theme";

export const StyledListHeader = glamorous.div({
  display: "flex",
  alignItems: "center",
  margin: 10,
  position: "relative",
  paddingBottom: 30,
});

export const StyledTitle = glamorous.div({
  fontSize: 26,
  fontWeight: "bold",
  fontFamily: "oxygen",
  padding: 30,
});

export const StyledFeedWrapper = glamorous.div({
  boxSizing: "border-box",
  padding: "85px 30px",
  backgroundColor: "#fff",
  boxShadow: SOFT_BOX_SHADOW,
  maxWidth: 740,
  height: "100v",
});
