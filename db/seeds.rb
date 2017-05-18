# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Feed.destroy_all
feed1 = Feed.create({
  url: 'www.fale.com',
  title: 'this is to test some associations',
  last_updated: DateTime.strptime("2017-05-17T19:49:50-07:00")
})

feed2 = Feed.create({
  url: 'www.faasdasdle.com',
  title: 'this is toadasdaasd test some associations',
  last_updated: DateTime.strptime("2017-04-17T19:49:50-07:00")
})


Article.destroy_all
article1 = Article.create({
  feed_id: feed1.id,
  title:  'Fakearticle1',
  body: 'Lorem ipsum delor elon musk',
  pub_date: DateTime.strptime("2017-05-16T19:49:50-07:00"),
  url: 'www.fakearticle.com'
})

article2 = Article.create({
  feed_id: feed1.id,
  title:  'Fakearticle2',
  body: 'Lorem ipsum deasdasdaslor elon musk',
  pub_date: DateTime.strptime("2017-05-16T18:49:50-07:00"),
  url: 'www.fakearticle.com/fake'
})

article3 = Article.create({
  feed_id: feed2.id,
  title:  'Fakearticle2',
  body: 'Lorem ipsum deasdasdaslor elon muasdasdasdsk',
  pub_date: DateTime.strptime("2017-05-16T18:49:50-07:00"),
  url: 'www.fakearticlasdase.com/fake'
})