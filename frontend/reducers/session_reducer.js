import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from "../actions/session_actions";
import merge from "lodash/merge";

const _nullState = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.session);
    case RECEIVE_ERRORS:
      return merge({}, action.session);
    default:
      return state;
  }
};

export default SessionReducer;
