import glamorous from "glamorous";
import { SOFT_BOX_SHADOW, DARKER } from "./theme";
const ARTICLE_ITEM_HEIGHT = 150;

export const StyledArticleListWrapper = glamorous.div({
  maxWidth: 740,
  paddingTop: 20,
});

export const StyledArticleItemWrapper = glamorous.div({
  display: "flex",
  margin: 10,
  justifyContent: "flex-start",
  height: ARTICLE_ITEM_HEIGHT,
  position: "relative",
});

export const ArticleSmallImg = glamorous.img({
  maxHeight: ARTICLE_ITEM_HEIGHT - 20,
  maxWidth: ARTICLE_ITEM_HEIGHT - 20,
});

export const ImgWrapper = glamorous.div(
  {
    display: "flex",
    alignItems: "flex-start",
  },
  ({ hasImage }) => ({
    height: hasImage ? ARTICLE_ITEM_HEIGHT : 0,
    width: hasImage ? ARTICLE_ITEM_HEIGHT : 0,
  })
);

export const StyledArticleSnippetWrapper = glamorous.div(
  {
    display: "flex",
    flexDirection: "column",
  },
  ({ hasImage }) => ({
    width: hasImage ? `calc(90% - ${ARTICLE_ITEM_HEIGHT}px)` : "90%",
  })
);

export const ArticleMiniTitle = glamorous.h4({
  width: "100%",
  fontWeight: 500,
});

export const ArticleSnippet = glamorous.p({
  fontFamily: "Oxygen",
  fontSize: 14,
  color: "#626262",
  margin: 5,
  overflow: "hidden",
  position: "relative",
  maxHeight: 14 * 5,
  textAlign: "justify",
  marginRight: "-1em",
  paddingPight: "1em",
  ":before": {
    content: "...",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  ":after": {
    content: "close-quote",
    position: "absolute",
    right: 0,
    width: "1em",
    height: "1em",
    marginTop: "0.2em",
    background: "white",
  },
});

export const StyledArticleModal = glamorous.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 1)",
  cursor: "pointer",
  zIndex: 5,
});

export const ArticleDetailWrapper = glamorous.div({
  top: 0,
  right: 0,
  boxSizing: "border-box",
  width: "70%",
  height: "100%",
  backgroundColor: "#fafafa",
  boxShadow: "18px 18px 90px 2px rgba(0,0,0,0.5)",
  cursor: "auto",
  position: "absolute",
  overflow: "auto",
  zIndex: 6,
});

export const ArticleDetailContent = glamorous.div({
  backgroundColor: "#fff",
  boxShadow: SOFT_BOX_SHADOW,
  margin: "0 30px",
  padding: 40,
  marginTop: 55,
});

export const StyledArticleDetailNav = glamorous.div({
  height: "100%",
  background: "#fff",
  zIndex: 3,
});

export const StyledActionBar = glamorous.div({
  height: 50,
  width: 50,
  position: "absolute",
  right: 0,
  display: "flex",
  justifyContent: "center",
});

export const StyledBookmark = glamorous.i({
  fontSize: 20,
  color: DARKER,
});

export const StyledNavActionBar = glamorous.div({
  height: 100,
});

export const DetailNavLeftWrapper = glamorous.div({
  position: "absolute",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  top: 7,
  width: 100,
  left: 30,
});

export const DetailNavIcon = glamorous.i(
  {
    textAlign: "center",
    fontSize: 20,
    width: 20,
    height: 20,
    borderRadius: 3,
    transition: "all 100ms",
    ":hover": {
      transition: "all 100ms",
      color: DARKER,
      cursor: "pointer",
      border: `1px solid ${DARKER}`,
    },
  },
  props => ({
    color: props.saved ? DARKER : "#797979",
    border: props.saved ? `1px solid ${DARKER}` : "1px solid #e7e7e7",
  })
);
