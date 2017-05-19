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
