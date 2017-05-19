import glamorous from "glamorous";
import { NAV_HEIGHT, SIDE_NAV_WIDTH } from "./theme";

export const ArticleFeedWrapper = glamorous.div({
  position: "absolute",
  width: `calc(100% - ${SIDE_NAV_WIDTH})`,
  height: `calc(100% - ${NAV_HEIGHT})`,
  top: NAV_HEIGHT,
  left: SIDE_NAV_WIDTH,
  zIndex: 0,
});

export const ArticleContent = glamorous.div({
  display: "flex",
});
