import merge from "lodash/merge";
import {
  FETCHING_SESSION,
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import {
  FETCHING_FEEDS,
  RECEIVE_ALL_FEEDS,
} from "../actions/feed_actions";
import {
  FETCHING_ARTICLES,
  RECEIVE_ALL_ARTICLES,
} from "../actions/article_actions";

const _initialState = {
  loadingSession: false,
  loadingExplore: false,
  loadingArticles: false,
};

const loadingReducer = (state = _initialState, { type }) => {
  Object.freeze(state);

  switch (type) {
    case FETCHING_SESSION:
      return merge({}, state, { loadingSession: true });
    case RECEIVE_ERRORS:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { loadingSession: false });

    case FETCHING_FEEDS:
      return merge({}, state, { loadingExplore: true });
    case RECEIVE_ALL_FEEDS:
      return merge({}, state, { loadingExplore: false });

    case FETCHING_ARTICLES:
      return merge({}, state, { loadingArticles: true });
    case RECEIVE_ALL_ARTICLES:
      return merge({}, state, { loadingArticles: false });
    default:
      return state;
  }
};

export default loadingReducer;
