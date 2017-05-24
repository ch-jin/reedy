class UserSavedArticle < ApplicationRecord
  validates :user_id, presence: true, uniqueness: { scope: :article_id }
  validates :article_id, presence: true, uniqueness: { scope: :user_id }

  belongs_to :article
  belongs_to :user
end
