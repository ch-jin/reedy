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
#  snippet    :string           not null
#

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
