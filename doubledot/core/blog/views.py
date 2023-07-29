from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from core.blog.serializers import PostSerializer
from core.blog.models import Post

# Create your views here.
class CreatePost(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostsView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(RetrieveUpdateDestroyAPIView):
    queryset= Post.objects.all()
    serialiler_class = PostSerializer

