from django.urls import path
from .views import HomeView, ContactUsView

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("contact-us/", ContactUsView.as_view(), name="contact-us"),
]
