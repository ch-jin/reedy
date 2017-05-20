import glamorous from "glamorous";
import {
  NAV_HEIGHT,
  SIDE_NAV_WIDTH,
  NAV_BOX_SHADOW,
  SHADOW_BORDER,
} from "./theme";
const ARTICLE_ITEM_HEIGHT = 200;

export const StyledArticleListWrapper = glamorous.div({
  maxWidth: "960px",
  width: "90%",
});

export const StyledArticleItemWrapper = glamorous.div({
  display: "flex",
  margin: 20,
  boxShadow: NAV_BOX_SHADOW,
  border: SHADOW_BORDER,
  height: ARTICLE_ITEM_HEIGHT,
});

export const ArticleSmallImg = glamorous.img({
  maxHeight: ARTICLE_ITEM_HEIGHT - 30,
  maxWidth: ARTICLE_ITEM_HEIGHT - 30,
});

export const ImgWrapper = glamorous.div({
  height: ARTICLE_ITEM_HEIGHT,
  width: ARTICLE_ITEM_HEIGHT,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledArticleSnippetWrapper = glamorous.div({
  width: `calc(100% - ${ARTICLE_ITEM_HEIGHT}px)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const ArticleMiniTitle = glamorous.h4({
  fontWeight: 700,
  margin: 5,
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
  left: SIDE_NAV_WIDTH,
  width: `calc(100vw - ${SIDE_NAV_WIDTH})`,
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  cursor: "pointer",
  zIndex: 2,
});

export const ArticleDetailWrapper = glamorous.div({
  top: `calc(${NAV_HEIGHT} + 15px)`,
  right: 0,
  boxSizing: "border-box",
  padding: "35px 70px 70px 45px",
  backgroundColor: "white",
  width: "90%",
  height: `calc(100% - ${NAV_HEIGHT} - 30px)`,
  boxShadow: "0 4px 38px rgba(0,0,0,0.25), 0 6px 20px rgba(0,0,0,0.22)",
  cursor: "auto",
  position: "absolute",
  overflow: "auto",
  zIndex: 50,
});
