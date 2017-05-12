class AddNullConstraintsToTagsAndTaggings < ActiveRecord::Migration[5.0]
  def change
    change_column_null :tags, :name, false
    change_column_null :taggings, :tag_id, false
    change_column_null :taggings, :note_id, false
  end
end
