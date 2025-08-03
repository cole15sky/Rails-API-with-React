class HomeController < ApplicationController
  def index
    # This renders the React app's index.html file
    # If your React build outputs to public/, use this:
    render file: Rails.root.join('public', 'index.html'), layout: false, content_type: 'text/html'
  end
end
