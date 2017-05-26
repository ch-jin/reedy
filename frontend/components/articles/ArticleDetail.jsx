import React from "react";
import Transition from "../../utils/transition_util";
import { articleSlideLeft } from "../../styles/transitions";
import { Redirect } from "react-router-dom";
import { DefaultLoader } from "../../utils/loader_util";
import {
  StyledArticleModal,
  ArticleDetailWrapper,
  ArticleDetailContent,
} from "../../styles/article";
import ArticleDetailNav from "./ArticleDetailNav";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialLoad: true };
    this.renderArticle = this.renderArticle.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentDidMount() {
    const {
      fetchArticle,
      currentArticle,
      id,
      toggleArticleModal,
      active,
    } = this.props;

    if (!active) {
      toggleArticleModal();
    }

    if (!currentArticle) {
      fetchArticle(id);
    } else if (currentArticle.id !== id) {
      fetchArticle(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.active) {
      this.setState({ initialLoad: false });
    }
  }

  handleClick(e) {
    e.stopPropagation();
  }

  handleCloseClick(e) {
    e.stopPropagation();
    this.props.toggleArticleModal();
  }

  renderArticle() {
    const { currentArticle } = this.props;

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: currentArticle.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentArticle.body }} />
      </div>
    );
  }

  render() {
    const { loading, currentArticle, redirectToParent } = this.props;

    if (this.state.initialLoad) {
      return (
        <Transition identifier={location.pathname} {...articleSlideLeft}>
          <ArticleDetailWrapper
            onClick={this.handleClick}
            className="article-modal-content"
          >
            <ArticleDetailNav handleCloseClick={this.handleCloseClick} />
            {loading && <DefaultLoader />}
            <ArticleDetailContent>
              {currentArticle && this.renderArticle()}
            </ArticleDetailContent>
          </ArticleDetailWrapper>
        </Transition>
      );
    } else {
      return <Redirect to={redirectToParent} />;
    }
  }
}

export default ArticleDetail;
