# Component Hierarchy

#### HomePage
  - HomePageHeader
  - HomePageFeatures

#### SignInContainer
  - UserFormModal
    - UserForm

#### SignUpContainer
  - UserFormModal
    - UserForm

#### MainPage
  - SideNav
  - MainNav
  - AllFeedsContainer  

#### SideNav
  - MiscNavLinks
  - CollectionListContainer
  - BoardListContainer

#### CollectionListContainer
  - CollectionList
    - Collection
      - CollectionItem

#### BoardListContainer
  - BoardList
    - BoardItem

#### AllFeedsContainer
  - FeedListContainer

#### FeedListContainer
  - FeedList
    - FeedItem
      - ButtonListContainer

#### ButtonListContainer
  - ButtonList
    - Button

#### ArticleModalContainer
  - ArticleModal
    - ArticleNav
    - ButtonListContainer
    - ArticleContent
  
#### AddContentContainer
  - SearchBar
  - SearchResultListContainer
    - SearchResultList
    - SearchResultItem

#### ReadLaterContainer
  - FeedListContainer

#### ExploreContainer
  - ExploreHeader
  - ExploreCategory

## Routes

|Path   | Component   |
|-------|-------------|
| / | HomePage (logged out) |
| /signup | SignInContainer |
| /signin | SignUpContainer |
| /feeds | MainPage (logged in) |
| /feeds/:feedId | FeedListContainer |
| /saved | ReadLaterContainer |
| /explore | ExploreContainer |
