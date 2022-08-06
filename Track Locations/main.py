from unittest import result
import phonenumbers
import opencage
import folium 

from myphone import number
from phonenumbers import geocoder, carrier
from opencage.geocoder import OpenCageGeocode

# Parsing string to phone number 
pepNumber = phonenumbers.parse(number)

# Getting carrier of phone number
Carrier = carrier.name_for_number(pepNumber, 'en') 

#Getting location info.
location = geocoder.description_for_number(pepNumber, 'en')

#opencage
key = '85686a53352a4fc69c4e2f8e9358b696'

geocoder = OpenCageGeocode(key)
query = str(location)
results = geocoder.geocode(query)

lat = results[0]['geometry']['lat']
lng = results[0]['geometry']['lng']

myMap = folium.Map(location=[lat, lng], zoom_start= 9)
folium.Marker([lat, lng], popup=location).add_to(myMap)

myMap.save("mylocation.html")

#Outpt
print(location)
print(Carrier)
print(lat,lng)
