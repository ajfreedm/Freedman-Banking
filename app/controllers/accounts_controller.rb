class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_account, only: [:update]
  #before_action :set_user_account, only: [:update, :destroy]




  # GET /accounts
  def index
    @accounts = Account.all

    render json: @accounts
  end

  # GET /accounts/1
  def show
    render json: @account
  end

  # POST /accounts
  def create
    @account = Account.new(account_params)
    @account.user = @current_user
    
    if @account.save
      render json: @account, status: :created, location: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accounts/1
  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    def set_user_account
      @account = @current_user.accounts.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:user_id, :category, :balance)
    end
end
