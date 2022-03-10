import FoodContext from './foodContext'
import {useState} from 'react'

const FoodState=(props)=>{

    const addFood=()=>{
        console.log("Adding new food called");
    }
    
    return(
        <FoodContext.Provider value={{addFood}}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodState;