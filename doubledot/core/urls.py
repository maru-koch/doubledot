from django.urls import path, include
from core import views
from core.blog.views import PostsView, PostDetailView

urlpatterns = [

    # GENERAL
    path('', views.IndexView.as_view(), name="home"),
    path('enquiry', views.EnquiryView.as_view(), name='enquiry'),
    path('about', views.IndexView.as_view(), name='about'),
    path('services', views.IndexView.as_view(), name='services'),
    path('mobile', views.IndexView.as_view(), name='services'),
    path('contact', views.ContactView.as_view(), name='contact'),

    # BLOG
    path('articles/', include([
        path('',PostsView.as_view(), name='posts'),
        path('<slug:slug>', PostDetailView.as_view(), name='post-detail')
        ]))
]
