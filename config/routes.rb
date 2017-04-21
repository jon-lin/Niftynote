Rails.application.routes.draw do
  namespace :api do
    get 'notes/index'
  end

  namespace :api do
    get 'notes/create'
  end

  namespace :api do
    get 'notes/update'
  end

  namespace :api do
    get 'notes/show'
  end

  namespace :api do
    get 'notes/destroy'
  end

  namespace :api do
    get 'notebooks/index'
  end

  namespace :api do
    get 'notebooks/create'
  end

  namespace :api do
    get 'notebooks/show'
  end

  namespace :api do
    get 'notebooks/update'
  end

  namespace :api do
    get 'notebooks/destroy'
  end

  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
