class AddDbUniquenessConstraintToTaggings < ActiveRecord::Migration[5.0]
  def change
    add_index :taggings, [:note_id, :tag_id], unique: true
  end
end
