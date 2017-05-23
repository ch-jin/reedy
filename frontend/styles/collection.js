import glamorous from "glamorous";
import { SIDE_NAV_WIDTH } from "./theme";

export const StyledCollectionWrapper = glamorous.div({
  backgroundColor: "rgba(0, 0, 0, 0.1)",
});

export const StyledItemBox = glamorous.div({
  width: `calc(${SIDE_NAV_WIDTH}px - 30px)`,
  marginTop: "15px",
});
