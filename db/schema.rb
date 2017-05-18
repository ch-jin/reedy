# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170518051851) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.integer  "feed_id",    null: false
    t.string   "title",      null: false
    t.string   "body",       null: false
    t.datetime "pub_date",   null: false
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "snippet",    null: false
    t.string   "image"
    t.index ["feed_id"], name: "index_articles_on_feed_id", using: :btree
    t.index ["pub_date"], name: "index_articles_on_pub_date", using: :btree
    t.index ["url"], name: "index_articles_on_url", unique: true, using: :btree
  end

  create_table "feeds", force: :cascade do |t|
    t.string   "url",          null: false
    t.string   "title",        null: false
    t.string   "image_url"
    t.datetime "last_updated", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["last_updated"], name: "index_feeds_on_last_updated", unique: true, using: :btree
    t.index ["url"], name: "index_feeds_on_url", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
