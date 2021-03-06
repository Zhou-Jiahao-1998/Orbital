class Event < ApplicationRecord
    validates :name, presence: true
    validates :tag, presence: true
    validates :details, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :summary, presence: true
    validates :venue, presence: true
    validates :skills, presence: true
    validates :link, presence: true
    validates :contact, presence: true
    belongs_to :user
    has_many :interests, dependent: :destroy
    has_many :reports, dependent: :destroy #may want to think about it again
end
