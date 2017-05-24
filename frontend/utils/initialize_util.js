import { fetchAllCollections } from "../actions/collection_actions";
import { fetchFollowedArticles } from "../actions/article_actions";
import { fetchFollowedFeeds } from "../actions/feed_actions";

export const initializeDispatchAllFetch = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedArticles: () => dispatch(fetchFollowedArticles()),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
});

export const initializeComponent = props => {
  props.fetchAllCollections();
  props.fetchFollowedFeeds();
  props.fetchFollowedArticles();
};
