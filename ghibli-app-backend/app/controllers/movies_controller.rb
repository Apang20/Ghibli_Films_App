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

    def create
        movie = Movie.create(movie_params)
        render json: movie
    end
    
    def destroy
        Movie.find(params[:id]).destroy 
    end

    private
    
    def movie_params
        params.require(:movie).permit(:title, :poster_image, :year, :director, :description)
    end
end 