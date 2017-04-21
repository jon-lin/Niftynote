class CreateNotebooks < ActiveRecord::Migration[5.0]
  def change
    create_table :notebooks do |t|
      t.integer :author_id
      t.string :title

      t.timestamps
    end
  end
end
