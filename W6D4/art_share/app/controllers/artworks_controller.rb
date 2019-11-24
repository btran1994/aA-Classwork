class ArtworksController < ApplicationController
    def index
        artist_stuff = Artwork.where(artist_id: params[:user_id])
        viewer_stuff = ArtworkShare.where(viewer_id: params[:user_id]).map { |share| share.artwork}
        render json: artist_stuff += viewer_stuff
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: 422
            # 422 is the status code for an unprocessable entity.
            # You can either pass the status code or status symbol.
            # In other words, you can also return:
            # render json: user.errors.full_messages, status: 422
        end
    end

    def show
        render json: Artwork.find(params[:id])
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update_attributes(artwork_params)
            render json: artwork
        else
            render json: artwork.errors, status: 422
        end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :artist_id, :image_url)
    end
end
