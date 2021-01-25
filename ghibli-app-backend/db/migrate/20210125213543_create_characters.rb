class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image
      t.string :species
      t.integer :movie_id
      t.string :hobbies
    end
  end
end
