Rails.application.routes.draw do
  post '/characters', to: 'characters#create'
  resources :movies, only: [:index, :show, :create, :update, :destroy]
  resources :characters
end
