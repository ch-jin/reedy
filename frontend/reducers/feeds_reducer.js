import {
  RECEIVE_ALL_FEEDS,
  RECEIVE_CURRENT_FEED,
  RECEIVE_DISCOVER_FEEDS,
} from "../actions/feed_actions";

const _initState = {
  all: null,
  current: null,
  discover: null,
};

const feedsReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FEEDS:
      return { ...state, all: action.feeds };
    case RECEIVE_CURRENT_FEED:
      return { ...state, current: action.feed };
    case RECEIVE_DISCOVER_FEEDS:
      return { ...state, discover: action.feeds };
    default:
      return state;
  }
};

export default feedsReducer;
