@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body, :created_at, :updated_at
  end
end

# note_created_date = note.created_at.strftime("%m/%d/%Y at %I:%M%p")
# note_updated_date = note.updated_at.strftime("%m/%d/%Y at %I:%M%p")
#
# debugger
