Rails.application.routes.draw do
  namespace :api do
    resources :blogs do
      member do
        patch 'update_completed'
      end
    end

    devise_for :users, skip: [:sessions], controllers: {
      sessions: 'api/sessions'
    }

    as :user do
      post 'login', to: 'api/sessions#create'
      delete 'logout', to: 'api/sessions#destroy'
    end
  end
end
