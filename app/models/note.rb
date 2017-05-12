# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :notebook, presence: true

  belongs_to :notebook

  has_one :author,
    through: :notebook,
    source: :author

  has_many :taggings, dependent: :destroy

  has_many :tags,
    through: :taggings,
    source: :tag
end
