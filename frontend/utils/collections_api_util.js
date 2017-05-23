export const fetchDiscoverFeeds = () =>
  $.ajax({
    method: "GET",
    url: "/api/collections",
  });

export const fetchFollowedCollections = () =>
  $.ajax({
    method: "GET",
    url: "/api/collection_feeds",
  });

export const createCollection = collection =>
  $.ajax({
    method: "POST",
    url: "/api/collections",
    data: { collection },
  });

export const addFeedToCollection = ({ collectionId, feedId }) =>
  $.ajax({
    method: "POST",
    url: "/api/collection_feeds",
    data: {
      collection_feed: { collection_id: collectionId, feed_id: feedId },
    },
  });

export const deleteCollection = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/collections/${id}`,
  });

export const updateCollectionTitle = collection =>
  $.ajax({
    method: "PATCH",
    url: `/api/collections/${collection.id}`,
    data: { collection: { title: collection.title } },
  });