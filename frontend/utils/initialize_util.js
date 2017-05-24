import { fetchAllCollections } from "../actions/collection_actions";
import { fetchFollowedArticles } from "../actions/article_actions";
import { fetchFollowedFeeds } from "../actions/feed_actions";

export default dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedArticles: () => dispatch(fetchFollowedArticles()),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
});
