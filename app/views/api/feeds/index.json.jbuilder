@feeds.each do |feed|
  json.set! feed.id do
    json.extract! feed, :id, :url, :title, :image_url
  end
end