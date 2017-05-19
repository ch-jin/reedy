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
  print "Article IDs:"
  articles.each do |article|
    new_article = Article.new(construct_article(feed_id, article))
    if new_article.save
      print "#{new_article.id} ".green
    else
      print "F ".red
    end
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

def seed_feeds(url)
  puts "SEEDING #{url}"
  puts "STARTING FETCH............"
  raw_feed = fetch_rss_feed(url)

  if valid_feed?(raw_feed)
    puts "VALID FEED".green
    new_feed = Feed.new(construct_feed(url, raw_feed))
    if new_feed.save
      puts "............"
      puts "FEED_ID = #{new_feed.id}".green
      puts "............"
      puts "FETCHING ARTICLES............"
      add_articles(new_feed.id, raw_feed["item"])
    else
      puts "ERROR FEED DID NOT SAVE: #{url}".red
    end
  else
    puts "ERROR INVALID FEED: #{url}".red
  end
end