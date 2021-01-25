class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster_image
      t.integer :year
      t.string :director
      t.string :description
    end
  end
end
