Rails.application.routes.draw do

  resources :movies, only: [:index, :show, :create, :update, :destroy]
  resources :characters,  only: [:index, :show, :create, :update, :destroy]
end
