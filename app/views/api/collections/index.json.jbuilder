@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :title
    json.feedIds collection.feed_ids
  end
end
