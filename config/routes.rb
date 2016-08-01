Rails.application.routes.draw do
  get 'visitor/Services'

  resources :stores
  # resources :shopping , only:[:index]
  # resources :nightlife , only:[:index]
  # resources :personal_and_professional_services , only:[:index]
  # resources :full_service_dining , only:[:index]
  # resources :visitor_services , only:[:index]
  resources :shop

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
