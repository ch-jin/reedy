import merge from "lodash/merge";

import { TOGGLE_USER_DROPDOWN } from "../actions/dropdown_actions";

const _initState = {
  userDropdown: false,
};

const dropdownReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TOGGLE_USER_DROPDOWN:
      return merge({}, state, { userDropdown: action.status });
    default:
      return state;
  }
};

export default dropdownReducer;
