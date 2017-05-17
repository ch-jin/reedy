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

  validates :title, :last_updated,
    presence: { message: 'Invalid RSS URL'}

  validates :url, presence: true,
    uniqueness: { message: 'This RSS feed already exists!' }

end