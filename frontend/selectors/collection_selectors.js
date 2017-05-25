import values from "lodash/values";

export const allCollections = state => values(state.collections.all);

export const hasCollections = collections =>
  Object.keys(collections).length > 0;

export const allCollectionFeedIds = state => {
  let feedIds = [];
  allCollections(state).forEach(
    collection => (feedIds = feedIds.concat(collection.feedIds))
  );
  return feedIds;
};

export const currentCollection = state => state.collections.current;

export const currentCollectionId = state =>
  state.collections.current && state.collections.current.id;
