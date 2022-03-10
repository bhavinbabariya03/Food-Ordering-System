import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/Form/Form';
import FoodItems from './components/FoodItems/FoodItems';
import Navbar from './components/NavBar/Navbar';

import useStyles from './styles';
    
//allows us to dispatch an action
import { useDispatch } from 'react-redux';

import {getFoodItems} from './actions/foodItems';


//Nikhil
import HomePage from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Otp from "./components/register/Otp";
import {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from './components/Alert';
import Admin from './components/Admin';


const App = () => {
    const classes = useStyles();
    const [user , setLoginUser] = useState({ })
    const [alert, setalert] = useState(null)

    const showAlert=(message,type)=>{
        setalert({
            msg:message,
            type:type
        })

        setTimeout(() => {
            setalert(null);
        }, 1500);
    }
    //hook
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodItems());
    }, [dispatch]);

    return (
        <>
        {
            user.isAdmin==1 ? <Admin/> :
            <><Navbar user={user}/>
                <Alert alert={alert}/>
                <Switch>
                    <Route exact path="/" component={FoodItems}/>
                    <Route path="/addFood" component={Form}/>
                    <Route path="/login"><Login setLoginUser={setLoginUser} showAlert={showAlert}/></Route>
                    <Route path="/register"><Register showAlert={showAlert}/></Route>
                    <Route path="/otp"><Otp/></Route>
                    <Route path="*"></Route>
                </Switch>
            </>
        }

        
        </>
    );
}

export default App;