var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    index: function(req, res ){
      Order.find({}, function(err, orders){
        console.log("hit the order database")
        res.json(orders)
      })
    },
    create: function(req, res){
      Order.create({name: req.body.name.name, qty: req.body.qty,  product: req.body.product}, function(err, order){
        if(err){
          console.log(err);
        }
        else{
          res.json(order);
        }
      })
    }
  }
})();