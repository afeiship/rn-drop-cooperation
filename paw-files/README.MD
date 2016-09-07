#paw-files:
127.0.0.1   	www.apache-dev.com


## apache vitual host:
```xml
<VirtualHost *:80>
  ServerName www.apache-dev.com
  ServerAlias localhost
  #/Users/feizheng/github/apache-dev
  DocumentRoot /Users/feizheng/github/rn-drop-cooperation/paw-files
  <Directory "/Users/feizheng/github/rn-drop-cooperation/paw-files">
    Options Indexes FollowSymLinks
    Require all granted
  </Directory>
</VirtualHost>
```
