import React from "react";
import Loader from "../../utils/loader_util";

import ExploreItem from "./explore_item";

class Explore extends React.Component {
  componentDidMount() {
    this.props.fetchAllFeeds();
  }

  render() {
    const { loading, feeds } = this.props;

    return (
      <div>
        {loading && <Loader />}
        {feeds.map(feed => (
          <ExploreItem key={"feed" + feed.id} feed={feed} />
        ))}
      </div>
    );
  }
}

export default Explore;
