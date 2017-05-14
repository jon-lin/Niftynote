@tags.each do |tag|
  notes_ids = tag.notes.map { |note| note.id }
  json.set! :tags do
    json.set! tag.id do
      json.extract! tag, :id, :name
      json.notesIds notes_ids
      json.notesCount tag.notes.length
    end
  end
end

@destroyed_tags_to_update.each do |tag|
  notes_ids = tag.notes.map { |note| note.id }
  json.set! :destroyedTagsToUpdate do
    json.set! tag.id do
      json.extract! tag, :id, :name
      json.notesIds notes_ids
      json.notesCount tag.notes.length
    end
  end
end
