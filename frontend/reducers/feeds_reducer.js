import merge from "lodash/merge";
import {
  RECEIVE_ALL_FEEDS,
  RECEIVE_CURRENT_FEED,
} from "../actions/feed_actions";

const _initState = {
  all: {},
  current: null,
};

const feedsReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FEEDS:
      return merge({}, state, { all: action.feeds });
    case RECEIVE_CURRENT_FEED:
      return merge({}, state, { current: action.feed });
    default:
      return state;
  }
};

export default feedsReducer;
