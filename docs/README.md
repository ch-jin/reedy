# Reedy

[Live Site](http://reedy.jinchen.io)

[Trello Link](https://trello.com/b/21LVRaEt/reedy)

## Minimum Viable Product

Reedy is an app built in the spirit of Feedly. It will be built using PostgreSQL,
Ruby on Rails, and React/Redux. At the end of Week 9, Reedy will, at a minimum,
have adequate RSS seed data, have a working and stylish user interface, and allow 
users to read articles gathered by the app. 

MVP features include the following:

- [ ] User signup, login, and a guest/demo login.
- [ ] Production README
- [ ] Hosting on DigitalOcean/Heroku
- [ ] Able to create Collections and add RSS feeds to them
- [ ] RSS Feeds will be available for users to follow / add to collections
- [ ] Able to read Articles extracted from RSS Feeds 
- [ ] Users can add articles to a 'Read Later' list

## Design Documentation
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

## Implementation Timeline

### Phase 1: Homepage, Backend Authentication, Frontend Authentication (2 days)
  - **Objective:** Working site with a homepage that allows users to signup and login.
### Phase 2: RSS Feeds and Articles (2 days)
  - **Objective:** RSS Feeds and articles in the database are being updated in realtime and can be accessed through the API.
### Phase 3: Collections, Feed Display (2 days)
  - **Objective:** Collections can be made and can have feeds added to them. Feeds are being displayed from the collections.
### Phase 4: Saved Articles (1 day)
  - **Objective:** Articles can be marked to be read later. A list displays all of these saved articles.
### Phase 5: Explore/Add Content (1 day W2 THU 6PM)
  - **Objective:** User has ability to select from existing RSS Feeds or can add new RSS Feeds to the database.
### Phase 6: Full Article View (1 day W2 FRI 6PM)
  - **Objective:** Articles can be clicked on to show a modal that displays the full body.

### Bonus Features 

- [ ] Boards
- [ ] Search
- [ ] User Settings