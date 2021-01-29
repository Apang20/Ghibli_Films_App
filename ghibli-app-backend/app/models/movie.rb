class Movie < ApplicationRecord 
    has_many :characters 

    validates :title, presence: true
    validates :title, uniqueness: true
    validates :poster_image, presence: true
    validates :year, presence: true
    validates :director, presence: true
    validates :description, presence: true
end 