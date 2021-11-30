class Favorite < ApplicationRecord
  belongs_to :category, class_name: "ImageCategory", primary_key: :image_category_id, optional: true
end
