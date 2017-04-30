class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes
  end

  def new
    @note = Note.new
    @note.notebook_id = current_user.notebooks.find_by_defaultNotebook(true).id
  end

  def create
    @note = Note.new(note_params)

    #will params present themselves in this format? may not work!
    if !params[:note][:notebook_id] || params[:note][:notebook_id] == ""
      @note.notebook_id = current_user.notebooks.find_by_defaultNotebook(true).id
    end

    if !params[:note][:title] || params[:note][:title] == ""
      @note.title = "Untitled"
    end

    if @note.save
      render :show
    else
      errors = @note.errors.full_messages
      render json: errors, status: 422
    end
  end

  def update
    @note = current_user.notes.find(params[:id])

    mod_note_params = note_params

    default_notebook_id = current_user.notebooks.find_by_defaultNotebook(true).id

    if params[:note][:title] == '' && params[:note][:notebook_id] == ''
      mod_note_params = {title: 'Untitled', body: params[:note][:body], notebook_id: default_notebook_id}
    elsif params[:note][:title] == '' && params[:note][:notebook_id] != ''
      mod_note_params = {title: 'Untitled', body: params[:note][:body], notebook_id: params[:note][:notebook_id]}
    elsif params[:note][:title] != '' && params[:note][:notebook_id] == ''
      mod_note_params = {title: params[:note][:title], body: params[:note][:body], notebook_id: default_notebook_id}
    end

    if @note.update(mod_note_params)
      render :show
    else
      errors = @note.errors.full_messages
      render json: errors, status: 422
    end
  end

  def show
    @note = current_user.notes.find(params[:id])

    if @note
      render :show
    else
      errors = ["Couldn't find note"]
      render json: errors, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])

    if @note.destroy
      render :show
    else
      errors = @note.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
