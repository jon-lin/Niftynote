class AddNullFalseToNotebookIdInNotes < ActiveRecord::Migration[5.0]
  def change
    change_column_null :notes, :notebook_id, false
  end
end
