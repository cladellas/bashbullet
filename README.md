Bashbullet  
===================================  
 A pushbullet systray notification daemon for linux. A simple client to receive push/mirror message and to send pushes.  
   
 Bashbullet is a pushbullet daemon designed to be highly customizable and scriptable.
 Virtually everyone with a basic understanding of bash can easily hack the source.
 I decided to start this project because I need a client that can not only receive and send pushes
 on linux but also trigger custom script on my desktop. Simply put your command 
 in config file would satiate most needs for scripting.
   
 Bashbullet would only display new messages after first run.
 To retrieve older pushes feel free to hack ~/.bashbullet/.last_timestamp
 Setting up a new browser client for message management but disable
 browser notification and use bashbullet for notification is recommended.
 See config_example to set up target_filter to only display message sent to a certain device  

### Prerequisite  
 node.js  
 ws (wscat)  
 jshon  
 notify-osd  
 yad  
 surl [optional: url shortener]

### Installation  
 Arch Linux : from AUR  
   
 Or excute this script directly without installtion.  
  git clone https://github.com/Boteium/bashbullet.git  
  cd bashbullet && ./bashbullet  

### Minimal configuration  
 Place your api key in ~/.bashbullet/config  
  API_KEY="my_pushbullet_api_key"  

### Running in the background
 Bashbullet uses wscat to read websocket message, which would not work propely if it's
 running in the background. Make sure bashbullet is started by screen/systemd/upstart.  
 "bashbullet -scr" will start bashbullt in the background using screen  
