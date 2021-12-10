module Apis
  module CatAPI
    module V1
      class Client
        include HttpStatusCodes
        include ApiExceptions

        API_ENDPOINT = 'https://api.thecatapi.com'
        LIMIT = 9
        SIZE = 'small'

        def initialize(api_key = nil)
          @api_key = api_key
        end

        def search(params)
          request_params = {
            limit: LIMIT,
            size: SIZE,
            page: params[:page],
            mime_types: params[:type] == 'all' ? '' : params[:type],
            order: params[:order],
            category_ids: params[:category] == '0' ? nil : params[:category],
            breed_ids: params[:breed] == 'none' ? nil : params[:breed]
          }
          query_string = QueryString.stringify request_params
          request(
            http_method: :get,
            endpoint: "/v1/images/search?#{query_string}"
          )
        end

        private

        def client
          @client ||= Faraday.new(API_ENDPOINT) do |client|
            client.request :url_encoded
            client.adapter Faraday.default_adapter
            client.headers['x-api-key'] = @api_key if @api_key.present?
          end
        end

        def request(http_method:, endpoint:, params: {})
          @response = client.public_send(http_method, endpoint, params)
          parsed_response = MultiJson.load(@response.body, :symbolize_keys => true)
          return parsed_response if response_successful?

          raise error_class, "Code: #{@response.status}, response: #{@response.body}"
        end

        def error_class
          case @response.status
          when HTTP_BAD_REQUEST_CODE
            BadRequestError
          when HTTP_UNAUTHORIZED_CODE
            UnauthorizedError
          when HTTP_NOT_FOUND_CODE
            NotFoundError
          when HTTP_UNPROCESSABLE_ENTITY_CODE
            UnprocessableEntityError
          else
            ApiError
          end
        end

        def response_successful?
          @response.status == HTTP_OK_CODE
        end

      end
    end
  end
end
