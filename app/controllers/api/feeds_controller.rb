class Api::FeedsController < ApplicationController
  # Supplies these methods:
  #   fetch_rss_feed, valid_feed?, construct_feed, add_articles

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

  def show
    feed = Feed.find(params[:id])
    @articles += feed.articles.order('pub_date DESC').limit(20)
    render('api/articles/index')
  end

  def create
    url = feed_params[:url]
    raw_feed = Feed.fetch_rss_feed(url)

    if Feed.valid_feed?(raw_feed, url)
      @feed = Feed.new(Feed.construct_feed(url, raw_feed))

      # Bonus: uniquess for .html, .rss, capitals
      if @feed.save
        render('api/feeds/feed')
        Article.add_articles(@feed.id, feed["item"])
      else
        render json: @feed.errors.full_messages, status: 422
      end

    else
      render json: ["Cannot find RSS feed for this URL"], status: 404
    end
  end

  def show_feed_only
    @feed = Feed.find(params[:id])
    render('api/feeds/feed')
  end

  private

  def feed_params
    params.require(:feed).permit(:url, :q)
  end
end
