import merge from "lodash/merge";
import {
  RECEIVE_ALL_ARTICLES,
  RECEIVE_CURRENT_ARTICLE,
} from "../actions/article_actions";

const _initState = {
  all: {},
  current: null,
};

const articlesReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      return merge({}, state, { all: action.articles });
    case RECEIVE_CURRENT_ARTICLE:
      return merge({}, state, { current: action.article });
    default:
      return state;
  }
};

export default articlesReducer;
