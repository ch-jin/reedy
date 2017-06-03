import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchArticle,
  saveArticle,
  unsaveArticle,
  receiveCurrentArticle,
} from "../../actions/article_actions";
import { toggleArticleModal } from "../../actions/modal_actions";
import ArticleDetail from "./ArticleDetail";

const mapStateToProps = (state, { match }) => ({
  currentArticle: state.articles.current,
  saved: state.articles.current &&
    state.articles.all &&
    state.articles.all[state.articles.current.id] &&
    state.articles.all[state.articles.current.id].saved,
  id: match.params.articleId,
  feedId: match.params.feedId,
  loading: state.loading.loadingCurrentArticle,
  active: state.modal.articleModal,
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  toggleArticleModal: () => dispatch(toggleArticleModal()),
  saveArticle: articleId => dispatch(saveArticle(articleId)),
  unsaveArticle: articleId => dispatch(unsaveArticle(articleId)),
  resetArticle: () => dispatch(receiveCurrentArticle(null)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
);
