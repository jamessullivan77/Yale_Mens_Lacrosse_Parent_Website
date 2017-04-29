Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/' => 'home#show'

  get '/roster' => 'roster#show'

  get '/event_planning' => 'event_planning#show'

  get '/schedule' => 'schedule#show'

  get '/live_games' => 'live_games#show'




end
