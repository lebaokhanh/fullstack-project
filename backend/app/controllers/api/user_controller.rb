class Api::UserController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    @user = User.new user_params
    if @user.save
      render json: {
        status: :success
      }
    else
      render json: {
        status: :error,
        errors: @user.errors.full_messages
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
