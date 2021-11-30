class Api::CatsController < ApplicationController
  def search
    begin
      response = client.search(params)
      formatted_response = response.map do |item|
        {
          url: item[:url],
          id: item[:id],
          category_id: item[:categories] ? item[:categories].first[:id] : nil,
          liked: false
        }
      end
      render json: { status: :success, images: formatted_response }
    rescue => error
      render json: { errors: error }
    end
  end

  def like
    begin
      cat_params = params.require(:cat)
      favorite = Favorite.new(url: cat_params[:url], image_id: cat_params[:id], category_id: cat_params[:category_id])
      render json: {status: :success} if favorite.save!
    rescue => error
      render json: { errors: error }
    end
  end

  def dislike
    begin
      cat_params = params.require(:cat)
      favorite = Favorite.where(image_id: cat_params[:id]).first
      render json: {status: :success} if favorite.delete
    rescue => error
      render json: { errors: error }
    end
  end

  def list_favorites
    begin
      if params[:category_id] == "0"
        favorites = Favorite.all
      else
        favorites = ImageCategory.find_by_image_category_id(params[:category_id]).favorites
      end
      formatted_response = favorites.map do |item|
        {
          url: item.url,
          id: item.image_id,
          category_id: item.category_id,
          liked: true
        }
      end
      render json: { images: formatted_response, status: :success }
    rescue => error
      render json: { errors: error }
    end
  end

  private

  def client
    Apis::CatAPI::V1::Client.new(ENV['API_KEY'])
  end

end
