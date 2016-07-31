Rails.application.routes.draw do
  resources :stores , only:[:index]
  resources :shopping , only:[:index]
  resources :nightlife , only:[:index]
  resources :personal_and_professional_services , only:[:index]

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
