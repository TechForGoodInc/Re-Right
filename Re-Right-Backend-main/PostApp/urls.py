from django.urls import path
from . import views

#These urls all use the API framework from Djang REST as seen in views.py. all of these links shoudl appear in Django REST format instead of an HTML
urlpatterns = [
    path('', views.post_overview, name="post_overview"),
    path('post-list/', views.post_list, name="post_list"),
    path('post-detail/<str:pk>', views.post_detail, name="post_detail"),
    path('post-creation/', views.post_create, name="post_creation"),
    path('post-edit/<str:pk>', views.post_edit, name="post_edit"),
    path('post-delete/<str:pk>', views.post_delete, name="post_delete"),
]
