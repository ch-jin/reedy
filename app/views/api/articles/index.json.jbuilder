json.all do
  @articles.each do |article|
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

feedIds = []
@articles.each do |article|
  feedIds << article.feed_id unless feedIds.include?(article.feed_id)
end

json.feedIds feedIds