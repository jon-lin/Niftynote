# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  # validates_uniqueness_of :name, scope: :author

  has_many :taggings

  has_many :notes,
    through: :taggings,
    source: :note

  # has_one :author,
  #   through: :notes,
  #   source: :author
end
