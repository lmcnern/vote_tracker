var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/404.html');
})

app.listen(app.get('port'), function() {
  console.log('The server is currently running on localhost: ' + app.get('port') + '!');
})
