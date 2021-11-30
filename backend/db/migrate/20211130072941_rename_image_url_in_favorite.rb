class RenameImageUrlInFavorite < ActiveRecord::Migration[6.0]
  def change
    rename_column :favorites, :image_url, :url
  end
end
