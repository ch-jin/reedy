class CreateFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :feeds do |t|
      t.string :url, null: false
      t.string :title, null: false
      t.string :image_url
      t.timestamp :last_updated, null: false

      t.timestamps
    end

    add_index :feeds, :url, unique: true
    add_index :feeds, :last_updated, unique: true
  end
end
