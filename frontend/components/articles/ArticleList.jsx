import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import ArticleItem from "./ArticleItem";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";
import { StyledArticleListWrapper } from "../../styles/article";

class ArticleList extends React.Component {
  componentDidMount() {
    scrollMainContentWrapperToTop();
  }

  render() {
    const { articles, toggleArticleModal } = this.props;
    const numImages = articles.filter(({ image }) => Boolean(image)).length;

    return (
      <Transition identifier={"article-list"} {...fade}>

        <StyledArticleListWrapper>
          {articles.map(article => (
            <ArticleItem
              key={"article" + article.id}
              feedId={article.feedId}
              article={article}
              hasImage={numImages > 5}
              toggleArticleModal={toggleArticleModal}
            />
          ))}
        </StyledArticleListWrapper>

      </Transition>
    );
  }
}

export default ArticleList;
