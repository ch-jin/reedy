# == Schema Information
#
# Table name: feeds
#
#  id           :integer          not null, primary key
#  url          :string           not null
#  title        :string           not null
#  image_url    :string
#  last_updated :datetime         not null

#  created_at   :datetime         not null
#  updated_at   :datetime         not null

class Feed < ApplicationRecord

  validates :title, :last_updated, presence: true
  validates :url, presence: true, uniqueness: true

end