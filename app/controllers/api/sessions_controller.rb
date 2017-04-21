class Api::SessionsController < ApplicationController
  def create
    email, password = params[:user][:email], params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      signin!(@user)
      render 'api/sessions/show'
    else
      case
      when email == "" && password == ""
        errors = ["Email and password can't be blank"]
      when email == "" && password != ""
        errors = ["Email can't be blank"]
      when email != "" && password == ""
        errors = ["Password can't be blank"]
      when !/\A\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+\z/.match(email)
        errors = ["Email has incorrect format"]
      else
        errors = ["Invalid username/password"]
      end
      render json: errors, status: 422
    end
  end

  def destroy
    logout!
  end

end
