@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :title
    json.feedIds collection.feeds.ids
  end
end
