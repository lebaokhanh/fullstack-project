Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    post '/user', to: 'user#create'
    post '/login', to: 'session#create'
    post '/logout', to: 'session#delete'
    get '/cat/search', to: 'cats#search'
    get '/cat/favorites', to: 'cats#list_favorites'
    post '/cat/like', to: 'cats#like'
    post '/cat/dislike', to: 'cats#dislike'
  end
end
