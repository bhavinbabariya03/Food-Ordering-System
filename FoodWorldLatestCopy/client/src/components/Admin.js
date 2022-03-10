import React from 'react'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Foodmenu from './Foodmenu';
import Orders from './Orders';

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";

import Navbar from './Navbar';
function Admin() {
    return (
        <div>
            <Router>
                <Sidebar/>
                <Navbar/>
                
                <div className="main" >
                <Switch>
                    <Route exact path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route exact path="/foodmenu">
                    <Foodmenu/>
                    </Route>
                    <Route exact path="/orders">
                    <Orders/> 
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Admin
