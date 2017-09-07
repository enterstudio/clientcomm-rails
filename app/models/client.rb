class Client < ApplicationRecord
  belongs_to :user
  has_many :messages, -> { order(created_at: :asc) }
  has_many :attachments, through: :messages

  validates :last_name, :presence => true
  validates :phone_number, presence: true
  validates_uniqueness_of :phone_number, message: 'Phone number is already in use. If you need help, you can click the chat button at the bottom of your screen.'

  def analytics_tracker_data
    {
      client_id: self.id,
      has_unread_messages: has_unread_messages,
      hours_since_contact: hours_since_contact,
      messages_all_count: messages.count,
      messages_received_count: inbound_messages_count,
      messages_sent_count: outbound_messages_count,
      messages_attachments_count: attachments.count,
      messages_scheduled_count: scheduled_messages_count,
      has_client_notes: notes.present?
    }
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def hours_since_contact
    ((Time.now - last_contacted_at) / 3600).round
  end

  def inbound_messages_count
    # the number of messages received
    messages.inbound.count
  end

  def outbound_messages_count
    # the number of messages sent
    messages.outbound.count
  end

  def scheduled_messages_count
    messages.scheduled.count
  end

  # override default accessors
  def phone_number=(number_input)
    self[:phone_number] = PhoneNumberParser.normalize(number_input)
  end

end
