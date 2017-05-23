import * as FeedAPIUtil from "../utils/feeds_api_util";

export const RECEIVE_ALL_FEEDS = "RECEIVE_ALL_FEEDS";
export const RECEIVE_CURRENT_FEED = "RECEIVE_CURRENT_FEED";
export const FETCHING_FEEDS = "FETCHING_FEEDS";

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

export const fetchFeed = id => dispatch => {
  dispatch(fetchingFeeds());
  return FeedAPIUtil.fetchFeed(id).then(feed =>
    dispatch(receiveCurrentFeed(feed))
  );
};

export const fetchDiscoverFeeds = () => dispatch => {
  dispatch(fetchingFeeds());
  return FeedAPIUtil.fetchDiscoverFeeds().then(feeds =>
    dispatch(receiveAllFeeds(feeds))
  );
};

export const fetchFollowedFeeds = () => dispatch => {
  dispatch(fetchingFeeds());
  return FeedAPIUtil.fetchFollowedFeeds().then(feeds =>
    dispatch(receiveAllFeeds(feeds))
  );
};
