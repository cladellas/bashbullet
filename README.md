Bashbullet  
===================================  
 a simple X11 pushbullet notification daemon for linux desktop written in bash  

### Prerequisite  
 node.js  
 wscat  
 jshon  
 notify-osd  
 yad

### Installation  
 Excute this script directly. 
 There is no need to install.  
  
 git clone https://github.com/Boteium/bashbullet.git  
 cd bashbullet && ./bashbullet  

### Configuration  
 place your api key in ~/.bashbullet/config  
  API_KEY="my_pushbullet_api_key"  
 can be configured to only display message sent to a certain device  

### Running in the background
 Bashbullet use wscat to read websocket message, which will not work propely if it's running in the background. Make sure it is started by screen/systemd/upstart.  
 For example ::  
 screen -S bashbullet-session -dm ./bashbullet
