import values from "lodash/values";
import { allCollectionFeedIds } from "./collection_selectors";
import { allArticles } from "./article_selectors";

export const allFeeds = state => {
  let feeds = values(state.feeds.all);
  if (state.feeds.current) {
    feeds.push(values(state.feeds.current));
  }
  if (state.feeds.discover) {
    feeds = feeds.concat(values(state.feeds.discover));
  }
  return feeds;
};

export const discoverFeeds = state => values(state.feeds.discover);

export const currentFeed = state => state.feeds.current;

export const currentFeedId = state =>
  state.feeds.current ? state.feeds.current.id : null;

export const feedsBelongingToCollection = (feeds, feedIds) => {
  const feedsArr = [];
  feedIds.forEach(feedId => feedsArr.push(feeds[feedId]));
  return feedsArr;
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
