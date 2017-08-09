import * as FeedAPIUtil from "../utils/feeds_api_util";

export const RECEIVE_ALL_FEEDS = "RECEIVE_ALL_FEEDS";
export const RECEIVE_CURRENT_FEED = "RECEIVE_CURRENT_FEED";
export const FETCHING_FEEDS = "FETCHING_FEEDS";
export const FETCHING_FEED = "FETCHING_FEED";
export const RECEIVE_DISCOVER_FEEDS = "RECEIVE_DISCOVER_FEEDS";
export const ADDING_FEED = "ADDING_FEED";
export const FEED_ADDED = "FEED_ADDED";

export const receiveAllFeeds = feeds => ({
  type: RECEIVE_ALL_FEEDS,
  feeds,
});

export const receiveCurrentFeed = feed => ({
  type: RECEIVE_CURRENT_FEED,
  feed,
});

export const receiveDiscoverFeeds = feeds => ({
  type: RECEIVE_DISCOVER_FEEDS,
  feeds,
});

const fetchingFeeds = () => ({
  type: FETCHING_FEEDS,
});

const fetchingFeed = () => ({
  type: FETCHING_FEED,
});

const addingFeed = () => ({
  type: ADDING_FEED,
});

const feedAdded = () => ({
  type: FEED_ADDED,
});

export const fetchFeed = id => dispatch => {
  dispatch(fetchingFeed());
  return FeedAPIUtil.fetchFeed(id).then(feed =>
    dispatch(receiveCurrentFeed(feed))
  );
};

export const fetchDiscoverFeeds = query => dispatch => {
  dispatch(fetchingFeeds());
  return FeedAPIUtil.fetchDiscoverFeeds(query).then(feeds =>
    dispatch(receiveDiscoverFeeds(feeds))
  );
};

export const fetchFollowedFeeds = () => dispatch => {
  dispatch(fetchingFeeds());
  return FeedAPIUtil.fetchFollowedFeeds().then(feeds =>
    dispatch(receiveAllFeeds(feeds))
  );
};

export const addFeed = url => dispatch => {
  dispatch(addingFeed());
  return FeedAPIUtil.addFeed(url).then(
    id => {
      dispatch(feedAdded());
      return id;
    },
    () => {
      dispatch(feedAdded());
      alert(`"${url}" is not a valid RSS feed!`);
    }
  );
};
