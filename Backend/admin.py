from django.contrib import admin
from .models import User, Announcement, Favourite, Photo

class UserAdmin(admin.ModelAdmin):
    list_display = ['FirstName','Email']

class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ['Owner','pk']
    list_filter = ['PubDate','Title']


class FavouriteAdmin(admin.ModelAdmin):
    list_display = ['user','announcement','pk']
    
class PhotoAdmin(admin.ModelAdmin):
    list_display = ['announcement','image']

    
admin.site.register(User, UserAdmin)
admin.site.register(Announcement,AnnouncementAdmin)
admin.site.register(Favourite, FavouriteAdmin)
admin.site.register(Photo, PhotoAdmin)
