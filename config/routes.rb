Rails.application.routes.draw do
  get 'signup/index'

  post 'signup/authenticate', to: 'signup#authenticate'

  root to: 'signup#angular'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
