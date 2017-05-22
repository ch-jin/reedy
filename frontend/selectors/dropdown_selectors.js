export const anyDropdownActive = state => {
  const allStatuses = Object.values(state.dropdown);
  return Boolean(allStatuses.filter(state => state).length);
};
