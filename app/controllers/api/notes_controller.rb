class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notebooks.notes
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      errors = @note.errors.full_messages
      render json: errors, status: 422
    end
  end

  def update
    @note = current_user.notebooks.notes.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      errors = @note.errors.full_messages
      render json: errors, status: 422
    end
  end

  def show
    @note = current_user.notebooks.notes.find(params[:id])

    if @note
      render :show
    else
      errors = ["Couldn't find note"]
      render json: errors, status: 422
    end
  end

  def destroy
    @note = current_user.notebooks.notes.find(params[:id])

    # this might not work
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
