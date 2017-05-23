import values from "lodash/values";

export const allCollections = state => values(state.collections.all);

export const hasCollections = state =>
  Object.keys(state.collections).length > 0;
