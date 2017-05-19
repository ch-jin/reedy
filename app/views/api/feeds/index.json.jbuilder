@feeds.each do |feed|
  json.set! feed.id do
    json.extract! feed, :id, :url, :title
    json.image feed.image_url
  end
end