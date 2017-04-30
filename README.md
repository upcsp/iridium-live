
# Cesium based real time positioning on a 3D map

### How to use it?

  - Clone the repo in the ./public_html folder of your server. (Tested with DigitalOcean)
  - Add *reference.ini* in the ./private/iridium/ folder. Fill it with `name = "whatever_you_want"`
  - Add *config.ini* in the ./private/iridium/ folder. Fill it with :

```
server = "localhost"
user = "mysql_user"
password = "mysql_password"
database = "mysql_iridium_database_name"
```

### Todos

 - Add line to the followed path. Now it just shows the dots.
 - Imporve labels.
 - Switch to NodeJS (with MongoDB?) for an event-based back-end with WebSockets.
 - Can we get a more accurate user geolocation with web technologies or do we need a native app?
 - Think about it.

License
----

MIT

