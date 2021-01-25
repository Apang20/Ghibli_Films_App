class CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: characters, except: [:created_at, :updated_at]
    end 
end 