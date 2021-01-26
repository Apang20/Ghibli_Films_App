class CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: characters, only: [:name, :image]
    end 

    def show
        character = Character.find(params[:id])
        render json: character.to_json(:include => {
            :movie => {:only => [:title]}
        }, :except => [:updated_at, :created_at, :movie_id])
    end
end 