import express from 'express';
const router=express.Router();
// import Food from "../models/Food";
import { body, validationResult } from "express-validator";
import FoodItemMessage from '../models/foodItemMessage';

// //Route 1 POST : Add Food : http://localhost:5000/api/food/addfood

// router.post(
//     "/addfood",
//     [
//       body("foodName", "Food Name must be atleast 3 character").isLength({ min: 3 }),
//       body("category", "Category must be atleast 3 character").isLength({ min: 3 }),
//       body("price", "price is required").exists(),
//       body("preparingTime", "Time is required").exists(),
//     ],
//     async (req, res) => {
//       try {
//         const { foodName,category,price,preparingTime,isAvailable } = req.body;
  
//         //if not validate then show error's
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//           return res.status(400).json({ errors: errors.array() });
//         }
  
//         const food = new Food({ foodName,category,price,preparingTime,isAvailable});
//         const savedFood = await food.save();
  
//         res.json(savedFood);
//       } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//       }
//     }
//   );

// //Route 2 PUT : Add Food : http://localhost:5000/api/food/updatefood/:id

// router.put("/updatefood/:id", async (req, res) => {
//   try {
//     const { foodName,category,price,preparingTime,isAvailable } = req.body;
    
//     let newFood = {};
//     if (foodName) {
//       newFood.foodName = foodName;
//     }
//     if (category) {
//       newFood.category = category;
//     }
//     if (price) {
//       newFood.price= price;
//     }
//     if (preparingTime) {
//       newFood.preparingTime =preparingTime;
//     }
//     if (isAvailable==true || isAvailable==false) {
//       newFood.isAvailable = isAvailable;
//     }
//     if (price) {
//       newFood.price= price;
//     }

//     let food = await Food.findById(req.params.id);
//     if (!food) {
//       return res.status(400).send("Not found");
//     }

//     food = await Food.findByIdAndUpdate(
//       req.params.id,
//       { $set: newFood },
//       { new: true }
//     );
//     res.json(food);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

//Route 3 : GET : fetch all food : /api/food/getallfood

// router.get("/getallfood", async (req, res) => {

//   try {
//     let foods = await FoodItemMessage.find();
//     res.json(foods);
//     console.log("get all foods")
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //Route 4 : DELETE : delete food : /api/notes/deletefood/:id

// router.delete("/deletefood/:id",async (req, res) => {
//   try {
    
//     let food = await Food.findById(req.params.id);
//     if (!food) {
//       return res.status(400).send("Not found");
//     }

//     // if (note.user.toString() != req.user.id) {
//     //   return res.status(401).send("Not Allowed");
//     // }

//     note = await Food.findByIdAndDelete(req.params.id);

//     res.json({ "Success": "Food has been deleted", food: food });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //Route 5 : GET : get one food : /api/notes/deletefood/:id

// router.get("/getfood/:id", async (req, res) => {

//   try {
//     let food = await Food.findById(req.params.id);
//     if(!food)
//     {
//       return res.status(404).send("Not Found");
//     }
//     res.json(food);

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
export default router 
