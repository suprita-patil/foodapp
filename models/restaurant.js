/*
 * Title: The course model implementation
 * Description: Implements APIs for performing CRUD operations
 * on MongoDB.
 * APIs can be invoked by route handlers. 
 */

// Import mongoose module
const mongoose = require('mongoose');

// Connect to MongoDB database 'foodapp'
mongoose.connect('mongodb://localhost:27017/foodapp', { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error: Unable to connect to MongoDB", err));

// Create Restaurant Schema
const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    description: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 60
    },
    place:{
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60
    },
    category:[String],
    image:String,
    menu:[Object]
});

// Create a model from the Schema (Restaurant is a model (Class))
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

/* Get All restaurant 
 * IN: None. TODO: Add filter params
 * OUT: Restaurant collection in JSON format
 */
async function getAllRestaurant() {
    try {
        const restaurants = await Restaurant.find();
        return restaurants;
    }
    catch (err) {
        console.log("Error: Unable to query database");
        throw err;
    }
}

/* Get restaurant by ID
 * IN: id (restaurant object ID)
 * OUT: Single restaurant object
 */
async function getRestaurantById(id) {
    try {
        const restaurant = await Course.findById(id);
        return restaurant;
    }
    catch (err) {
        console.log("Error: Unable to query database");
        throw err;
    }
}


module.exports.getAllRestaurant = getAllRestaurant;
module.exports.getRestaurantById = getRestaurantById;

