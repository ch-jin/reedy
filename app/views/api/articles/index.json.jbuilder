feed_ids = []
json.all do
  @articles.each do |raw_article|
    article = Article.find(raw_article['id'])
    feed_ids << article.feed_id unless feed_ids.include?(article.feed_id)
    json.set! article.id do
      json.extract! article, :id, :title
      json.pubDate article.pub_date
      json.image article.image
      json.url article.url
      json.feedId article.feed_id
      json.body article.snippet
      json.saved article.saved_users.include?(current_user)
    end
  end
end

json.feedIds feed_ids