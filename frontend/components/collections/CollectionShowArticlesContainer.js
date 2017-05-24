import { connect } from "react-redux";
import { allArticles } from "../../selectors/article_selectors";
import { initializeDispatchAllFetch } from "../../utils/initialize_util";
import CollectionShowArticles from "./CollectionShowArticles";

const mapStateToProps = state => ({
  articles: allArticles(state),
});

const mapDispatchToProps = initializeDispatchAllFetch;

export default connect(mapStateToProps, mapDispatchToProps)(
  CollectionShowArticles
);
