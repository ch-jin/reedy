class Api::CollectionFeedsController < ApplicationController

  def create
    @collection_feed = CollectionFeed.new(collection_feed_params)
    if @collection_feed.save
      render json: @collection_feed
    else
      render json: @collection_feed.errors.full_messages, status: 422
    end
  end

  def destroy
    @collection_feed = CollectionFeed.find_by(id: params[:id])
    if @collection_feed
      if @collection_feed.destroy
        render json: @collection_feed
      else
        render json: @collection_feed.errors.full_messages, status: 422
      end
    else
      render json: ["Could not find this collection feed"], status: 404
    end
  end

  private

  def collection_feed_params
    params.require(:collection_feed).permit(:collection_id, :feed_id)
  end
end
