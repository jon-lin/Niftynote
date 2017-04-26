json.extract! @note, :id, :title, :body, :created_at, :updated_at
json.notebookId @note.notebook.id
