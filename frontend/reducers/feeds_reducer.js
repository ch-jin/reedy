import {
  RECEIVE_ALL_FEEDS,
  RECEIVE_CURRENT_FEED,
} from "../actions/feed_actions";

const _initState = {
  all: null,
  current: null,
};

const feedsReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FEEDS:
      return { ...state, all: action.feeds };
    case RECEIVE_CURRENT_FEED:
      return { ...state, current: action.feed };
    default:
      return state;
  }
};

export default feedsReducer;
