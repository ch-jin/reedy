# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  feed_id    :integer          not null
#  title      :string           not null
#  body       :string           not null
#  pub_date   :datetime         not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Article < ApplicationRecord
  validates :feed_id, :title, :body, :pub_date, presence: true
  validates :url, presence: true, uniqueness: true

  belongs_to :feed
end
