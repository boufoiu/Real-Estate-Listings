
from json import JSONDecoder
import json
from pathlib import Path
from django.shortcuts import render
from .models import User, Announcement, Favourite
from .serializers import FavouriteSerializer, UserSerializer, AnnouncementSerializer
from django.http import HttpResponseRedirect, HttpRequest, HttpResponse
import requests
from django.shortcuts import get_list_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response



def session(request):
    return HttpResponse(request.session.get('email'))


@api_view(['GET'])
def UsersViewSet(request):
    queryset = User.objects.all()
    serializer = UserSerializer(queryset, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def AnnouncementsViewSet(request):
    queryset = Announcement.objects.all()
    serializer = AnnouncementSerializer(queryset, many= True)
    return Response(serializer.data)
    


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
    
    
@api_view(['GET', 'DELETE']) # Add modifier une annonce
def announcement_detail(request, pk):
    
    try:
        announcement = Announcement.objects.get(pk = pk)
    except Announcement.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer = AnnouncementSerializer(announcement)
        return Response(serializer.data)
    elif request.method=='DELETE':
        if 'email' in request.session:
            serializer = AnnouncementSerializer(announcement)
            if announcement.Owner_id == request.session['email']:
                announcement.delete()
                return Response(status = status.HTTP_204_NO_CONTENT)
            return Response(status= status.HTTP_401_UNAUTHORIZED)
           


@api_view(['GET', 'POST'])
def announcements(request):
    try:
        announcements = Announcement.objects.all()
    except Announcement.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer = AnnouncementSerializer(announcements, many= True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer = AnnouncementSerializer(data= request.data)
        
        if serializer.is_valid():
            if 'email' in request.session:
                serializer.validated_data['Owner_id'] = request.session['email']
                serializer.save()
                return Response(serializer.data, status = status.HTTP_201_CREATED)
            return Response(status = status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def post_favourite(request, pk):
    try:
        announcement = Announcement.objects.get(pk = pk)        
    except Announcement.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if 'email' in request.session:
        try:
            Favourite.objects.get(user = User.objects.get(pk = request.session['email']),announcement= announcement )
        except Favourite.DoesNotExist:
            favorite = Favourite(user = User.objects.get(pk = request.session['email']), announcement= announcement)
            favorite.save()
        return HttpResponseRedirect('/api/favourite/')
    return Response(status = status.HTTP_401_UNAUTHORIZED)
     
    
@api_view(['GET'])
def my_favourite(request):
    try:
        favourites = get_list_or_404(Favourite, user = request.session['email'])
    except Favourite.DoesNotExist:
        favourites=[]        
    announcements = []
    for f in favourites:
        announcements.append(Announcement.objects.get(pk = f.announcement.pk))
    #FavouriteViewSet.queryset = announcements
    serializer = AnnouncementSerializer(announcements, many=True)
    return Response(serializer.data)

    
