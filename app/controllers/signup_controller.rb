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
    render json: {thing: user = Plaid::User.create(:connect, 'wells', 'plaid_test', 'plaid_good')}

  end

  def angular

  end

end
