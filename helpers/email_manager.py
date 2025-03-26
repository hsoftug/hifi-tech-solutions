class Message:
    """
    ## Message

    This class is the representation of a message to be sent by the EmailSender class
    """

    def __init__(self):
        self.sender_name = None
        self.subject = None
        self.body = None


class MessageBuilder:
    """
    ## Message Builder

    The message builder class will build the message step by step inorder to form a complete message
    """

    def __init__(self):
        # Initialize the message class here
        self.message = Message()

    def set_sender_name(self, sender_name: str):
        self.message.sender_name = sender_name
        return self

    def set_subject(self, subject: str):
        self.message.subject = subject
        return self

    def set_message(self, body: str):
        self.message.body = body
        return self

    def build(self) -> Message:
        return self.message


class EmailManager:
    """
    # EmailSender

    This is the email sender class, this class will send emails by passing in the message class. Will return a boolean to indicate whether the email was sent successfully or not
    """

    def __init__(self):
        self._recepient = None

    @property
    def recepient(self):
        return self.recepient

    def send(self, message: Message) -> bool:
        """
        Send an email by passing in the message class
        """
        pass
