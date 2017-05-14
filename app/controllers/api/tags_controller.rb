class Api::TagsController < ApplicationController
  def index
    @tags = current_user.tags.group('tags.id')
    render :show
  end

  def create
    # assume the tag names will always arrive at the backend
    # in the form of an array.
    #
    # FIRST initialize a new_tags_ids array
    #
    # SECOND iterate through the tag names, checking to see
    # if any of the names are in the tag database.
    #
    # if a tag name is in the database, add its id to the
    # new_tags_ids array. if not, create the tag and add the
    # new id to the new_tags_ids array.
    #
    # THIRD use Note.find(note_id).tag_ids = new_tags_ids
    # to update the note's tags (it will destroy existing
    # taggings for any tags not included in new_tags_ids,
    # create new taggings for tags that are included but
    # weren't there before, and leave the rest alone)
    #
    # at the end, render :show

    new_tags_ids = []
    JSON.parse(tag_params[:names]).each do |name|
      existing_tag = Tag.find_by_name(name)
      tag_id_to_add = existing_tag ? existing_tag.id : Tag.create(name: name).id
      new_tags_ids << tag_id_to_add
    end

    current_user.notes.find(tag_params[:note_id]).tag_ids = new_tags_ids

    @tags = current_user.notes.find(tag_params[:note_id]).tags
    render :show

    # $.ajax({method: 'POST', url: 'api/tags', data: {tag: {names: JSON.stringify(['tag1', 'tag2', 'tag3', 'yetanothernewtag']), note_id: 1}}})
  end

  def show
    #show the tags for a specific note
    #this is done instead of showing a specific tag because
    #there's nothing to really show about a specific tag

    #hold the wildcard constant at 1 and search based on note_id data param
    @tags = current_user.notes.find(tag_params[:note_id]).tags

    # $.ajax({method: 'GET', url: 'api/tags/1', data: {tag: {note_id: X}}})
  end

  def update
    # when the request comes in, assume there's only one name coming in.
    #
    # tag_params.names[0]
    #
    # first, search to see if a tag with the newly proposed name exists.
    #   if it does, iterate through all of the current_user's taggings.
    #     for all taggings that have a tag with params[:id], change those taggings'
    #     tag_ids to the tag with the proposed name.
    #   if it doesn't, create the tag first, then do the same thing.
    #
    # return the new tag in some form

    proposed_tag_name = JSON.parse(tag_params[:names])[0]
    existing_tag = Tag.find_by_name(proposed_tag_name)

    @tag = existing_tag ? existing_tag : Tag.create(name: proposed_tag_name)

    current_user.taggings.each do |tagging|
      if tagging.tag_id == params[:id].to_i
        tagging.update(tag_id: @tag.id)
      end
    end

    render :single_tag

    # $.ajax({method: 'PATCH', url: 'api/tags/11', data: {tag: {names: JSON.stringify(['tag1'])}} }).then(succ => console.log(succ), fail => console.log('fail'))
    # in react, you're going to want to GET INDEX to refresh after you update taggings
  end

  def destroy
    # iterate through the current user's taggings,
    #destroying any of them that point to params[:id]

    @tag = Tag.find(params[:id])
    current_user.taggings.each do |tagging|
      if tagging.tag_id == @tag.id
        tagging.destroy
      end
    end

    render :single_tag
  end

  private

  def tag_params
    params.require(:tag).permit(:names, :note_id)
  end
end
