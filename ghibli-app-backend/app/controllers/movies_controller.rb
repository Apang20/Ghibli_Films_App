class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies, except: [:created_at, :updated_at]
    end 
    
end 