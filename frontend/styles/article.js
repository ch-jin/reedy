import glamorous from "glamorous";
import { SHADOW_BORDER } from "./theme";
const ARTICLE_ITEM_HEIGHT = 150;

export const StyledArticleListWrapper = glamorous.div(
  {
    width: "96%",
  },
  ({ hasImage }) => ({
    maxWidth: hasImage ? "740px" : "610px",
  })
);

export const StyledArticleItemWrapper = glamorous.div({
  display: "flex",
  margin: 10,
  justifyContent: "center",
  height: ARTICLE_ITEM_HEIGHT,
});

export const ArticleSmallImg = glamorous.img({
  maxHeight: ARTICLE_ITEM_HEIGHT - 20,
  maxWidth: ARTICLE_ITEM_HEIGHT - 20,
});

export const ImgWrapper = glamorous.div(
  {
    display: "flex",
    alignItems: "center",
  },
  ({ hasImage }) => ({
    height: hasImage ? ARTICLE_ITEM_HEIGHT : 0,
    width: hasImage ? ARTICLE_ITEM_HEIGHT : 0,
  })
);

export const StyledArticleSnippetWrapper = glamorous.div(
  {
    // width: `calc(100% - ${ARTICLE_ITEM_HEIGHT}px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ({ hasImage }) => ({
    width: hasImage ? `calc(100% - ${ARTICLE_ITEM_HEIGHT}px)` : "100%",
  })
);

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
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  cursor: "pointer",
  zIndex: 3,
});

export const ArticleDetailWrapper = glamorous.div({
  top: 0,
  right: 0,
  boxSizing: "border-box",
  padding: "5% 10%",
  backgroundColor: "white",
  border: SHADOW_BORDER,
  borderRadius: 5,
  width: "70%",
  height: "100%",
  boxShadow: "18px 18px 90px 2px rgba(0,0,0,0.5)",
  cursor: "auto",
  position: "absolute",
  overflow: "auto",
  zIndex: 50,
});
