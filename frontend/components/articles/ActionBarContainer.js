import { connect } from "react-redux";
import ActionBar from "./ActionBar";
import { saveArticle, unsaveArticle } from "../../actions/article_actions";

const mapDispatchToProps = dispatch => ({
  saveArticle: articleId => dispatch(saveArticle(articleId)),
  unsaveArticle: articleId => dispatch(unsaveArticle(articleId)),
});

export default connect(null, mapDispatchToProps)(ActionBar);
