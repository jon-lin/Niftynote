json.extract! @note, :id, :title, :body, :created_at, :updated_at, :notebook_id, :tags


# json.tags JSON.@note.tags
#
# @note.tags.each do |tag|
#   json.set! tag.id do
#     json.extract! tag, :id, :name
#   end
# end
