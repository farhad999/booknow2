import * as React from "react";
import {Link, BrowserRouter as Router, Switch, Route, NavLink, Redirect} from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Main from "./Main";
import Home from "./Guest/Home";
import {Fragment} from "react";

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                loginData: '',
            isLoggedIn : false,
        }

    }

    componentDidMount() {
        if('login_info' in localStorage){
            this.setState(
                {
                    loginData : JSON.parse(localStorage.getItem('login_info')),
                    isLoggedIn : true,
                })


        }
        else{
            this.setState({
                isLoggedIn : false,
            })
        }
    }



    render() {
        if(this.state.isLoggedIn) {
            let data = this.state.loginData;
            console.log(data.user.email);
        }
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">BookNow</a>
                    <div className="navbar-expand" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {
                                this.state.isLoggedIn ? <li className="nav-item">


                                        <Link className="nav-link" to="/login">{this.state.loginData.user.userName}</Link>
                                    </li>

                                    :
                                    <Fragment>
                                     <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                    </Fragment>

                                }
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
