class Api::ArticlesController < ApplicationController
  def index
    @articles = current_user.most_recent_articles_limit_5_per_feed
  end

  def show
    @article = Article.find_by(id: params[:id])
  end

  def saved
    @articles = current_user.saved_articles
    render :index
  end
end
