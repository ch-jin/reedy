class Api::ArticlesController < ApplicationController
  def index
    @articles = current_user.articles.order('pub_date DESC')
  end

  def show
    @article = Article.find_by(id: params[:id])
  end
end
