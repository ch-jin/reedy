import {
  FETCHING_SESSION,
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import merge from "lodash/merge";

const _initialState = {
  loadingSession: false,
};

const loadingReducer = (state = _initialState, { type }) => {
  Object.freeze(state);

  switch (type) {
    case FETCHING_SESSION:
      return merge({}, state, { loadingSession: true });
    case RECEIVE_ERRORS:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { loadingSession: false });
    default:
      return state;
  }
};

export default loadingReducer;
