from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist

from Api.Joomla.Models import JoomlaUser


class Querier():
    @staticmethod
    def get_user(**kwargs) -> JoomlaUser:
        return JoomlaUser.objects.using('deb105013n2_SKC').get(
            username=kwargs.get('username'))

    @staticmethod
    def create_user(joomlaUser: JoomlaUser) -> User:
        return User.objects.create(joomlaUser.name, joomlaUser.email, joomlaUser.password)


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user_id': user.pk})

        username = request.data.get('username')
        password = request.data.get('password')

        try:
            joomla_user = Querier.get_user(username=username)
        except ObjectDoesNotExist:
            return Response({'error': 'Username does not exist'}, status=401)

        if not joomla_user.verify_password(password):
            return Response({'error': 'Username/Password incorrect'}, status=401)

        try:
            user_with_possibly_outdated_password = User.objects.get(
                username=username)
            user = authenticate(username=username, password=password)
            if user is None:
                user_with_possibly_outdated_password.set_password(password)
                user = user_with_possibly_outdated_password

        except ObjectDoesNotExist:
            user = User.objects.create_user(
                joomla_user.username, joomla_user.email, password)
            user.save()

        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_id': user.pk})
