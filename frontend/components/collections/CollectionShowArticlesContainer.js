import { connect } from "react-redux";
import { allArticles } from "../../selectors/article_selectors";
import InitializeUtil from "../../utils/initialize_util";
import CollectionShowArticles from "./CollectionShowArticles";

const mapStateToProps = state => ({
  articles: allArticles(state),
});

const mapDispatchToProps = InitializeUtil;

export default connect(mapStateToProps, mapDispatchToProps)(
  CollectionShowArticles
);
