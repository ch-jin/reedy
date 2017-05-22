import {
  TOGGLE_USER_DROPDOWN,
  TOGGLE_FOLLOW_FEED_DROPDOWN,
  CLOSE_ALL_DROPDOWNS
} from "../actions/dropdown_actions";

const _initState = {
  userDropdown: false,
  followFeedDropdown: false
};

const dropdownReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TOGGLE_USER_DROPDOWN:
      const newUserDropdown = !state.userDropdown;
      return { ...state, userDropdown: newUserDropdown };
    case TOGGLE_FOLLOW_FEED_DROPDOWN:
      const newFollowFeedDropdown = !state.followFeedDropdown;
      return { ...state, followFeedDropdown: newFollowFeedDropdown };
    case CLOSE_ALL_DROPDOWNS:
      return _initState;
    default:
      return state;
  }
};

export default dropdownReducer;
