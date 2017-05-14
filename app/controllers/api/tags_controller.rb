class Api::TagsController < ApplicationController
  def index
    @tags = current_user.tags.group('tags.id')
    render :show
  end

  def create
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
    @tags = current_user.notes.find(tag_params[:note_id]).tags

    # $.ajax({method: 'GET', url: 'api/tags/1', data: {tag: {note_id: X}}})
  end

  def update
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
    @tag = Tag.find(params[:id])
    current_user.taggings.each do |tagging|
      if tagging.tag_id == @tag.id
        tagging.destroy
      end
    end

    render :single_tag

    # $.ajax({method: 'DELETE', url: 'api/tags/2'}).then(deleted_tag => console.log(deleted_tag))
  end

  private

  def tag_params
    params.require(:tag).permit(:names, :note_id)
  end
end
