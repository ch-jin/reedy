import glamorous from "glamorous";
import { FeedImgContainer } from "./discover";
import { SIDE_NAV_WIDTH } from "./theme";

export const StyledCollectionWrapper = glamorous.div({});

export const StyledItemBox = glamorous.div({
  width: SIDE_NAV_WIDTH,
  boxSizing: "border-box",
  fontSize: "14px",
  flexDirection: "column",
});

export const StyledCollectionFeedWrapper = glamorous.div({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%",
  marginTop: 5,
});

export const StyledCollectionFeedItem = glamorous.div(
  {
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "5px 0 5px 35px",
    fontSize: 13,
    color: "rgba( 255, 255, 255, 0.8 )",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "#343b43",
    },
  },
  props => ({
    backgroundColor: props.active ? "#343b43" : "auto",
  })
);

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

export const StyledCollectionListItemTitle = glamorous.div({
  padding: "10px 10px 0px 10px",
  display: "flex",
  alignItems: "center",
});
