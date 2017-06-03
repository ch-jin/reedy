import React from "react";
import Transition from "../../utils/transition_util";
import { articleSlideLeft } from "../../styles/transitions";
import { Redirect } from "react-router-dom";
import { DefaultLoader } from "../../utils/loader_util";
import {
  ArticleDetailWrapper,
  ArticleDetailContent,
} from "../../styles/article";
import ArticleDetailNav from "./ArticleDetailNav";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialLoad: true, saved: false };
    this.renderArticle = this.renderArticle.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
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
    if (this.state.saved !== nextProps.saved) {
      this.setState({ saved: nextProps.saved });
    }
    if (!nextProps.active) {
      this.setState({ initialLoad: false });
    }
  }

  componentWillUnmount() {
    this.props.resetArticle();
  }

  handleClick(e) {
    e.stopPropagation();
  }

  handleCloseClick(e) {
    e.stopPropagation();
    this.props.toggleArticleModal();
  }

  handleSaveClick(e) {
    const { currentArticle: { id }, saveArticle, unsaveArticle } = this.props;
    const { saved } = this.state;

    e.stopPropagation();
    saved
      ? unsaveArticle(id).then(this.setState({ saved: !this.state.saved }))
      : saveArticle(id).then(this.setState({ saved: !this.state.saved }));
  }

  renderArticle() {
    const { currentArticle } = this.props;

    return (
      <div className="article-detail-content">
        <h1 dangerouslySetInnerHTML={{ __html: currentArticle.title }} />
        <p>
          {currentArticle.author && `By ${currentArticle.author} - `}
          {new Date(currentArticle.pubDate).toDateString()}
        </p>
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
            <ArticleDetailNav
              handleSaveClick={this.handleSaveClick}
              saved={this.state.saved}
              url={currentArticle && currentArticle.url}
              handleCloseClick={this.handleCloseClick}
            />
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
