import { combineReducers } from 'redux';
import foodItems from './foodItems';

export default combineReducers({
    //here both key and value name is same that's why wrriten only once
    //foodItems : foodItems,
    foodItems,
});
