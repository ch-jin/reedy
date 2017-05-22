import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchArticle } from "../../actions/article_actions";
import { toggleArticleModal } from "../../actions/modal_actions";
import ArticleDetail from "./ArticleDetail";

const mapStateToProps = (state, { match }) => ({
  currentArticle: state.articles.current,
  id: match.params.articleId,
  feedId: match.params.feedId,
  loading: state.loading.loadingCurrentArticle,
  active: state.modal.articleModal,
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  toggleArticleModal: () => dispatch(toggleArticleModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
);
