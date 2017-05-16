class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(session_token: sessions[:session_token])
  end

  def login!(user)
    @current_user = user
    sessions[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    @current_user = nil
    sessions[:session_token] = nil
  end
end
