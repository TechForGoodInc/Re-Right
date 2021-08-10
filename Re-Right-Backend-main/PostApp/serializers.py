from rest_framework import serializers
from .models import Post,Like, Comment

#Basic serializer created for inside API
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

#I had planned to use this serializer when categorizing them by their title but may be unneccesary for the future
class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
