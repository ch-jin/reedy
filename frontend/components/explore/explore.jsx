import React from "react";
import { RouteTransition } from "react-router-transition";
import { fade } from "../../styles/transitions";
import { ArticleLoader } from "../../utils/loader_util";
import { StyledExploreWrapper } from "../../styles/explore";
import ExploreItem from "./explore_item";

class Explore extends React.Component {
  componentDidMount() {
    this.props.fetchAllFeeds();
  }

  render() {
    const { loading, feeds, location } = this.props;

    return (
      <RouteTransition pathname={location.pathname} {...fade}>
        <StyledExploreWrapper>
          {loading && <ArticleLoader />}
          {feeds.map(feed => (
            <ExploreItem key={"feed" + feed.id} feed={feed} />
          ))}
        </StyledExploreWrapper>
      </RouteTransition>
    );
  }
}

export default Explore;
