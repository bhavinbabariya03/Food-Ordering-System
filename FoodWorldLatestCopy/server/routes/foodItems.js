import express from 'express';

import {getFoodItems, addFoodItem} from '../controllers/foodItems.js';
//initialize route
const router = express.Router();

// router.get('/', getFoodItems);
router.get('/', getFoodItems);
router.post('/',addFoodItem);

export default router;