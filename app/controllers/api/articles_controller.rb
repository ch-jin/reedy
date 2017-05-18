class Api::ArticlesController < ApplicationController
  def index
    # Will implement when collections are done
  end

  def show
    @article = Article.find(params[:id])
  end
end
