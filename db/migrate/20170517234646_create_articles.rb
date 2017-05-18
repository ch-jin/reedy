class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.integer :feed_id, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.timestamp :pub_date, null: false
      t.string :url, null: false

      t.timestamps
    end

    add_index :articles, :feed_id
    add_index :articles, :pub_date
    add_index :articles, :url, unique: true
  end
end
