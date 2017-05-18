class Api::ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id])
  end
end
