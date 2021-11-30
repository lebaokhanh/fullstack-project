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

  private

  def client
    Apis::CatAPI::V1::Client.new(ENV['API_KEY'])
  end
end
