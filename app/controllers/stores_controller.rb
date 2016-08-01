class StoresController < ApplicationController
   def index
    url = "https://data.cityofnewyork.us/resource/uyz2-yxi9.json"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
  def show
    term = params[:id]
    puts params
    url = "https://data.cityofnewyork.us/resource/uyz2-yxi9.json?primary=#{term}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
  def create

  end
end
