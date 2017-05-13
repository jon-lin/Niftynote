# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not n ull
#

class Tagging < ApplicationRecord
  validates :note, :tag, presence: true
  validates_uniqueness_of :tag, scope: [:note, :author]

  belongs_to :note
  belongs_to :tag

  has_one :author,
    through: :note,
    source: :author
end
