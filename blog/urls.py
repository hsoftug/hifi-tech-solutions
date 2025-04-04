from django.urls import path 
from .views import BlogList, BlogDetail

urlpatterns = [
    path('', view=BlogList.as_view(), name='blog_list'), 
    path('<int:pk>/', view=BlogDetail.as_view(), name='blog_detail')
]
