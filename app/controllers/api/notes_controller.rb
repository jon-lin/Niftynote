class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes
  end

  def create
    @note = Note.new(note_params)

    #will params present themselves in this format? may not work!
    if params[:notebook_id]
      @note.notebook_id = params[:notebook_id]
    else
      @note.notebook_id = current_user.notebooks.find_by_defaultNotebook(true).id
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

    if @note.update(note_params)
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
    params.require(:note).permit(:title, :body)
  end
end
