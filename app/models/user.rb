# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :collections
  has_many :collection_feeds, through: :collections
  has_many :feeds, through: :collections
  has_many :articles, through: :feeds

  has_many :article_saves, foreign_key: :user_id, class_name: :UserArticleSave
  has_many :saved_articles, through: :article_saves, source: :article

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = encrypt_password(password)
  end

  def encrypt_password(password)
    BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(12)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def most_recent_articles_limit_5_per_feed
    query = "SELECT * FROM feeds
    INNER JOIN collection_feeds ON collection_feeds.feed_id = feeds.id
    INNER JOIN collections ON collections.id = collection_feeds.collection_id
    JOIN LATERAL (
      SELECT * FROM articles
      WHERE articles.feed_id = feeds.id
      ORDER by pub_date desc
      LIMIT 5
    ) P ON TRUE
    WHERE collections.user_id = #{self.id}"
    result = ActiveRecord::Base.connection.execute(query)
    result
  end
end
