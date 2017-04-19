class Api::SessionsController < ApplicationController
  def create
    email, password = params[:user][:email], params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      signin!(@user)
      render 'api/users/show'
    else
      case
      when email == "" && password == ""
        errors = ["Email and password can't be blank!"]
      when email == "" && password != ""
        errors = ["Email can't be blank!"]
      when email != "" && password == ""
        errors = ["Password can't be blank!"]
      when !email[0..-2].include?('@'), !email[1..-1].include?('@')
        errors = ["Not an email address!"]
      else
        errors = ["Invalid username/password!"]
      end
      render json: errors, status: 422
    end
  end

  def destroy
    logout!
  end

end
