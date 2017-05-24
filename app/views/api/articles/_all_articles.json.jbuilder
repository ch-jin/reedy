articles.each do |article|
  json.set! article.id do
    json.partial! 'api/articles/article', article: article
    json.body article.snippet
  end
end

feedIds = []
articles.each do |article|
  feedIds << article.feed_id unless feedIds.include?(article.feed_id)
end

json.feedIds feedIds