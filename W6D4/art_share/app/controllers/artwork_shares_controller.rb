class ArtworkSharesController < ApplicationController
    def index
        render json: ArtworkShare.all
    end

    def create
        artwork = ArtworkShare.new(artwork_shares_params)
        if artwork_shares.save
            render json: artwork_shares
        else
            render json: artwork_shares.errors.full_messages, status: 422
            # 422 is the status code for an unprocessable entity.
            # You can either pass the status code or status symbol.
            # In other words, you can also return:
            # render json: user.errors.full_messages, status: 422
        end
    end

    def show
        render json: ArtworkShare.find(params[:id])
    end

    def destroy
        artwork_shares = ArtworkShare.find(params[:id])
        artwork_shares.destroy
        render json: artwork_shares
    end

    def update
        artwork_shares = ArtworkShare.find(params[:id])
        if artwork_shares.update_attributes(artwork_shares_params)
            render json: artwork_shares
        else
            render json: artwork_shares.errors, status: 422
        end
    end

    private

    def artwork_shares_params
        params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
    end
end
