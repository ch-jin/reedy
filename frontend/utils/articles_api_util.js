export const fetchArticlesFromFeed = feedId =>
  $.ajax({
    method: "GET",
    url: `/api/feeds/${feedId}`,
  });
