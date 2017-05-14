json.extract! @tag, :id, :name
json.notesIds @tag.notes.map { |note| note.id }
json.notesCount @tag.notes.length
