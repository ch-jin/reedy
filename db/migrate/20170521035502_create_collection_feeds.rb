class CreateCollectionFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :collection_feeds do |t|
      t.integer :collection_id, null: false
      t.integer :feed_id, null: false
      t.timestamps
    end

    add_index :collection_feeds, [:collection_id, :feed_id], unique: true
  end
end
