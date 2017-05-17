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
#

require 'test_helper'

class FeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
