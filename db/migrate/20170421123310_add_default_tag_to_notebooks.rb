class AddDefaultTagToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :defaultNotebook, :boolean, default: false
  end
end
