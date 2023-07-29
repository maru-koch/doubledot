from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from core.blog.models import Post,Author, Category, SocialMedia, Handle


class CategorySerializer(ModelSerializer):
    class Meta:
        model=Category
        fields = "__all__"

class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')

class SocialMediaSerializer(ModelSerializer):
    class Meta:
        model=SocialMedia
        fields="__all__"

class HandleSerializer(ModelSerializer):
    social_media = SocialMediaSerializer()
    class Meta:
        model=Handle
        fields = ('social_media', 'url')

class AuthorSerializer(ModelSerializer):
    profile = UserSerializer()
    social_media_handles = HandleSerializer()

    class Meta:
        model = Author
        fields = ('profile', 'image', 'role', 'social_media_handles')

class PostSerializer(ModelSerializer):
    author = AuthorSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'slug', 'image', 'title', 'content', 'category', 'author')

   