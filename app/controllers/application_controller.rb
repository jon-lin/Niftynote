class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def signin!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: 'No one logged in', status: 404
    end
  end

end
