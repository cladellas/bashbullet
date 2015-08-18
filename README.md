Bashbullet  
===================================  
 a simple X11 pushbullet systray notification daemon for linux desktop written in bash  
   
 bashbullet would only display received message after first run.
 to retrieve older pushes feel free to hack ~/.bashbullet/.last_timestamp  
 setting up a new browser client for message management but disable
 browser notification and use bashbullet for notification is recommended.
 see config_example to set up target_filter to only display message sent to a certain device  

### Prerequisite  
 node.js  
 wscat  
 jshon  
 notify-osd  
 yad  
 surl [optional: url shortener]

### Installation  
 Excute this script directly. There is no need to install.  
  
 git clone https://github.com/Boteium/bashbullet.git  
 cd bashbullet && ./bashbullet  

### Minimal configuration  
 place your api key in ~/.bashbullet/config  
  API_KEY="my_pushbullet_api_key"  

### Running in the background
 Bashbullet uses wscat to read websocket message, which would not work propely if it's
 running in the background. Make sure bashbullet is started by screen/systemd/upstart.  
 "bashbullet -scr" will start bashbullt in the background using screen  
