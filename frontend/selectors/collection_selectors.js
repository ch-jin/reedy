import values from "lodash/values";

export const allCollections = state => values(state.collections.all);

export const hasCollections = collections =>
  Object.keys(collections).length > 0;
