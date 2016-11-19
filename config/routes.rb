Rails.application.routes.draw do
  get 'signup/index'
  get 'signup/authenticate', to: 'signup#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
