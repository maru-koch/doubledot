from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from core.blog.models import Post,Author, Category,  Handle


class CategorySerializer(ModelSerializer):
    class Meta:
        model=Category
        fields = "__all__"

class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')


class HandleSerializer(ModelSerializer):
    class Meta:
        model=Handle
        fields = ('name', 'icon', 'url')

class AuthorSerializer(ModelSerializer):
    profile = UserSerializer()
    social_media_handles = HandleSerializer(many=True)

    class Meta:
        model = Author
        fields = ('profile', 'image', 'role', 'social_media_handles')

class PostSerializer(ModelSerializer):
    author = AuthorSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'slug', 'image', 'title', 'content', 'category', 'author')

   