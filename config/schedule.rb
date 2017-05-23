# every 10.minute do
#   runner "Feed.update_feed_articles"
# end

every 15.minute do
  runner "Feed.update_all_feed_articles"
end