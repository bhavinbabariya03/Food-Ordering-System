import axios from 'axios';

const url = 'http://localhost:5001/foodItems';

export const fetchFoodItems = () => axios.get(url);
export const addFoodItem = (newFoodItem) => axios.post(url, newFoodItem);