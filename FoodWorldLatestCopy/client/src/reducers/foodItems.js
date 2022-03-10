//state(here foodItems) is always initialized with something
//our foodItems is an array that's why we initialized
//with empty array
const fn = (foodItems = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...foodItems, action.payload];
        default:
            return foodItems;
    }
}
export default fn;