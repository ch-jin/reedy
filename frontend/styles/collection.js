import glamorous from "glamorous";
import { FeedImgContainer } from "./discover";
import { SIDE_NAV_WIDTH } from "./theme";

export const StyledCollectionWrapper = glamorous.div({});

export const StyledItemBox = glamorous.div({
  width: SIDE_NAV_WIDTH,
  boxSizing: "border-box",
  fontSize: "14px",
  padding: "10px",
  color: "rgba( 255, 255, 255, 0.8 )",
  flexDirection: "column",
});

export const StyledCollectionFeedWrapper = glamorous.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: 5,
});

export const StyledCollectionFeedItem = glamorous.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "5px 0 5px 25px",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#343b43",
  },
});

export const CollectionFeedImgWrapper = glamorous(FeedImgContainer)({
  marginRight: 10,
  width: 20,
  height: 20,
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
});

export const CollectionFeedImg = glamorous.img({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "50%",
});
