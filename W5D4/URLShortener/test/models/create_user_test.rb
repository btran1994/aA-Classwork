# == Schema Information
#
# Table name: create_users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_create_users_on_email  (email)
#

require 'test_helper'

class CreateUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
