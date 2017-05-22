import * as CollectionAPIUtil from "../utils/collections_api_util";

export const RECEIVE_ALL_COLLECTIONS = "RECEIVE_ALL_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";

export const receiveAllCollections = collections => ({
  type: RECEIVE_ALL_COLLECTIONS,
  collections,
});

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection,
});

export const fetchAllCollections = () => dispatch => {
  return CollectionAPIUtil.fetchAllCollections().then(collections =>
    dispatch(receiveAllCollections(collections))
  );
};

export const createCollection = collection => dispatch => {
  return CollectionAPIUtil.createCollection(
    collection
  ).then(collection => dispatch(receiveCollection(collection)));
};

export const updateCollection = collection => dispatch => {
  return CollectionAPIUtil.updateCollection(
    collection
  ).then(collection => dispatch(receiveCollection(collection)));
};

export const createCollectionFeed = collectionFeed => dispatch => {
  return CollectionAPIUtil.createCollectionFeed(
    collectionFeed
  ).then(collection => dispatch(receiveCollection(collection)));
};
