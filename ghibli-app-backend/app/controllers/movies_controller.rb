class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies, only: [:title, :poster_image, :id]
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie.to_json(:include => {
            :characters => {:only => [:name]}
        }, :except => [:updated_at, :created_at])
    end
    
end 