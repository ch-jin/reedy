json.extract! :collection, :id, :title
json.feedIds do
  collection.feeds.ids
end