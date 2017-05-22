import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import { ArticleLoader } from "../../utils/loader_util";
import {
  StyledExploreWrapper,
  StyledExploreItem,
} from "../../styles/explore";
import ExploreItem from "./explore_item";

class Explore extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.fetchAllFeeds();
  }

  render() {
    const { loading, feeds } = this.props;

    return (
      <Transition identifier={"explore-page"} {...fade}>
        <StyledExploreWrapper>
          {loading && <ArticleLoader />}
          {feeds.map(feed => (
            <ExploreItem key={"feed" + feed.id} feed={feed} />
          ))}
        </StyledExploreWrapper>
      </Transition>
    );
  }
}

export default Explore;
