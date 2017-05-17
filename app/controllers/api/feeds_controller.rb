class Api::FeedsController < ApplicationController
  include Api::FeedsHelper
  # Supplies these methods:
  #   fetch_rss_feed, valid_feed?, construct_feed

  def index

  end

  def create
    url = feed_params[:url]
    feed = fetch_rss_feed(url)

    if valid_feed?(feed)
      @feed = Feed.new(construct_feed(url, feed))

      if @feed.save
        render :show
      else
        render json: @feed.errors.full_messages, status: 422
      end

    else
      render json: ["Cannot find RSS feed for this URL"]
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:url)
  end
end
