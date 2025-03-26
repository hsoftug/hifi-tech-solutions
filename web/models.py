from django.db import models

class ContactMessage(models.Model): 
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=30, null=True, blank=True)
    message = models.TextField()
    
    def __str__(self): 
        return f"Message from {self.name} about '{self.subject}'"