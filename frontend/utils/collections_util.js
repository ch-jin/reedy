import values from "lodash/values";

export const addFeedToCollection = (feedId, collection) => {
  const feedIds = { collection };
  return { ...collection, feedIds: [...feedIds, feedId] };
};

export const allCollections = state => values(state.collections);
