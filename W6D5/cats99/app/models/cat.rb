# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

COLORS = ['white','black','brown']
class Cat < ApplicationRecord
  # def self.colors
  #   ['white','black','brown']
  # end
  
  validates :color, inclusion: { in: COLORS}
  validates :sex, inclusion: {in: %w(M F)}
  validates :color, :birth_date, :name, :sex, :description, presence: true

  def age(date)
    today = Date.today
    years = today.year - date.year
    months = (today.month - date.month).abs
    days = (today.day - date.day).abs

    age = "#{years} years, #{months} months, and #{days} days old"
  end

end

