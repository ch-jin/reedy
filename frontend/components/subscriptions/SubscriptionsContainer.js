import { connect } from "react-redux";
import { fetchAllCollections } from "../../actions/collection_actions";
import { fetchFollowedArticles } from "../../actions/article_actions";
import Subscriptions from "./Subscriptions";

const mapStateToProps = state => ({
  loading: state.loading.loadingFeeds || state.loading.loadingArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedArticles: () => dispatch(fetchFollowedArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
