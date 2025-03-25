from django.contrib import admin
from .models import Tag
from .models import Category
from .models import BlogPost


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "tag", "category", "date_published")
    list_filter = ("tag", "category", "date_published")
    search_fields = ("title", "body")
    ordering = ("-date_published",)
