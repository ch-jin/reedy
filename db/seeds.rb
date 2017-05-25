# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# "http://feeds.reuters.com/reuters/technologyNews"
require_relative 'seed_helper'

User.destroy_all
Feed.destroy_all
Article.destroy_all
Collection.destroy_all
CollectionFeed.destroy_all
UserSavedArticle.destroy_all

user1 = User.create({username: 'Guest', password: 'password' })

feeds = [
  "http://feeds2.feedburner.com/time/topstories",
  "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
  "http://www.npr.org/rss/rss.php?id=1001",
  "https://www.theguardian.com/uk/rss",
  "http://feeds.reuters.com/reuters/technologyNews",
  "http://feeds.arstechnica.com/arstechnica/index",
  "https://venturebeat.com/feed/",
  "https://www.reddit.com/r/news.rss",
  "https://hackaday.com/blog/feed/",
  "https://hackernoon.com/feed",
  "https://dev.to/rss",
  "https://www.behance.net/feeds/projects",
  "https://www.producthunt.com/feed.atom"
]

feeds.each do |feed|
  seed_feed(feed)
end

collection1 = Collection.create({ user_id: user1.id, title: 'Tech' })
collection2 = Collection.create({ user_id: user1.id, title: 'News' })

(5..8).to_a.each do |i|
  CollectionFeed.create({
    collection_id: collection1.id,
    feed_id: Feed.all[i].id
  })
end

(0..3).to_a.each do |i|
  CollectionFeed.create({
    collection_id: collection2.id,
    feed_id: Feed.all[i].id
  })
end

Article.all[20...30].each do |article|
  UserArticleSave.create({ user_id: user1.id, article_id: article.id })
end