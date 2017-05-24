Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    get 'feeds/feed/:id', to: 'feeds#show_feed_only'
    get 'collections/:id/articles', to: 'collections#articles'
    resources :feeds, only: [:show, :index, :create]
    resources :articles, only: [:index, :show]
    resources :collections, only: [:index, :show, :create, :update, :destroy]
    delete 'collection_feeds', to: 'collection_feeds#destroy'
    resources :collection_feeds, only: [:index, :create]
  end

  root to: 'static_pages#root'
end
