export const addFeedToCollection = (feedId, collection) => {
  const feedIds = { collection };
  return { ...collection, feedIds: [...feedIds, feedId] };
};
