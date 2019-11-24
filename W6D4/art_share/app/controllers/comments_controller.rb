class CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
        else
            render json: comments.errors.full_messages, status: 422
            # 422 is the status code for an unprocessable entity.
            # You can either pass the status code or status symbol.
            # In other words, you can also return:
            # render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        comments = Comment.find(params[:id])
        comments.destroy
        render json: comment
    end

    def index
        case 
        when params[:user_id]
            comments = Comment.where(user_id: params[:user_id])
        when params[:artwork_id]
            comments = Comment.where(artwork_id: params[:artwork_id])
        else
            comments = Comment.all
        end
        render json: comments
    end

    private

    def comment_params
    params.require(:comment).permit(:user_id, :artwork_id, :body)
  end

end
