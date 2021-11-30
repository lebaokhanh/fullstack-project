class AddIndexToImageCategory < ActiveRecord::Migration[6.0]
  def change
    add_index :image_categories, :image_category_id, unique: true
  end
end
