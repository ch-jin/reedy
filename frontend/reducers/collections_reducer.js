import merge from "lodash/merge";
import {
  RECEIVE_ALL_COLLECTIONS,
  RECEIVE_COLLECTION,
  REMOVE_COLLECTION,
} from "../actions/collection_actions";

const _initState = {};

const collectionsReducer = (state = _initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      const { collection } = action;
      return { ...state, [collection.id]: collection };
    case REMOVE_COLLECTION:
      const newState = merge({}, state);
      delete newState[action.collectionId];
      return newState;
    default:
      return state;
  }
};

export default collectionsReducer;
