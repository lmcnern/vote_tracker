var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(req, res) {
  res.send('keep it secret, keep it safe.')
})

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
})

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

