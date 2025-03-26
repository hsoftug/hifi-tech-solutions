from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import BlogPost
from .models import Category
from .models import Tag
from django.core.paginator import Paginator
from typing import Any


class BlogList(ListView):
    template_name = "blog/list.html"
    model = BlogPost
    paginate_by = 9

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["tags"] = Tag.objects.all()
        context_data["categories"] = Category.objects.all()

        return context_data


class BlogDetail(DetailView):
    model = BlogPost
    template_name = "blog/detail.html"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["tags"] = Tag.objects.all()
        context["categories"] = Category.objects.all()
        return context
