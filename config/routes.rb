Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    resources :feeds, only: [:show, :index, :create]
    resources :articles, only: [:index, :show]
  end

  root to: 'static_pages#root'
end
