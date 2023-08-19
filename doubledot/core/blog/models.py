from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
import uuid
# Create your models here.


class Handle(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=200)
    url = models.URLField(verbose_name='social media url')
   
    def __str__(self) -> str:
        return self.name

class Author(models.Model):
    profile=models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='author')
    role = models.CharField(max_length=255)
    social_media_handles = models.ManyToManyField(Handle)
    is_author = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"{self.profile.username}"

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name
    
POST = ((0, 'draft'), (1, 'published'))

class Post(models.Model):
    id = models.UUIDField(default=uuid.uuid4(), primary_key=True, unique=True, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(default='', null=False, unique=True)
    image = models.ImageField(upload_to='post', default='/author/user_2.jpg')
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.DO_NOTHING, related_name='posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.IntegerField(choices=POST, default=0)

    class Meta:
        ordering = ['-created_at']

    # def get_absolute_url(self):
    #     return reverse("post-detail", kwargs={"slug": self.slug})
    

    # def __str__(self) -> str:
    #     return self.title

    