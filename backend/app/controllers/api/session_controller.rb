class Api::SessionController < ApplicationController
  skip_before_action :authenticate_user!, only: [:is_logged_in?, :create]

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
    begin
      if logged_in? && current_user
        render json: {
          status: :success,
          logged_in: true,
          username: current_user.username
        }
      else
        render json: {
          status: :success,
          logged_in: false,
          username: nil,
        }
      end
    rescue => error
      render json: {
        status: :error,
        error: error
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
