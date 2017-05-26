feed_title = ''
if @feed.title.length > 40
  feed_title = @feed.title[0..39] + '...'
else
  feed_title = @feed.title
end

json.id @feed.id
json.title feed_title
json.image @feed.image_url