class RemoveHobbiesFromCharacters < ActiveRecord::Migration[6.0]
  def change
    remove_column :characters, :hobbies, :string
  end
end
