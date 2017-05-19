import * as ArticleAPIUtil from "../utils/articles_api_util";

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_CURRENT_ARTICLE = "RECEIVE_CURRENT_ARTICLE";
export const FETCHING_ARTICLES = "FETCHING_ARTICLES";

export const receiveAllArticles = articles => ({
  type: RECEIVE_ALL_ARTICLES,
  articles,
});

export const receiveCurrentArticle = article => ({
  type: RECEIVE_CURRENT_ARTICLE,
  article,
});

export const fetchingArticles = () => ({
  type: FETCHING_ARTICLES,
});

export const fetchArticlesFromFeed = feedId => dispatch => {
  dispatch(fetchingArticles());
  ArticleAPIUtil.fetchArticlesFromFeed(feedId).then(articles =>
    dispatch(receiveAllArticles(articles))
  );
};

export const fetchArticle = id => dispatch =>
  ArticleAPIUtil.fetchArticle(id).then(article =>
    dispatch(receiveCurrentArticle(article))
  );
