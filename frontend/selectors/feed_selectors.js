import values from "lodash/values";

export const allFeeds = state => values(state.feeds.all);
export const currentFeed = state => state.feeds.current;
