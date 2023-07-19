from django.shortcuts import render
from django.views.generic import ListView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.serializers import EnquirySerializer
from core.tasks import send_email
from core.models import Enquiry
# Create your views here.

class IndexView(ListView):
    queryset = Enquiry.objects.all()
    template_name="core/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['name'] = 'Nwokocha Maruche'
        return context



class EnquiryView(APIView):
    def post(self, request):
        print("ACTION", request.data)
        data = request.data
        serializer = EnquirySerializer(data=data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            print("validated data")
            send_email(validated_data)
            serializer.save()
            return Response({'status': status.HTTP_200_OK})
        else:
            return Response({'status':status.HTTP_400_BAD_REQUEST})
