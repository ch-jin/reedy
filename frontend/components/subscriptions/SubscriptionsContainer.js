import { connect } from "react-redux";
import {
  fetchFollowedCollections,
} from "../../actions/collection_actions";
import { fetchFollowedArticles } from "../../actions/article_actions";
import Subscriptions from "./Subscriptions";

const mapStateToProps = state => ({
  loading: state.loading.loadingFeeds || state.loading.loadingArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchFollowedCollections: () => dispatch(fetchFollowedCollections()),
  fetchFollowedArticles: () => dispatch(fetchFollowedArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Subscriptions
);
