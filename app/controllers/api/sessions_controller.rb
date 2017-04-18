class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email], params[:user][:password])

    if @user
      signin!(@user)
      render 'api/users/show'
    else
      errors = ["Invalid email/password!"]
      render json: errors, status: 422
    end
  end

  def destroy
    logout!
  end

end
