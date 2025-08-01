class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  include RackSessionFix

    private

  def respond_with(resource, _opts = {})
    if request.method == "POST" && resource.persisted?
      render json: {
        message: "Signed up sucessfully.",
        data:resource
      }, status: :ok
    elsif request.method == "DELETE"
      render json: {
        message: "Signed out sucessfully."
      }, status: :ok
    else
      render json: {
         message: "User couldn't be created successfully.",
         errors: resource.errors.full_messages.to_sentence
      }, status: :unprocessable_entity
    end
  end
end
