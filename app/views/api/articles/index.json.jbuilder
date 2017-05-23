@articles.each do |article|
  json.set! article.id do
    json.extract! article, :id, :title
    json.pubDate article.pub_date
    json.image article.image
    json.url article.url
    json.feedId article.feed_id
    json.body article.snippet
  end
end