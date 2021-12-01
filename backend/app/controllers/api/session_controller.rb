class Api::SessionController < ApplicationController
  def create
    @user = User.find_by(username: session_params[:username])

    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        status: :success,
        logged_in: true,
        username: @user.username
      }
    else
      render json: {
        status: :error,
        errors: ['verify credentials and try again']
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: :success
    }
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
