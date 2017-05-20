import React from "react";
import Loader from "../../utils/loader_util";
import { StyledExploreWrapper } from "../../styles/explore";
import ExploreItem from "./explore_item";

class Explore extends React.Component {
  componentDidMount() {
    this.props.fetchAllFeeds();
  }

  render() {
    const { loading, feeds } = this.props;

    return (
      <StyledExploreWrapper>
        {loading && <Loader />}
        {feeds.map(feed => (
          <ExploreItem key={"feed" + feed.id} feed={feed} />
        ))}
      </StyledExploreWrapper>
    );
  }
}

export default Explore;
