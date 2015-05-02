var express     = require('express');
var bodyParser  = require('body-parser');

var app = express();

var Items = function() {
    this.items = [];
    this.id = 0;
};

Items.prototype.add = function(name) {
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id += 1;
    return item;
};

var items = new Items();
items.add('Broad beans');
items.add('Tomatoes');
items.add('Peppers');

app.use(express.static('public'));

app.get('/api/items', function(request, response){
    response.json(items);
});

app.listen(8181);

exports.app = app;
exports.items = items;

