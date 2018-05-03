var express = require('express');
var router = express.Router();
var myFood = require('../models/food');
var _ = require('underscore');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
	console.log("enter get");
  	res.send('respond with a resource');
});*/

/* GET users listing sorted by different standards */
router.get('/', function(req, res, next) {
	console.log("enter get suggestion");
  	var standard = req.query.id;
    console.log(standard);
    //where 1 is ascending and -1 is desceding.
    var order = -1;
    if(_.isEqual(standard, "distance") || _.isEqual(standard, "price"))
    	order = 1;

  	myFood.find({}).sort({standard: 1}).limit(10).exec(function(err, foods) {
  		if(err)
      		return console.log(err);
  		foods.forEach(function(food) {
      		console.log(food);
  		});
      	res.status(200).json(foods);
  	});
}); 


router.post('/', function(req, res, next) {
	var food = req.body;
	console.log("enter post");
	console.log(food);
	myFood.create(food, function (err, foodInstance) {
        if (err) {
            return res.status(400).send("err in post /food");
        } else {
        	console.log("save!");
            return res.status(200).json(food);
        }
    });

    // console.log(foodInstance.type);
    // foodInstance.save(function (err) {
   	// 	if (err) {
   	// 		console.log("save err");
   	// 	}
   	// });
});

module.exports = router;
