from django.db import models
from django.core.validators import RegexValidator


class User(models.Model):
  FirstName = models.CharField(max_length=100)
  LastName = models.CharField(max_length=100)
  Email = models.EmailField(primary_key=True)
  PfP = models.URLField(max_length=250)
  PhoneRegex = RegexValidator(regex= r'0\s*(5|6|7)(\s*\d){8}\s*', message='PhoneNumber incorect') #vaider la phorme du numéro de tlphn
  PhoneNumber = models.CharField(validators=[PhoneRegex],max_length=20,blank=True)
  
  app_label = 'user'
  perm_list = set()
  def get_user_type(self):
    return "User"
  
  def has_perm(self, perm, obj=None):
    if perm in self.get_all_permissions():
      return True
    return False

  def get_all_permissions(self, obj=None):
        return self.perm_list

  def assign_perm(self,perm,object=None):
    self.perm_list.add(perm)
  
  
class Announcement(models.Model):
  PubDate = models.DateTimeField()
  Title = models.CharField(max_length=200)
  Description = models.TextField()
  Price = models.PositiveBigIntegerField()
  Type = models.IntegerField()  #terain .... 
  Category = models.IntegerField() #vente:1 , echange:2 , location:3 , location vacance:4 
  Position = models.CharField(max_length=255) # coordonée , latitude , longitude
  Owner = models.ForeignKey(User, on_delete=models.CASCADE) #référence vers l'utilisateur propriètaire
  Status = models.IntegerField() # vendu , loué ...
  


class Admin(models.Model):
  Me = models.ForeignKey(User, on_delete=models.CASCADE)
  
  