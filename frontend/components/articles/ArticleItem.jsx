import React from "react";
import { Link } from "react-router-dom";
import {
  StyledArticleItemWrapper,
  ArticleSmallImg,
  ImgWrapper,
  StyledArticleSnippetWrapper,
  ArticleMiniTitle,
  ArticleSnippet,
} from "../../styles/article";
import ActionBarContainer from "./ActionBarContainer";

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hovered: props.article.saved };
    this.isHover = this.isHover.bind(this);
    this.isNotHover = this.isNotHover.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ hovered: nextProps.article.saved });
  }

  isHover() {
    !this.props.article.saved && this.setState({ hovered: true });
  }

  isNotHover() {
    !this.props.article.saved && this.setState({ hovered: false });
  }

  render() {
    const { path, article, feedId, hasImage, toggleArticleModal } = this.props;
    const { hovered } = this.state;
    return (
      <Link
        onMouseEnter={this.isHover}
        onMouseLeave={this.isNotHover}
        className="no-decoration"
        onClick={toggleArticleModal}
        to={`${path}/${feedId}/articles/${article.id}`}
      >
        <StyledArticleItemWrapper hasImage={hasImage}>
          <ImgWrapper hasImage={hasImage}>
            {hasImage && <ArticleSmallImg src={article.image} />}
          </ImgWrapper>
          <StyledArticleSnippetWrapper hasImage={hasImage}>
            {hovered &&
              <ActionBarContainer
                articleId={article.id}
                saved={article.saved}
              />}
            <ArticleMiniTitle
              dangerouslySetInnerHTML={{ __html: article.title }}
            />
            <ArticleSnippet
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </StyledArticleSnippetWrapper>
        </StyledArticleItemWrapper>
      </Link>
    );
  }
}

export default ArticleItem;
