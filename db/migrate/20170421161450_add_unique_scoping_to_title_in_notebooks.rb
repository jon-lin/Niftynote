class AddUniqueScopingToTitleInNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_index :notebooks, [:title, :author_id], unique: true
  end
end
