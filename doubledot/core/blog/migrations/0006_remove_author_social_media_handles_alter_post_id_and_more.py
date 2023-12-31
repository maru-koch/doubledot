# Generated by Django 4.2.2 on 2023-08-19 18:33

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_alter_post_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='author',
            name='social_media_handles',
        ),
        migrations.AlterField(
            model_name='post',
            name='id',
            field=models.UUIDField(default=uuid.UUID('7f8d9565-b237-41e9-aea2-a4feb839e909'), editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AddField(
            model_name='author',
            name='social_media_handles',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.handle'),
        ),
    ]
