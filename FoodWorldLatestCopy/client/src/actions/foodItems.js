//importing everything from api folder as api
import * as api from '../api';

//Action Creators 
//Action creators returns actions and action is just a object
//which have two properties called type and payload
//with redux thunk since we are dealing with aysnchronous logic
//that's why we have to add 'async (dispatch) =>' and instead of returning 
//actions we have to dispatch the action as below.
export const getFoodItems = () => async (dispatch) => {
    try{
        //api returns response and response have always 'data' object 
        //and data represents posts
        //fetching posts through api and passing it to reducer through payload
        //and reducer have logic of that action i think
        const {data} = await api.fetchFoodItems();
        dispatch({ type : 'FETCH_ALL', payload : data });
    }
    catch(error){
        console.log(error.message);
    }
    //const action = { type : 'FETCH_ALL', payload : []}
    //return action;
    //dispatch(action);
}

export const addFoodItem = (foodItem) => async (dispatch) => {
    try{
        //api returns response and response have always 'data' object 
        //and data represents posts
        //fetching posts through api and passing it to reducer through payload
        //and reducer have logic of that action i think
        const {data} = await api.addFoodItem(foodItem);
        dispatch({ type : 'CREATE', payload : data });
    }
    catch(error){
        console.log(error.message);
    }
    //const action = { type : 'FETCH_ALL', payload : []}
    //return action;
    //dispatch(action);
}