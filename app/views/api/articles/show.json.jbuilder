json.extract! @article, :id, :title
json.pubDate @article.pub_date
json.image @article.image
json.url @article.url
json.feedId @article.feed_id
json.body @article.body