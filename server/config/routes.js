var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

module.exports = function(app) {
    app.get('/customers', function(req, res) {
    	console.log("in get for server routes");
        customers.show(req, res);
    });

    app.post('/customers', function(req, res){
    	console.log('in server side routes');
    	console.log(req.body);
    	customers.add(req, res);
    });

    app.delete('/customers/:id', function(req, res){
    	customers.delete(req, res);
    })

    app.get('/orders', function(req, res){
    	orders.show(req, res);
    })

    app.post('/orders', function(req, res){
    	orders.add(req, res);
    })
  }