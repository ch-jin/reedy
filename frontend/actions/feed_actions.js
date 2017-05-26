import * as FeedAPIUtil from "../utils/feeds_api_util";

export const RECEIVE_ALL_FEEDS = "RECEIVE_ALL_FEEDS";
export const RECEIVE_CURRENT_FEED = "RECEIVE_CURRENT_FEED";
export const FETCHING_FEEDS = "FETCHING_FEEDS";
export const FETCHING_FEED = "FETCHING_FEED";
export const RECEIVE_DISCOVER_FEEDS = "RECEIVE_DISCOVER_FEEDS";

export const receiveAllFeeds = feeds => ({
  type: RECEIVE_ALL_FEEDS,
  feeds,
});

export const receiveCurrentFeed = feed => ({
  type: RECEIVE_CURRENT_FEED,
  feed,
});

export const fetchingFeeds = () => ({
  type: FETCHING_FEEDS,
});

export const fetchingFeed = () => ({
  type: FETCHING_FEED,
});

export const receiveDiscoverFeeds = feeds => ({
  type: RECEIVE_DISCOVER_FEEDS,
  feeds,
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
