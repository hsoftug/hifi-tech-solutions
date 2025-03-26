from django.shortcuts import render
from django.views.generic import View
from helpers.email_manager import MessageBuilder, EmailManager


class HomeView(View):
    def get(self, request):
        return render(request, "index.html", {})


class ContactUsView(View):
    def get(self, request):
        return render(request, "contact-us.html", {})

    def post(self, request):
        return render(request, "contact-us.html", {})

    def send_email(self, message: dict[str, str]) -> bool:
        # todo
        ...
