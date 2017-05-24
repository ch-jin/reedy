class Api::CollectionsController < ApplicationController
  before_filter :ensure_logged_in

  def show
    @collection = Collection.find(params[:id])
  end

  def index
    @collections = current_user.collections.includes(:feeds)
  end

  def create
    @collection = Collection.new(
      user_id: current_user.id,
      title: collection_params[:title]
    )

    if @collection.save
      CollectionFeed.create(collection_id: @collection.id, feed_id: collection_params[:feed_id])
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def destroy
    @collection = Collection.find(params[:id])
    if @collection
      @collection.destroy
      render :show
    else
      render json: ["Collection does not exist"], status: 404
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection
      if @collection.update(collection_params)
      else
        render json: @collection.errors.full_messages, status: 422
      end
    else
      render json: ["Collection does not exist"], status: 404
    end
  end

  private
  def collection_params
    params.require(:collection).permit(:title, :feed_id)
  end
end
