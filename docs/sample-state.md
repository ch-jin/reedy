```javascript
{
  currentUser: {
    id: 1,
    username: 'guest'
  },

  forms: {
    errors: []
  },

  feeds: {
    1: {
      id: 1,
      title: 'The Verge',
      icon: 'www.theverge.com/logo.png',
      category: 'Tech'
    }
  },

  collections: {
    1: {
      id: 1,
      title: 'Cool Tech Stuff',
      feedIds: [1, 2]
    }
  }

  boards: {
    1: {
      id: 1,
      title: 'Inspiring articles'
    }
  }

  currentContent: {
    type: 'FEED',
    vendor: 'The Verge',
    vendorId: 1
  }

  articles: {
    1: {
      id: 1,
      title: 'Elon Musk is at it Again',
      image: 'www.theverge.com/elonmusk.jpg'
      body: 'Lorem ipsum elon musk technology fun stuff spacex. Tesla supercar big cool new.',
      pubDate: 'Sun, 14 May 2017 03:12:19 GMT',
      saved: false,
      hidden: false
    }
  }

  currentArticle: {
    id: 1,
    title: 'Elon Musk is at it Again',
    image: 'www.theverge.com/elonmusk.jpg'
    saved: false,
    body: 'Lorem ipsum elon musk technology fun stuff spacex. Tesla supercar big cool new. Solarcity very cool guy! Lorem ipsum elon musk technology fun stuff spacex. Tesla supercar big cool new. Solarcity very cool guy! ',
    url: 'www.theverge.com/elonmuskisatitagain'
  }
}
```