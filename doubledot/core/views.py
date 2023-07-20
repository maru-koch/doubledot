from typing import Any
from django.db import models
from django.shortcuts import render
from django.views.generic import ListView,DetailView, FormView, View
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework import status
from core.serializers import EnquirySerializer
from core.tasks import send_email
from core.models import Enquiry
from core.forms import ContactForm
from core.utils import EmailClient 
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponseRedirect
# Create your views here.

class IndexView(ListView):
    
    template_name="core/index.html"

    def get_queryset(self) -> None:
        return None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['name'] = 'Nwokocha Maruche'
        return context

class ContactView(APIView):
    
    isSent = False

    template_name="core/index.html"

    def post(self, request):
        """
            Gets the user data from the form and forwards 
            an email to the admin
        """
        data = request.data
        try:
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email_address = data.get('email_address')
            phone_number = data.get('phone_number')
            message = data.get('message')
            email = EmailClient()
            email.send(first_name, last_name, email_address, phone_number, message)
            self.isSent = True
            return Response({'status':status.HTTP_200_OK})
        except Exception as error:
            return Response({'status':status.HTTP_400_BAD_REQUEST})

    def get_context_data(self, **kwargs):
        """
            Injects the isSent value into the index.html page from where 
            it can global be accessed the value is obtained and used in 
            the contact page component
        """
        context = super().get_context_data(**kwargs)
        context['email'] = self.isSent
        return context
            
class EnquiryView(APIView):
    def post(self, request):
        data = request.data
        serializer = EnquirySerializer(data=data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            first_name = validated_data.get('first_name')
            last_name = validated_data.get('last_name')
            email_address = validated_data.get('email_address')
            phone_number = validated_data.get('phone_number')
            message = validated_data.get('message')
            email = EmailClient()
            email.send(first_name, last_name, email_address, phone_number, message)
            self.isSent = True
            send_email(validated_data)
            serializer.save()
            return Response({'status': status.HTTP_200_OK})
        else:
            return Response({'status':status.HTTP_400_BAD_REQUEST})
