from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken import views
from Api.User.ViewSet import UserViewSet
from Api.User.Views import CustomAuthToken


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login', CustomAuthToken.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
