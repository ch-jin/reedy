class Api::UserArticleSavesController < ApplicationController
  def create
    @user_article_save = UserArticleSave.new(
      article_id: user_article_save_params[:article_id],
      user_id: current_user.id
    )

    if @user_article_save.save
      @article = @user_article_save.article
      render 'api/articles/short_article'
    else
      render json: @user_article_save.errors.full_messages, status: 422
    end
  end

  def destroy
    @user_article_save = UserArticleSave.find_by(
      article_id: user_article_save_params[:article_id],
      user_id: current_user.id
    )

    if @user_article_save
      if @user_article_save.destroy
        @article = Article.find(@user_article_save.article_id)
        render 'api/articles/short_article'
      else
        render json: @user_article_save.errors.full_messages, status: 422
      end
    else
      render json: ['Could not find this article save'], status: 404
    end
  end

  def user_article_save_params
    params.require(:user_article_save).permit(:article_id)
  end
end
