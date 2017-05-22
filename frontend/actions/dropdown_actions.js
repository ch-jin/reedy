export const TOGGLE_USER_DROPDOWN = "TOGGLE_USER_DROPDOWN";
export const TOGGLE_FOLLOW_FEED_DROPDOWN =
  "TOGGLE_FOLLOW_FEED_DROPDOWN";
export const CLOSE_ALL_DROPDOWNS = "CLOSE_ALL_DROPDOWNS";

export const closeAllDropdowns = () => ({
  type: CLOSE_ALL_DROPDOWNS
});

export const toggleUserDropdown = () => ({
  type: TOGGLE_USER_DROPDOWN,
  status
});

export const toggleFollowFeedDropdown = () => ({
  type: TOGGLE_FOLLOW_FEED_DROPDOWN
});
