class User < ApplicationRecord

  validates :username, :password, :first_name, :last_name, presence: true

end
