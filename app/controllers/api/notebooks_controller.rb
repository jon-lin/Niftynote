class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id

    if @notebook.save
      render :show
    else
      errors = @notebook.errors.full_messages
      render json: errors, status: 422
    end
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook
      render :show
    else
      errors = ["Couldn't find notebook"]
      render json: errors, status: 422
    end
  end

  def update
    @notebook = current_user.notebooks.find(params[:id])

    # if the user is looking just to update the defaultNotebook status, maybe allow it with the following?
    # if (params[:notebook][:title] == "") && (params[:notebook][:defaultNotebook] == "true") && (@notebook.title != "")
    #   notebook_params[:title] = @notebook.title
    # end
    #
    if params[:notebook][:defaultNotebook] == "true"
      prev_default = current_user.notebooks.find_by_defaultNotebook(true)
      prev_default.update({defaultNotebook: false})
    end

    if @notebook.update(notebook_params)
      render :show
    else
      errors = @notebook.errors.full_messages
      render json: errors, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook == current_user.notebooks.find_by_defaultNotebook(true)
      errors = ["Cannot delete your default notebook!"]
      render json: errors, status: 422
      return
    end

    if @notebook.destroy
      default_notebook_id = current_user.notebooks.find_by_defaultNotebook(true).id

      @notebook.notes.each do |note|
        note.update({notebook_id: default_notebook_id})
      end

      render :show
    else
      errors = @notebook.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :defaultNotebook)
  end
end
