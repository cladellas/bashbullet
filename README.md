Bashbullet  
===================================  
 A pushbullet systray notification daemon for linux. A simple client to receive, mirror and send pushes.  
   
 Bashbullet is a pushbullet daemon designed to be highly customizable.
 It's not just for popping up notification, but also for triggering custom scripts !!.
   
 Bashbullet would only display new messages after first run.
 To retrieve older pushes feel free to hack ~/.bashbullet/.last_timestamp
 Bashbullet will display ALL pushes across every device associated with the user.
 See config_example to set up target_filter to only display message sent to selected devices  
   
### Feature :   
 receive, send, mirror pushes and send files.   
 multiple devices support.   
 send sms by phone from bashbullet.   
 encryption support for incoming notifications   
 copy texts from phone's clipboard.   
 copy links automatically.   
 customizable script, notification, url shortener and more.   

### Prerequisite  
 node.js  
 ws (wscat)  
 jshon  
 libnotify  
 yad  
 xclip (clipboard support)   
   
 surl [optional: url shortener]   
 atob [optional: nodejs module for encryption support]   
 btoa [optional: nodejs module for encryption support]   
 node-forge [optional: nodejs module for encryption support]   

### Installation  
 Arch Linux : from AUR  
   
 Or excute this script directly without installtion.  
  git clone https://github.com/Boteium/bashbullet.git  
  cd bashbullet && ./bashbullet  

### Minimal configuration  
 Place your api key token in ~/.bashbullet/config  
  API_KEY="my_pushbullet_api_key"  

### Running in the background
 Bashbullet uses wscat to read websocket message, which would not work propely if it's
 running in the background. Make sure bashbullet is started by screen/systemd/upstart.  
 "bashbullet -scr" will start bashbullt in the background using screen  
