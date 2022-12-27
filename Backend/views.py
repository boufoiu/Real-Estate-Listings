
from json import JSONDecoder
import json
from pathlib import Path
from django.shortcuts import render
from .models import User, Announcement
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer, AnnouncementSerializer
from django.http import HttpResponseRedirect, HttpRequest, HttpResponse
import urllib
import requests
from django.shortcuts import get_list_or_404


def home(request):
    return HttpResponse(request.session.get('email'))



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]


class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    #permission_classes = [permissions.IsAuthenticated]


def google_login(request):
    token_request_uri = "https://accounts.google.com/o/oauth2/auth"
    response_type = "code"
    client_id="236907624264-127kevoilqdrh8v482rdbv85n4tm49mv.apps.googleusercontent.com"
    redirect_uri = "http://127.0.0.1:8000/login/auth/"
    scope = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
    url = "{token_request_uri}?response_type={response_type}&client_id={client_id}&redirect_uri={redirect_uri}&scope={scope}&prompt=select_account".format(
        token_request_uri = token_request_uri,
        response_type = response_type,
        client_id = client_id,
        redirect_uri = redirect_uri,
        scope = scope)
    return HttpResponseRedirect(url)



def google_authenticate(request):
    
    login_failed_url = '/'
    if 'error' in request.GET or 'code' not in request.GET:
        return HttpResponseRedirect('{loginfailed}'.format(loginfailed = login_failed_url))

    access_token_uri = 'https://accounts.google.com/o/oauth2/token'
    redirect_uri = "http://127.0.0.1:8000/login/auth/"
    data = "code={code}&redirect_uri={redirect_uri}&client_id={client_id}&client_secret={client_secret}&grant_type=authorization_code".format(
        code=request.GET['code'],
        redirect_uri=redirect_uri,
        client_id="236907624264-127kevoilqdrh8v482rdbv85n4tm49mv.apps.googleusercontent.com",
        client_secret="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",
    )
    headers={'content-type':'application/x-www-form-urlencoded'}
    r1 = requests.post(access_token_uri, data = data, headers = headers)
    access_token = r1.json()['access_token']
    r2 = requests.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token={accessToken}".format(accessToken=access_token))
    l = r2.json()
    user = None
    try:
        user = User.objects.get(Email = l['email'] )
        #print('utilisateur existant')
        
    except User.DoesNotExist:
        user = User(FirstName = l['name'],LastName=l['name'],PfP=l['picture'],PhoneNumber='0646536584',Email=l['email'])
        user.assign_perm('user.add_announcement')
        user.assign_perm('user.view_announcement')
        user.save()
    
    if request.session.get('email'):
        request.session.flush()
        
    request.session['email'] =l['email'] 
    
    return HttpResponseRedirect('/admin/')
    
    
def logout(request):
    request.session.flush()
    return HttpResponseRedirect('/login/')
    