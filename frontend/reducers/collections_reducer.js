import {
  RECEIVE_ALL_COLLECTIONS,
  RECEIVE_COLLECTION,
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
    default:
      return state;
  }
};

export default collectionsReducer;
