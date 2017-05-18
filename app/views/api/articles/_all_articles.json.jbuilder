articles.each do |article|
  json.set! article.id do
    json.partial! 'api/articles/article', article: article
    json.body article.snippet
  end
end