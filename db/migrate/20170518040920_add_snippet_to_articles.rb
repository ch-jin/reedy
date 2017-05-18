class AddSnippetToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :snippet, :string, null: false
  end
end
