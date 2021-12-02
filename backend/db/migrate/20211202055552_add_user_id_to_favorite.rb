class AddUserIdToFavorite < ActiveRecord::Migration[6.0]
  def up
    add_column :favorites, :user_id, :integer
  end

  def down
    remove_column :favorites, :user_id, :integer
  end
end
