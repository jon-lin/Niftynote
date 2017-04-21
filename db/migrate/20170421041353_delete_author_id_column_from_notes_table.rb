class DeleteAuthorIdColumnFromNotesTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :notes, :author_id
  end
end
