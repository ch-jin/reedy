import glamorous from "glamorous";
import { NAV_BOX_SHADOW, SHADOW_BORDER } from "./theme";
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
