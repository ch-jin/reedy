import {
  RECEIVE_ALL_ARTICLES,
  RECEIVE_CURRENT_ARTICLE,
} from "../actions/article_actions";

const _initState = {
  all: null,
  current: null,
  feedIds: null,
};

const articlesReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      return { ...state, all: action.all, feedIds: action.feedIds };
    case RECEIVE_CURRENT_ARTICLE:
      return { ...state, current: action.article };
    default:
      return state;
  }
};

export default articlesReducer;
