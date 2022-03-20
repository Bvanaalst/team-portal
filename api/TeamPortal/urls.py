from django.urls import include, path
from django.contrib import admin
from django.contrib.auth.models import User
from rest_framework import serializers, viewsets


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Api.urls'))
]
