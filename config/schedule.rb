env :PATH, ENV['PATH']

set :output, "#{Whenever.path}/log/cron.log"

every 15.minute do
  runner "Feed.update_all_feed_articles"
end