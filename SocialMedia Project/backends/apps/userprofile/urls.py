from django.contrib import admin
from django.urls import path
from .views import ProfileAPIView

urlpatterns = [
    path('profile/',ProfileAPIView.as_view() ),
    path('profile/<int:pk>/',ProfileAPIView.as_view() ),
]
