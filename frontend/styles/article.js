import glamorous from "glamorous";
import { NAV_HEIGHT, SIDE_NAV_WIDTH, SHADOW_BORDER } from "./theme";
const ARTICLE_ITEM_HEIGHT = 150;

export const StyledArticleListWrapper = glamorous.div({
  maxWidth: "740px",
  width: "96%",
});

export const StyledArticleItemWrapper = glamorous.div({
  display: "flex",
  margin: 10,
  alignItems: "flex-start",
  height: ARTICLE_ITEM_HEIGHT,
});

export const ArticleSmallImg = glamorous.img({
  maxHeight: ARTICLE_ITEM_HEIGHT - 20,
  maxWidth: ARTICLE_ITEM_HEIGHT - 20,
});

export const ImgWrapper = glamorous.div(
  {
    height: ARTICLE_ITEM_HEIGHT,
    width: ARTICLE_ITEM_HEIGHT,
    display: "flex",
    alignItems: "flex-start",
    paddingTop: 5,
  },
  props => ({
    display: props.hasImage ? "flex" : "none",
  })
);

export const StyledArticleSnippetWrapper = glamorous.div({
  width: `calc(100% - ${ARTICLE_ITEM_HEIGHT}px)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const ArticleMiniTitle = glamorous.h4({
  fontWeight: 700,
});

export const ArticleSnippet = glamorous.p({
  fontFamily: "Oxygen",
  fontSize: 14,
  color: "#626262",
  margin: 5,
});

export const StyledArticleModal = glamorous.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  cursor: "pointer",
  zIndex: 3,
});

export const ArticleDetailWrapper = glamorous.div({
  top: NAV_HEIGHT + 20,
  left: SIDE_NAV_WIDTH + 20,
  boxSizing: "border-box",
  padding: "35px 70px 70px 45px",
  backgroundColor: "white",
  border: SHADOW_BORDER,
  width: `calc(100% - ${SIDE_NAV_WIDTH}px - 40px)`,
  height: `calc(100% - ${NAV_HEIGHT}px - 40px)`,
  boxShadow: "18px 18px 90px 2px rgba(0,0,0,0.5)",
  cursor: "auto",
  position: "absolute",
  overflow: "auto",
  zIndex: 50,
});
