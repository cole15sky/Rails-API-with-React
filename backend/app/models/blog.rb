class Blog < ApplicationRecord
    validatables :title, :content, presence: true
    validatables :description, presence: true
    belongs_to :user
end
