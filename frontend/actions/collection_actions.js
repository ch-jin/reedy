import * as CollectionAPIUtil from "../utils/collections_api_util";

export const RECEIVE_ALL_COLLECTIONS = "RECEIVE_ALL_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const FETCHING_COLLECTIONS = "FETCHING_COLLECTIONS";
export const DELETING_COLLECTION = "DELETING_COLLECTION";

export const receiveAllCollections = collections => ({
  type: RECEIVE_ALL_COLLECTIONS,
  collections,
});

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection,
});

export const fetchingCollections = () => ({
  type: FETCHING_COLLECTIONS,
});

export const deletingCollection = () => ({
  type: DELETING_COLLECTION,
});

export const fetchAllCollections = () => dispatch => {
  dispatch(fetchingCollections());
  return CollectionAPIUtil.fetchAllCollections().then(collections =>
    dispatch(receiveAllCollections(collections))
  );
};

export const createCollection = (title, feedId) => dispatch => {
  dispatch(fetchingCollections());
  return CollectionAPIUtil.createCollection(title, feedId).then(collection =>
    dispatch(receiveCollection(collection))
  );
};

export const updateCollection = collection => dispatch => {
  dispatch(fetchingCollections());
  return CollectionAPIUtil.updateCollection(collection).then(collection =>
    dispatch(receiveCollection(collection))
  );
};

export const addFeedToCollection = collectionFeed => dispatch => {
  dispatch(fetchingCollections());
  return CollectionAPIUtil.addFeedToCollection(
    collectionFeed
  ).then(collection => dispatch(receiveCollection(collection)));
};

export const deleteFeedFromCollection = collectionFeed => dispatch => {
  dispatch(deletingCollection());
  return CollectionAPIUtil.deleteFeedFromCollection(
    collectionFeed
  ).then(collection => dispatch(receiveCollection(collection)));
};
