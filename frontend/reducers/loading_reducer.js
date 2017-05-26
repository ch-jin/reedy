import {
  FETCHING_SESSION,
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import {
  RECEIVE_CURRENT_FEED,
  FETCHING_FEEDS,
  FETCHING_FEED,
  RECEIVE_ALL_FEEDS,
  RECEIVE_DISCOVER_FEEDS,
} from "../actions/feed_actions";
import {
  FETCHING_ARTICLES,
  RECEIVE_ALL_ARTICLES,
  FETCHING_CURRENT_ARTICLE,
  RECEIVE_CURRENT_ARTICLE,
} from "../actions/article_actions";
import {
  RECEIVE_ALL_COLLECTIONS,
  RECEIVE_COLLECTION,
  FETCHING_COLLECTIONS,
} from "../actions/collection_actions";

const _initialState = {
  loadingSession: false,
  loadingFeeds: false,
  loadingArticles: false,
  loadingCurrentArticle: false,
};

const loadingReducer = (state = _initialState, { type }) => {
  Object.freeze(state);

  switch (type) {
    case FETCHING_SESSION:
      return { ...state, loadingSession: true };
    case RECEIVE_ERRORS:
    case RECEIVE_CURRENT_USER:
      return { ...state, loadingSession: false };

    case FETCHING_COLLECTIONS:
      return { ...state, loadingCollections: true };
    case RECEIVE_COLLECTION:
    case RECEIVE_ALL_COLLECTIONS:
      return { ...state, loadingCollections: false };

    case FETCHING_FEED:
    case FETCHING_FEEDS:
      return { ...state, loadingFeeds: true };
    case RECEIVE_DISCOVER_FEEDS:
    case RECEIVE_CURRENT_FEED:
    case RECEIVE_ALL_FEEDS:
      return { ...state, loadingFeeds: false };

    case FETCHING_ARTICLES:
      return { ...state, loadingArticles: true };
    case RECEIVE_ALL_ARTICLES:
      return { ...state, loadingArticles: false };

    case FETCHING_CURRENT_ARTICLE:
      return { ...state, loadingCurrentArticle: true };
    case RECEIVE_CURRENT_ARTICLE:
      return { ...state, loadingCurrentArticle: false };

    default:
      return state;
  }
};

export default loadingReducer;
