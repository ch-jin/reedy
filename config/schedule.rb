env :PATH, ENV['PATH']

set :output, "#{Whenever.path}/log/cron.log"

every :hour do
  rake "update_feeds", :environment => 'production'
end