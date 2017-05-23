export const fetchDiscoverFeeds = () =>
  $.ajax({
    method: "GET",
    url: "/api/feeds",
  });

export const fetchFollowedFeeds = () =>
  $.ajax({
    method: "GET",
    url: "/api/collection_feeds",
  });
