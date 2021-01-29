class Character < ApplicationRecord 
    belongs_to :movie

    validates :name, presence: true
    validates :image, presence: true
    validates :species, presence: true
    validates :movie_id, presence: true
end 