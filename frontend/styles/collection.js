import glamorous from "glamorous";
import { SIDE_NAV_WIDTH } from "./theme";

export const StyledCollectionWrapper = glamorous.div({
  height: "500px",
});

export const StyledItemBox = glamorous.div({
  width: `calc(${SIDE_NAV_WIDTH}px - 30px)`,
  marginTop: "15px",
  height: "150px",
  border: "1px solid white",
});
