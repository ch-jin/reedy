import React from "react";
import Loader from "../../utils/loader_util";
import { MainContentWrapper } from "../../styles/main";
import ExploreItem from "./explore_item";

class Explore extends React.Component {
  componentDidMount() {
    this.props.fetchAllFeeds();
  }

  render() {
    const { loading, feeds } = this.props;

    return (
      <MainContentWrapper>
        {loading && <Loader />}
        {feeds.map(feed => (
          <ExploreItem key={"feed" + feed.id} feed={feed} />
        ))}
      </MainContentWrapper>
    );
  }
}

export default Explore;
