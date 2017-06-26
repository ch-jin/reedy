import React from "react";
import Transition from "../../utils/transition_util";
import { centerFlexFade, feedFadeOut } from "../../styles/transitions";
import { StyledDiscoverWrapper } from "../../styles/discover";
import { PageHeaderIcon, PageHeader } from "../../styles/theme";
import DiscoverItem from "./DiscoverItem";
import DiscoverSearchBar from "./DiscoverSearchBar";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";

class Discover extends React.Component {
  componentDidMount() {
    scrollMainContentWrapperToTop();
    this.props.resetCurrentFeed();
    this.props.fetchDiscoverFeeds("");
    this.props.fetchFollowedFeeds();
    this.props.fetchAllCollections();
  }

  render() {
    const { feeds, fetchDiscoverFeeds, loading } = this.props;

    return (
      <Transition identifier={"discover-page"} {...centerFlexFade}>
        <StyledDiscoverWrapper>
          <PageHeader>
            <PageHeaderIcon className="fa fa-feed" />
            Discover
          </PageHeader>
          <DiscoverSearchBar
            loading={loading}
            fetchDiscoverFeeds={fetchDiscoverFeeds}
          />

          <Transition
            identifier={"feeds-discover" + feeds.length}
            {...feedFadeOut}
          >
            {feeds.map(feed =>
              <DiscoverItem key={"feed" + feed.id} feed={feed} />
            )}
          </Transition>
        </StyledDiscoverWrapper>
      </Transition>
    );
  }
}

export default Discover;
