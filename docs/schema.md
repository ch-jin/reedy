# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique, case-insensitive
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rss_url          | string   | not null
title       | string    | not null
icon_url        | string    | 
category | string

## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id       | integer    | not null, foreign key (feeds), indexed
title     | string    | not null
body     | string    | not null
pub_date     | date    | not null
website_url          | string   | not null
image_url     | string    | 

## user_saved_articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id       | integer    | not null, foreign key (users), indexed, unique [article_id]
article_id       | integer    | not null, foreign key (articles), indexed, unique [user_id]

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id | integer | not null, foreign_key, indexed
title   | string   | not null

## collection_feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
collection_id        | integer    | not null, foreign_key (collections), indexed, unique [feed_id]
feed_id        | integer    | not null, foreign_key (feeds), indexed, unique [collection_id]

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id        | integer    | not null, foreign_key (users), indexed
title        | string    | not null

## board_articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id        | integer    | not null, foreign_key (boards), indexed, unique [article_id]
article_id        | integer    | not null, foreign_key (articles), indexed, unique [board_id]


