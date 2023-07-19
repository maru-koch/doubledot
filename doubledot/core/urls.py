from django.urls import path
from core import views

urlpatterns = [
    path('', views.IndexView.as_view(), name="home"),
    path('enquiry', views.EnquiryView.as_view(), name='enquiry'),
    path('about', views.IndexView.as_view(), name='about')
]
