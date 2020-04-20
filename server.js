const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/did-siop-test-app'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/did-siop-test-app/index.html');
});

app.listen(process.env.PORT || 8080);