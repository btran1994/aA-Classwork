# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_shortened_urls_on_long_url  (long_url)
#

require 'test_helper'

class ShortenedUrlTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
