desc 'Update feeds'
task :update_feeds => :environment do
  Feed.update_all_feed_articles
end