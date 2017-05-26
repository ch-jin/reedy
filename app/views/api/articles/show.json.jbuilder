json.extract! @article, :id, :title
json.pubDate @article.pub_date
json.image @article.image
json.url @article.url
json.feedId @article.feed_id
json.body @article.body
json.author @article.author
json.saved @article.saved_users.include?(current_user)