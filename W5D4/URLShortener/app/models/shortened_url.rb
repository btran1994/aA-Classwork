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
require 'securerandom'

class ShortenedUrl < ApplicationRecord

  validates :long_url, presence: true
  validates :short_url, uniqueness: true
  
  def self.random_code
    #"table name?".update_all(short_url: SecureRandom.urlsafe_base64)
    SecureRandom.urlsafe_base64
  end

end
