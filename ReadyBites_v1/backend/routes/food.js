var express = require('express');
var router = express.Router();
var myFood = require('../models/food');
var _ = require('underscore');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
	console.log("enter get");
  	res.send('respond with a resource');
});*/

/* GET listing sorted by different standards */
router.get('/', function(req, res, next) {
	console.log("enter get food");
	var standard = req.query.standard;
	var longitude = req.query.longitude;
	var latitude = req.query.latitude;
	  
    console.log(standard);
    //where 1 is ascending and -1 is desceding.
    var order = 1;
    if(_.isEqual(standard, "taste"))
    	order = -1;

	myFood.find({}).where('coordinates').near({
		center: [longitude,latitude],
		maxDistance: 10
	}).sort({standard: order}).limit(10).exec(function(err, foods) {
		if(err)
			return console.log(err);
		foods.forEach(function(food) {
			console.log(food);
		});
		res.status(200).json(foods);
	});
}); 


router.post('/', function(req, res, next) {
	console.log('----this code');
	console.log("enter post food");
	var data = req.body;
	console.log(data);

	var foodInstance = new myFood({
			type:data.type,
			waitingTime:data.waitingTime,
			calories:data.calories,
			taste:data.taste,
			price:data.price,
			image: data.image, 
			//location: {
			  // Place longitude first, then latitude
			  coordinates: [data.longitude, data.latitude],
			  address:data.address
			//}
	}).save(function(err, foodInstance) {
		if (err) {
			console.log(err);
            return res.status(400).send("err in save food instance");
        } else {
			console.log("save!");
			console.log(foodInstance._id);
            return res.status(200).send(foodInstance);
        }
	});
	/*myFood.create(data, function (err, foodInstance) {
        if (err) {
            return res.status(400).send("err in post /food");
        } else {
			console.log("save!");
			console.log(foodInstance._id);
            return res.status(200).send(foodInstance);
        }
    });*/
});

module.exports = router;
