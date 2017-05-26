import values from "lodash/values";
import merge from "lodash/merge";
import { allCollectionFeedIds } from "./collection_selectors";
import { allArticles } from "./article_selectors";

export const allFeeds = state => values(state.feeds.all);

export const discoverFeeds = state => values(state.feeds.discover);

export const currentFeed = state => state.feeds.current;

export const currentFeedId = state =>
  state.feeds.current ? state.feeds.current.id : null;

export const feedsBelongingToCollection = (allFeeds, feedIds) => {
  const feeds = [];
  feedIds.forEach(feedId => feeds.push(allFeeds[feedId]));
  return feeds;
};

export const isFeedFollowed = state => {
  const followedFeedIds = allCollectionFeedIds(state);

  return followedFeedIds.includes(state.feeds.current.id);
};

export const feedsWithArticles = state => {
  let feeds = {};
  let feedsArr = [];
  const articles = allArticles(state);

  articles.forEach(article => {
    if (feeds[article.feedId]) {
      feeds[article.feedId].push(article);
    } else {
      feeds[article.feedId] = [article];
    }
  });

  Object.keys(feeds).forEach(feedId => feedsArr.push(feeds[feedId]));
  return feedsArr;
};

export const allFeedsNormalized = state => {
  if (state.feeds.all || state.feeds.current) {
    const feeds = {};
    state.feeds.all && merge(feeds, state.feeds.all);
    state.feeds.current &&
      merge(feeds, { [state.feeds.current.id]: state.feeds.current });
    return feeds;
  }
};
