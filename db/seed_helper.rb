def seed_feed(url)
  raw_feed = Feed.fetch_rss_feed(url)

  if Feed.valid_feed?(raw_feed)
    new_feed = Feed.new(Feed.construct_feed(url, raw_feed))
    if new_feed.save
      puts "............"
      puts "FEED_ID = #{new_feed.id}".green
      puts "............"
      puts "FETCHING ARTICLES............"
      Article.add_articles(new_feed.id, raw_feed["item"])
    else
      puts "ERROR FEED DID NOT SAVE: #{url}".red
    end
  end
end