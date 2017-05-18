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

  def add_articles(feed_id, articles)
    articles.each do |article|
      Article.create(construct_article(feed_id, article))
    end
  end

  def construct_article(feed_id, article)
    new_article = {
      feed_id: feed_id,
      title: article["title"],
      snippet: article["description"],
      body: article["content_encoded"],
      pub_date: article["pubDate"],
      url: article["link"]
    }

    doc = Nokogiri::HTML(new_article[:body])

    doc.xpath('//img').each do |img|
      new_article[:image] = img['src'] if img['src']
    end

    new_article
  end
end
