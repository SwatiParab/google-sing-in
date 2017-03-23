var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.sendFile(__dirname+'/'+'indexgoogle.html');
});

app.post('/signOut', function(req, res){
  console.log(req.body);
  res.send("recieved your request!");
});






app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})
