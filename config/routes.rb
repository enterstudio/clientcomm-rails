Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "clients#index"

  resources :clients, only: [:index, :new, :create]
end
