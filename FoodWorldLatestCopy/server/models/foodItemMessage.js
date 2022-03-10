import mongoose from 'mongoose';

//creating schema for database to store added food items by form
const foodItemSchema = mongoose.Schema({
    // price : Number,
    // prepareTime : Number,
    // foodType : String,
    foodItemName : String,
    foodCategory : String,
    pricePerPerson : Number,
    foodDeliveryTime : String,
    selectedFile : String,
});

const FoodItemMessage = mongoose.model('FoodItemMessage',foodItemSchema);

//later on we can use it to find, delete, 
//create, update the models
export default FoodItemMessage;