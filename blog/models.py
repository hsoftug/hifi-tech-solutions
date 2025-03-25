from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.DO_NOTHING, null=True)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING, null=True)
    title = models.CharField(max_length=255)
    body = CKEditor5Field("Content", config_name="extends")
    cover_image = models.ImageField(null=True, blank=True, upload_to="uploads/blog")
    date_published = models.DateTimeField(auto_created=True)

    def __str__(self):
        return f"{self.title} [{self.tag}]({self.category})"
