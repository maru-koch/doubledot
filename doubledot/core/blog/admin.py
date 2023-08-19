from django.contrib import admin
from core.blog.models import Post, Author, Category, Handle



# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display=('title', 'author')
    prepopulated_fields={'slug':('title',)}

admin.site.register(Post, PostAdmin)
admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Handle)
