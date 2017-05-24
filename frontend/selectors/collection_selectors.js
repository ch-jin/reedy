import values from "lodash/values";

export const allCollections = state => values(state.collections);

export const hasCollections = collections =>
  Object.keys(collections).length > 0;

export const allCollectionFeedIds = state => {
  let feedIds = [];
  allCollections(state).forEach(collection => (feedIds += collection.feedIds));
  return feedIds;
};
