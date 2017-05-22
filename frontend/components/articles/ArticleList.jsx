import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import { Route } from "react-router-dom";
import { ArticleLoader } from "../../utils/loader_util";
import ArticleItem from "./ArticleItem";
import ArticleListHeader from "./ArticleListHeader";
import ArticleDetailContainer from "./ArticleDetailContainer";
import ArticleModal from "./ArticleModal";
import { StyledArticleListWrapper } from "../../styles/article";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";

class ArticleList extends React.Component {
  componentDidMount() {
    scrollMainContentWrapperToTop();

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
    const {
      loading,
      articles,
      id,
      currentFeed,
      modalOpen,
    } = this.props;
    const numImages = articles.filter(({ image }) => Boolean(image))
      .length;

    return (
      <Transition identifier={"article-list"} {...fade}>

        <StyledArticleListWrapper>
          {currentFeed && <ArticleListHeader feed={currentFeed} />}
          {loading && <ArticleLoader />}

          {articles.map(article => (
            <ArticleItem
              key={"article" + article.id}
              feedId={id}
              article={article}
              hasImage={numImages > 5}
            />
          ))}
          <ArticleModal active={modalOpen}>
            <Route
              path="/feeds/:feedId/articles/:articleId"
              component={ArticleDetailContainer}
            />
          </ArticleModal>
        </StyledArticleListWrapper>
      </Transition>
    );
  }
}

export default ArticleList;
