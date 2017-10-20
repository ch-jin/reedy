# == Schema Information
#
# Table name: feeds
#
#  id           :integer          not null, primary key
#  url          :string           not null
#  title        :string           not null
#  image_url    :string
#  last_updated :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

#  created_at   :datetime         not null
#  updated_at   :datetime         not null

class Feed < ApplicationRecord
  validates :title, :last_updated, presence: true
  validates :url, presence: true, uniqueness: true

  has_many :articles
  has_many :collection_feeds
  has_many :collections, through: :collection_feeds


  def self.fetch_rss_feed(url)
    # ENV['rss_server_ip'] points to a private PHP server that I personally host
    # For more information you can take a look at the self hosted option on 
    # http://fivefilters.org/content-only/
    all_content = HTTParty.get(
      "http://#{ENV['rss_server_ip']}/" +
      "makefulltextfeed.php?" +
      "url=#{url}" +
      "&format=json"
    )

    feed = all_content["rss"]["channel"]
    feed
  end

  def self.valid_feed?(raw_feed, url)
    raw_feed["item"][0] != nil
  end

  def self.construct_feed(url, raw_feed)
    new_feed = {
      url: url,
      title: raw_feed["title"],
      last_updated: DateTime.now
    }
    new_feed[:image_url] = raw_feed["image"]["url"] if raw_feed["image"]
    new_feed
  end

  def self.update_all_feed_articles
    Feed.all.each do |feed|
      feed.update_feed_articles
    end
  end

  def update_feed_articles
    new_feed = Feed.fetch_rss_feed(self.url)
    Article.add_articles(self.id, new_feed["item"])
  end
end
