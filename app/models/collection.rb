# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ApplicationRecord
  validates :user_id, presence: true
  validates :title, presence: true, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :collection_feeds
  has_many :feeds, through: :collection_feeds
end
