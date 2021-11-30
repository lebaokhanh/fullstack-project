class AddFavoriteTable < ActiveRecord::Migration[6.0]
  def up
    create_table :favorites do |t|
      t.string :image_id
      t.text :image_url
      t.integer :category_id
      t.timestamps
    end
  end

  def down
    drop_table :favorites
  end
end
