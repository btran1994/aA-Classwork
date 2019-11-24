class CatsController < ApplicationController
  def index 
    @cats = Cat.all
    # render :index
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def create
        # debugger
        # fail
        @cat = Cat.new(user_params) 
        if @cat.save
            # redirect_to "/users/#{user.id}"
            redirect_to cat_url(@cat)
        else
           render :show      
        end 
    end 

    
     def edit
        @cat = Cat.find(params[:id])
        render :edit
    end
    
    def new
        @cat = Cat.new
        render :new
    end

    def update 
    @cat = Cat.find(params[:id])
    if @cat.update!(user_params)
        # redirect_to "/users/#{user.id}"
        redirect_to cat_url(@cat.id)
    else  
        render :edit
    end    
end 


    private
    def user_params 
        params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
    end 
end
