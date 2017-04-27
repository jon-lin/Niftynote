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

    # intermediary code here allows default to be set
    # even if no title was entered; if no title is entered;
    # the existing title of the notebook is passed in.

    # otherwise, if a new title AND default notebook are passed in,
    # both of them are used.

    #if just a title is passed in, that will also work

    # in both cases, the existing default notebook toggles to not being the
    # default, using the prev_default stuff

    # if @notebook && (params[:notebook][:title] == "") && (params[:notebook][:defaultNotebook] == "true")
    #   mod_params = {
    #                 title: @notebook.title,
    #                 defaultNotebook: true
    #               }
    # else
    #   mod_params = notebook_params
    # end
    #
    # prev_default = current_user.notebooks.find_by_defaultNotebook(true)

    # if @notebook.update(mod_params)
    if @notebook.update(notebook_params)
      # if prev_default && (mod_params[:defaultNotebook] == true)
      #   prev_default.update({defaultNotebook: false})
      # end
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
