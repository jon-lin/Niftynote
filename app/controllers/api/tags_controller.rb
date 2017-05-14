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
  end

  def show
    @tags = current_user.notes.find(tag_params[:note_id]).tags
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
  end

  def destroy
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
