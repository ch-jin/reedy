export const fetchAllFeeds = () =>
  $.ajax({
    method: "GET",
    url: "/api/feeds",
  });
