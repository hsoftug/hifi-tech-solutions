from django.shortcuts import render
from django.views.generic import View


class HomeView(View):
    def get(self, request):
        return render(request, "index.html", {})


class ContactUsView(View):
    def get(self, request):
        return render(request, "contact-us.html", {})

    def post(self, request): 
        return render(request, "contact-us.html", {})
        