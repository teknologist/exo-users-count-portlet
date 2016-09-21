
![Users Count Portlet](https://github.com/teknologist/exo-users-count-portlet/blob/master/usersCount.png "Users Count Portlet")

The portlet show online users count. It is refreshed every 5 seconds and updates automatically.

### Used this excellent sample as the boilerplate:
* https://gpicavet.github.io/jekyll/update/2016/09/17/getting-started-exo-reactjs.html

# Standalone mode
* install dependencies
```
npm install
```
* build
```
npm run release
```
* build in watch mode (rebuild on *.js(x) change)
```
npm run watch
```
* start express server
```
npm start
```

And go to http://localhost:3000/


# Portlet mode
* build (portlet and npm)
```
mvn clean install
```
* build with webpack optimizations
```
mvn clean install -Pproduction
```
* deployment
 * either deploy the target/react-portlet.zip as EXO ADDON :
```
${EXO_APP_DIR}/addon install --catalog=file://catalog.json users-count-portlet:1.0.0 --force --batch-mode
```

 * or copy the target/react-portlet.war into EXO webapps dir

 * Note on docker :
Deployment in a docker container won't work, due to minifier problem :(. i have to look into it
But it seems to work with a standard Exoplatform bundle (even in normal mode and webpack optimizations).
