const express = require('express');
const app = express();
const ngrok = require('ngrok');

app.use(express.static(__dirname + '/dist/did-siop-test-app'));

app.post('/home',(req,res)=> {
  console.log(req.body);
  res.sendFile(__dirname + '/dist/did-siop-test-app/home.html')
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/did-siop-test-app/index.html');
});


app.listen(process.env.PORT || 8080);
