import React from "react";
import { RouteTransition } from "react-router-transition";
import { articleSlideLeft } from "../../styles/transitions";
import { Redirect } from "react-router-dom";
import { DefaultLoader } from "../../utils/loader_util";
import { ArticleDetailWrapper } from "../../styles/article";
import ArticleModal from "./article_modal";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoad: true,
    };
    this.renderArticle = this.renderArticle.bind(this);
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

  renderArticle() {
    const { currentArticle } = this.props;

    return (
      <div>
        <h1
          dangerouslySetInnerHTML={{ __html: currentArticle.title }}
        />
        <div
          dangerouslySetInnerHTML={{ __html: currentArticle.body }}
        />
      </div>
    );
  }

  render() {
    const { loading, currentArticle, feedId, location } = this.props;
    console.log(this.props);
    if (this.state.initialLoad) {
      return (
        <ArticleModal>
          <RouteTransition
            pathname={location.pathname}
            {...articleSlideLeft}
          >
            <ArticleDetailWrapper
              onClick={this.handleClick}
              className="article-modal-content"
            >
              {loading && <DefaultLoader />}
              {currentArticle && this.renderArticle()}
            </ArticleDetailWrapper>
          </RouteTransition>
        </ArticleModal>
      );
    } else {
      return <Redirect to={`/feeds/${feedId}/articles`} />;
    }
  }
}

export default ArticleDetail;
