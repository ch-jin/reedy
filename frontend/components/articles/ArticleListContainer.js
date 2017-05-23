import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ArticleList from "./ArticleList";
import { allArticles } from "../../selectors/article_selectors";
import { toggleArticleModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  articles: allArticles(state),
});

const mapDispatchToProps = dispatch => ({
  toggleArticleModal: () => dispatch(toggleArticleModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticleList)
);
