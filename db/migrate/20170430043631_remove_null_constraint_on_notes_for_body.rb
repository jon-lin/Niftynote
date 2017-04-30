class RemoveNullConstraintOnNotesForBody < ActiveRecord::Migration[5.0]
  def change
    change_column_null :notes, :body, true
  end
end
