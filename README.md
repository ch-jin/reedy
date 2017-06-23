# Reedy
[![Build Status](https://travis-ci.org/jinchen93/reedy.svg?branch=master)](https://travis-ci.org/jinchen93/reedy)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


[Reedy](http://reedy.jinchen.io) is a minimalistic RSS feed reader inspired by [Feedly](https://feedly.com/).

This web app uses Ruby on Rails, React, Redux, and PostgreSQL.

<img src="https://raw.githubusercontent.com/jinchen93/reedy/master/docs/media/home-page.png" style="border-top: 1px solid #e7e7e7; border-bottom: 1px solid #e7e7e7;  border-left: 1px solid #e7e7e7">

## Features & Implementation
### Home page:
<img src="https://raw.githubusercontent.com/jinchen93/reedy/master/docs/media/main-example.png" style=" border-bottom: 1px solid #e7e7e7;  border-left: 1px solid #e7e7e7; border-right: 1px solid #e7e7e7">

The entire app uses a minimalistic interface consisting of a side navigation bar, a top navigation bar, and the main content. The main features of the app are **Discover**, **Saved**, **Subscriptions**, **Collections**, and **Feed**

### Discover

The discover page uses a fuzzy search and updates results in real time.
The query is handled by the Feeds Controller and returns case insensitive matches to RSS feed titles and URLs.

```ruby
# app/controllers/api/feeds_controller.rb
def index
  if params[:q]
    user_query = URI.decode(params[:q])
    user_query.gsub(" ", "%")
    user_query = "%" + user_query + "%"
    @feeds = []
    @feeds.concat(Feed.where("title ILIKE ?", user_query))
    @feeds.concat(Feed.where("url ILIKE ?", user_query))
  else
    @feeds = Feed.all.includes(:collections)
  end
end
```

### Articles

Articles can be opened in a distraction free window.

Full text is available to read and users can bookmark articles to be read later.

<img src="https://raw.githubusercontent.com/jinchen93/reedy/master/docs/media/article-show.png" width="800" style="border: 1px solid #e7e7e7">


### Collections
Collections can be created to organize RSS feeds into preferred categories.
<img src="https://raw.githubusercontent.com/jinchen93/reedy/master/docs/media/create-collection.png" width="500">

Feeds that are saved in collections will be changed to a status of **Following** and will appear in the side navigation bar.

<img src="https://github.com/jinchen93/reedy/blob/master/docs/media/collection-side-nav.png?raw=true" width="260">

<img src="https://raw.githubusercontent.com/jinchen93/reedy/master/docs/media/collection-dropdown.png" width="500">

### Subscriptions

Articles can be saved to be read at a later time. The app shows the 5 most recent articles from all of the feeds that are followed by the user. The underlying query is optimized using PostgreSQL's LATERAL JOIN.

```ruby
# app/models/user.rb
def most_recent_articles_limit_5_per_feed
  query = "SELECT * FROM feeds
  INNER JOIN collection_feeds ON collection_feeds.feed_id = feeds.id
  INNER JOIN collections ON collections.id = collection_feeds.collection_id
  JOIN LATERAL (
    SELECT * FROM articles
    WHERE articles.feed_id = feeds.id
    ORDER by pub_date desc
    LIMIT 5
  ) P ON TRUE
  WHERE collections.user_id = #{self.id}"
  result = ActiveRecord::Base.connection.execute(query)
  result
end
```

## Development Design
* [Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /docs/component-hierarchy.md
[sample-state]: /docs/sample-state.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md

#### Significant NPM dependencies includes:
- React Router 4 - Handles frontend routing

- React Motion - Provides smooth animations

## Additional Features

In the future I would like to revisit this app and add fuzzy searching for articles.

I would also like to add Boards for users who want to save articles and organize them according to certain categories.