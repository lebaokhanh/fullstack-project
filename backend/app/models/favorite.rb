class Favorite < ApplicationRecord
  belongs_to :category, class_name: "ImageCategory", primary_key: :image_category_id, optional: true
  belongs_to :user

  scope :by_user,  -> (user_id) { where("user_id = ?", user_id)}
  scope :by_category,  -> (category_id) { where("category_id = ?", category_id)}

  def self.find_favorite_image_ids user_id
    self.by_user(user_id).pluck(:image_id)
  end

end
