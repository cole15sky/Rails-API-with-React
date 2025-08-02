class Api::BlogsController < ApplicationController
  before_action :authenticate_user!, only: %i[create update destroy]
  before_action :set_blog, only: %i[show update destroy]
  before_action :authorize_admin!, only: %i[create update destroy]

  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def show
    render json: @blog
  end

  def create
    @blog = current_user.blogs.build(blog_params)

    if @blog.save
      render json: @blog, status: :created, location: api_blog_url(@blog)
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  def update
    if @blog.user == current_user && @blog.update(blog_params)
      render json: @blog
    else
      render json: { error: "Unauthorized or invalid data" }, status: :unprocessable_entity
    end
  end

  def destroy
    if @blog.user == current_user
      @blog.destroy!
      head :no_content
    else
      render json: { error: "Unauthorized" }, status: :forbidden
    end
  end

  private
  def authorize_admin!
       render json: {message: "Forbidden action."} unless current_user.email == 'thesky@gmail.com'
    end

  def set_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :description)
  end
end
