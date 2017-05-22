@feeds.each do |feed|
  json.set! feed.id do
    json.extract! feed, :id, :url, :title
    json.image feed.image_url
    json.collectionIds feed.collection_ids
  end
end