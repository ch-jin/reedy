import values from "lodash/values";

export const allFeeds = state => values(state.feeds.all);

export const currentFeed = state => state.feeds.current;

export const feedsBelongingToCollection = (allFeeds, feedIds) => {
  const feeds = [];
  feedIds.forEach(feedId => feeds.push(allFeeds[feedId]));
  return feeds;
};
