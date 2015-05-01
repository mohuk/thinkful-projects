var express = require('express');

var app = express();

app.get('/:requestId', function (request, response){
	var requestId  = request.params.requestId;
	response.json(request[requestId]);
});

app.get('/:headerName/:headerContent', function (request, response){
	response.send('Hello Express');
});

app.listen(8181);