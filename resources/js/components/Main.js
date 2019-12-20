import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Guest/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Navbar/>

                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
