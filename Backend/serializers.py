from .models import User , Admin , Announcement, Favourite
from rest_framework import serializers 


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['FirstName','LastName','PfP','PhoneNumber','Email']
        

class AnnouncementSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Announcement
        fields = ['PubDate','Title','Description','Price','Type','Category','Position','Owner_id','Status']
        
        
class FavouriteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Favourite
        fields = ['user','announcement']
       