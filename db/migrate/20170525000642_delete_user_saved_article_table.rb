class DeleteUserSavedArticleTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :user_saved_articles
  end
end
