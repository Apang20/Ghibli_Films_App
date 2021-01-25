Rails.application.routes.draw do

  resources :movies, only: [:index, :show, :create, :update, :delete]
  resources :characters,  only: [:index, :show, :create, :update, :delete]
end
