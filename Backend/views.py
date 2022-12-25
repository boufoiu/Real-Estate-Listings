from django.shortcuts import render
from .models import User, Announcement
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer, AnnouncementSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]


class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    #permission_classes = [permissions.IsAuthenticated]
