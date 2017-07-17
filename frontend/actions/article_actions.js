import * as ArticleAPIUtil from "../utils/articles_api_util";

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_CURRENT_ARTICLE = "RECEIVE_CURRENT_ARTICLE";
export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const FETCHING_CURRENT_ARTICLE = "FETCHING_CURRENT_ARTICLE";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const RESET_ARTICLES = "RESET_ARTICLES";

export const receiveAllArticles = articles => ({
  type: RECEIVE_ALL_ARTICLES,
  all: articles.all,
  feedIds: articles.feedIds,
  savedArticleIds: articles.savedArticleIds,
});

export const resetArticles = () => ({
  type: RESET_ARTICLES,
});

export const receiveCurrentArticle = article => ({
  type: RECEIVE_CURRENT_ARTICLE,
  article,
});

export const receiveArticle = article => ({
  type: RECEIVE_ARTICLE,
  article,
});

const fetchingArticles = () => ({
  type: FETCHING_ARTICLES,
});

const fetchingCurrentArticle = () => ({
  type: FETCHING_CURRENT_ARTICLE,
});

export const fetchFollowedArticles = () => dispatch => {
  ArticleAPIUtil.fetchFollowedArticles().then(articles =>
    dispatch(receiveAllArticles(articles))
  );
};

export const fetchArticlesFromFeed = feedId => dispatch => {
  dispatch(fetchingArticles());
  return ArticleAPIUtil.fetchArticlesFromFeed(feedId).then(articles =>
    dispatch(receiveAllArticles(articles))
  );
};

export const fetchArticle = id => dispatch => {
  dispatch(fetchingCurrentArticle());
  return ArticleAPIUtil.fetchArticle(id).then(article =>
    dispatch(receiveCurrentArticle(article))
  );
};

export const saveArticle = articleId => dispatch => {
  return ArticleAPIUtil.saveArticle(articleId).then(article =>
    dispatch(receiveArticle(article))
  );
};

export const unsaveArticle = articleId => dispatch => {
  return ArticleAPIUtil.unsaveArticle(articleId).then(article =>
    dispatch(receiveArticle(article))
  );
};

export const fetchCollectionArticles = collectionId => dispatch => {
  dispatch(fetchingArticles());
  return ArticleAPIUtil.fetchCollectionArticles(collectionId).then(articles => {
    console.log(articles);
    return dispatch(receiveAllArticles(articles));
  });
};

export const fetchSavedArticles = () => dispatch => {
  dispatch(fetchingArticles());
  return ArticleAPIUtil.fetchSavedArticles().then(articles =>
    dispatch(receiveAllArticles(articles))
  );
};
