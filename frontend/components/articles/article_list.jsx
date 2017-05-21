import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import { ArticleLoader } from "../../utils/loader_util";
import ArticleItem from "./article_item";
import ArticleListHeader from "./article_list_header";
import { StyledArticleListWrapper } from "../../styles/article";

class ArticleList extends React.Component {
  componentDidMount() {
    const { fetchAllFeeds, feeds } = this.props;
    console.log(this.props);
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
    const { loading, articles, id, currentFeed } = this.props;
    const numImages = articles.filter(({ image }) => Boolean(image))
      .length;

    return (
      <Transition identifier={"article-list"} {...fade}>
        <StyledArticleListWrapper hasImage={numImages > 5}>

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

        </StyledArticleListWrapper>
      </Transition>
    );
  }
}

export default ArticleList;
