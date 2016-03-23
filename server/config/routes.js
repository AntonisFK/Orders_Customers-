var customers = require('./../controllers/customers.js')
var orders = require('./../controllers/orders.js')
module.exports = function(app){
  app.get('/customers', function(req, res){
    console.log('hit get customers')
    customers.index(req, res); 
  })
  app.post('/customers', function(req, res){
    console.log("hit the post");
    customers.create(req, res);
  })

  app.delete('/customers/:id', function(req, res){
    console.log("hit delete");
    customers.delete(req, res);
  })

  app.get('/orders', function(req, res){
   console.log("hit the orders")
    orders.index(req, res); 
  })

  app.post('/orders', function(req, res){
    console.log("hit the post for orders")
    orders.create(req, res);
  })
}