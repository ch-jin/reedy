class Api::FeedsController < ApplicationController
  include Api::FeedsHelper
  # Supplies these methods:
  #   fetch_rss_feed, valid_feed?, construct_feed, add_articles

  def index
    @feeds = Feed.all
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def create
    url = feed_params[:url]
    feed = fetch_rss_feed(url)

    if valid_feed?(feed)
      @feed = Feed.new(construct_feed(url, feed))

      # Bonus: uniquess for .html, .rss, capitals
      if @feed.save
        render('api/feeds/feed')
        add_articles(@feed.id, feed["item"])
      else
        render json: @feed.errors.full_messages, status: 422
      end

    else
      render json: ["Cannot find RSS feed for this URL"], status: 422
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:url)
  end
end
