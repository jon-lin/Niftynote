class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :tag_id
      t.integer :note_id

      t.timestamps
    end

    add_index :taggings, :tag_id
    add_index :taggings, :note_id
  end
end
