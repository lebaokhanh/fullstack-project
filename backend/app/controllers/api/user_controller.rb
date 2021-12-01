class Api::UserController < ApplicationController
  def create
    byebug
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
