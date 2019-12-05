  class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users, status: 200
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def create
    user = User.new(
        username: params[:username],
        password: params[:password],
        first_name: params[:first_name],
        last_name: params[:last_name]
    )

    if user.save
      puts "SUCCESS"
      render json: user, status: 201
    else
      puts "ERROR"
    end
  end
end
