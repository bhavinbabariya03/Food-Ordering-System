import FoodItemMessage from "../models/foodItemMessage.js";

//beacuse await is there
export const getFoodItems = async (req, res) => {
    //res.send("THIS WORKS");
    try {
        //because find takes time so put await
        const foodItemMessages = await FoodItemMessage.find();
        //gives all messages if gets success to find
        res.status(200).json(foodItemMessages);
    } 
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addFoodItem = async (req, res) => {
    //res.send("CREATE WORKS");

    // body is something which we implement in frontend
    const foodItem = req.body; 
    const newFoodItem = new FoodItemMessage(foodItem);
    try {
        await newFoodItem.save();
        res.status(201).json(newFoodItem)
    } 
    catch (error) {
        res.status(409).json({message: error.message});
    }
}