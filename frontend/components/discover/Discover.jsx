import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import { ArticleLoader } from "../../utils/loader_util";
import { StyledDiscoverWrapper } from "../../styles/discover";
import DiscoverItem from "./DiscoverItem";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";

class Discover extends React.Component {
  componentDidMount() {
    scrollMainContentWrapperToTop();
  }

  render() {
    const { loading, feeds } = this.props;

    return (
      <Transition identifier={"discover-page"} {...fade}>
        <StyledDiscoverWrapper>
          {loading && <ArticleLoader />}
          {feeds.map(feed => (
            <DiscoverItem key={"feed" + feed.id} feed={feed} />
          ))}
        </StyledDiscoverWrapper>
      </Transition>
    );
  }
}

export default Discover;
