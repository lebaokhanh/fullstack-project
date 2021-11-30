class AddCategoryTable < ActiveRecord::Migration[6.0]
  def up
    create_table :image_categories do |t|
      t.string :name
      t.integer :image_category_id
      t.timestamps
    end
  end

  def down
    drop_table :image_categories
  end
end
