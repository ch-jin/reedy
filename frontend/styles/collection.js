import glamorous from "glamorous";
import { FeedImgContainer } from "./discover";
import { HALF_TRANSPARENT, SLIGHT_WHITE, SIDE_NAV_WIDTH } from "./theme";

export const StyledCollectionWrapper = glamorous.div({
  width: SIDE_NAV_WIDTH,
  boxSizing: "border-box",
  height: "calc(100% - 60px)",
  overflow: "auto",
  paddingTop: 20,
});

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
    color: HALF_TRANSPARENT,
    transition: "all 100ms",
    ":hover": {
      cursor: "pointer",
      transition: "all 100ms",
      backgroundColor: "#303944",
    },
  },
  props => ({
    backgroundColor: props.active ? "#303944" : "auto",
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

export const StyledCollectionListItemTitle = glamorous.div(
  {
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: SLIGHT_WHITE,
    height: 20,
    transition: "all 100ms",
    ":hover": {
      cursor: "pointer",
      transition: "all 100ms",
      backgroundColor: "#303944",
    },
  },
  props => ({
    backgroundColor: props.active ? "#303944" : "auto",
  })
);
