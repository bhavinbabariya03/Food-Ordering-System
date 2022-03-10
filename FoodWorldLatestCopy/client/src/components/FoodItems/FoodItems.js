import React from 'react';
import FoodItem from './FoodItem/FoodItem';
import useStyles from './styles';
//somehow to fetch the data from the globle redux store
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

const FoodItems = () => {
    //here we written state.posts, but posts refer to what and from where
    //it is inside reducers/index.js
    const foodItems = useSelector((state) => state.foodItems) //hook
    const classes = useStyles();
    console.log(foodItems);
    return (
        !foodItems.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignments="stretch" spacing={3}>
                {foodItems.map((foodItem) => (
                    <Grid key={foodItem._id} item xs={12} sm={4}>
                        <FoodItem foodItem={foodItem}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default FoodItems;