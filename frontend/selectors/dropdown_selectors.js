import values from "lodash/values";
export const anyDropdownActive = state => {
  const allStatuses = values(state.dropdown);
  return Boolean(allStatuses.filter(state => state).length);
};
