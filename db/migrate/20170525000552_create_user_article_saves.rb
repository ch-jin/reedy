class CreateUserArticleSaves < ActiveRecord::Migration[5.0]
  def change
    create_table :user_article_saves do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false
      t.timestamps
    end
    add_index :user_article_saves, [:user_id, :article_id], unique: true
  end
end
