module SessionHelper
  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorized_user?
    @user == current_user
  end

  def logout!
    session.delete(:user_id)
    @current_user = nil
  end

  def authenticate_user!
    unless logged_in? && current_user
      render status: :unauthorized, json: {
        error: :unauthorized
      }
    end
  end
end
