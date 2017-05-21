# == Schema Information
#
# Table name: collection_feeds
#
#  id            :integer          not null, primary key
#  collection_id :integer          not null
#  feed_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class CollectionFeed < ApplicationRecord
  validates :collection_id, presence: true, uniqueness: { scope: :feed_id }
  validates :feed_id, presence: true, uniqueness: { scope: :collection_id }

  belongs_to :feed
  belongs_to :collection
end
