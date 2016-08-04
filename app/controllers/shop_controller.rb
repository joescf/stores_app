class ShopController < ApplicationController
   def index
      render :json => Store.all
   end
   def show
    render :json => Store.find(params[:id])
   end
   def create
    params[:address]
    puts params[:address]
    Store.create({name: params[:name], address: params[:address]})
   end
   def destroy
    store = Store.find(params[:id])
    store.destroy({name: params[:name], address: params[:address]})
    puts 'test'
   end
end
