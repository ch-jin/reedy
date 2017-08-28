export const fetchArticlesFromFeed = feedId =>
  $.ajax({
    method: "GET",
    url: `/api/feeds/${feedId}`,
  });

export const fetchArticle = id =>
  $.ajax({
    method: "GET",
    url: `/api/articles/${id}`,
  });

export const fetchFollowedArticles = () =>
  $.ajax({
    method: "GET",
    url: "/api/articles",
  });

export const saveArticle = articleId =>
  $.ajax({
    method: "POST",
    url: "/api/user_article_saves",
    data: { user_article_save: { article_id: articleId } },
  });

export const unsaveArticle = articleId =>
  $.ajax({
    method: "DELETE",
    url: "/api/user_article_saves",
    data: { user_article_save: { article_id: articleId } },
  });

export const fetchCollectionArticles = collectionId =>
  $.ajax({
    method: "GET",
    url: `/api/collections/${collectionId}/articles`,
  });

export const fetchSavedArticles = () =>
  $.ajax({
    method: "GET",
    url: "/api/articles/saved",
  });

export const fetchMoreArticles = (feedId, offset) =>
  $.ajax({
    method: "GET",
    url: `/api/feeds/${feedId}?offset=${offset}`,
  });
