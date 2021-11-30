class ImageCategory < ApplicationRecord
  has_many :favorites, primary_key: :image_category_id, foreign_key: :category_id
end
