from django.urls import path 
from .views import BlogList

urlpatterns = [
    path('', view=BlogList.as_view(), name='blog_list')
]
