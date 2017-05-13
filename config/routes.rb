Rails.application.routes.draw do
  namespace :api do
    get 'tags/index'
  end

  namespace :api do
    get 'tags/create'
  end

  namespace :api do
    get 'tags/update'
  end

  namespace :api do
    get 'tags/destroy'
  end

  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notebooks, except: [:new, :edit]
    resources :notes, except: [:new, :edit]
  end
end
