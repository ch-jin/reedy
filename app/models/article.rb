# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  feed_id    :integer          not null
#  title      :string           not null
#  body       :string           not null
#  pub_date   :datetime         not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  snippet    :string           not null
#  image      :string
#

class Article < ApplicationRecord
  validates :feed_id, :title, :body, :pub_date, presence: true
  validates :url, presence: true, uniqueness: true

  belongs_to :feed


  def self.construct_article(feed_id, raw_article)
    new_article = {
      feed_id: feed_id,
      title: raw_article["title"],
      snippet: raw_article["description"],
      body: raw_article["content_encoded"],
      pub_date: raw_article["pubDate"],
      url: raw_article["link"]
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

  def self.valid_body?(raw_article)
    article_title_words = raw_article[:title].downcase.gsub(/[^a-z0-9\s]/i, '').split('')
    snippet_words = raw_article[:snippet].downcase.gsub(/[^a-z0-9\s]/i, '').split('')

    valid = nil

    snippet_words.each_with_index do |word, idx|
      break if idx == snippet_words.length - 1
      valid = Regexp.new(word) =~ raw_article[:body]
      if valid.nil?
        puts word.red
        valid = false
        break
      end
    end

    return valid
  end


  def self.add_articles(feed_id, raw_articles)
    raw_articles.each do |article|
      unless Article.find_by(url: article["link"])
        new_article = Article.new(Article.construct_article(feed_id, article))
        if new_article.save
          puts "Article ID: #{new_article.id} ".green
        else
          puts "F ".red
        end
      end
    end
  end
end
