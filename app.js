var http = require('http');
var handle = require('./handle'); // ./ volta 1 diretorio ../ volta 2
var s = require('./name');

console.log(s.name());

var server = http.createServer(handle);

server.listen(3000, function () {
    console.log('Server is listening at port 3000');
})