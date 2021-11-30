Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/cat/search', to: 'cats#search'
    post '/cat/like', to: 'cats#like'
  end
end
