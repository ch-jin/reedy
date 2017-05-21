class CreateCollections < ActiveRecord::Migration[5.0]
  def change
    create_table :collections do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.timestamps
    end

    add_index :collections, [:user_id, :title], unique: true
  end
end
