import React from "react";
import Transition from "../../utils/transition_util";
import { enterFade, popFadeOut } from "../../styles/transitions";

import {
  StyledDiscoverWrapper,
  DiscoverHeader,
  DiscoverIcon,
} from "../../styles/discover";
import DiscoverItem from "./DiscoverItem";
import DiscoverSearchBar from "./DiscoverSearchBar";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";

class Discover extends React.Component {
  componentDidMount() {
    scrollMainContentWrapperToTop();
    this.props.resetCurrentFeed();
    this.props.fetchDiscoverFeeds("");
  }

  render() {
    const { loading, feeds, fetchDiscoverFeeds } = this.props;

    return (
      <Transition identifier={"discover-page"} {...enterFade}>
        <StyledDiscoverWrapper>
          <DiscoverHeader>
            <DiscoverIcon className="fa fa-feed" />
            Discover
          </DiscoverHeader>
          <DiscoverSearchBar fetchDiscoverFeeds={fetchDiscoverFeeds} />

          <Transition
            identifier={"feeds-discover" + feeds.length}
            {...popFadeOut}
          >
            {feeds.map(feed => (
              <DiscoverItem key={"feed" + feed.id} feed={feed} />
            ))}
          </Transition>
        </StyledDiscoverWrapper>
      </Transition>
    );
  }
}

export default Discover;
