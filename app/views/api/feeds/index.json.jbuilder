@feeds.each do |feed|
  json.set! feed.id do
    feed_title = ''
    if feed.title.length > 40
      feed_title = feed.title[0..39] + '...'
    else
      feed_title = feed.title
    end

    json.id feed.id
    json.title feed_title
    json.image feed.image_url ? feed.image_url : asset_path('default-feed.jpg')
  end
end