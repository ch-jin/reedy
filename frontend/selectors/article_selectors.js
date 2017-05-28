import values from "lodash/values";

export const allArticles = state => {
  const articles = values(state.articles.all);
  return articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
};

export const allSavedArticles = state => {
  const articles = allArticles(state);
  return articles.filter(article => article.saved);
};
