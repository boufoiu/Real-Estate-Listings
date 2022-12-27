from django.contrib import admin
from .models import User, Announcement

class UserAdmin(admin.ModelAdmin):
    list_display = ['FirstName','Email']



admin.site.register(User, UserAdmin)
admin.site.register(Announcement)
