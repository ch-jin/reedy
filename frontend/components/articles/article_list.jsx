import React from "react";
import { RouteTransition } from "react-router-transition";
import springs from "../../styles/springs";
import { ArticleLoader } from "../../utils/loader_util";
import ArticleItem from "./article_item";
import { StyledArticleListWrapper } from "../../styles/article";

class ArticleList extends React.Component {
  componentDidMount() {
    const { fetchAllFeeds, feeds } = this.props;

    if (feeds.length) {
      this.updateNewCurrentFeed();
    } else {
      fetchAllFeeds();
    }
  }

  componentWillReceiveProps() {
    this.updateNewCurrentFeed();
  }

  updateNewCurrentFeed() {
    const {
      id,
      currentFeedId,
      setCurrentFeed,
      fetchArticles,
    } = this.props;

    if (id !== currentFeedId) {
      setCurrentFeed(id);
      fetchArticles(id);
    }
  }

  render() {
    const { loading, articles, id, location } = this.props;
    const numImages = articles.filter(({ image }) => Boolean(image))
      .length;

    return (
      <RouteTransition pathname={location.pathname} {...springs.fade}>
        <StyledArticleListWrapper hasImage={numImages > 5}>
          {loading && <ArticleLoader />}
          {articles.map(article => (
            <ArticleItem
              key={"article" + article.id}
              feedId={id}
              article={article}
              hasImage={numImages > 5}
            />
          ))}
        </StyledArticleListWrapper>

      </RouteTransition>
    );
  }
}

export default ArticleList;
