import glamorous from "glamorous";
import { Img, NAV_BOX_SHADOW, SHADOW_BORDER } from "./theme";

export const StyledExploreItem = glamorous.div({
  height: 200,
  width: 200,
  boxShadow: NAV_BOX_SHADOW,
  border: SHADOW_BORDER,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  margin: 10,
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
  boxShadow: NAV_BOX_SHADOW,
  border: SHADOW_BORDER,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledExploreWrapper = glamorous.div({
  margin: 50,
  maxWidth: 960,
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "flex-start",
});

export const ExploreItemWrapper = glamorous.div({
  width: 180,
  height: 140,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
});
