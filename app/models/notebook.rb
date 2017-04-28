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

#consider db and model level validations to make sure only one default
#notebook is possible
# validate :only_one_default_notebook_possible
#
# def only_one_default_notebook_possible
#   if Notebook.all
# end
# validate :expiration_date_cannot_be_in_the_past,
#    :discount_cannot_be_greater_than_total_value
#
#  def expiration_date_cannot_be_in_the_past
#    if expiration_date.present? && expiration_date < Date.today
#      errors.add(:expiration_date, "can't be in the past")
#    end
#  end
