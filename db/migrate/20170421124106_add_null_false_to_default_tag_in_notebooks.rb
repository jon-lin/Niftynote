class AddNullFalseToDefaultTagInNotebooks < ActiveRecord::Migration[5.0]
  def change
    change_column_null :notebooks, :defaultNotebook, false
  end
end
