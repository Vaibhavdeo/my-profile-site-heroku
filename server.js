const express = require('express');
const app= require();

app.use(express.static(__dirname + '/dist'));

app.all('*', function(req,res) {
res.sendFile(__dirname + 'dist/index.html')
}) 

app.listen(process.env.PORT || 8080);
console.log('console listening !');