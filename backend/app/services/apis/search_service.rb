module Apis
  class SearchService
    def initialize user_id
      @user_id = user_id
    end

    def filter_liked_image_ids(search_data)
      # byebug
      image_ids(search_data) & Favorite.find_favorite_image_ids(@user_id)
    end

    private
    def image_ids(search_data)
      search_data.map { |item| item[:id] }
    end
  end
end
