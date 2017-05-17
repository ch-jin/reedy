module Api::FeedsHelper
  def fetch_rss_feed(url)
    all_content = HTTParty.get(
      "http://#{ENV['rss_server_ip']}/" +
      "makefulltextfeed.php?" +
      "url=#{url}" +
      "&max=10" +
      "&links=preserve" +
      "&exc=" +
      "&format=json" +
      "&parser=html5php"
    )

    feed = all_content["rss"]["channel"]
    feed
  end

  def valid_feed?(feed)
    first_item = feed["item"][0]
    first_item != nil
  end

  def construct_feed(url, feed)
    {
      url: url,
      title: feed["title"],
      image_url: feed["image"]["url"],
      last_updated: DateTime.now
    }
  end
end
