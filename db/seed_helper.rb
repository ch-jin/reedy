def fetch_rss_feed(url)
    puts ""
    puts ""
    puts "FETCHING #{url}"
    puts "STARTING FETCH............"

    all_content = HTTParty.get(
      "http://#{ENV['rss_server_ip']}/" +
      "makefulltextfeed.php?" +
      "url=#{url}" +
      "&format=json"
    )

    feed = all_content["rss"]["channel"]
    feed
  end

  def valid_feed?(feed)
    first_item = feed["item"][0]
    if first_item != nil
      puts "VALID FEED".green
      true
    else
      puts "ERROR INVALID FEED: #{url}".red
      false
    end
  end

def construct_feed(url, feed)
  new_feed = {
    url: url,
    title: feed["title"],
    last_updated: DateTime.now
  }
  new_feed[:image_url] = feed["image"]["url"] if feed["image"]
  new_feed
end

def add_articles(feed_id, articles)
  print
  articles.each do |article|
    new_article = Article.new(construct_article(feed_id, article))
    if new_article.save
      puts "Article ID: #{new_article.id} ".green
    else
      puts "F ".red
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

  unless valid_body?(new_article)
    puts "Rearranging article info".yellow
    new_article[:body] = new_article[:snippet]
  end

  doc = Nokogiri::HTML(new_article[:body])
  doc.xpath('//img').each do |img|
    if img['src']
      new_article[:image] = img['src']
      break
    end
  end

  new_article
end


def valid_body?(article)
  article_title_words = article[:title].downcase.gsub(/[^a-z0-9\s]/i, '').split('')
  snippet_words = article[:snippet].downcase.gsub(/[^a-z0-9\s]/i, '').split('')

  valid = nil

  snippet_words.each_with_index do |word, idx|
    break if idx == snippet_words.length - 1
    valid = Regexp.new(word) =~ article[:body]
    if valid.nil?
      puts word.red
      valid = false
      break
    end
  end

  return valid
end


def seed_feed(url)
  raw_feed = fetch_rss_feed(url)

  if valid_feed?(raw_feed)
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
  end

end