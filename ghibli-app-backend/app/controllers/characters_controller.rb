class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters.to_json(:include => {
            :movie => {:only => [:title, :id]}
        }, :except => [:updated_at, :created_at, :movie_id])
    end 

    def show
        character = Character.find(params[:id])
        render json: character.to_json(:include => {
            :movie => {:only => [:title]}
        }, :except => [:updated_at, :created_at, :movie_id])
    end

    def create
        movie = Movie.find_by(title: params[:title])
        # byebug
        character = Character.new(character_params)
        character.movie_id = movie.id
        character.save
        render json: character
    end

    def destroy
        Character.find(params[:id]).destroy 
    end

    private 

    def character_params
        params.require(:character).permit(:name, :image, :species)
    end
end 