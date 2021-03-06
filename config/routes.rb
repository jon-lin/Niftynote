Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notebooks, except: [:new, :edit]
    resources :notes, except: [:new, :edit]
    resources :tags, except: [:new, :edit]
  end
end
