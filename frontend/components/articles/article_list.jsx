import React from "react";
import Loader from "../../utils/loader_util";
import ArticleItem from "./article_item";
import { StyledArticleListWrapper } from "../../styles/article";

class ArticleList extends React.Component {
  componentDidMount() {
    const { fetchAllFeeds, feeds } = this.props;
    console.log("mount");
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
    const { loading, articles } = this.props;

    return (
      <StyledArticleListWrapper>
        {loading && <Loader />}
        {articles.map(article => (
          <ArticleItem key={"article" + article.id} article={article} />
        ))}
      </StyledArticleListWrapper>
    );
  }
}

export default ArticleList;
