feed_title = ''
if @feed.title.length > 45
  feed_title = @feed.title[0..44] + '...'
else
  feed_title = @feed.title
end

json.id @feed.id
json.title feed_title
json.image @feed.image_url