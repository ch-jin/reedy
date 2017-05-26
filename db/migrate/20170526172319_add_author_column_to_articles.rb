class AddAuthorColumnToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :author, :string
  end
end
