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

user1 = User.create({username: 'Guest', password: 'password' })

feeds = [
  "http://feeds2.feedburner.com/time/topstories",
  "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
  "https://www.theguardian.com/uk/rss",
  "http://feeds.reuters.com/reuters/technologyNews",
  "http://feeds.arstechnica.com/arstechnica/index",
  "https://www.theverge.com/rss/index.xml",
  "https://venturebeat.com/feed/",
]

feeds.each do |feed|
  seed_feed(feed)
end