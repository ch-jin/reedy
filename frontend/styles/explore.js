import glamorous from "glamorous";
import { Img } from "./theme";

export const StyledExploreItem = glamorous.div({
  height: 150,
  width: 400,
});

export const FeedTitle = glamorous.div({
  fontSize: 20,
  fontWeight: 500,
});

export const FeedImg = glamorous(Img)({
  border: "1px solid black",
});
