import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchAllCollections,
  fetchCollection,
  receiveCurrentCollection,
} from "../../actions/collection_actions";
import { fetchCollectionArticles } from "../../actions/article_actions";
import { receiveCurrentFeed } from "../../actions/feed_actions";
import { toggleArticleModal } from "../../actions/modal_actions";
import { feedsWithArticles } from "../../selectors/feed_selectors";
import { loadingAllStates } from "../../selectors/loading_selectors";
import { fetchFollowedFeeds } from "../../actions/feed_actions";
import CollectionShowArticles from "./CollectionShowArticles";
import { currentCollection } from "../../selectors/collection_selectors";

const mapStateToProps = (state, { match }) => ({
  feeds: state.feeds.all,
  collectionId: parseInt(match.params.collectionId),
  collection: currentCollection(state),
  feedsWithArticles: feedsWithArticles(state),
  loading: loadingAllStates(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchCollectionArticles: collectionId =>
    dispatch(fetchCollectionArticles(collectionId)),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
  fetchCollection: collectionId => dispatch(fetchCollection(collectionId)),
  toggleArticleModal: () => dispatch(toggleArticleModal()),
  resetCurrentFeed: () => dispatch(receiveCurrentFeed(null)),
  resetCurrentCollection: () => dispatch(receiveCurrentCollection(null)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionShowArticles)
);
