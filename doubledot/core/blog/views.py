from typing import Any, Optional
from django.db import models
from django.shortcuts import render, get_object_or_404
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.views import APIView
from core.blog.serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status
from core.blog.models import Post
from django.views.generic import ListView, DetailView
from django.views import View

# Create your views here.
class CreatePost(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostsView(APIView):
    def get(self, request):
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)

class PostDetailView(APIView):

    # template_name = 'core/blog.html'
    # queryset = Post.objects.all()

    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     # filters self.queryset using the slug from url
    #     # gets the post that matches that slug or pk passed to the url
    
    #     # slug = self.kwargs['slug']
    #     # post = get_object_or_404(Post, slug=slug)

    #     post = self.get_object(self.queryset)

    #     new_post = {
    #         'title':post.title, 
    #         'content':post.content,
    #         'image':post.image,
    #         'category':post.category,
    #         'author':post.author
    #         }

    #     context['post'] = new_post
    #     print(context['post'])
    #     return context

    def get(self, request, slug):
        post = get_object_or_404(Post, slug=slug)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    
    
    
        

