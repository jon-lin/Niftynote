class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.integer :author_id
      t.integer :notebook_id

      t.timestamps
    end
  end
end
