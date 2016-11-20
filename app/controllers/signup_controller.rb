class SignupController < ApplicationController
  def index
  end

  def authenticate
    #render json: { test: 'test' }
    Plaid.config do |p|
      p.client_id = '583085cc46eb125da3dd7838'
      p.secret = 'bec7d76950f9edda762d9aa1eb88f8'
      p.env = :tartan  # or :production
    end

    user = params[:username]
    pass = params[:password]
    bank = params[:bank]

    userData = Plaid::User.create(:connect, bank, user, pass) 

    render json: {thing: userData}

  end

  def angular

  end

end
