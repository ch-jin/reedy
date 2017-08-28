import {
  RECEIVE_ALL_ARTICLES,
  RECEIVE_CURRENT_ARTICLE,
  RECEIVE_ARTICLE,
  RESET_ARTICLES,
  RECEIVE_MORE_ARTICLES,
} from "../actions/article_actions";

const _initState = {
  all: null,
  current: null,
  feedIds: null,
  savedArticleIds: null,
};

const articlesReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      return {
        ...state,
        all: action.all,
        feedIds: action.feedIds,
        savedArticleIds: action.savedArticleIds,
      };
    case RECEIVE_CURRENT_ARTICLE:
      return { ...state, current: action.article };
    case RECEIVE_ARTICLE:
      return {
        ...state,
        all: { ...state.all, [action.article.id]: action.article },
      };
    case RESET_ARTICLES:
      return _initState;
    case RECEIVE_MORE_ARTICLES:
      return { all: { ...state.all, ...action.articles.all } };
    default:
      return state;
  }
};

export default articlesReducer;
