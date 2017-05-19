import values from "lodash/values";

export const allArticles = state => values(state.articles.all);
