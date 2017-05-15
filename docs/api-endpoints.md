# API Endpoints
List of internal API consumption.

## HTML API
### Root
- `GET /` - Loads React App

## JSON API
Custom built JSON views built by Rails + JBuilder

### Users 
- `POST /api/users/`
  - User signup
- `PATCH /api/users/`
  - Edit user profile (Bonus)

## Session
- `POST /api/session`
  - Login
- `DELETE /api/session`
  - Logout

## Feeds

- `GET /api/feeds`
  - Retrieves feeds that are followed (through collections) by the user
- `POST /api/feeds`
  - Adds RSS feed to database
- `GET /api/feeds/:id`
  - Retrieves all articles belonging to a feed, truncated body length

## Collections
Collection routes are only accessible by the creator of the collection.

- `GET /api/collections`
  - Retrieves all collections made by the user
- `POST /api/collections`
  - Creates another collection
- `GET /api/collections/:id`
  - Retrieves all feeds belonging to a collection
- `POST /api/collections/:id`
  - Adds a **feed** to a collection (collection_feed association)
- `DELETE /api/collections/:id`
  - Deletes the collection
- `DELETE /api/collections/:id/feed/:feedId`
  - Removes the feed from the collection (deletes collection_feed association)

## Articles
- `GET /api/articles/:id`
  - Retrieves single article, full body length
- `GET /api/articles/saved`
  - Retrieves all of the user's saved articles, truncated body length
- `GET /api/articles/today`
  - Retrieves all articles that were published in the last 24 hours from followed feeds, truncated body length

## Boards
Board routes are only accessible by the creator of the board.

- `GET /api/boards`
  - Retrieves all boards created by the user
- `POST /api/boards`
  - Creates a new board
- `GET /api/boards/:id`
  - Retrieves all articles belonging to a board, truncated body length
- `DELETE /api/boards/:id/`
  - Deletes the board
- `POST /api/boards/article/:articleId`
  - Adds an article to the board (board_articles association)
- `DELETE /api/boards/article/:articleId`
  - Removes the article from the board (deletes board_articles association)