from django.db import models

class Preference(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f"{self.question}-{self.answer}"
    
class Enquiry(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=200)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    preferences = models.ForeignKey(Preference, on_delete=models.CASCADE, related_name="preferences", null=True)
    send_agreement= models.BooleanField(default=False)
    replied = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Enquiries'

    def __str__(self) -> str:
        return self.email
