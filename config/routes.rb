Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    get 'feeds/feed/:id', to: 'feeds#show_feed_only'
    resources :feeds, only: [:show, :index, :create]

    resources :articles, only: [:index, :show]

    get 'collections/:id/articles', to: 'collections#articles'
    resources :collections, only: [:index, :show, :create, :update, :destroy]

    delete 'collection_feeds', to: 'collection_feeds#destroy'
    resources :collection_feeds, only: [:index, :create]

    delete 'user_article_saves', to: 'user_article_saves#destroy'
    resources :user_article_saves, only: [:create]
  end

  root to: 'static_pages#root'
end
