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
  FETCHING_CURRENT_ARTICLE,
  RECEIVE_CURRENT_ARTICLE,
} from "../actions/article_actions";

const _initialState = {
  loadingSession: false,
  loadingExplore: false,
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

    case FETCHING_FEEDS:
      return { ...state, loadingExplore: true };
    case RECEIVE_ALL_FEEDS:
      return { ...state, loadingExplore: false };

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
