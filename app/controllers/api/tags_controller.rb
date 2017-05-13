class Api::TagsController < ApplicationController
  def index
    @tags = current_user.notes.tags
  end

  def create
  end

  def update
  end

  def destroy
  end
end
