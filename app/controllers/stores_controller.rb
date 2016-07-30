class StoresController < ApplicationController
   def index
    url = "https://data.cityofnewyork.us/resource/uyz2-yxi9.json?cnbio_org_name=CnBio_Org_Name"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
