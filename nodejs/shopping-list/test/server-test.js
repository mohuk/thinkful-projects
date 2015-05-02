var chai        = require('chai');
var chaiHttp    = require('chai-http');
var server      = require('../server.js');

var should = chai.should();
var app = server.app;
var items = server.items;

chai.use(chaiHttp);

describe('Shopping List', function() {

    it('should list items on get', function(done) {
        chai.request(app)
            .get('/api/items')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.items.should.be.a('array');
                res.body.items.should.have.length(3);
                res.body.items.forEach(function(item){
                    item.should.have.property('name');
                    item.should.have.property('id');
                    item.id.should.be.a('number');
                    item.name.should.be.a('string');
                });
                done();
            });
    });

    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
});
