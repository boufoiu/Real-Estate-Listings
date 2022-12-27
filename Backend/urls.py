from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'announcement', views.AnnouncementViewSet)

urlpatterns = [
    #path('', include(router.urls)),
    path('api/', include(router.urls)),
    path('login/', views.google_login, name='google_login'),
    path('login/auth/', views.google_authenticate, name='google_authenticate'),
    path('home/', views.home, name='home'),
    path('logout/', views.logout, name='logout'),
]
