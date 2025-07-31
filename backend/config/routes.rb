Rails.application.routes.draw do
  root to: "home#index"

  devise_for :users,
             path: 'api/auth',
             controllers: {
               sessions: 'users/sessions'
             },
             defaults: { format: :json }

  namespace :api do
    resources :blogs do
      member do
        patch 'update_completed'
      end
    end
  end
end
