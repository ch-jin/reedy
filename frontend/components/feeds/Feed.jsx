import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import ArticleList from "../articles/ArticleList";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";
import { StyledArticleListWrapper } from "../../styles/article";
import FeedHeader from "./FeedHeader";

class Feed extends React.Component {
  componentDidMount() {
    scrollMainContentWrapperToTop();
    const { feedId, fetchArticlesFromFeed, receiveCurrentFeed } = this.props;
    fetchArticlesFromFeed(feedId).then(receiveCurrentFeed(feedId));
  }

  render() {
    const { feed, articles } = this.props;
    console.log(this.props);
    if (feed) {
      return (
        <Transition identifier={"article-list"} {...fade}>
          <StyledArticleListWrapper>
            <FeedHeader feed={feed} />
            <ArticleList articles={articles} />
          </StyledArticleListWrapper>
        </Transition>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
