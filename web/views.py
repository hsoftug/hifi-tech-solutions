from django.shortcuts import render
from django.views.generic import View
from django.views.generic.edit import FormView
from django.core.mail import send_mail
from django.urls import reverse_lazy
from .forms import ContactForm
from hifitechsolns.settings import EMAIL_HOST_USER
from django.contrib import messages
from django.http import JsonResponse

class HomeView(View):
    def get(self, request):
        return render(request, "index.html", {})


class ContactView(FormView):
    form_class = ContactForm
    template_name = 'contact-us.html'

    def form_valid(self, form):
        name = form.cleaned_data["name"]
        email = form.cleaned_data["email"]
        subject = form.cleaned_data["subject"]
        message = form.cleaned_data["message"]
        full_message = f"From: {name} ({email})\n\n{message}"

        try:
            send_mail(subject, full_message, email, [EMAIL_HOST_USER])
            return JsonResponse({"status": "success", "message": "Your message has been sent successfully!"})
        except Exception as e:
            return JsonResponse({"status": "error", "message": "Failed to send the message. Please try again later."})

    def form_invalid(self, form):
        return JsonResponse({"status": "error", "message": "Invalid input. Please check your entries and try again."})
