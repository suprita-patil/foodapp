// Include the required modules
const { getAllRestaurant, getRestaurantById} = require('../models/restaurant');
const express = require('express');

const route = express.Router();

// Route handler for get all restaurants
route.get('/', (req, res) => {
   // Get all restaurants
   getAllRestaurant()
       .then((result) => {
           res.send(result);
           console.log(result);
       })
       .catch((err) => {
           res.status(500);
           res.send("Error: Unable to get restaurant\n" + err.message);
           console.log("Error: Unable to get restaurant\n", err);
       })
});

//API with param id
route.get('/:id', (req, res) => {
   const id = req.params.id;
   // Get the restaurant object using id
   getRestaurantById(id)
   .then((result) => {
       res.send(result);
   })
   .catch((err) => {
       res.status(404);
       res.send("Error: Unable to get restaurant\n" + err.message);
       console.log("Error: Unable to get restaurant\n", err);
   })
});


module.exports = route;