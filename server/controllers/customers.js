var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    index: function(req, res){
      Customer.find({}, function(err, customer){
        res.json(customer);
      })
    },
    create: function(req, res){
     console.log(req.body)
      Customer.create(req.body, function(err, customer){
        if(err){
          console.log(err);
        }
        else{
          res.json(customer)
        }
      })
    },
    delete: function(req, res){
      Customer.remove({_id: req.params.id}, function(err, results){
        console.log(results);
      });
    }
  }// end of return 
})(); 