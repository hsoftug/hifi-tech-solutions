from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Tag(models.Model): 
    name = models.CharField(max_length=255)

class Category(models.Model): 
    name = models.CharField(max_length=255)

class Blog(models.Model): 
    tag = models.ForeignKey(Tag, on_delete=models.DO_NOTHING, null=True)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING, null=True)
    title = models.CharField(max_length=255)
    body = RichTextField()
    cover_image = models.ImageField(null=True, blank=True, upload_to="uploads/blog")
    date_published = models.DateTimeField(auto_created=True)
