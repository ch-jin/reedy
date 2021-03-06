export const fetchDiscoverFeeds = query =>
  $.ajax({
    method: "GET",
    url: `/api/feeds/?q=${query}`,
  });

export const fetchFollowedFeeds = () =>
  $.ajax({
    method: "GET",
    url: "/api/collection_feeds",
  });

export const fetchFeed = feedId =>
  $.ajax({
    method: "GET",
    url: `/api/feeds/feed/${feedId}`,
  });

export const addFeed = url =>
  $.ajax({
    method: "POST",
    url: "/api/feeds",
    data: { feed: { url } },
  });
