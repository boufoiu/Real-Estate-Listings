from django.contrib import admin
from .models import User, Announcement, Favourite

class UserAdmin(admin.ModelAdmin):
    list_display = ['FirstName','Email']

class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ['Owner','pk']


class FavouriteAdmin(admin.ModelAdmin):
    list_display = ['user','announcement','pk']
    
    
admin.site.register(User, UserAdmin)
admin.site.register(Announcement,AnnouncementAdmin)
admin.site.register(Favourite, FavouriteAdmin)
