var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port       = 3000;  			      // set our port

// REGISTER STATIC FILES -------------------------------
app.use(express.static(__dirname+"/target/static/"));
app.use(express.static(__dirname+"/target/users-count-portlet/"));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/state/status', function(req, res) {
    res.set('content-type','application/json; charset=utf8')
    res.sendFile(__dirname+"/target/static/api/users-count.json");
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
app.use('/rest', router);

// START THE SERVER
// =============================================================================
app.listen(port, function () {
  console.log('App listening on port '+port+' !');
});
