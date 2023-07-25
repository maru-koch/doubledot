from django.urls import path
from core import views

urlpatterns = [
    path('', views.IndexView.as_view(), name="home"),
    path('enquiry', views.EnquiryView.as_view(), name='enquiry'),
    path('about', views.IndexView.as_view(), name='about'),
    path('services', views.IndexView.as_view(), name='about'),
    path('contact', views.ContactView.as_view(), name='contact')
]
