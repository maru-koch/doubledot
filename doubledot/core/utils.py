import ssl
from datetime import datetime
from django.core import mail
from django.conf import settings

class EmailClient:

    def __init__(self) -> None:
        self.receiver = settings.EMAIL_HOST_USER
        self.ctx = ssl.create_default_context()
        super().__init__()
    
    def message_template(self, first_name, last_name, email_address, phone_number, message):
        """
        constructs a html and plain messages either of which will sent to the receiver
        depending on the receiver's email client compatibility
        ---------------
        return:
            :html: HTML message format
            :plain: string message format
        """
    
        html = f"""\
                    <html>
                    <body>
                        <div>
                            <div>
                                <h2>From: {first_name} {last_name} </h2>
                            </div>
                            <div>
                                <h4>Enquiries</h4>
                                <p>
                                    {message}
                                </p>
                            <div>
                            <div>
                                <h2>Details</h2>
                                <p> Email Address: {email_address} </p>
                                <p> Phone: {phone_number} </p>
                                <p>
                                    Date: {datetime.now().strftime("%d/%m/%Y, %H:%M:%S")}
                                </p>
                            </div>
                        </div>
                    </body>
                    <footer>
                        <p><i>{datetime.now().year}</i></P>
                    </footer>
                    </html>
                """
        
        plain = f"""\
                Message: \n
                        {message}
                \n
                Details:\n
                Sender: {first_name} {last_name} \n
                Email Address: {email_address} \n
                Phone Number: {phone_number} \n
                Date: {datetime.now()} \n \n
                
                """

        return html, plain

    def send(self, first_name, last_name, email_address, phone_number, message) -> None:
        """
        Sends the user's first name, last name, email address, phone number, and message
        ---------------------
        """
        
        html, plain = self.message_template(first_name, last_name, email_address, phone_number, message)
        subject="Software Development Enquiries"

        with mail.get_connection() as connection:
            email = mail.EmailMultiAlternatives(subject, plain, settings.EMAIL_HOST_USER, ['nwokochafranklyn@gmail.com',], connection=connection)
            email.attach_alternative(html, 'text/html')
            email.send()

        print("email sent successfully!")