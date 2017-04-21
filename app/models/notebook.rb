# == Schema Information
#
# Table name: notebooks
#
#  id              :integer          not null, primary key
#  author_id       :integer          not null
#  title           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  defaultNotebook :boolean          default("false"), not null
#

class Notebook < ApplicationRecord
  validates :title, :author, presence: true
  validates_uniqueness_of :title, scope: :author

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :notes
end
