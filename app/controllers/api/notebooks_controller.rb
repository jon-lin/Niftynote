class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id

    if @notebook.save
      render json: [@notebook.title.to_s + ' created successfully!']
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

    # the below may not work, @notebook's author_id might need to be included?
    if @notebook.update(notebook_params)
      render :show
    else
      errors = @notebook.errors.full_messages
      render json: errors, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook.destroy
      render :show
    else
      errors = @notebook.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
