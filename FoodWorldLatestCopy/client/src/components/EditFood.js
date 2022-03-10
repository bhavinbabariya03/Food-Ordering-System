import React,{useSat, useState} from 'react'
// import React, { useState } from 'react';
// import useStyles from './styles';
import useStyles from './Form/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
// import { addFoodItem } from '../../actions/foodItems';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

function EditFood(props) {
    
    const [editfood, setEditfood] = useState(props.food)

    const handleCancle=(e)=>{
        e.preventDefault();
        props.changemode("default");
        props.seteditfood({});
    }

    const handleChange=(e)=>{
        setEditfood({...editfood,[e.target.name] : e.target.value});        
    }

    const handleEdit=async (e)=>{
        e.preventDefault();
        
        // http://localhost:5001/api/food/updatefood/616f982dad0711aa9fe3a08e
        const respose=await fetch("http://localhost:5001/api/food/updatefood/"+editfood._id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(editfood)
        });
        const food=await respose.json();
        console.log("server data ",food)
        
        props.changemode("default");
        window.scrollTo(0, 0);

    }
    return (
        
        <div>
            <h3 className="my-3">Edit Food Details</h3>
            <form className="row">
                <div className="form-group col-md-4 my-2">
                    <label htmlFor="name">Food Name : </label>
                    <input type="text" className="form-control" id="name" name="foodItemName" value={editfood.foodItemName} onChange={handleChange} placeholder="Food Name"/>
                </div>
                <div className="form-group col-md-3  my-2">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id="category" name="foodCategory" value={editfood.foodCategory} onChange={handleChange} placeholder="Category"/>
                </div>
                <p></p>
                <div className="form-group col-md-2 my-2">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" name="pricePerPerson" value={editfood.pricePerPerson} id="price" onChange={handleChange}/>
                </div>
                <div className="form-group col-md-2  my-2">
                    <label htmlFor="time">Preparing Time</label>
                    <input type="text" className="form-control" id="inputAddress2" name="foodDeliveryTime" value={editfood.foodDeliveryTime} onChange={handleChange} placeholder="Approximate Time"/>
                </div> 
            
                <div className="form-group my-3 ">
                    <button type="submit" className="btn btn-primary bg-dark" onClick={handleEdit}>Edit Food</button>
                    <button type="submit" className="btn btn-primary bg-dark mx-2" onClick={handleCancle}>cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditFood


// import React, { useState } from 'react';
// import useStyles from './styles';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
// import { useDispatch } from 'react-redux';
// import { addFoodItem } from '../../actions/foodItems';
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";

// const Form = () => {
//     const [foodItemData, setFoodItemData] = useState({ creator: '', title: '', message: '', tags: '', selectedFiles: '' });
//     const classes = useStyles();
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addFoodItem(foodItemData));
//     }

//     const clear = () => {
        
//     }

//     return (
//         <Paper className={classes.paper}>
//             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
//                 <Typography variant="h6">Add Food Items</Typography>
//                 <TextField required name="foodItemName" variant="outlined" label="Food Item Name" fullWidth value={foodItemData.foodItemName} onChange={(e) => setFoodItemData({ ...foodItemData, foodItemName: e.target.value })} />
//                 <TextField required name="foodCategory" variant="outlined" label="Food Category" fullWidth value={foodItemData.foodCategory} onChange={(e) => setFoodItemData({ ...foodItemData, foodCategory: e.target.value })} />
//                 <TextField required name="pricePerPerson" variant="outlined" type="number" label="Price" fullWidth value={foodItemData.pricePerPerson} onChange={(e) => setFoodItemData({ ...foodItemData, pricePerPerson: e.target.value })} />
//                 <TextField required name="foodDeliveryTime" variant="outlined" label="Food Preparing Time" fullWidth value={foodItemData.foodDeliveryTime} onChange={(e) => setFoodItemData({ ...foodItemData, foodDeliveryTime: e.target.value })} />
//                 <div required className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setFoodItemData({ ...foodItemData, selectedFile: base64 })} /></div>
//                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add Food</Button>
//                 {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
//             </form>
//         </Paper>
//     );
// }

// export default Form;