# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  validates :email, uniqueness: true,
    format: { with: /\A\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+\z/,
      message: "has incorrect format"}

  after_initialize :ensure_session_token
  after_create_commit :create_default_notebook

  has_many :notebooks,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Notebook

  has_many :notes,
    through: :notebooks,
    source: :notes

  has_many :taggings,
    through: :notes,
    source: :taggings

  has_many :tags,
    through: :notes,
    source: :tags

  def self.find_by_credentials(email, password)
    user = User.find_by email: email
    return user if user && user.valid_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def create_default_notebook
     self.notebooks.create(title: 'MyDefaultNotebook', defaultNotebook: true)
  end
end
