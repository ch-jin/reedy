import values from "lodash/values";

export const allArticles = state => {
  const articles = values(state.articles.all);
  return articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
};
