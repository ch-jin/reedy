feeds = [
  "http://feeds2.feedburner.com/time/topstories",
  "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
  "http://www.npr.org/rss/rss.php?id=1001",
  "http://www.businessinsider.com/rss",
  "https://www.theguardian.com/uk/rss",
  "http://www.nbcbayarea.com/news/local/?rss=y&embedThumb=y&summary=y",
  "http://www.nbcbayarea.com/news/top-stories/?rss=y&embedThumb=y&summary=y",
  "http://feeds.reuters.com/reuters/technologyNews",
  "http://feeds.arstechnica.com/arstechnica/index",
  "http://www.dailymail.co.uk/articles.rss",
  "https://venturebeat.com/feed/",
  "https://hackernoon.com/feed",
  "https://hackaday.com/blog/feed/",
  "https://www.reddit.com/r/news.rss",
  "http://feeds.foxnews.com/foxnews/latest",
  "http://gizmodo.com/rss",
  "http://www.independent.co.uk/rss",
  "https://www.kickstarter.com/blog.atom",
  "http://kotaku.com/rss",
  "http://www.latimes.com/local/rss2.0.xml",
  "http://lifehacker.com/rss",
  "http://feeds.macrumors.com/MacRumors-Front",
  "http://www.nytimes.com/services/xml/rss/nyt/US.xml",
  "http://feeds.nytimes.com/nyt/rss/Technology",
  "http://www.nytimes.com/services/xml/rss/nyt/JobMarket.xml",
  "http://www.nytimes.com/services/xml/rss/nyt/MostViewed.xml",
  "http://www.nytimes.com/services/xml/rss/nyt/MostShared.xml",
  "http://www.pcworld.com/index.rss",
  "http://www.pcworld.com/category/business/index.rss",
  "http://www.pcworld.com/category/laptop-computers/index.rss",
  "http://www.pcworld.com/category/software/index.rss",
  "http://www.pcworld.com/category/phones/index.rss",
  "http://www.macworld.com/index.rss",
  "http://www.macworld.com/reviews/index.rss",
  "http://www.macworld.com/category/os-x/index.rss",
  "http://www.macworld.com/category/entertainment/index.rss",
  "http://www.macworld.com/category/software-productivity/index.rss",
  "http://www.macworld.com/category/macbooks/index.rss",
  "http://www.politifact.com/feeds/articles/truth-o-meter/",
  "http://www.rollingstone.com/rss",
  "http://www.rollingstone.com/music/rss",
  "http://www.rollingstone.com/movies/rss",
  "http://www.rollingstone.com/culture/rss",
  "http://www.rollingstone.com/reviews/rss",
  "http://www.rollingstone.com/albumreviews/rss",
  "http://feeds.feedburner.com/seriouseats/recipes",
  "http://feeds.feedburner.com/SeriousEats-thefoodlab",
  "http://www.sfgate.com/bayarea/feed/Bay-Area-News-429.php",
  "http://www.sfgate.com/rss/feed/Business-and-Technology-News-448.php",
  "http://www.sfgate.com/rss/feed/Daily-Dish-531.php",
  "http://www.sfgate.com/rss/feed/Entertainment-530.php",
  "http://www.sfgate.com/rss/feed/Top-Sports-Stories-RSS-Feed-487.php",
  "https://www.yahoo.com/news/rss",
  "http://www.telegraph.co.uk/rss.xml",
  "https://www.theatlantic.com/feed/best-of/",
  "https://www.theatlantic.com/feed/channel/technology/",
  "https://www.theatlantic.com/feed/channel/entertainment/",
  "https://www.theatlantic.com/feed/channel/science/",
  "https://www.theatlantic.com/feed/channel/politics/",
  "https://www.theatlantic.com/feed/channel/business/",
  "http://www.thedailymash.co.uk/feed",
  "https://www.thenation.com/feed/?post_type=article",
  "http://www.vanityfair.com/feed/rss",
  "http://feeds.feedburner.com/variety/news/frontpage"
]
require_relative 'seed_helper'

User.destroy_all
Feed.destroy_all
Article.destroy_all
Collection.destroy_all
CollectionFeed.destroy_all
UserArticleSave.destroy_all

user1 = User.create({username: 'Guest', password: 'password' })


feeds.each do |feed|
  seed_feed(feed)
end

collection1 = Collection.create({ user_id: user1.id, title: 'News' })
collection2 = Collection.create({ user_id: user1.id, title: 'Tech' })
collection3 = Collection.create({ user_id: user1.id, title: 'Bay Area' })
collection4 = Collection.create({ user_id: user1.id, title: 'Business' })
collection5 = Collection.create({ user_id: user1.id, title: 'Culture' })
collection6 = Collection.create({ user_id: user1.id, title: 'Food' })

# News
[2, 3, 6].each do |feed_idx|
  CollectionFeed.create({
    collection_id: Collection.all[0].id,
    feed_id: Feed.all[feed_idx - 2].id
  })
end

# Tech
[13, 17, 29, 34].each do |feed_idx|
  CollectionFeed.create({
    collection_id: Collection.all[1].id,
    feed_id: Feed.all[feed_idx - 2].id
  })
end

# Bay Area
[49, 52, 7].each do |feed_idx|
  CollectionFeed.create({
    collection_id: Collection.all[2].id,
    feed_id: Feed.all[feed_idx - 2].id
  })
end

# Business
[5, 26].each do |feed_idx|
  CollectionFeed.create({
    collection_id: Collection.all[3].id,
    feed_id: Feed.all[feed_idx - 2].id
  })
end

# Culture
[41, 64].each do |feed_idx|
  CollectionFeed.create({
    collection_id: Collection.all[4].id,
    feed_id: Feed.all[feed_idx - 2].id
  })
end

# Food
[47, 51].each do |feed_idx|
  CollectionFeed.create({
    collection_id: Collection.all[5].id,
    feed_id: Feed.all[feed_idx - 2].id
  })
end

15.times do
  article_id = Article.all[rand(Article.all.length - 1)].id
  UserArticleSave.create({ user_id: user1.id, article_id: article_id })
end