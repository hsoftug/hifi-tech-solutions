from django.shortcuts import render
from django.views.generic import ListView
from .models import BlogPost
from .models import Category
from .models import Tag
from django.core.paginator import Paginator


class BlogList(ListView):
    template_name = "blog/list.html"
    model = BlogPost
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["tags"] = Tag.objects.all()
        context_data["categories"] = Category.objects.all()

        return context_data
